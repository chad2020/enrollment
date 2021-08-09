<?php
include 'connection.php';
    $id = $_POST['id'];

    if(isset($_POST['student_image'])) {
        $query = "SELECT * FROM students WHERE student_id = $id";
        $view = mysqli_query($connect, $query);
        $fetch = mysqli_fetch_assoc($view);
        $image = $fetch['student_image'];
        echo $image;
    }
        

    if(isset($_POST['admin_image'])) {
        $query = "SELECT * FROM adminuser WHERE user_id = $id";
        $view = mysqli_query($connect, $query);
        $fetch = mysqli_fetch_assoc($view);
        $image = $fetch['user_image'];
        echo $image;
    }

    if(isset($_POST['registrar_image'])) {
        $query = "SELECT * FROM registrar WHERE registrar_id = $id";
        $view = mysqli_query($connect, $query);
        $fetch = mysqli_fetch_assoc($view);
        $image = $fetch['registrar_image'];
        echo $image;
    }

    ?>