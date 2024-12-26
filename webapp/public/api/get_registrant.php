<?php
require_once('postgresql.php');

try {
    $pg = new Postgresql('wisdom_participant');

    if (empty($_REQUEST['screening_email'])) {
        throw new Exception('You must enter an email address.');
    }
    if (empty($_REQUEST['access_key'])) {
        throw new Exception('You must enter an access key.');
    }

    $result = $pg->db_query_params('
            SELECT
                a.*,
                to_char(a.created_on, \'YYYYMMDDHH24MISS\') AS access_key,
                CASE
                    WHEN
                        a.is_female = 0
                        OR
                        a.is_18_or_older = 0
                        OR
                        a.is_45_or_younger = 0
                        OR
                        a.has_ibd_diagnosis = 0
                        OR
                        a.was_uterus_removed = 1
                        OR
                        a.is_currently_pregnant = 1
                        OR
                        a.is_planning_pregnancy = 0
                    THEN \'No\'
                    ELSE \'Yes\'
                END AS meets_criteria,
                b.site_name,
                b.principal_investigator,
                b.study_coordinator,
                b.telephone AS site_telephone,
                b.contact_email AS site_email
            FROM
                dbo.registrant AS a
                JOIN
                dbo.registry_site AS b ON a.registry_site_id = b.id
            WHERE lower(a.screening_email) = $1',
            array(strtolower($_REQUEST['screening_email']))
    );
    echo "checkingApi".$registrant['access_key'];
    echo "Checkin@nd".$_REQUEST['access_key'];
    if ($registrant = pg_fetch_assoc($result)) {
        if ($registrant['access_key'] != $_REQUEST['access_key']) {
            throw new Exception('Invalid access key.');
        }
    }
    else {
        throw new Exception('Could not find your email address in our records.');
    }

    $response = array('status' => 0, 'data' => $registrant);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
