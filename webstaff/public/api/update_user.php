<?php
require_once('postgresql.php');

header('Content-Type: application/json');

try {
    $pg = new Postgresql('wisdom_user');

    $data = json_decode(file_get_contents("php://input"));
    error_log(print_r($data, true));
    

    if (!isset($data->id) || !isset($data->role_id) || !isset($data->registry_id)) {
        http_response_code(400);
        echo json_encode(["message" => "Incomplete data provided."]);
        exit();
    }

    $userId = htmlspecialchars(strip_tags($data->id));
    $role_id = htmlspecialchars(strip_tags($data->role_id));
    $registry_id = htmlspecialchars(strip_tags($data->registry_id));

    $sql = "UPDATE dbo.users SET role_id = $1, registry_id = $2 WHERE id = $3";
    $params = [$role_id, $registry_id, $userId];

    $result = $pg->db_query_params($sql, $params);

    if ($result) {
        http_response_code(200);
        echo json_encode(['success' => true,"message" => "User updated successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false,"message" => "Unable to update user."]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false,"message" => "Database error: " . $e->getMessage()]);
}
?>
