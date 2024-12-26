<?php

header('Content-Type: application/json');

require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_user');

    $requestData = json_decode(file_get_contents('php://input'), true);

    $username = $requestData['username'];
    $registry_site = $requestData['registry_id'];
    $role_id = $requestData['roles'];
    $name = $requestData['name'];
    $deleted_at = null;

    $checkQuery = 'SELECT COUNT(*) FROM dbo.users WHERE username = $1';
    $stmt = $pg->db_query_params($checkQuery, array($username));
    $userExists = pg_fetch_result($stmt, 0, 0);

    if ($userExists > 0) {
        echo json_encode(['success' => false, 'message' => 'Username already exists']);
    } else {
        $insertQuery = 'INSERT INTO dbo.users (username, registry_id, name, deleted_at, role_id) 
                        VALUES ($1, $2, $3, $4, $5)';
        $result = $pg->db_query_params($insertQuery, array($username, $registry_site, $name, $deleted_at, $role_id));

        if ($result) {
            echo json_encode(['success' => true, 'message' => 'User added successfully']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to add user']);
        }
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}

?>
