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

    $stmt = $pg->db_query_params("SELECT id, username, role_id, registry_id, name FROM dbo.users WHERE username = $1", array($email));
    $user = pg_fetch_assoc($stmt);

    if ($user) {
        $roleId = $user['role_id'];
        $roleStmt = $pg->db_query_params("SELECT id, role_name FROM dbo.roles WHERE id = $1", array($roleId));
        $role = pg_fetch_assoc($roleStmt);

        $registryId = $user['registry_id'];
        $registryStmt = $pg->db_query_params("SELECT id, site_name FROM dbo.registry_site WHERE id = $1", array($registryId));
        $registryData = pg_fetch_assoc($registryStmt);

        $permissionsStmt = $pg->db_query_params("SELECT * FROM dbo.role_permissions WHERE role_id = $1", array($roleId));
        $permissions = pg_fetch_all($permissionsStmt);

        $screensWithTitles = [];
        foreach ($permissions as $permission) {
            $screenId = $permission['screen_id'];
            $screenStmt = $pg->db_query_params("SELECT title FROM dbo.screens WHERE id = $1", array($screenId));
            $screen = pg_fetch_assoc($screenStmt);
            $screensWithTitles[] = [
                'screen_id' => $screenId,
                'title' => $screen['title'] ?? null
            ];
        }

        $response = [
            'user' => $user,
            'role' => $role,
            'registry' => $registryData,
            'permissions' => $permissions,
            'screens' => $screensWithTitles
        ];

        echo json_encode($response);
    } else {
        echo json_encode(['error' => 'User not found']);
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'Error: ' . $e->getMessage()]);
}
?>
