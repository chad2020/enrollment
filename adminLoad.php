<?php
    include 'connection.php';

    date_default_timezone_set("Asia/Manila");
    
    $dateNow = date('mdY');

    function clean($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
/*
        default query
                        */
if(isset($_POST['default'])){
    $param = $_POST['param'];

    if($param == 1) {
        $query =   "SELECT * FROM registration_executive, enrollment_students, course 
                WHERE   registration_executive.registration_id  = enrollment_students.enrollment_exec
                AND     registration_executive.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                ORDER BY registration_ticket_number ASC";
    } else if($param == 2) {
        $query = "SELECT * FROM registration_regular_4yr, enrollment_students, course 
                WHERE   registration_regular_4yr.registration_id  = enrollment_students.enrollment_reg4yr
                AND     registration_regular_4yr.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                ORDER BY registration_ticket_number ASC";
    } else if($param == 3) {
        $query = "SELECT * FROM registration_regular_2yr, enrollment_students, course 
                WHERE   registration_regular_2yr.registration_id  = enrollment_students.enrollment_reg2yr
                AND     registration_regular_2yr.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                ORDER BY registration_ticket_number ASC";
    } else if($param == 4) {
        $query = "SELECT * FROM registration_senior, enrollment_students, course 
                WHERE   registration_senior.registration_id  = enrollment_students.enrollment_senior 
                AND     registration_senior.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                ORDER BY registration_ticket_number ASC";
    } else if($param == 0) {
        $query =   "SELECT * FROM registration_executive, enrollment_students, course 
                WHERE   enrollment_students.enrollment_exec = registration_executive.registration_id 
                AND     registration_executive.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                    UNION
                SELECT * FROM registration_regular_4yr, enrollment_students, course 
                WHERE   enrollment_students.enrollment_reg4yr  = registration_regular_4yr.registration_id
                AND     registration_regular_4yr.registration_course_id   = course.course_id
                AND     registration_ticket_number LIKE '$dateNow%'
                --     UNION
                -- SELECT * FROM registration_regular_2yr, enrollment_students, course 
                -- WHERE   enrollment_students.enrollment_reg2yr = registration_regular_2yr.registration_id
                -- AND     registration_regular_2yr.registration_course_id   = course.course_id
                -- AND     registration_ticket_number LIKE '$dateNow%'
                --     UNION
                -- SELECT * FROM registration_senior, enrollment_students, course 
                -- WHERE   enrollment_students.enrollment_senior = registration_senior.registration_id
                -- AND     registration_senior.registration_course_id   = course.course_id
                -- AND     registration_ticket_number LIKE '$dateNow%'
                ORDER BY registration_ticket_number ASC";
    }
    

    $view = mysqli_query($connect, $query);
    $row = mysqli_num_rows($view);
    $array = array();
    $i = 0;
    if($row > 0) {
        while($details = mysqli_fetch_assoc($view)):
            $name = $details['student_fname'] . " " . 
                    $details['student_lname'][0] . ". " . 
                    $details['student_mname'];
            $array[$i] = array(
                0 => $details['registration_ticket_number'],
                1 => $name,
                2 => $details['course_acronym'],
                3 => $details['registration_date_created'],
                4 => $details['registration_status'],
            );
            $i++;
        endwhile;
    } 
    
    echo json_encode($array);

}

if(isset($_POST['mainDefault'])){

    $query =   "SELECT * FROM registration_executive, enrollment_students, course 
        WHERE   registration_executive.registration_id  = enrollment_students.enrollment_exec 
        AND     registration_executive.registration_course_id   = course.course_id
            UNION
        SELECT * FROM registration_regular_4yr, enrollment_students, course 
        WHERE   registration_regular_4yr.registration_id  = enrollment_students.enrollment_reg4yr 
        AND     registration_regular_4yr.registration_course_id   = course.course_id
        --     UNION
        -- SELECT * FROM registration_regular_2yr, enrollment_students, course 
        -- WHERE   registration_regular_2yr.registration_id  = enrollment_students.enrollment_reg2yr 
        -- AND     registration_regular_2yr.registration_course_id   = course.course_id
        --     UNION
        -- SELECT * FROM registration_senior, enrollment_students, course 
        -- WHERE   registration_senior.registration_id  = enrollment_students.enrollment_senior
        -- AND     registration_senior.registration_course_id   = course.course_id
        ORDER BY registration_ticket_number ASC";
    
    $view = mysqli_query($connect, $query);
    $num = mysqli_num_rows($view);
    $array = array();
    $i = 0;
    if($num > 0) {
        while($details = mysqli_fetch_assoc($view)):
            $array[$i] = array(
                0 => $details['registration_status']
            );
            $i++;
        endwhile;
    }
    
    echo json_encode($array);

}

if(isset($_POST['allTicket'])) {
    $param = $_POST['param'];
    if($param == 0) {
        $query =   "SELECT * FROM registration_executive, enrollment_students, course 
        WHERE   registration_executive.registration_id  = enrollment_students.enrollment_exec 
        AND     registration_executive.registration_course_id   = course.course_id
            UNION
        SELECT * FROM registration_regular_4yr, enrollment_students, course 
        WHERE   registration_regular_4yr.registration_id  = enrollment_students.enrollment_reg4yr
        AND     registration_regular_4yr.registration_course_id   = course.course_id
        --     UNION
        -- SELECT * FROM registration_regular_2yr, enrollment_students, course 
        -- WHERE   registration_regular_2yr.registration_id  = enrollment_students.enrollment_reg2yr
        -- AND     registration_regular_2yr.registration_course_id   = course.course_id
        --     UNION
        -- SELECT * FROM registration_senior, enrollment_students, course 
        -- WHERE   registration_senior.registration_id  = enrollment_students.enrollment_senior
        -- AND     registration_senior.registration_course_id   = course.course_id
        ORDER BY registration_ticket_number ASC";
    
    $view = mysqli_query($connect, $query);
    $row = mysqli_num_rows($view);
    $array = array();
    $i = 0;
    if($row > 0) {
        while($details = mysqli_fetch_assoc($view)):
            $name = $details['student_fname'] . " " . 
                    $details['student_mname'][0] . ". " . 
                    $details['student_lname'];
            $array[$i] = array(
                 0 => $details['registration_ticket_number'],
                 1 => $name,
                 2 => $details['course_acronym'],
                 3 => $details['registration_year'],
                 4 => $details['registration_sem'],
                 5 => $details['registration_student_type'],
                 6 => $details['registration_status'],
                 7 => $details['registration_date_created'],
                 8 => $details['student_id'],
                 9 => $details['registration_id'],
                10 => $details['course_type'],
                11 => $details['reg_schedule_id']
            );
            $i++;
        endwhile;
    }
                // <th style="width: 110px">Ticket Number</th>
				// 						<th style="width: 30%">Student Name</th>
				// 						<th style="width: 10%">Course</th>
				// 						<th style="width: 100px">Year Level</th>
				// 						<th>Semester</th>
				// 						<th>Student Type</th>
				// 						<th>Status</th>
				// 						<th>Date Registration</th>
    
    echo json_encode($array);
    }
}

if(isset($_POST['pre_default'])){
    $query =    "SELECT * FROM registration_executive, course, students 
                WHERE registration_executive.registration_course_id   = course.course_id
                AND registration_executive.registration_student_id = students.student_id
                AND registration_status = 'ENLISTED'
                    UNION
                SELECT * FROM registration_regular_4yr, course, students
                WHERE registration_regular_4yr.registration_course_id   = course.course_id
                AND registration_regular_4yr.registration_student_id = students.student_id
                AND registration_status = 'ENLISTED'
                --     UNION
                -- SELECT * FROM registration_regular_2yr, course
                -- WHERE registration_regular_2yr.registration_course_id   = course.course_id
                -- AND registration_status = 'ENLISTED'
                --     UNION
                -- SELECT * FROM registration_senior, course
                -- WHERE registration_senior.registration_course_id   = course.course_id
                -- AND registration_status = 'ENLISTED'
                ORDER BY registration_ticket_number ASC";
    $view =     mysqli_query($connect, $query);
    $row = mysqli_num_rows($view);
    $array = array();
    $i = 0;
    if($row > 0) {
        while($details = mysqli_fetch_assoc($view)):
            $fname = $details['student_fname'];
            $lname = $details['student_lname'];
            $array[$i] = array(
                0 => $fname[0] . ". " . $lname,
                1 => $details['course_acronym']
            );
            $i++;
        endwhile;
    
    }
    
    echo json_encode($array);
}

if(isset($_POST['get'])) {
    $newImage 	= $_FILES['upload']['name'];
        $id         = $_POST['id'];
        $finalImage = "image/admin/" . $newImage;

        $query      = "SELECT * FROM adminuser WHERE user_id = $id";
        $view       = mysqli_query($connect, $query);
        $details    = mysqli_fetch_assoc($view);
        
        $image      = $details['user_image'];
        unlink($image);

        $newQuery   = "UPDATE adminuser SET user_image = '$finalImage' WHERE user_id = $id";
        $newView    = mysqli_query($connect, $newQuery);

        move_uploaded_file($_FILES['upload']['tmp_name'], $finalImage);

        echo $finalImage;
}

if(isset($_POST['search'])) {
    $value = $_POST['value'];
    $category = $_POST['category'];
    $val0 = $val1 = $val2 = $val3 = "";
    $search0 = $search1 = $search2 = $search3 = "";
    if($value) {
        $search0 = " AND (enrollment_students.student_fname LIKE '%$value%'
                         OR enrollment_students.student_mname LIKE '%$value%'
                         OR enrollment_students.student_lname LIKE '%$value%'
                         OR registration_executive.registration_sem LIKE '%$value%'
                         OR enrollment_students.student_address LIKE '%$value%'
                         OR enrollment_students.student_email LIKE '%$value%'
                         OR registration_executive.registration_ticket_number LIKE '%$value%')";

        $search1 = " AND (enrollment_students.student_fname LIKE '%$value%'
                         OR enrollment_students.student_mname LIKE '%$value%'
                         OR enrollment_students.student_lname LIKE '%$value%'
                         OR registration_regular_4yr.registration_sem LIKE '%$value%'
                         OR enrollment_students.student_address LIKE '%$value%'
                         OR enrollment_students.student_email LIKE '%$value%'
                         OR registration_regular_4yr.registration_ticket_number LIKE '%$value%')";
            
        $search2 = " AND (enrollment_students.student_fname LIKE '%$value%'
                         OR enrollment_students.student_mname LIKE '%$value%'
                         OR enrollment_students.student_lname LIKE '%$value%'
                         OR registration_regular_2yr.registration_sem LIKE '%$value%'
                         OR enrollment_students.student_address LIKE '%$value%'
                         OR enrollment_students.student_email LIKE '%$value%'
                         OR registration_regular_2yr.registration_ticket_number LIKE '%$value%')";

        $search3 = " AND (enrollment_students.student_fname LIKE '%$value%'
                         OR enrollment_students.student_mname LIKE '%$value%'
                         OR enrollment_students.student_lname LIKE '%$value%'
                         OR registration_senior.registration_sem LIKE '%$value%'
                         OR enrollment_students.student_address LIKE '%$value%'
                         OR enrollment_students.student_email LIKE '%$value%'
                         OR registration_senior.registration_ticket_number LIKE '%$value%')";
    }

    switch ($category) {
        case 0:
            $val0 = $val1 = $val2 = $val3 = "";
            
            break;
        case 1:
            $val0 = " AND registration_executive.registration_status = 'PENDING'";
            $val1 = " AND registration_regular_4yr.registration_status = 'PENDING'";
            // $val2 = " AND registration_regular_2yr.registration_status = 'PENDING'";
            // $val3 = " AND registration_senior.registration_status = 'PENDING'";

            
            break;
        case 2:
            $val0 = " AND registration_executive.registration_status = 'ONGOING'";
            $val1 = " AND registration_regular_4yr.registration_status = 'ONGOING'";
            // $val2 = " AND registration_regular_2yr.registration_status = 'ONGOING'";
            // $val3 = " AND registration_senior.registration_status = 'ONGOING'";
                  
            break;
        case 3:
            $val0 = " AND registration_executive.registration_status = 'ENLISTED'";
            $val1 = " AND registration_regular_4yr.registration_status = 'ENLISTED'";
            // $val2 = " AND registration_regular_2yr.registration_status = 'ENROLLED'";
            // $val3 = " AND registration_senior.registration_status = 'ENROLLED'";
            
            break;
        default:
    }

    $query =   "SELECT * FROM registration_executive, enrollment_students, course 
        WHERE   registration_executive.registration_id  = enrollment_students.enrollment_exec 
        AND     registration_executive.registration_course_id   = course.course_id
        $val0 
        $search0
            UNION
        SELECT * FROM registration_regular_4yr, enrollment_students, course 
        WHERE   registration_regular_4yr.registration_id  = enrollment_students.enrollment_reg4yr
        AND     registration_regular_4yr.registration_course_id   = course.course_id
        $val1 
        $search1
        ORDER BY registration_ticket_number ASC";
        /*     UNION
        SELECT * FROM registration_regular_2yr, enrollment_students, course 
        WHERE   registration_regular_2yr.registration_id  = enrollment_students.enrollment_reg2yr 
        AND     registration_regular_2yr.registration_course_id   = course.course_id
        val2 
        search2
            UNION
        SELECT * FROM registration_senior, enrollment_students, course 
        WHERE   registration_senior.registration_id  = enrollment_students.enrollment_senior 
        AND     registration_senior.registration_course_id   = course.course_id
        val3 
        search3 
        O*/

    
    $view = mysqli_query($connect, $query);
    $array = array();
    $i = 0;

    while($details = mysqli_fetch_assoc($view)):
        $name = $details['student_fname'] . " " . 
                $details['student_mname'][0] . ". " . 
                $details['student_lname'];
        $array[$i] = array(
            0 => $details['registration_ticket_number'],
            1 => $name,
            2 => $details['course_acronym'],
            3 => $details['registration_year'],
            4 => $details['registration_sem'],
            5 => $details['registration_student_type'],
            6 => $details['registration_status'],
            7 => $details['registration_date_created'],
            8 => $details['student_id'],
            9 => $details['registration_id'],
           10 => $details['course_type'],
           11 => $details['reg_schedule_id']
        );
        $i++;
    endwhile;
    sleep(1);
    echo json_encode($array);

    
    
}

function credentialType($type) {
    $return = "";
    switch ($type) {
        case 1:
            $return = "enrollment_exec";
        case 2:
            $return = "enrollment_reg4yr";
        case 3:
            $return = "enrollment_reg2yr";
        case 4:
            $return = "enrollment_senior";
    }

    return $return;
}

if(isset($_POST['viewCredentials'])) {
    $regid = $_POST['regid'];
    $studid = $_POST['studentId'];
    $studType = $_POST['studentType'];
    $type = credentialType($studType);

        $fname              = $mname            = $lname            = $email            = $religion         = 
		$status             = $birthdate        = $birthplace       = $address          = $contact          = 
		$provinceAdd        = $provinceCon      = $guardianFname    = $guardianAdd      = $guardianContact  = 
		$nationality        = $username         = $password         = $motherFname      = $motherAddress    =
		$motherContact      = $fatherFname      = $fatherAddress    = $fatherContact    = $elemName         = 
		$elemAdd            = $elemFin          = $highName         = $highAdd          = $highFin          = 
		$seniorName         = $seniorAdd        = $seniorFin        = $collName         = $collAdd          = 
		$collFin            = $query            = $query2           = $gender           = $guardianMname    = 
		$guardianLname      = $fatherMname      = $fatherLname      = $motherMname      = $motherLname      = 
		$collCourse			= $name             = "";

    $que    			        = "SELECT * FROM enrollment_credential, enrollment_students
                                WHERE enrollment_students.student_id = enrollment_credential.student_id
                                AND enrollment_students.student_id = $studid";
	$fetchCredentials   	    = mysqli_query($connect, $que);
    $arrayStudentInformation    = array();
    $i = 0;
    while($fetchCredential = mysqli_fetch_assoc($fetchCredentials)):
        $fname              = $fetchCredential['student_fname'];  
        $mname              = $fetchCredential['student_mname']; 
        $lname              = $fetchCredential['student_lname'];
        $email              = $fetchCredential['student_email'];
        $username           = $fetchCredential['username'];
        $contact            = $fetchCredential['student_contact'];
        $address            = $fetchCredential['student_address'];
        $gender             = $fetchCredential['student_gender'];
		$status 			= $fetchCredential['stats'];
		$religion      		= $fetchCredential['religion'];
		$nationality       	= $fetchCredential['nationality'];
		$birthdate         	= $fetchCredential['birthdate'];
		$birthplace        	= $fetchCredential['birthplace'];
		$provinceAdd       	= $fetchCredential['provinceAdd'];
		$provinceCon        = $fetchCredential['provinceCon'];
		$motherFname       	= $fetchCredential['mother_fname'];
		$motherMname       	= $fetchCredential['mother_mname'];
		$motherLname       	= $fetchCredential['mother_lname'];
		$motherAddress     	= $fetchCredential['mother_address'];
		$motherContact      = $fetchCredential['mother_contact'];
		$fatherFname       	= $fetchCredential['father_fname'];
		$fatherMname       	= $fetchCredential['father_mname'];
		$fatherLname       	= $fetchCredential['father_lname'];
		$fatherAddress      = $fetchCredential['father_address'];
		$fatherContact     	= $fetchCredential['father_contact'];
		$guardianFname     	= $fetchCredential['guardianFname'];
		$guardianMname     	= $fetchCredential['guardianMname'];
		$guardianLname      = $fetchCredential['guardianLname'];
		$guardianAdd       	= $fetchCredential['guardianAdd'];
		$guardianContact   	= $fetchCredential['guardianContact'];
		$elemName 			= $fetchCredential['elemName'];
		$elemAdd 			= $fetchCredential['elemAdd'];
		$elemFin 			= $fetchCredential['elemFin'];
		$highName 			= $fetchCredential['highName'];
		$highAdd 			= $fetchCredential['highAdd'];
		$highFin 			= $fetchCredential['highFin'];
		$seniorName 		= $fetchCredential['seniorName'];
		$seniorAdd 			= $fetchCredential['seniorAdd'];
		$seniorFin 			= $fetchCredential['seniorFin'];
		$collName 			= $fetchCredential['collName'];
		$collAdd 			= $fetchCredential['collAdd'];
		$collCourse 		= $fetchCredential['collCourse'];
		$collFin 			= $fetchCredential['collFin'];
        
        $arrayStudentInformation[$i] = array(
             0 => $fname,
             1 => $mname,
             2 => $lname,
             3 => $gender,
             4 => $status,
             5 => $religion,
             6 => $nationality,
             7 => $birthdate,
             8 => $birthplace,
             9 => $email,
            10 => $username,
            11 => $address,
            12 => $contact,
            13 => $provinceAdd,
            14 => $provinceCon,
            15 => $motherFname,
            16 => $motherMname,
            17 => $motherLname,
            18 => $motherAddress,
            19 => $motherContact,
            20 => $fatherFname,
            21 => $fatherMname,
            22 => $fatherLname,
            23 => $fatherAddress,
            24 => $fatherContact,
            25 => $guardianFname,
            26 => $guardianMname,
            27 => $guardianLname,
            28 => $guardianAdd,
            29 => $guardianContact,
            30 => $elemName,
            31 => $elemAdd,
            32 => $elemFin,
            33 => $highName,
            34 => $highAdd,
            35 => $highFin,
            36 => $seniorName,
            37 => $seniorAdd,
            38 => $seniorFin,
            39 => $collName,
            40 => $collAdd,
            41 => $collCourse,
            42 => $collFin
        );
        $i++;
	endwhile;

    echo json_encode($arrayStudentInformation);
}




if(isset($_POST['setSubjects'])) {
    $value = $_POST['type'];
    $id = $_POST['id'];
    // $sched = $_POST['sched'];

    if($value == 1) {
        $query = "SELECT * FROM subjects_executive, subjects WHERE subjects_executive.exec_subject_id = 
        subjects.subject_id AND subjects_executive.exec_reg_id = $id ORDER BY subjects.subject_desc ASC";
        $view = mysqli_query($connect, $query);
        $arr = array();
        $i = 0;
        while($details = mysqli_fetch_assoc($view)):
            $subject    = $details['subject_desc'];
            $subjectCode = $details['subject_code'];
            $subjectUnit = $details['subject_unit'];
            $subject_id = $details['exec_subject_id'];
            $sched = $details['sched_daily'];
            $start = $details['class_start'];
            $end = $details['class_end'];

            $arr[$i] = array(
                0 => $subjectCode,
                1 => $subject,
                2 => $subjectUnit,
                3 => $subject_id,
                4 => $sched,
                5 => $start,
                6 => $end
            );

            $i++;
        endwhile;


    } else if($value == 2) {
        $query = "SELECT * FROM subjects_reg4yr, subjects WHERE subjects_reg4yr.reg4yr_subject_id = 
        subjects.subject_id AND subjects_reg4yr.reg4yr_reg_id = $id ORDER BY subjects.subject_desc ASC";
        $view = mysqli_query($connect, $query);
        $arr = array();
        $i = 0;
         while($details = mysqli_fetch_assoc($view)):
            $subject    = $details['subject_desc'];
            $subjectCode = $details['subject_code'];
            $subjectUnit = $details['subject_unit'];
            $subject_id = $details['reg4yr_subject_id'];
            $sched = $details['sched_daily'];
            $start = $details['class_start'];
            $end = $details['class_end'];

            $arr[$i] = array(
                0 => $subjectCode,
                1 => $subject,
                2 => $subjectUnit,
                3 => $subject_id,
                4 => $sched,
                5 => $start,
                6 => $end
            );
            $i++;
        endwhile;

    } else if($value == 3) {
        $query = "SELECT * FROM subjects_reg2yr, subjects WHERE subjects_reg2yr.reg2yr_subject_id = 
        subjects.subject_id AND subjects_reg2yr.reg2yr_reg_id = $id ORDER BY subjects.subject_desc ASC";
        $view = mysqli_query($connect, $query);
        $arr = array();
        $i = 0;
        while($details = mysqli_fetch_assoc($view)):
            $subject    = $details['subject_desc'];
            $subjectCode = $details['subject_code'];
            $subjectUnit = $details['subject_unit'];
            $subject_id = $details['reg2yr_subject_id'];

            $arr[$i] = array(
                0 => $subjectCode,
                1 => $subject,
                2 => $subjectUnit,
                3 => $subject_id
            );
            $i++;
        endwhile;

    } else if($value == 4) {
        $query      = "SELECT * FROM subjects_senior, subjects 
                        WHERE subjects_senior.senior_subject_id = subjects.subject_id 
                        AND subjects_senior.senior_reg_id = $id ORDER BY subjects.subject_desc ASC";
        $view       = mysqli_query($connect, $query);
        $arr = array();
        $i = 0;
        while($details = mysqli_fetch_assoc($view)):
            $subject    = $details['subject_desc'];
            $subjectCode = $details['subject_code'];
            $subjectUnit = $details['subject_unit'];
            $subject_id = $details['senior_subject_id'];

            $arr[$i] = array(
                0 => $subjectCode,
                1 => $subject,
                2 => $subjectUnit,
                3 => $subject_id
            );
            $i++;
        endwhile;

    }

    echo json_encode($arr);
}

if(isset($_POST['setImages'])) {
    $arrayEl = array();
    $reg = $_POST['register'];
    $type = $_POST['types'];
    $types = "";
    switch($type) {
            case 1: 
                $types = "registration_executive";
                break;
            case 2: 
                $types = "registration_regular_4yr";
                break;
            case 3: 
                $types = "registration_regular_2yr";
                break;
            case 4: 
                $types = "registration_senior";
        }
        $que = "SELECT * FROM $types WHERE registration_id = $reg";
        $view = mysqli_query($connect, $que);
        $details = mysqli_fetch_assoc($view);
        $arr1 = $details['registration_137'];
        $arr2 = $details['registration_138'];
        $arr3 = $details['registration_psa'];
        $arr4 = $details['registration_coe'];

        $arrayEl = array(
            0 => $arr1,
            1 => $arr2,
            2 => $arr3,
            3 => $arr4
        );

        echo json_encode($arrayEl);
}


if(isset($_POST['deleteSubjects'])) {
    $regId      = $_POST['regId'];
    $subjectId  = $_POST['subject'];
    $type       = $_POST['category'];
    $category = $reg = $subject = "";
    switch($type) {
        case 1:
            $category   = "subjects_executive";
            $reg        = "exec_reg_id";
            $subject    = "exec_subject_id";
            break;
        case 2:
            $category   = "subjects_reg4yr";
            $reg        = "reg4yr_reg_id";
            $subject    = "reg4yr_subject_id";
            break;
        case 3:
            $category   = "subjects_reg2yr";
            $reg        = "reg2yr_reg_id";
            $subject    = "reg2yr_subject_id";
            break;
        case 4:
            $category   = "subjects_senior";
            $reg        = "senior_reg_id";
            $subject    = "senior_subject_id";
            break;
    }

    $query = "DELETE FROM $category WHERE $reg = $regId AND $subject = $subjectId";
    mysqli_query($connect, $query);
    sleep(2);
    echo "1";
}

if(isset($_POST['deleteMultipleSubjects'])) {
    $array = $_POST['arrayElements'];
    $arr = json_decode($array, true);
    $category = $reg = $subject = "";
    $type = $arr[0]['category'];
    
    switch($type) {
        case 1:
            $category   = "subjects_executive";
            $reg        = "exec_reg_id";
            $subject    = "exec_subject_id";
            break;
        case 2:
            $category = "subjects_reg4yr";
            $reg        = "reg4yr_reg_id";
            $subject    = "reg4yr_subject_id";
            break;
        case 3:
            $category = "subjects_reg2yr";
            $reg        = "reg2yr_reg_id";
            $subject    = "reg2yr_subject_id";
            break;
        case 4:
            $category = "subjects_senior";
            $reg        = "senior_reg_id";
            $subject    = "senior_subject_id";
            break;
    }
    
    for($i = 0; $i < count($arr); $i++) {
        $arr1 = $arr[$i]['id'];  
        $arr2 = $arr[$i]['regId'];  

        $query = "DELETE FROM $category WHERE $reg = $arr2 AND $subject = $arr1";
        mysqli_query($connect, $query);
    }
    
    sleep(2);
    echo "1";
}

if(isset($_POST['update'])) {
        $student_Id         = $_POST['id'];
        $fname              = ucfirst(clean($_POST['fname']));
        $mname              = ucfirst(clean($_POST['mname']));
        $lname              = ucfirst(clean($_POST['lname']));
        $email              = clean($_POST['email']);
        $religion           = ucfirst(clean($_POST['religion']));
        $gender             = ucfirst(clean($_POST['gender']));
        $nationality        = ucfirst(clean($_POST['nationality']));
        $status             = clean($_POST['status']);
        $birthdate          = clean($_POST['birthdate']);
        $birthplace         = ucfirst(clean($_POST['birthplace']));
        $username           = clean($_POST['username']);
        $password           = clean(md5($_POST['password']));
        $address            = ucfirst(clean($_POST['address']));
        $contact            = clean($_POST['contact']);
        $provinceAdd        = ucfirst(clean($_POST['provinceAdd']));
        $provinceCon        = clean($_POST['provinceCon']);
        $guardianFname      = ucfirst(clean($_POST['guardianFname']));
        $guardianMname      = ucfirst(clean($_POST['guardianMname']));
        $guardianLname      = ucfirst(clean($_POST['guardianLname']));
        $guardianAdd        = ucfirst(clean($_POST['guardianAdd']));
        $guardianContact    = clean($_POST['guardianContact']);
        $motherFname        = ucfirst(clean($_POST['motherFname']));
        $motherMname        = ucfirst(clean($_POST['motherMname']));
        $motherLname        = ucfirst(clean($_POST['motherLname']));
        $motherAddress      = ucfirst(clean($_POST['motherAddress']));
        $motherContact      = clean($_POST['motherContact']);
        $fatherFname        = ucfirst(clean($_POST['fatherFname']));
        $fatherMname        = ucfirst(clean($_POST['fatherMname']));
        $fatherLname        = ucfirst(clean($_POST['fatherLname']));
        $fatherAddress      = ucfirst(clean($_POST['fatherAddress']));
        $fatherContact      = clean($_POST['fatherContact']);
        $elemName           = ucfirst(clean($_POST['elemName']));
        $elemAdd            = ucfirst(clean($_POST['elemAdd']));
        $elemFin            = clean($_POST['elemFin']);
        $highName           = ucfirst(clean($_POST['highName']));
        $highAdd            = ucfirst(clean($_POST['highAdd']));
        $highFin            = clean($_POST['highFin']);
        $seniorName         = ucfirst(clean($_POST['seniorName']));
        $seniorAdd          = ucfirst(clean($_POST['seniorAdd']));
        $seniorFin          = clean($_POST['seniorFin']);
        $collName           = ucfirst(clean($_POST['collName']));
        $collAdd            = ucfirst(clean($_POST['collAdd']));
        $collCourse         = ucfirst(clean($_POST['collCourse']));
        $collFin            = clean($_POST['collFin']);

        // >>>>>>>student table
        
        $query  =   "UPDATE enrollment_students SET student_fname = '$fname', student_mname = '$mname', student_lname = '$lname',
                        student_address = '$address', student_gender = '$gender', student_contact = '$contact', student_email = '$email' 
                        WHERE student_id = '$student_Id';";
        
        $view           = mysqli_query($connect, $query);

        // >>>>>>>>>credential table

        $query2 = "UPDATE enrollment_credential SET stats  = '$status', religion = '$religion',
                    nationality = '$nationality', birthdate = '$birthdate', birthplace = '$birthplace', provinceAdd = '$provinceAdd',
                    provinceCon = '$provinceCon', mother_fname = '$motherFname', mother_mname = '$motherMname', mother_lname = '$motherLname',
                    mother_address = '$motherAddress', mother_contact = '$motherContact',
                    father_fname = '$fatherFname', father_mname = '$fatherMname', father_lname = '$fatherLname', father_address = '$fatherAddress', father_contact = '$fatherContact',   
                    guardianFname = '$guardianFname', guardianMname = '$guardianMname', guardianLname = '$guardianLname', guardianAdd = '$guardianAdd', guardianContact = '$guardianContact',
                    elemName = '$elemName', elemAdd = '$elemAdd', elemFin = '$elemFin',
                    highName = '$highName', highAdd = '$highAdd', highFin = '$highFin',
                    seniorName = '$seniorName', seniorAdd = '$seniorAdd', seniorFin = '$seniorFin',
                    collName = '$collName', collAdd = '$collAdd', collCourse = '$collCourse', collFin = '$collFin' WHERE student_id = '$student_Id';";

        

        $searching = mysqli_query($connect, $query2);
        sleep(2);
        echo "1";
        exit();
}

if(isset($_POST['subjectsViewing'])) {
    $subjectExists = $_POST['exists'];
    $sched = $_POST['sched'];
    $arrayExist = explode(',', $subjectExists);
    $query = "SELECT * FROM sched_subjects, subjects WHERE sched_subjects.sched_subject_id = subjects.subject_id AND 
                schedule_id = $sched ORDER BY subject_desc";
    $view = mysqli_query($connect, $query);
    $arrayDatas = array();
    $i = 0;
    while($details = mysqli_fetch_assoc($view)):
        $subject_code = $details['subject_code'];
        $subject_description = $details['subject_desc'];
        $subject_unit = $details['subject_unit'];
        $subject_id = $details['subject_id'];
        if(in_array($subject_id, $arrayExist)) {
            continue;
        } else {
            $arrayDatas[$i] = array(
                0 => $subject_code,
                1 => $subject_description,
                2 => $subject_unit,
                3 => $subject_id
            );
        }
        $i++;
    endwhile; 

    echo json_encode($arrayDatas);
}

function search($category, $reg, $nextParam, $connect) {
    $categorySubject = $category;
    $subject_ids = $reg;
    $arrayDatas = array();
    $queries = "SELECT $nextParam[0], $nextParam[1] FROM $categorySubject WHERE registration_id = $subject_ids";
    $viewing = mysqli_query($connect, $queries);
    $details = mysqli_fetch_assoc($viewing);
        $arr1 = $details['registration_sem'];
        $arr2 = $details['registration_student_id'];
        $arrayDatas = array($arr1, $arr2);
    return $arrayDatas;
}

if(isset($_POST['add'])) {
    $reg = $_POST['reg'];
    $type = $_POST['type'];
    $subjectId = explode(",", $_POST['subjectId']);
    $regType = "";
    $query = $view = $category = $types = "";
    
    switch($type) {
        case 1:
            $category   = "subjects_executive";
            $regType    = "registration_executive";
            $types      = "exec";
            break;
        case 2: 
            $category   = "subjects_reg4yr";
            $regType    = "registration_regular_4yr";
            $types      = "reg4yr";
            break;
        case 3:
            $category   = "subjects_reg2yr"; 
            $regType    = "registration_regular_2yr";
            $types      = "reg2yr";
            break;
        case 4:
            $category   = "subjects_senior";
            $regType    = "registration_senior";
            $types      = "senior";
    }

    $array = array('registration_sem', 'registration_student_id');
    $datas = search($regType, $reg, $array, $connect);


    
    if(count($subjectId) > 1) {
        for($i = 0; $i < count($subjectId); $i++) {
            $query10 = "INSERT INTO $category(
            " . $types . "_reg_id, 
            " . $types . "_subject_id,
            " . $types . "_semester) VALUES('$reg', '$subjectId[$i]', '$datas[0]')";
            mysqli_query($connect, $query10);
        }
        echo "multi";
    } else if(count($subjectId) == 1) {
            $query10 = "INSERT INTO $category(
            " . $types . "_reg_id, 
            " . $types . "_subject_id, 
            " . $types . "_semester) VALUES('$reg', '$subjectId[0]', '$datas[0]')";
            mysqli_query($connect, $query10);
        echo "one";
    }
    
}

if(isset($_POST['resetRegViewing'])) {
    $reg = $_POST['reg'];
    $type = $_POST['type'];
    $subjectArray = array();
    
    $subjects = resetSubjects($reg, $type, $connect);
    for($i = 0; $i < count($subjects); $i++) {
        $subjectArray[$i] = array(
            0 => $subjects[$i]
        );
    }

    echo json_encode($subjectArray);

}


    function resetSubjects($reg, $types, $connect) {
        $regId = $reg;
        $type = $types;
        $category = "";
        switch($type) {
            case 1: 
                $type = "subjects_executive";
                $category = "exec";
                break;
            case 2: 
                $type = "subjects_reg4yr";
                $category = "reg4yr";
                break;
            case 3:
                $type = "subjects_reg2yr";
                $category = "reg2yr";
                break;
            case 4:
                $type = "subjects_senior";
                $category = "senior";
        }
        $query = "SELECT * FROM " . $type . " WHERE " . $category . "_reg_id = $regId";
        $view = mysqli_query($connect, $query);
        $array = array();
        $i = 0;
        while($details = mysqli_fetch_array($view)):
            $id = $details[2];
            $array[$i] = $id;
            $i++;
        endwhile;   
        $newArray = array();
        $check = "SELECT * FROM subjects";
        $checkQuery     = mysqli_query($connect, $check);
        $j = 0;
        while($details  = mysqli_fetch_array($checkQuery)):
            $id = $details[0];
            if(in_array($id, $array)) {
                $newArray[$j] = $id;
            } else {
                continue;
            }
            $j++;
        endwhile;

        return $newArray;
    }


    include 'adminLoad_2.php';

?>