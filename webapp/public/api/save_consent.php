<?php
require_once('postgresql.php');
require_once('mailer.php');

try {
    $pg = new Postgresql('wisdom_participant');

    $_POST['consent_date'] = date('Y-m-d');
    $_POST['consent_method'] = 'Electronic';
    $_POST['consent_version'] = '2023-09-11';
    $pg->transaction_begin();
    $pg->db_update('dbo', 'registrant', $_POST, 'consent_entry_on');
    $questionnaire_data = array('registrant_id' => $_POST['id'], 'survey_sequence' => '0');
    $questionnaire_id = $pg->db_insert('dbo', 'questionnaire', $questionnaire_data);
    $questionnaire_result = $pg->db_query_params('
            SELECT screening_email, to_char(a.created_on, \'YYYYMMDDHH24MISS\') AS access_key
            FROM
                dbo.questionnaire AS a
                JOIN
                dbo.registrant AS b ON a.registrant_id = b.id
            WHERE a.id = $1',
            array($questionnaire_id)
    );
    if ($questionnaire_row = pg_fetch_assoc($questionnaire_result)) {
        send_mail(
            [$questionnaire_row['screening_email']],
            'Women with IBD and Motherhood (WIsDoM) Study',
            'Thank you for enrolling in the study. If you were unable to complete the baseline questionnaire, you may do so by visiting our website at https://' . $_SERVER['SERVER_NAME'] . ' and clicking on the "Already registered?" button. You will need to provide your email address as well as the following access key: ' . $questionnaire_row['access_key']);
    }
    else {
        throw new Exception('Questionnaire record not found.');
    }
    $pg->transaction_end();

    $response = array('status' => 0, 'data' => $questionnaire_row);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
