<?php
    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    $name = $_GET['name'];
    $tel = $_GET['email'];
    $text = $_GET['text'];


    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Fudge\r\n";
    $message = "Name: ".$name;
    $message .= ", Tel: ".$tel;
    $message .= ", Text: ".$text;
    mail("amigo.85@list.ru", "Request from site", $message, $headers);

    echo $name;
    echo $tel;
    echo $text;

    exit;
?>