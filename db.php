<?php
$connection = mysqli_connect('localhost', 'root', '', 'pudge');
mysqli_query($connection, "SET NAMES utf8");
if ($connection == false) {
    echo 'Не удалось подключиться к базе данных';
    echo mysqli_connect_error();
    exit();
}