<?php
require_once('postgresql.php');
require_once('mailer.php');

try {
    $pg = new Postgresql('wisdom_participant');

    $email_exists = "No";
    $result = $pg->db_query_params('
            SELECT
                a.*,
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
            array(strtolower($_POST['screening_email']))
    );

    if ($row = pg_fetch_assoc($result)) {
        $data = $row;
        $email_exists = "Yes";
    }
    else {
        if ($_POST['how_heard'] == 'Other') {
            $result = $pg->db_query('
                    SELECT id
                    FROM dbo.registry_site
                    WHERE allow_non_patient = TRUE'
            );
        }
        else {
            $result = $pg->db_query_params('
                    SELECT id
                    FROM dbo.registry_site
                    WHERE site_name = $1',
                    array($_POST['how_heard'])
            );
        }
        if ($row = pg_fetch_assoc($result)) {
            $_POST['registry_site_id'] = $row['id'];
            $_POST['date_registration'] = date("Y-m-d");
            $entry_on_field = 'contact_information_and_registration_entry_on';
            $pg->transaction_begin();
            $pg->db_update('dbo', 'registrant', $_POST, $entry_on_field);
            $pg->transaction_end();
        }
        else {
            throw new Exception('Site not found.');
        }
    }

    if ($email_exists == "No") {
        $result = $pg->db_query_params('
                SELECT
                    a.*,
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
                WHERE a.id = $1',
                array($_POST['id'])
        );
        if ($row = pg_fetch_assoc($result)) {
          $data = $row;
            if ($row['meets_criteria'] == "Yes") {
                    send_mail([$row['screening_email']],
                            "Registration Confirmation for WIsDoM study",
                            "This e-mail is to confirm that you have registered for the Women with IBD and Motherhood (WIsDoM) study. Someone from " . $row['site_name']. " will reach out to you within a week with further explanation and next steps.\n\nIf you have received this message in error or have any additional questions, please contact us at:\n\nTelephone: " . $row['site_telephone'] . "\nE-mail: \n\nThank you.\n\nThe WIsDoM Study Team");
                }
            else {
               send_mail([$row['screening_email']],
                        "Women with IBD and Motherhood (WIsDoM) Study",
                        "This e-mail is to confirm that you filled out a survey on the Women with IBD and Motherhood (WIsDoM) study website. Based on your answers, you are not currently eligible for the study. However, you can come back at any time if you meet the following criteria:\n - Biologically female\n - Age 18 – 45 years old\n - Diagnosed with Inflammatory Bowel Disease\n - Planning pregnancy within the next 18 months\n\nIf you indicated that you are interested in other IBD-related studies being performed at our institution, someone from " . $row['site_name']. " will reach out to you with further explanation and next steps.\n\nIf you have received this message in error or have any additional questions, please contact us at:\n\nTelephone: " . $row['site_telephone'] . "\nE-mail: " . $row['site_email'] . "\n\nThank you.\n\nThe WIsDoM Study Team");

            }
          send_mail([$row['site_email']], 'Women with IBD and Motherhood (WIsDoM) Study', 'Patient ' . $_POST['id'] . ' recently self-registered and is now listed at https://' . $_SERVER['SERVER_NAME'] . '/staff');
        }
        else {
            throw new Exception('Participant record not found.');
        }
    }

    $response = array('status' => 0, 'data' => $data, 'email_exists' => $email_exists);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
