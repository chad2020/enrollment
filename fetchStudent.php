<?php


include 'connection.php';

$query = "SELECT * FROM students";
$view = mysqli_query($connect, $query);

$details = mysqli_fetch_all($view, MYSQLI_ASSOC);


echo json_encode($details);