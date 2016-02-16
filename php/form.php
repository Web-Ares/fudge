<?php
    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    $name = $_POST['name'];
    $tel = $_POST['email'];
    $text = $_POST['text'];


    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: adoric\r\n";
    $message = "Name: ".$name;
    $message .= ", Tel: ".$tel;
    $message .= ", Text: ".$text;
    mail("85bondar@gmail.com", "Request from site", $message, $headers);

    echo $name;
    echo $tel;
    echo $text;

    exit;
?>