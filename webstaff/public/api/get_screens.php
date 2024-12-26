<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once('postgresql.php');

function get_screens() {
    try {
        $pg = new Postgresql('wisdom_user');

        $query = 'SELECT id, title FROM dbo.screens'; 
        $result = $pg->db_query($query);

        if (!$result) {
            throw new Exception('Error in SQL query: ' . pg_last_error($pg->conn));
        }

        $screens = [];
        while ($row = pg_fetch_assoc($result)) {
            $screens[] = [
                'id' => $row['id'],
                'title' => $row['title'],
            ];
        }
        pg_free_result($result);

        echo json_encode($screens);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

get_screens();
?>
