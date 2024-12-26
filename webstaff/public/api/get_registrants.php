<?php
require_once('authentication.php');
require_once('postgresql.php');

try {
    $netID = getNetID();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    $roleId = isset($_POST['roleId']) ? $_POST['roleId'] : null;
    $registrySiteId = isset($_POST['registrySiteId']) ? $_POST['registrySiteId'] : null;

    $data = array();

    if ($roleId == '2') {
        $result = $pg->db_query_params('
            SELECT
                registrant.*,
                cast(inclusion_exclusion_entry_on AS date) AS inclusion_exclusion_date,
                CASE
                    WHEN is_female_rs = \'1\' AND is_18_or_older_rs = \'1\' AND is_45_or_younger_rs = \'1\' AND has_ibd_diagnosis_rs = \'1\' AND
                            was_uterus_removed_rs = \'0\' AND is_currently_pregnant_rs = \'0\' AND is_planning_pregnancy_rs = \'1\' AND
                            any_other_condition_which = \'0\' AND inability_or_unwillingness = \'0\' THEN \'Yes\'
                    WHEN is_female_rs = \'0\' OR is_18_or_older_rs = \'0\' OR is_45_or_younger_rs = \'0\' OR has_ibd_diagnosis_rs = \'0\' OR
                            was_uterus_removed_rs = \'1\' OR is_currently_pregnant_rs = \'1\' OR is_planning_pregnancy_rs = \'0\' OR
                            any_other_condition_which = \'1\' OR inability_or_unwillingness = \'1\' THEN \'No\'
                    WHEN
                        is_female = 0 OR is_18_or_older = 0 OR is_45_or_younger = 0 OR has_ibd_diagnosis = 0 OR
                        was_uterus_removed = 1 OR is_currently_pregnant = 1 OR is_planning_pregnancy = 0 THEN \'No\'
                    ELSE \'Pending\'
                END AS is_eligible,
                CASE WHEN self_screening_entry_on IS NULL THEN \'No\' ELSE \'Yes\' END AS was_self_registered,
                CASE
                    WHEN self_screening_entry_on IS NULL THEN \'No\' 
                    WHEN allow_non_patient = TRUE THEN \'No\'
                    WHEN was_transferred = FALSE THEN \'No\' 
                    ELSE \'Yes\'
                END AS check_for_non_patient,
                baseline_patient.id AS baseline_patient_id,
                date_patient_baseline,
                date_monthly_followup,
                date_patient_baseline + 30 * (questionnaire.survey_sequence +
                        CASE WHEN questionnaire.survey_sequence > coalesce(monthly_followup.survey_sequence, 0) THEN 0 ELSE 1 END) AS next_followup_date
            FROM
                dbo.registrant
                JOIN
                dbo.registry_site ON registrant.registry_site_id = registry_site.id
                JOIN
                dbo.staff ON registry_site.id = staff.registry_site_id AND net_id = current_user
                LEFT JOIN
                dbo.baseline_patient ON registrant.id = baseline_patient.registrant_id
                LEFT JOIN (
                    SELECT registrant_id, max(today_date) AS date_monthly_followup, max(survey_sequence) AS survey_sequence
                    FROM dbo.monthly_followup
                    GROUP BY registrant_id
                ) AS monthly_followup ON registrant.id = monthly_followup.registrant_id
                LEFT JOIN (
                    SELECT registrant_id, max(survey_sequence) AS survey_sequence
                    FROM dbo.questionnaire
                    GROUP BY registrant_id
                ) AS questionnaire ON registrant.id = questionnaire.registrant_id
            WHERE
                registrant.registry_site_id = $1 OR registrant.how_heard = \'Other\'
        ', array($registrySiteId));
    } else {
        $result = $pg->db_query('
           SELECT
                registrant.*,
                cast(inclusion_exclusion_entry_on AS date) AS inclusion_exclusion_date,
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
                CASE WHEN self_screening_entry_on IS NULL THEN \'No\' ELSE \'Yes\' END AS was_self_registered,
                CASE
                    WHEN self_screening_entry_on IS NULL THEN \'No\'
                    WHEN allow_non_patient = TRUE THEN \'No\'
                    WHEN was_transferred = FALSE THEN \'No\'
                    ELSE \'Yes\'
                END AS check_for_non_patient,
                baseline_patient.id AS baseline_patient_id,
                date_patient_baseline,
                date_monthly_followup,
                date_patient_baseline + 30 * (questionnaire.survey_sequence +
                        CASE WHEN questionnaire.survey_sequence > coalesce(monthly_followup.survey_sequence, 0) THEN 0 ELSE 1 END) AS next_followup_date
            FROM
                dbo.registrant
                JOIN
                dbo.registry_site ON registrant.registry_site_id = registry_site.id
                JOIN
                dbo.staff ON registry_site.id = staff.registry_site_id AND net_id = current_user
                LEFT JOIN
                dbo.baseline_patient ON registrant.id = baseline_patient.registrant_id
                LEFT JOIN (
                    SELECT registrant_id, max(today_date) AS date_monthly_followup, max(survey_sequence) AS survey_sequence
                    FROM dbo.monthly_followup
                    GROUP BY registrant_id
                ) AS monthly_followup ON registrant.id = monthly_followup.registrant_id
                LEFT JOIN (
                    SELECT registrant_id, max(survey_sequence) AS survey_sequence
                    FROM dbo.questionnaire
                    GROUP BY registrant_id
                ) AS questionnaire ON registrant.id = questionnaire.registrant_id
        ');
    }    
    while ($row = pg_fetch_assoc($result)) {
        $row['monthly_followup'] = array();
        $result2 = $pg->db_query_params('
                SELECT
                    q.id AS questionnaire_id,
                    q.survey_sequence,
                    bp.date_patient_baseline + 30 * q.survey_sequence AS due_on,
                    mf.id AS monthly_followup_id,
                    mf.today_date AS completed_on
                FROM
                    dbo.baseline_patient AS bp
                    JOIN
                    dbo.questionnaire AS q ON bp.registrant_id = q.registrant_id
                    LEFT JOIN
                    dbo.monthly_followup AS mf ON q.registrant_id = mf.registrant_id AND q.survey_sequence = mf.survey_sequence
                WHERE q.registrant_id = $1 AND q.survey_sequence > 0
                ORDER BY q.survey_sequence',
                array($row['id'])
        );
        while ($row2 = pg_fetch_assoc($result2)) {
            $row['monthly_followup'][] = $row2;
        }

        $data[] = $row;
    }

    $response = array('status' => 0, 'data' => $data);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
