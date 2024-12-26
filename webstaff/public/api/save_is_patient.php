<?php
require_once('authentication.php');
require_once('postgresql.php');
require_once('mailer.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    $id = $_POST['id'];

    $pg->transaction_begin();
    if ($_POST['was_transferred'] == 't') {
        $entry_on_field = 'transferred_on';

        $result = $pg->db_query('
            SELECT id, contact_email
            FROM dbo.registry_site
            WHERE allow_non_patient = TRUE'
        );
        if ($row = pg_fetch_assoc($result)) {
            $_POST['registry_site_id'] = $row['id'];
            $contact_email = $row['contact_email'];
        }
        else {
            throw new Exception('There is no site to transfer the patient to.');
        }

        $result = $pg->db_query_params('
            SELECT site_name
            FROM dbo.registry_site
            WHERE id = $1',
            array($_POST['transferred_from']);
        );
        if ($row = pg_fetch_assoc($result)) {
            $transferred_from = $row['site_name'];
        }
        else {
            throw new Exception('There is no site to transfer the patient from.');
        }

        $pg->db_update('dbo', 'registrant', $_POST, $entry_on_field);
        send_mail(
            [$contact_email],
            'Women with IBD and Motherhood (WIsDoM) Study',
            'Patient ' . $id . ' has been transferred from ' . $transferred_from . ' and can be viewed at https://' . $_SERVER['SERVER_NAME'] . '/staff');
    }
    else {
        $pg->db_update('dbo', 'registrant');
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
