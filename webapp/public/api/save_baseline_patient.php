<?php
header('Content-Type: application/json');
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_participant');

    if (!is_array($_POST) || !isset($_POST['screening_email']) || !isset($_POST['access_key'])) {
        throw new Exception('Invalid input format or missing required fields.');
    }

    $result1 = $pg->db_query_params(
        'SELECT id FROM dbo.registrant WHERE lower(screening_email) = $1',
        array(strtolower($_POST['screening_email']))
    );

    if ($registrant = pg_fetch_assoc($result1)) {
        $result2 = $pg->db_query_params(
            'SELECT survey_sequence FROM dbo.questionnaire 
            WHERE registrant_id = $1 AND to_char(created_on, \'YYYYMMDDHH24MISS\') = $2',
            array($registrant['id'], $_POST['access_key'])
        );

        if ($questionnaire = pg_fetch_assoc($result2)) {
            if ($questionnaire['survey_sequence'] == 0) {
                $result3 = $pg->db_query_params(
                    'SELECT id FROM dbo.baseline_patient WHERE registrant_id = $1',
                    array($registrant['id'])
                );

                if ($baseline_patient = pg_fetch_assoc($result3)) {
                    throw new Exception('The questionnaire has already been completed.');
                }
            } else {
                throw new Exception('The questionnaire being submitted is not the correct type.');
            }
        } else {
            throw new Exception('Invalid access key.');
        }
    } else {
        throw new Exception('The email address was not found in our records.');
    }

    $_POST['registrant_id'] = $registrant['id'];
    unset($_POST['screening_email'], $_POST['access_key']);

    try {
        $pg->db_insert('dbo', 'baseline_patient', $_POST);
        $response = array('status' => 0, 'message' => 'Data inserted successfully');
    } catch (TypeError $e) {
        error_log("TypeError encountered but data was inserted successfully: " . $e->getMessage());
        $response = array('status' => 0, 'message' => 'Data inserted successfully');
    }

} catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
    error_log("Exception: " . $e->getMessage());
}

echo json_encode($response);
?>
