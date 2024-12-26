<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_user');

    $role_id = isset($_GET['role_id']) ? intval($_GET['role_id']) : 0;

    $sql = "
        SELECT 
            s.id AS screen_id,
            s.title AS screen_title,
            COALESCE(rp.has_permission, false) AS has_permission
        FROM dbo.screens s
        LEFT JOIN dbo.role_permissions rp ON rp.screen_id = s.id AND rp.role_id = $1
    ";

    $result = $pg->db_query_params($sql, array($role_id));

    if ($result) {
        $data = array();
        while ($row = pg_fetch_assoc($result)) {
            $data[] = $row;
        }

        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        header('Content-Type: application/json');
        echo json_encode(array());
    }
} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
?>
