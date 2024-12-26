<?php

require_once('postgresql.php');

function get_user_roles() {
    try {
        $pg = new Postgresql('wisdom_user');

        $query = 'SELECT * FROM dbo.roles';
        $result = $pg->db_query($query);

        if (!$result) {
            throw new Exception("Error in SQL query: " . pg_last_error($pg->conn));
        }

        $roles = [];
        while ($row = pg_fetch_assoc($result)) {
            $roles[] = [
                'id' => $row['id'],
                'name' => $row['role_name'],
            ];
        }
        pg_free_result($result);

        header('Content-Type: application/json');
        echo json_encode($roles);
    } catch (Exception $e) {
        header('Content-Type: application/json', true, 500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

get_user_roles();

?>
