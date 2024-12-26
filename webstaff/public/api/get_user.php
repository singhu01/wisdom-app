<?php
require_once('authentication.php');
require_once('postgresql.php');

try {
    $username = getUsername();
    $data = array('username' => $username);

    $netID = getNetID();
    $data['username'] = getUsername();
    $pg = new Postgresql($netID);
    checkIfAuthorized($pg);

    $data['is_study_coordinator'] = $pg->is_user_in_role($netID, 'wisdom_study_coordinator');
    $data['is_reviewer'] = $pg->is_user_in_role($netID, 'wisdom_reviewer');

    $response = array('status' => 0, 'data' => $data);
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
