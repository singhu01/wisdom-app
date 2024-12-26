<?php
require_once('authentication.php');
require_once('postgresql.php');
require_once('mailer.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg, 'wisdom_reviewer');

    $id = $_POST['id'];
    $entry_on_field = 'reviewed_on';
    $_POST['reviewed_by'] = $netID;

    $pg->transaction_begin();
    $pg->db_update('dbo', 'registrant', $_POST, $entry_on_field);

    $result = $pg->db_query_params('
            SELECT
                screening_email,
                was_approved
            FROM
                dbo.registrant
                JOIN
                dbo.registry_site ON registrant.registry_site_id = registry_site.id
                JOIN
                dbo.staff ON registry_site.id = staff.registry_site_id AND net_id = current_user
            WHERE registrant.id = $1',
            array($id)
    );
    if ($row = pg_fetch_assoc($result)) {
        if ($row['was_approved'] == 't') {
            $questionnaire_data = array('registrant_id' => $id, 'survey_sequence' => '0');
            $questionnaire_id = $pg->db_insert('dbo', 'questionnaire', $questionnaire_data);
            $questionnaire_result = $pg->db_query_params('
                    SELECT to_char(created_on, \'YYYYMMDDHH24MISS\') AS access_key
                    FROM dbo.questionnaire
                    WHERE id = $1',
                    array($questionnaire_id)
            );
            if ($questionnaire_row = pg_fetch_assoc($questionnaire_result)) {
                send_mail(
                    [$row['screening_email']],
                    'Women with IBD and Motherhood (WIsDoM) Study',
                    'Your baseline questionnaire is ready. Please visit our website at https://' . $_SERVER['SERVER_NAME'] . ' to complete the questionnaire. You will need to provide the email address that this message was sent to as well as the following access key: ' . $questionnaire_row['access_key']);
            }
            else {
                throw new Exception('Questionnaire record not found.');
            }
        }
    }
    else {
        throw new Exception('Registrant record not found.');
    }
    $pg->transaction_end();

    $response = array('status' => 0, 'id' => $id);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
