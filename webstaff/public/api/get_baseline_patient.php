<?php
require_once('authentication.php');
require_once('postgresql.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    $data = array();
    $result = $pg->db_query_params('
            SELECT *
            FROM dbo.baseline_patient
            WHERE id = $1',
            array($_REQUEST['id'])
    );
    if ($row = pg_fetch_assoc($result)) {
        $data = $row;
    }

    $response = array('status' => 0, 'data' => $data);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
