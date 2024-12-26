<?php
require_once('postgresql.php');
require_once('mailer.php');

try {
    $pg = new Postgresql('wisdom_participant');

    if (empty($_REQUEST['screening_email'])) {
        throw new Exception('You must enter an email address.');
    }
    $result = $pg->db_query_params('
            SELECT to_char(created_on, \'YYYYMMDDHH24MISS\') AS access_key
            FROM dbo.registrant
            WHERE lower(screening_email) = $1',
            array(strtolower($_REQUEST['screening_email']))
    );
    if ($row = pg_fetch_assoc($result)) {
        send_mail(
            [$_REQUEST['screening_email']],
            'Women with IBD and Motherhood (WIsDoM) Study',
            'We have received a request for an access key to our website from this email address. If you did not make this request or no longer need access, you can ignore this message; otherwise, use the following access key: ' . $row['access_key']);
    }
    else {
        throw new Exception('Could not find your email address in our records.');
    }

    $response = array('status' => 0);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
