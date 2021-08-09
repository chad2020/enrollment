<?php
    include 'connection.php';


    if(isset($_POST['createCourse'])) {
        $coursedesc = $coursetype = "";
        $coursedesc = $_POST['coursedesc'];
        $coursetype = $_POST['coursetype'];

        $query = "INSERT INTO course(course_desc, course_type) VALUES('$coursedesc', '$coursetype');";
        $view = mysqli_query($connect, $query);
        echo "Successfully Inserted";
    }

    if(isset($_POST['createSubject'])) {
        $subjectcode = $subjectdesc = $subjectunit = "";
        $subjectcode    = $_POST['subjectcode'];
        $subjectdesc    = $_POST['subjectdesc'];
        $subjectunit    = $_POST['subjectunit']; 

        $query = "INSERT INTO subjects(subject_code, subject_desc, subject_unit) VALUES('$subjectcode', '$subjectdesc', '$subjectunit');";
        $view = mysqli_query($connect, $query);
        echo "Successfully Inserted";

    }
    
?>