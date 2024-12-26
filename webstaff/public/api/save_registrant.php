<?php
require_once('authentication.php');
require_once('postgresql.php');
// require_once('mailer.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        $result = $pg->db_query_params('
                SELECT id
                FROM dbo.registrant
                WHERE screening_email = $1 AND id != $2',
                array($_POST['screening_email'], $id)
        );
        if ($row = pg_fetch_assoc($result)) {
            throw new Exception('Another participant has that email address.');
        }
        $pg->db_update('dbo', 'registrant');
    }
    else {
        if (isset($_POST['registry_site_id'])) {
            $registry_site_id = $_POST['registry_site_id'];
        } else {
            throw new Exception('No registry_site_id provided.');
        }

        $_POST['registry_site_id'] = $registry_site_id;

        $result = $pg->db_query_params('
                SELECT id
                FROM dbo.registrant
                WHERE screening_email = $1',
                array($_POST['screening_email'])
        );
        if ($row = pg_fetch_assoc($result)) {
            throw new Exception('Another participant has that email address.');
        }

        $entry_on_field = 'contact_information_and_registration_entry_on';
        $id = $pg->db_insert('dbo', 'registrant', $_POST, $entry_on_field);

    }

    $response = array('status' => 0, 'id' => $id);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
