<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_participant');

    $entry_on_field = 'self_screening_entry_on';
    $pg->transaction_begin();
    $id = $pg->db_insert('dbo', 'registrant', $_POST, $entry_on_field);
    $pg->transaction_end();

    $result = $pg->db_query_params('
            SELECT
                *,
                CASE
                    WHEN
                        is_female = 0
                        OR
                        is_18_or_older = 0
                        OR
                        is_45_or_younger = 0
                        OR
                        has_ibd_diagnosis = 0
                        OR
                        was_uterus_removed = 1
                        OR
                        is_currently_pregnant = 1
                        OR
                        is_planning_pregnancy = 0
                    THEN \'No\'
                    ELSE \'Yes\'
                END AS meets_criteria
            FROM dbo.registrant
            WHERE id = $1',
            array($id)
    );
    $row = pg_fetch_assoc($result);
    $response = array('status' => 0, 'data' => $row);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
