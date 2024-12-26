<?php

require_once('postgresql.php');
require_once('mailer.php');

function update_registrant() {
    try {
        $pg = new Postgresql('wisdom_user');

        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['id'])) {
            $id = htmlspecialchars(strip_tags($data['id']));
            $firstName = htmlspecialchars(strip_tags($data['screening_first_name']));
            $lastName = htmlspecialchars(strip_tags($data['screening_last_name']));
            $phone1 = htmlspecialchars(strip_tags($data['screening_phone_1']));
            $phone2 = htmlspecialchars(strip_tags($data['screening_phone_2']));
            $email = htmlspecialchars(strip_tags($data['screening_email']));
            $howHeard = isset($data['how_heard']) ? htmlspecialchars(strip_tags($data['how_heard'])) : null;
            $otherSource = isset($data['other_source']) ? htmlspecialchars(strip_tags($data['other_source'])) : null; // New field for other source
            $registrySiteId = isset($data['registry_site_id']) ? htmlspecialchars(strip_tags($data['registry_site_id'])) : null; // New field for registry site ID

            $checkEmailQuery = "SELECT id FROM dbo.registrant WHERE screening_email = '$email' AND id != '$id'";
            $result = $pg->db_query($checkEmailQuery);

            if (pg_num_rows($result) > 0) {
                echo json_encode(["success" => false, "message" => "Email is already taken."]);
                return;
            }

            $query = "UPDATE dbo.registrant SET 
                        screening_first_name = '$firstName', 
                        screening_last_name = '$lastName', 
                        screening_phone_1 = '$phone1', 
                        screening_phone_2 = '$phone2', 
                        screening_email = '$email'";

            if ($howHeard !== null) {
                $query .= ", how_heard = '$howHeard'";
            }

            if ($howHeard === 'Other' && $otherSource !== null) {
                $query .= ", other_source = '$otherSource'";
            } else if ($howHeard !== 'Other') {
                $query .= ", other_source = NULL";
            }

            if ($registrySiteId !== null && $howHeard !== 'Other') {
                $query .= ", registry_site_id = '$registrySiteId'";
            }

            $query .= " WHERE id = '$id'";

            $result = $pg->db_query($query);

            if ($result) {
                send_mail(
                    [$email],
                    "Registration Confirmation for WIsDoM study",
                    "This e-mail is to confirm that you have registered for the Women with IBD and Motherhood (WIsDoM) study. Someone from " . $howHeard . " will reach out to you within a week with further explanation and next steps.\n\nIf you have received this message in error or have any additional questions, please contact us at:\n\nTelephone: " . $phone1 . "\nE-mail: \n\nThank you.\n\nThe WIsDoM Study Team"
                );
                echo json_encode(["success" => true, "message" => "Record updated successfully"]);
            } else {
                throw new Exception('Error updating record: ' . pg_last_error($pg->conn));
            }
        } else {
            echo json_encode(["success" => false, "message" => "Invalid input"]);
        }
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

update_registrant();
?>
