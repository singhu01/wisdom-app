<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once('postgresql.php');

function update_role_permissions() {
    $response = [];
    $pg = new Postgresql('wisdom_user');

    try {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);

            if (!is_array($data)) {
                return json_encode(['success' => false, 'message' => 'Invalid data format']);
            }

            $responses = [];
            foreach ($data as $permission) {
                $roleId = isset($permission['roleId']) ? (int)$permission['roleId'] : null;
                $screenId = isset($permission['screenId']) ? (int)$permission['screenId'] : null;
                $isChecked = isset($permission['isChecked']) ? (bool)$permission['isChecked'] : false;

                $hasPermission = $isChecked ? 1 : 0;

                if ($roleId === null || $screenId === null) {
                    $responses[] = ['success' => false, 'message' => 'Missing parameters for one of the permissions'];
                    continue; 
                }

                $sql = "UPDATE dbo.role_permissions 
                        SET has_permission = $1 
                        WHERE role_id = $2 
                        AND screen_id = $3";

                $stmt = $pg->db_query_params($sql, [
                    $hasPermission,  
                    $roleId,      
                    $screenId  
                ]);

                if ($stmt) {
                    $responses[] = ['success' => true, 'message' => "Permission updated for role ID $roleId and screen ID $screenId"];
                } else {
                    $responses[] = ['success' => false, 'message' => "No record found to update for role ID $roleId and screen ID $screenId"];
                }
            }

            $response = ['success' => true, 'responses' => $responses];
        } else {
            $response = ['success' => false, 'message' => 'Invalid request method'];
        }
    } catch (Exception $e) {
        $response = ['success' => false, 'message' => 'Error: ' . $e->getMessage()];
    }

    echo json_encode($response);
}

update_role_permissions();
