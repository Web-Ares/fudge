<?php
    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    $name = $_GET['name'];
    $tel = $_GET['email'];
    $text = $_GET['text'];

    echo $name, $tel, $text;

    exit;
?>