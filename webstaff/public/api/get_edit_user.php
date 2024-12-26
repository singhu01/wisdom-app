<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_user'); 

    function getUserDetails($userId) {
        global $pg; 
        $query = "
            SELECT 
                u.id,
                u.username,
                u.name,
                r.role_name AS role_name,
                r.id as role_id,
                rs.site_name AS registry_site_name,
                rs.id AS registry_id
            FROM 
                dbo.users u
            LEFT JOIN 
                dbo.roles r ON u.role_id = r.id
            LEFT JOIN 
                dbo.registry_site rs ON u.registry_id = rs.id
            WHERE 
                u.id = $1
        ";

        $result = $pg->db_query_params($query, array($userId));

        if (!$result) {
            echo json_encode(["error" => "Query failed: " . pg_last_error()]);
            return;
        }

        $userData = pg_fetch_assoc($result);

        echo json_encode($userData);
    }

    $userId = isset($_GET['id']) ? intval($_GET['id']) : 0; // Ensure user ID is an integer
    getUserDetails($userId);
} catch (Exception $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
