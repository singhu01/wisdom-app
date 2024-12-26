<?php

require_once('postgresql.php');

function get_staff() {
    try {
        $pg = new Postgresql('wisdom_user');

        $query = "
            SELECT u.*, r.role_name 
            FROM dbo.users u
            JOIN dbo.roles r ON u.role_id = r.id
            WHERE u.deleted_at IS NULL
        ";

        $result = $pg->db_query($query);

        if (!$result) {
            throw new Exception("Error in SQL query: " . pg_last_error($pg->conn));
        }

        $staff = [];
        while ($row = pg_fetch_assoc($result)) {
            $staff[] = [
                'id' => $row['id'],
                'name' => $row['name'],
                'username' => $row['username'],
                'role_name' => $row['role_name'],
            ];
        }

        pg_free_result($result);

        if ($staff) {
            $response = array('status' => 0, 'data' => $staff);
        } else {
            $response = array('status' => 'error', 'message' => 'No staff found');
        }

    } catch (Exception $e) {
        $response = array('status' => 1, 'error_message' => $e->getMessage());
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
get_staff();

?>
