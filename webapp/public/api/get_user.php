<?php
require_once('postgresql.php');

try {
    $username = 'wisdom_participant';
    // $username = 'wisdom_user';
    $data = array('username' => $username);

    $pg = new Postgresql($username);

    $result = $pg->db_query('
            SELECT site_name
            FROM dbo.registry_site'
    );
    $data['sites'] = array();
    while ($row = pg_fetch_assoc($result)) {
        $data['sites'][] = $row;
    }

    $response = array('status' => 0, 'data' => $data);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
