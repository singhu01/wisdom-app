<?php
require_once('postgresql.php');

function get_add_user_role() { 
    try {
        $pg = new Postgresql('wisdom_user');

        $query = 'SELECT * FROM dbo.roles';
        $result = $pg->db_query($query);

        $roles = [];
        while ($row = pg_fetch_assoc($result)) {
            $roles[] = [
                'id' => $row['id'],
                'name' => $row['role_name'],
            ];
        }
        pg_free_result($result);

        header('Content-Type: application/json');
        return $roles;
    } catch (Exception $e) {
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Error: ' . $e->getMessage()]);
        exit();
    }
}

$roles = get_add_user_role();
return $roles;
?>
