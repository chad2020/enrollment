<?php
    include 'connection.php';
    date_default_timezone_set("Asia/Manila");
    function clean($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if(isset($_POST['reg'])) {
        $studentId  = $username = "";
        $studentId  = $_POST['studentId'];
        $username   = $_POST['username2'];

        $query      = "SELECT * FROM student_credential WHERE student_id = '$studentId' AND username = '$username';";
        $search     = mysqli_query($connect, $query);
        $row        = mysqli_num_rows($search);

        if($row > 0) {

            echo "1";

        } else {

            echo "2";

        }
    }

    if(isset($_POST['passwordValidate'])) {
        $pass = $user =  "";
        $user = $_POST['username1'];
        $pass = md5($_POST['password1']);

        $query = "SELECT * FROM students WHERE username = '$user' AND student_password = '$pass'";
        $view = mysqli_query($connect, $query);
        $row = mysqli_num_rows($view);

        if($row < 1) {
            echo "2";
            exit();
        } 
        
    }

    if(isset($_POST['registerFinal'])) {
        $fname              = $mname            = $lname            = $email            = $religion         = 
        $status             = $birthdate        = $birthplace       = $address          = $contact          = 
        $provinceAdd        = $provinceCon      = $guardianFname    = $guardianAdd      = $guardianContact  = 
        $nationality        = $username         = $password         = $motherFname      = $motherAddress    =
        $motherContact      = $fatherFname      = $fatherAddress    = $fatherContact    = $elemName         = 
        $elemAdd            = $elemFin          = $highName         = $highAdd          = $highFin          = 
        $seniorName         = $seniorAdd        = $seniorFin        = $collName         = $collAdd          = 
        $collFin            = $query            = $query2           = $gender           = $guardianMname    = 
        $guardianLname      = $fatherMname      = $fatherLname      = $motherMname      = $motherLname      = "";
        $today = date('F j, Y h:i a'); 
        $que                = $_POST['que'];
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
        if($que == "true") {
            $query  =   "UPDATE students SET student_fname = '$fname', student_mname = '$mname', student_lname = '$lname',
                        student_address = '$address', student_contact = '$contact', student_email = '$email', student_gender = '$gender',
                        student_password = '$password' 
                        WHERE student_id = '$student_Id';";
        } else if($que == "false"){
            $query  =   "UPDATE students SET student_fname = '$fname', student_mname = '$mname', student_lname = '$lname',
                        student_address = '$address', student_gender = '$gender', student_contact = '$contact', student_email = '$email' 
                        WHERE student_id = '$student_Id';";
        }
        $view           = mysqli_query($connect, $query);

        // >>>>>>>>>credential table

        $filterQuery    = "SELECT * FROM student_credential WHERE student_id = '$student_Id' AND username = '$username';";
        $filter         = mysqli_query($connect, $filterQuery);
        $filterCount    = mysqli_num_rows($filter);

        if($filterCount > 0) {
            $query2 = "UPDATE student_credential SET student_id = '$student_Id', stats  = '$status', religion = '$religion',
                        nationality = '$nationality', birthdate = '$birthdate', birthplace = '$birthplace', provinceAdd = '$provinceAdd',
                        provinceCon = '$provinceCon', mother_fname = '$motherFname', mother_mname = '$motherMname', mother_lname = '$motherLname',
                        mother_address = '$motherAddress', mother_contact = '$motherContact',
                        father_fname = '$fatherFname', father_mname = '$fatherMname', father_lname = '$fatherLname', father_address = '$fatherAddress', father_contact = '$fatherContact',   
                        guardianFname = '$guardianFname', guardianMname = '$guardianMname', guardianLname = '$guardianLname', guardianAdd = '$guardianAdd', guardianContact = '$guardianContact',
                        elemName = '$elemName', elemAdd = '$elemAdd', elemFin = '$elemFin',
                        highName = '$highName', highAdd = '$highAdd', highFin = '$highFin',
                        seniorName = '$seniorName', seniorAdd = '$seniorAdd', seniorFin = '$seniorFin',
                        collName = '$collName', collAdd = '$collAdd', collCourse = '$collCourse', collFin = '$collFin' WHERE student_id = '$student_Id';";

        } else {
            $query2 = "INSERT INTO student_credential(student_id,
                                            username,
                                            stats,
                                            religion,
                                            nationality,
                                            birthdate,
                                            birthplace,
                                            provinceAdd,
                                            provinceCon,
                                            mother_fname,
                                            mother_mname,
                                            mother_lname,
                                            mother_address,
                                            mother_contact,
                                            father_fname,
                                            father_mname,
                                            father_lname,
                                            father_address,
                                            father_contact,
                                            guardianFname,
                                            guardianMname,
                                            guardianLname,
                                            guardianAdd,
                                            guardianContact,
                                            elemName,
                                            elemAdd,
                                            elemFin,
                                            highName,
                                            highAdd,
                                            highFin,
                                            seniorName,
                                            seniorAdd,
                                            seniorFin,
                                            collName,
                                            collAdd,
                                            collCourse,
                                            collFin)
                                            VALUES('$student_Id', '$username',  '$status', '$religion', '$nationality', '$birthdate', '$birthplace', '$provinceAdd', '$provinceCon', 
                                                    '$motherFname', '$motherMname', '$motherLname','$motherAddress', '$motherContact', '$fatherFname', '$fatherMname', '$fatherLname', '$fatherAddress',
                                                    '$fatherContact',  '$guardianFname', '$guardianMname', '$guardianLname', '$guardianAdd', '$guardianContact', '$elemName',
                                                    '$elemAdd', '$elemFin', '$highName', '$highAdd', '$highFin', '$seniorName', '$seniorAdd',    
                                                    '$seniorFin', '$collName', '$collAdd', '$collCourse', '$collFin');";
        
        }
        $searching = mysqli_query($connect, $query2);
        sleep(2);
        echo "1";
        exit();

    }

  
        if(isset($_POST['set'])) {
            $value = $_POST['value'];
            $id = $_POST['id'];
            $arrayEl = array();

            if($value == "senior") {
                $query      = "SELECT * FROM subjects_senior, subjects WHERE subjects_senior.senior_subject_id = 
                subjects.subject_id AND subjects_senior.senior_reg_id = $id";
                $view       = mysqli_query($connect, $query);
                $arr = array();
                $i = 0;
                while($details = mysqli_fetch_assoc($view)):
                    $subject    = $details['subject_desc'];
                    $subjectCode = $details['subject_code'];
                    $subjectUnit = $details['subject_unit'];

                    $arr[$i] = array(
                        0 => $subjectCode,
                        1 => $subject,
                        2 => $subjectUnit,
                    );

                    $i++;
                endwhile;

            

            } else if($value == "exec") {
            
                $query = "SELECT * FROM  subjects, subjects_executive WHERE 
                    subjects_executive.exec_subject_id = subjects.subject_id
                    AND exec_reg_id = $id";
                $view = mysqli_query($connect, $query);
                $arr = array();
                $i = 0;
                while($details = mysqli_fetch_assoc($view)):
                    $subject        = $details['subject_desc'];
                    $subjectCode    = $details['subject_code'];
                    $subjectUnit    = $details['subject_unit'];
                    $start          = $details['class_start'];
                    $end            = $details['class_end'];
                    $daily          = $details['sched_daily'];

                    $arr[$i] = array(
                        0 => $subjectCode,
                        1 => $subject,
                        2 => $subjectUnit,
                        3 => $start,
                        4 => $end,
                        5 => $daily
                        // 4 => $arrayEl[$i]->end
                    );

                    $i++;
                endwhile;


            } else if($value == "reg2yr") {
                $query = "SELECT * FROM subjects_reg2yr, subjects WHERE subjects_reg2yr.reg2yr_subject_id = 
                subjects.subject_id AND subjects_reg2yr.reg2yr_reg_id = $id";
                $view = mysqli_query($connect, $query);
                $arr = array();
                $i = 0;
                while($details = mysqli_fetch_assoc($view)):
                    $subject    = $details['subject_desc'];
                    $subjectCode = $details['subject_code'];
                    $subjectUnit = $details['subject_unit'];

                    $arr[$i] = array(
                        0 => $subjectCode,
                        1 => $subject,
                        2 => $subjectUnit,
                        3 => 'PENDING'
                    );

                    $i++;
                endwhile;

            

            } else if($value == "reg4yr") {
                $query = "SELECT * FROM  subjects, subjects_reg4yr WHERE 
                    subjects_reg4yr.reg4yr_subject_id = subjects.subject_id
                    AND reg4yr_reg_id = $id";
                $view = mysqli_query($connect, $query);
                $arr = array();
                $i = 0;
                while($details = mysqli_fetch_assoc($view)):
                    $subject        = $details['subject_desc'];
                    $subjectCode    = $details['subject_code'];
                    $subjectUnit    = $details['subject_unit'];
                    $start          = $details['class_start'];
                    $end            = $details['class_end'];
                    $daily          = $details['sched_daily'];

                    $arr[$i] = array(
                        0 => $subjectCode,
                        1 => $subject,
                        2 => $subjectUnit,
                        3 => $start,
                        4 => $end,
                        5 => $daily
                        // 4 => $arrayEl[$i]->end
                    );

                    $i++;
                    endwhile;
        }

        echo json_encode($arr);
    }

    if(isset($_POST['get'])) {
        $newImage   = $_FILES['upload']['name'];
        $id         = $_POST['id'];
        $user       = $_POST['user'];
        $ext = explode('.', $newImage); 
        $dir = "image/students/" . $user;
        
        if(!is_dir($dir)) {
             mkdir($dir, 0777);
        }

        $randName = strval(uniqid("$user", false)) . "." . $ext[1];
        $finalImage = "image/students/". $user . "/" . $randName;

        $query      = "SELECT * FROM students WHERE student_id = $id";
        $view       = mysqli_query($connect, $query);
        $details    = mysqli_fetch_assoc($view);
        
        $image      = $details['student_image'];
        unlink($image);

        $newQuery   = "UPDATE students SET student_image = '$finalImage' WHERE student_id = $id";
        $newView    = mysqli_query($connect, $newQuery);

        move_uploaded_file($_FILES['upload']['tmp_name'], $finalImage);

        echo $finalImage;
    }

    if(isset($_POST['deleteRegistration'])) {
        $student_id = $_POST['studId'];
        $id = $_POST['id'];
        $value = $_POST['value'];
        $course = "";

        switch($value) {
            case "exec":
                $course = "registration_executive";
                break;
            case "reg4yr":
                $course = "registration_regular_4yr";
                break;
            case "reg2yr":
                $course = "registration_regular_2yr";
                break;
            case "senior":
                $course = "registration_senior";
                break;
        }
        $select = "SELECT * FROM $course WHERE registration_id = $id";
        $del = mysqli_query($connect, $select);
        $details = mysqli_fetch_assoc($del);
        $img1 = $details['registration_137']; 
        $img2 = $details['registration_138']; 
        $img3 = $details['registration_psa']; 
        $img4 = $details['registration_coe'];

        $imgEx1 = explode(',', $img1);
        $imgEx2 = explode(',', $img2);
        $imgEx3 = explode(',', $img3);
        
        unlink($imgEx1[0]);
        unlink($imgEx1[1]);
        unlink($imgEx2[0]);
        unlink($imgEx2[1]);
        unlink($imgEx3[0]);
        unlink($imgEx3[1]);

        if($value == "exec") {
            unlink($img4);
        }

        $query = "DELETE FROM $course WHERE registration_id = $id";
        $delete = mysqli_query($connect, $query);


        // $searchStudentInfo = "SELECT * FROM enrollment_students WHERE enrollment_student_id = $student_id";
		// 	$selectStudentInfo = mysqli_query($connect, $searchStudentInfo);
		// 	$arrayStudentId = array();
		// 	$arrayIndex = 0;
		// 	while($details = mysqli_fetch_assoc($selectStudentInfo)):
		// 		$arr = $details['student_id'];
		// 		array_push($arrayStudentId, $arr);
		// 		$arrayIndex++;
		// 	endwhile;
		// 	$studId = end($arrayStudentId);

        // $deleteStudent = "DELETE FROM enrollment_students WHERE student_id = $studId";
        // mysqli_query($connect, $deleteStudent);

        sleep(2);
        echo "1";
    }

    function typeRegistration($value) {
        $arr = array();
        $arr =   ($value == "exec")     ? array("registration_executive", "enrollment_exec") : 
                (($value == "reg4yr")   ? array("registration_regular_4yr", "enrollment_reg4yr") :   
                (($value == "reg2yr")   ? array("registration_regular_2yr", "enrollment_reg2yr") :   
                (($value == "senior")   ? array("registration_senior", "enrollment_senior") : 0)));

        return $arr;
    }

    if(isset($_POST['setTicketInfo'])) {
        $value = typeRegistration($_POST['value']);
        $reg = $_POST['id'];
        $arrayDatas = array();
        $query = "SELECT * FROM $value[0], enrollment_students WHERE $value[0].registration_id = enrollment_students.$value[1]
                    AND $value[0].registration_id = $reg";
        $view = mysqli_query($connect, $query);
        $details = mysqli_fetch_assoc($view);
        $fname          = $details['student_fname'];
        $mname          = $details['student_mname'];
        $lname          = $details['student_lname'];
        $name           = strtoupper($fname) . " " . 
                          strtoupper($mname[0]) . ". " . 
                          strtoupper($lname);
        $ticketNumber   = $details['registration_ticket_number'];
        $dateCreated    = $details['registration_date_created'];
        $status         = $details['registration_status'];

        $newDate = substr($dateCreated, 0, 13);
        $arrayDatas = array(
            0 => $ticketNumber,
            1 => $name,
            2 => $newDate,
            3 => $status
        );

        echo json_encode($arrayDatas);
    }

    if(isset($_POST['validateEnrollment'])) {
        $code = clean($_POST['code']);
        $date = date('Ymd');
        $bool = true;
        $arr = array();

        $query = "SELECT * FROM sched, enrollment_period WHERE sched.enrollment_period_id 
                = enrollment_period.period_id AND sched_code_id = '$code' ORDER BY schedule_id DESC LIMIT 1";
        $view = mysqli_query($connect, $query);
        $num = mysqli_num_rows($view);

        if($num > 0) {
            $details = mysqli_fetch_assoc($view);
            $period_end = $details['period_end'];
            $period_start = $details['period_start'];
            $sched_id = $details['schedule_id'];

            if(intval($date) <= intval($period_end) && intval($date) >= intval($period_start)) {
                $arr = array();
                $i = 0;
                $que = "SELECT * FROM sched_subjects, subjects WHERE sched_subjects.sched_subject_id
                        = subjects.subject_id AND sched_code_id = '$code' AND schedule_id =
                        $sched_id";
                $views = mysqli_query($connect, $que);
                while($detail = mysqli_fetch_assoc($views)):
                    $subject_id     = $detail['subject_id'];
                    $subjectCode    = $detail['subject_code'];
                    $subject        = $detail['subject_desc'];
                    $start        = $detail['sched_start'];
                    $end        = $detail['sched_end'];
                    $daily        = $detail['sched_daily'];

                    $arr[$i] = array(
                        0 => $subject_id,
                        1 => $subjectCode,
                        2 => $subject,
                        3 => $start,
                        4 => $end,
                        5 => $daily
                    );

                    $i++;
                endwhile;
            } 

        } 
        echo json_encode($arr);
    }

    if(isset($_POST['setImages'])) {
        $id = $_POST['ids'];
        $type = $_POST['type'];
        $arrayTable = array();
        $table = "";
        if($type == "1") {
            $table = 'registration_executive';
        } else if($type == "2") {
            $table = 'registration_regular_4yr';
        }


        $query = "SELECT * FROM $table WHERE registration_id = $id";
        $view = mysqli_query($connect, $query);
        $details = mysqli_fetch_assoc($view);
        $img1 = $details['registration_137'];
        $img2 = $details['registration_138'];
        $img3 = $details['registration_psa'];
        $img4 = $details['registration_coe'];

        $arrayTable = array(
            0 => $img1,
            1 => $img2,
            2 => $img3,
            3 => $img4
        );

        echo json_encode($arrayTable);
    }



    if(isset($_POST['uploadRequirements'])) {
        $coe = $coe_tmpname = $course = "";
        $reg = $_POST['registration'];
        $username = $_POST['username'];
        $course_type = $_POST['courseid'];
        $f137_front = $_FILES['f137_front']['name']; 
        $f137_back  = $_FILES['f137_back']['name']; 
        $f138_front = $_FILES['f138_front']['name']; 
        $f138_back  = $_FILES['f138_back']['name']; 
        $psa_front  = $_FILES['psa_front']['name']; 
        $psa_back   = $_FILES['psa_back']['name']; 

        $f137_front_tmp = $_FILES['f137_front']['tmp_name']; 
        $f137_back_tmp  = $_FILES['f137_back']['tmp_name']; 
        $f138_front_tmp = $_FILES['f138_front']['tmp_name']; 
        $f138_back_tmp  = $_FILES['f138_back']['tmp_name']; 
        $psa_front_tmp  = $_FILES['psa_front']['tmp_name']; 
        $psa_back_tmp   = $_FILES['psa_back']['tmp_name']; 


            $searchCourse = "SELECT * FROM course WHERE course_id = $course_type";
            $searchView = mysqli_query($connect, $searchCourse);
            $searchDetails = mysqli_fetch_assoc($searchView);
            $course_type = $searchDetails['course_type'];
            
    $imageArr = array();
    $extArr = array();
    $requirements = array();
    $tmp_names = array();
    $elemArr = array();

    if($course_type == "1") {
        $course = "registration_executive";
        $coe = $_FILES['coe']['name']; 
        $coe_tmp = $_FILES['coe']['tmp_name']; 
        $imageArr = array($f137_front, $f137_back, $f138_front, $f138_back, $psa_front, $psa_back, $coe);
        $tmp_names = array($f137_front_tmp,$f137_back_tmp,$f138_front_tmp,$f138_back_tmp,$psa_front_tmp,$psa_back_tmp,$coe_tmp);
        $regTable = "reg_exec";
    } else if($course_type == "2") {
        $course = "registration_regular_4yr";
        $imageArr = array($f137_front, $f137_back, $f138_front, $f138_back, $psa_front, $psa_back);
        $tmp_names = array($f137_front_tmp,$f137_back_tmp,$f138_front_tmp,$f138_back_tmp,$psa_front_tmp,$psa_back_tmp);
        $regTable = "reg_reg4yr";
    }
        
    $dirUser    = "image/students/$username";
    $dirRequire = "image/students/" . $username . "/" . "requirements";
    $dirf137    = "image/students/" . $username . "/" . "requirements/form137";
    $dirf138    = "image/students/" . $username . "/" . "requirements/form138";
    $dirPSA     = "image/students/" . $username . "/" . "requirements/psa";
    $dirCOE     = "image/students/" . $username . "/" . "requirements/coe";
    $requirements = array($dirf137, $dirf138, $dirPSA, $dirCOE);
    
    if(!is_dir($dirUser)) {
         mkdir($dirUser, 0777);
    }

    if(!is_dir($dirRequire)) {
         mkdir($dirRequire, 0777);
    }

    foreach($requirements as $value) {
        if(!is_dir($value)) {
             mkdir($value, 0777);
        }
    }

    for($j = 0; $j < count($imageArr); $j++) {
        $ext = explode('.', $imageArr[$j]); 
        $randName = strval(uniqid($username . "_", false)) . "." . $ext[1];

        if($j == 0 || $j == 1) {
            $finalImage = $dirf137 . "/" . $randName;
        } else if($j == 2 || $j == 3) {
            $finalImage = $dirf138 . "/" . $randName;
        } else if($j == 4 || $j == 5) {
            $finalImage = $dirPSA . "/" . $randName;
        } else if($j == 6) {
            $finalImage = $dirCOE . "/" . $randName;
        }

        $elemArr[] = $finalImage;
    }
    $el1 = $el2 = $el3 = "";

    $el1 = $elemArr[0] . "," . $elemArr[1];
    $el2 = $elemArr[2] . "," . $elemArr[3];
    $el3 = $elemArr[4] . "," . $elemArr[5];
    $el4 = $elemArr[6];

    $que = "UPDATE $course SET registration_137 = '$el1', 
                                registration_138 = '$el2', 
                                registration_psa = '$el3', 
                                registration_coe = '$el4' WHERE registration_id = $reg";
    $view = mysqli_query($connect, $que);

        for($r = 0; $r < count($imageArr); $r++) {
            move_uploaded_file($tmp_names[$r], $elemArr[$r]);
        }

        sleep(2);
        echo "success";
    }

?>