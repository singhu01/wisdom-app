<?php

header('Content-Type: application/json');

require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_user');

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['id'] ?? null;

        if ($userId) {
            $sql = 'DELETE FROM dbo.users WHERE id = $1';
            $stmt = $pg->db_query_params($sql, array($userId));

            if ($stmt) {
                echo json_encode(['status' => 'success', 'message' => 'User deleted successfully']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Failed to delete user']);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'User ID not provided']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $e->getMessage()]);
}

?>
