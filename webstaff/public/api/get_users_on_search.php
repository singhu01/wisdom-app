<?php
 require 'get_add_user_role.php';
 require 'get_registry_site.php';

$clientId = '99e194b1-12f5-4206-a78e-5afe2e214128';
$clientSecret = 'gr98Q~9RAj-Hes_gJYZgWUAGPjqWz2gQcBAESasL'; 
$tenantId = '5a6c876c-f971-4b14-91e5-b14f89bb031d';
$groupId = '4a388de3-18d7-44e8-aa49-4b9e4662300f'; 
 
function getAccessToken($tenantId, $clientId, $clientSecret) {
    $url = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token";
 
    $postFields = http_build_query([
        'client_id' => $clientId,
        'scope' => 'https://graph.microsoft.com/.default',
        'client_secret' => $clientSecret,
        'grant_type' => 'client_credentials',
    ]);
 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
 
    $response = curl_exec($ch);
    if ($response === false) {
        die('Error fetching access token: ' . curl_error($ch));
    }
 
    $responseData = json_decode($response, true);
    curl_close($ch);
 
    return $responseData['access_token'] ?? null;
}

function getGroupUsers($accessToken, $groupId) {
    $url = "https://graph.microsoft.com/v1.0/groups/$groupId/members";
 
    $headers = [
        "Authorization: Bearer $accessToken",
        "Accept: application/json",
    ];
 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    if ($response === false) {
        die('Error fetching group users: ' . curl_error($ch));
    }

    $responseData = json_decode($response, true);
    curl_close($ch);
 
    return $responseData['value'] ?? [];
}
 
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $accessToken = getAccessToken($tenantId, $clientId, $clientSecret);
   
    if (!$accessToken) {
        die(json_encode(['error' => 'Failed to retrieve access token.']));
    }
 
    $users = getGroupUsers($accessToken, $groupId);
    $roles = get_add_user_role();
    $registry_site = get_registry_site();
    header('Content-Type: application/json');
    echo json_encode(['users' => $users, 'roles' => $roles, 'registry_site' => $registry_site]);
} else {
    http_response_code(405);
    
    echo json_encode(['error' => 'Method not allowed.']);
}
 
?>