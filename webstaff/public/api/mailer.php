<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Send an e-mail using PHPMailer
function send_mail($emails, $subject, $message, $cc = null)
{
    $emailUrl = "https://prod-10.southindia.logic.azure.com:443/workflows/14e07e06df554886a45daf565732c92f/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=VcL1PaTce_9p5PTCsKsBj89F6LmXjKM1sltgoxEEGJ8";
    foreach ($emails as $email) {
        $email_address = $email;
    }
    $params = array(
        'email' => $email_address,
        'subject' => $subject,
        'message' => $message
    );
    $data = json_encode($params);

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $emailUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    if($response === false) {
        echo 'cURL error: ' . curl_error($ch);
    } else {
        echo $response;
    }
    curl_close($ch);
}
?> 
