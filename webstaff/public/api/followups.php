<?php
require_once('authentication.php');
require_once('postgresql.php');
require_once('mailer.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg, 'wisdom_informatics');

    $result = $pg->db_query('
            SELECT baseline_patient.registrant_id, last_sequence + 1 AS survey_sequence
            FROM 
                dbo.registrant
                JOIN
                dbo.baseline_patient ON registrant.id = baseline_patient.registrant_id
                JOIN (
                    SELECT registrant_id, max(survey_sequence) AS last_sequence
                    FROM dbo.questionnaire
                    GROUP BY registrant_id) AS x ON registrant.id = x.registrant_id
            WHERE date_patient_baseline + (last_sequence * 30 + 28) <= current_date'
    );
    while ($row = pg_fetch_assoc($result)) {
        $pg->transaction_begin();
        $id = $pg->db_insert('dbo', 'questionnaire', $row);
        $questionnaire_result = $pg->db_query_params('
                SELECT
                    to_char(questionnaire.created_on, \'YYYYMMDDHH24MISS\') AS access_key,
                    screening_email
                FROM
                    dbo.questionnaire
                    JOIN
                    dbo.registrant ON registrant.id = registrant_id
                WHERE questionnaire.id = $1',
                array($id)
        );

        if ($questionnaire_row = pg_fetch_assoc($questionnaire_result)) {
            send_mail(
                [$questionnaire_row['screening_email']],
                'Women with IBD and Motherhood (WIsDoM) Study',
                'Your monthly follow-up questionnaire is ready. Please visit our website at https://' . $_SERVER['SERVER_NAME'] . ' and click on the "Already registered?" button to complete the questionnaire. You will need to provide your email address as well as the following access key: ' . $questionnaire_row['access_key']);
        }
        else {
            throw new Exception('Questionnaire record not found for registrant ID ' . $id);
        }
        $pg->transaction_end();
    }

    $response = array('status' => 0, 'id' => $id);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
