<?php

try {
     if ($_SERVER['REMOTE_ADDR'] == '172.24.0.1' || $_SERVER['REMOTE_ADDR'] == '127.0.0.1')  {
        $response = array('status' => 0, 'address' => $_SERVER['REMOTE_ADDR']);
     }
     elseif (isset($_REQUEST['captchaResponse'])) {
        $captcha_response = $_REQUEST['captchaResponse'];
        $secret = getenv('RECAPTCHA_SECRET_KEY');
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = ['secret'   => $secret,
                 'response' => $captcha_response['response'],
                 'remoteip' => $_SERVER['REMOTE_ADDR']];

        $options = [
            'http' => [
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            ],
            'ssl' => [
                'verify_peer' => false
            ]
        ];

        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        $status = 1;
        if (json_decode($result)->success) {
            $status = 0;
        }
        $response = array('status' => $status, 'address' => $_SERVER['REMOTE_ADDR']);
    } else {
        $response = array('status' => 1, 'error_message' => 'Missing captcha response');
    }
}
catch (Exception $e) {
    $response = array('status' => 1, 'error_message' => $e->getMessage());
}

header('Content-Type: application/json');
echo json_encode($response);
?>
