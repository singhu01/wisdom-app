<?php
require_once('postgresql.php');

header('Content-Type: application/json');

try {
    $pg = new Postgresql('wisdom_user');

    $query = 'SELECT site_name, id FROM dbo.registry_site';
    $result = $pg->db_query($query);

    if (!$result) {
        throw new Exception('Query failed.');
    }

    $data = [];
    while ($row = pg_fetch_assoc($result)) {
        $data[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($data);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
