<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_participant');

    if (empty($_REQUEST['screening_email'])) {
        throw new Exception('You must enter an email address.');
    }
    if (empty($_REQUEST['access_key'])) {
        throw new Exception('You must enter an access key.');
    }
    $result1 = $pg->db_query_params('
            SELECT id
            FROM dbo.registrant
            WHERE lower(screening_email) = $1',
            array(strtolower($_REQUEST['screening_email']))
    );
    if ($registrant = pg_fetch_assoc($result1)) {
        $result2 = $pg->db_query_params('
                SELECT survey_sequence
                FROM dbo.questionnaire
                WHERE registrant_id = $1 AND to_char(created_on, \'YYYYMMDDHH24MISS\') = $2',
                array($registrant['id'], $_REQUEST['access_key'])
        );
        if ($questionnaire = pg_fetch_assoc($result2)) {
            $survey_sequence = $questionnaire['survey_sequence'];
            if ($survey_sequence == 0) {
                $result3 = $pg->db_query_params('
                        SELECT 1 AS completed
                        FROM dbo.baseline_patient
                        WHERE registrant_id = $1',
                        array($registrant['id'])
                );
            }
            else {
                $result3 = $pg->db_query_params('
                        SELECT 1 AS completed
                        FROM dbo.monthly_followup
                        WHERE registrant_id = $1 AND survey_sequence = $2',
                        array($registrant['id'], $survey_sequence)
                );
            }
            if (pg_fetch_assoc($result3)) {
                $survey_sequence = -1;
            }
        }
        else {
            throw new Exception('Invalid access key.');
        }
    }
    else {
        throw new Exception('Could not find your email address in our records. Please check the message you received from us for the address we have on file.');
    }

    $response = array('status' => 0, 'survey_sequence' => $survey_sequence);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
