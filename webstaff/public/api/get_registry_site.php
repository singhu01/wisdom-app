<?php
require_once('postgresql.php');

function get_registry_site() {
    try {
        $pg = new Postgresql('wisdom_user');

        $query = 'SELECT * FROM dbo.registry_site';
        $result = $pg->db_query($query);

        if (!$result) {
            throw new Exception("Error in SQL query: " . pg_last_error());
        }

        $registry_sites = [];

        while ($row = pg_fetch_assoc($result)) {
            $registry_sites[] = [
                'id' => $row['id'],
                'site_name' => $row['site_name'],
            ];
        }

        pg_free_result($result);

        header('Content-Type: application/json');
        return $registry_sites;
    } catch (Exception $e) {
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    }
}
?>
