<?php
require_once('authentication.php');
require_once('postgresql.php');
require_once('mailer.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    $id = $_POST['id'];
    $entry_on_field = 'inclusion_exclusion_entry_on';
    $pg->db_update('dbo', 'registrant', $_POST, $entry_on_field);

    $result = $pg->db_query_params('
            SELECT
                CASE
                    WHEN is_female_rs = \'1\' AND is_18_or_older_rs = \'1\' AND is_45_or_younger_rs = \'1\' AND has_ibd_diagnosis_rs = \'1\' AND
                            was_uterus_removed_rs = \'0\' AND is_currently_pregnant_rs = \'0\' AND is_planning_pregnancy_rs = \'1\' AND
                            any_other_condition_which = \'0\' AND inability_or_unwillingness = \'0\'
                    THEN \'Yes\'
                    WHEN is_female_rs = \'0\' OR is_18_or_older_rs = \'0\' OR is_45_or_younger_rs = \'0\' OR has_ibd_diagnosis_rs = \'0\' OR
                            was_uterus_removed_rs = \'1\' OR is_currently_pregnant_rs = \'1\' OR is_planning_pregnancy_rs = \'0\' OR
                            any_other_condition_which = \'1\' OR inability_or_unwillingness = \'1\'
                    THEN \'No\'
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
                    ELSE \'Pending\'
                END AS is_eligible,
                reviewer_email
            FROM
                dbo.registrant
                JOIN
                dbo.registry_site ON registrant.registry_site_id = registry_site.id
                JOIN
                dbo.staff ON registry_site.id = staff.registry_site_id AND net_id = current_user
            WHERE registrant.id = $1',
            array($id)
    );
    if ($row = pg_fetch_assoc($result)) {
        if ($row['is_eligible'] == 'Yes') {
            send_mail([$row['reviewer_email']], 'Women with IBD and Motherhood (WIsDoM) Study', 'Patient ' . $id . ' is ready for review at https://' . $_SERVER['SERVER_NAME'] . '/staff');
        }
    }
    else {
        throw new Exception('Registrant record not found.');
    }

    $response = array('status' => 0, 'id' => $id);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
