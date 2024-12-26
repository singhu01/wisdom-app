<?php

header('Content-Type: application/json');

require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_user');

    $data = json_decode(file_get_contents('php://input'), true);

    $email = isset($data['email']) ? $data['email'] : null;

    if (!$email) {
        echo json_encode(['error' => 'Email is required']);
        exit();
    }

    $stmt = $pg->db_query_params("SELECT username FROM dbo.users WHERE username = $1", array($email));
    $user = pg_fetch_assoc($stmt);

    if ($user) {
        echo json_encode(['exists' => true, 'message' => 'User account is active']);
    } else {
        echo json_encode(['exists' => false, 'message' => 'User account not found']);
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'Error: ' . $e->getMessage()]);
}
?>
