<?php

$db = mysqli_connect('localhost', 'root', 'minialce12', 'appsalon');

if (!$db){
    echo 'Hubo un error';
    exit;
}
