<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_participant');

    $result1 = $pg->db_query_params('
            SELECT id
            FROM dbo.registrant
            WHERE lower(screening_email) = $1',
            array(strtolower($_POST['screening_email']))
    );
    if ($registrant = pg_fetch_assoc($result1)) {
        $result2 = $pg->db_query_params('
                SELECT survey_sequence
                FROM dbo.questionnaire
                WHERE registrant_id = $1 AND to_char(created_on, \'YYYYMMDDHH24MISS\') = $2',
                array($registrant['id'], $_POST['access_key'])
        );
        if ($questionnaire = pg_fetch_assoc($result2)) {
            if ($questionnaire['survey_sequence'] > 0) {
                $result3 = $pg->db_query_params('
                        SELECT id FROM dbo.monthly_followup WHERE registrant_id = $1 AND survey_sequence = $2',
                        array($registrant['id'], $questionnaire['survey_sequence'])
                );
                if ($baseline_patient = pg_fetch_assoc($result3)) {
                    throw new Exception('The questionnaire has already been completed.');
                }
            }
            else {
                throw new Exception('The questionnaire being submitted is not the correct type.');
            }
        }
        else {
            throw new Exception('Invalid access key.');
        }
    }
    else {
        throw new Exception('The email address was not found in our records. Please check the message you received from us for the address we have on file.');
    }
    $_POST['registrant_id'] = $registrant['id'];
    $_POST['survey_sequence'] = $questionnaire['survey_sequence'];
    unset($_POST['screening_email']);
    unset($_POST['access_key']);

    $pg->db_insert('dbo', 'monthly_followup');
    $response = array('status' => 0);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
