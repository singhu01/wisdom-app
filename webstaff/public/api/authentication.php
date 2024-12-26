<?php
function getUsername() {
    // $name = strstr($_SERVER['REMOTE_USER'], '@', TRUE);
    $name = 'wisdom_user';
    if (empty($name)) {
        throw new Exception('Cannot determine username.');
    }
    return $name;
}

function getNetID() {
    // $id = $_SERVER['HTTP_CAS_ATTR_NETID'];
    $id = 'f006k8f';
    if (empty($id)) {
        throw new Exception('Cannot determine NetID.');
    }
    return $id;
}

function checkIfAuthorized($pg, $role = 'wisdom_staff') {
    if ($pg->is_user_in_role(getNetID(), $role) == 0) {
        throw new Exception('You are not authorized to access this website.');
    }
}
?>
