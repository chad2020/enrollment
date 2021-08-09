<?php

include 'connection.php';
date_default_timezone_set("Asia/Manila");
function clean($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

function getScheduleId($code, $connect) {
	$code = clean($_POST['code']);
        $query = "SELECT * FROM sched, enrollment_period WHERE sched.enrollment_period_id 
                = enrollment_period.period_id AND sched_code_id = '$code' ORDER BY schedule_id DESC LIMIT 1";
        $view = mysqli_query($connect, $query);
		$details = mysqli_fetch_assoc($view);
		$sched_id = $details['schedule_id'];
		return $sched_id;

} 

function schedules($code, $connect, $info) {
	$arrayElements = array();
	$que = "SELECT * FROM sched_subjects, sched WHERE sched_subjects.schedule_id = sched.schedule_id 
		AND sched_subjects.sched_code_id = '$code' ORDER BY sched_id DESC LIMIT 1";
	$view = mysqli_query($connect, $que);
	$details = mysqli_fetch_assoc($view);
	$sched_id = $details['schedule_id'];
	$j = 0;
	foreach($info as $elem) {
		$select = "SELECT * FROM sched_subjects WHERE schedule_id = $sched_id 
			AND sched_subject_id = $elem";
		$selectView = mysqli_query($connect, $select);
		
		$fetch = mysqli_fetch_assoc($selectView);
			$start 	= $fetch['sched_start'];
			$end 	= $fetch['sched_end'];
			$daily 	= $fetch['sched_daily'];

			$arrayElements[$j] = array(
				'start' => $start, 
				'end' 	=>$end,
				'daily' =>$daily
			);
		$j++;
	}
	return $arrayElements;
}
		// $studId = "";
		$today = date('F j, Y h:i a'); 
		$fname              = $mname            = $lname            = $email            = $religion         = 
        $status             = $birthdate        = $birthplace       = $address          = $contact          = 
        $provinceAdd        = $provinceCon      = $guardianFname    = $guardianAdd      = $guardianContact  = 
        $nationality        = $username         = $password         = $motherFname      = $motherAddress    =
        $motherContact      = $fatherFname      = $fatherAddress    = $fatherContact    = $elemName         = 
        $elemAdd            = $elemFin          = $highName         = $highAdd          = $highFin          = 
        $seniorName         = $seniorAdd        = $seniorFin        = $collName         = $collAdd          = 
        $collFin            = $query            = $query2           = $gender           = $guardianMname    = 
        $guardianLname      = $fatherMname      = $fatherLname      = $motherMname      = $motherLname      =  
        $f137_front			= $f137_back		= $f138_front		= $f138_back		= $psa_front 		=		
        $psa_back			= $coe 				= $coe_tmpname 		= $course_type 		= "";
		$student_Id         = $_POST['student_id'];

	
     
		// registration queries
		$subject_table = $subject_reg_id = $subject_id = $subject_stud_id = $subject_semester = 
		$countDateTrim = $ticketNumber = $queryType = $testQuery = "";

	$code			= $_POST['code'];
	$get = getScheduleId($code, $connect);
	// $enrollment_id = $_POST['enrollment_id'];
	$infos 		= $_POST['info'];
	$info 		= explode(',', $infos);
	$type 		= $_POST['type'];
	$yearLevels 	= $_POST['yearLevels'];
	$semester 	= $_POST['semester'];
	$id 		= $_POST['student_id'];
	$courseid 	= $_POST['courseid'];
	$username 	= $_POST['username'];
	$dateNow = date('mdY');
	$ticketFilter = "SELECT * FROM counter WHERE count_id = (SELECT MAX(count_id) FROM counter)";
	$viewFilter = mysqli_query($connect, $ticketFilter);
	$countData = mysqli_num_rows($viewFilter);

	if($countData > 0) {
		$viewDetail = mysqli_fetch_assoc($viewFilter);
		$countDate = $viewDetail['count_date_now'];
		
		if(intval($dateNow) > intval($countDate)) {
			$query = "TRUNCATE counter";
			$queView = mysqli_query($connect, $query);
			$ticketNumber = $dateNow . "-" . "0001";
		} else {
			$ticketFilter2 = "SELECT * FROM counter";
			$viewFilter2 = mysqli_query($connect, $ticketFilter2);
			$count = mysqli_num_rows($viewFilter2);		

			$number = str_pad(($count + 1), 4, 0, STR_PAD_LEFT);
			$ticketNumber = $dateNow . "-" . $number;
		
		}
	} else {
		$ticketNumber = $dateNow . "-" . "0001";
	}

            $searchCourse = "SELECT * FROM course WHERE course_id = $courseid";
            $searchView = mysqli_query($connect, $searchCourse);
            $searchDetails = mysqli_fetch_assoc($searchView);
            $course_type = $searchDetails['course_type'];
            
    	$imageArr = array();
	$extArr = array();
	$requirements = array();
	$tmp_names = array();
	$elemArr = array();

	    // $f137_front = $_FILES['f137_front']['name']; 
	    // $f137_back	= $_FILES['f137_back']['name']; 
	    // $f138_front = $_FILES['f138_front']['name']; 
	    // $f138_back	= $_FILES['f138_back']['name']; 
	    // $psa_front	= $_FILES['psa_front']['name']; 
	    // $psa_back	= $_FILES['psa_back']['name']; 

	    // $f137_front_tmp 	= $_FILES['f137_front']['tmp_name']; 
	    // $f137_back_tmp	= $_FILES['f137_back']['tmp_name']; 
	    // $f138_front_tmp 	= $_FILES['f138_front']['tmp_name']; 
	    // $f138_back_tmp	= $_FILES['f138_back']['tmp_name']; 
	    // $psa_front_tmp	= $_FILES['psa_front']['tmp_name']; 
	    // $psa_back_tmp	= $_FILES['psa_back']['tmp_name']; 

	// if($course_type == "1") {
	// 	$coe = $_FILES['coe']['name']; 
	// 	$coe_tmp = $_FILES['coe']['tmp_name']; 
	// 	$imageArr = array($f137_front, $f137_back, $f138_front, $f138_back, $psa_front, $psa_back, $coe);
	// 	$tmp_names = array($f137_front_tmp,$f137_back_tmp,$f138_front_tmp,$f138_back_tmp,$psa_front_tmp,$psa_back_tmp,$coe_tmp);
	// 	$regTable = "reg_exec";
	// } else if($course_type == "2") {
	// 	$imageArr = array($f137_front, $f137_back, $f138_front, $f138_back, $psa_front, $psa_back);
	// 	$tmp_names = array($f137_front_tmp,$f137_back_tmp,$f138_front_tmp,$f138_back_tmp,$psa_front_tmp,$psa_back_tmp);
	// 	$regTable = "reg_reg4yr";
	// }
	    
	    
	// $dirRequire = "image/students/" . $username . "/" . "requirements";
	// $dirf137 = "image/students/" . $username . "/" . "requirements/form137";
	// $dirf138 = "image/students/" . $username . "/" . "requirements/form138";
	// $dirPSA = "image/students/" . $username . "/" . "requirements/psa";
	// $dirCOE = "image/students/" . $username . "/" . "requirements/coe";
	// $requirements = array($dirf137, $dirf138, $dirPSA, $dirCOE);
	

	// if(!is_dir($dirRequire)) {
	//      mkdir($dirRequire, 0777);
	// }

	// foreach($requirements as $value) {
	// 	if(!is_dir($value)) {
	//          mkdir($value, 0777);
	//     }
	// }

	// for($j = 0; $j < count($imageArr); $j++) {
	// 	$ext = explode('.', $imageArr[$j]); 
	// 	$randName = strval(uniqid($username . "_", false)) . "." . $ext[1];

	// 	if($j == 0 || $j == 1) {
	// 		$finalImage = $dirf137 . "/" . $randName;
	// 	} else if($j == 2 || $j == 3) {
	// 		$finalImage = $dirf138 . "/" . $randName;
	// 	} else if($j == 4 || $j == 5) {
	// 		$finalImage = $dirPSA . "/" . $randName;
	// 	} else if($j == 6) {
	// 		$finalImage = $dirCOE . "/" . $randName;
	// 	}

	// 	$elemArr[] = $finalImage;
	// }
	// $el1 = $el2 = $el3 = "";

	// $el1 = $elemArr[0] . "," . $elemArr[1];
	// $el2 = $elemArr[2] . "," . $elemArr[3];
	// $el3 = $elemArr[4] . "," . $elemArr[5];
	// $el4 = $elemArr[6];



    
    // $randName = strval(uniqid("$username", false)) . "." . $ext[1];
    // $finalImage = "image/students/". $username . "/" . $randName;
	// $require = "INSERT INTO requirements(f137, f138, psa, coe, $regTable) 
	// 				VALUES('one', 'two', 'three', 'four', $regId)";
	// $initQuery = mysqli_query($connect, $require);

            #Conditional 


            switch ($course_type) {
            	#Executive
            	case '1':
            		$subject_table 		= "subjects_executive";
	            	$subject_reg_id 	= "exec_reg_id";
	            	$subject_id 		= "exec_subject_id";
	            	$subject_stud_id 	= "exec_student_id";
	            	$subject_semester 	= "exec_semester";
					$queryType 			= "enrollment_exec";
					$testQuery = "SELECT * FROM registration_executive WHERE registration_student_id = $student_Id";

	            	$query 	= "INSERT INTO registration_executive(registration_username,registration_ticket_number, registration_year, registration_sem, 
								registration_student_type, registration_course_id, registration_student_id, reg_schedule_id, registration_date_created) 
					VALUES('$username','$ticketNumber','$yearLevels','$semester','$type', $courseid, $student_Id, $get, '$today')";

	            	$regQuery = "SELECT * FROM registration_executive WHERE registration_id =(SELECT max(registration_id) FROM registration_executive)";
            		break;

            	#Regular 4-year Course
            	case '2':
            		$subject_table 		= "subjects_reg4yr";
	            	$subject_reg_id 	= "reg4yr_reg_id";
	            	$subject_id 		= "reg4yr_subject_id";
	            	$subject_stud_id 	= "reg4yr_student_id";
	            	$subject_semester 	= "reg4yr_semester";
					$queryType			= "enrollment_reg4yr";
					$testQuery = "SELECT * FROM registration_regular_4yr WHERE registration_student_id = $student_Id";

	            	$query 			= "INSERT INTO registration_regular_4yr(registration_username,registration_ticket_number, registration_year, registration_sem, 
									registration_student_type, registration_course_id, registration_student_id, reg_schedule_id,registration_date_created) 
										VALUES('$username','$ticketNumber','$yearLevels','$semester','$type', $courseid, $student_Id, $get, '$today')";

	            	$regQuery 			= "SELECT * FROM registration_regular_4yr WHERE registration_id =(SELECT max(registration_id) FROM registration_regular_4yr)";
            		break;

            	#Regular 2-year Course
            	case '3':
            		$subject_table 		= "subjects_reg2yr";
	            	$subject_reg_id 	= "reg2yr_reg_id";
	            	$subject_id 		= "reg2yr_subject_id";
	            	$subject_stud_id 	= "reg2yr_student_id";
	            	$subject_semester 	= "reg2yr_semester";
					$queryType			= "enrollment_reg2yr";
					$testQuery = "SELECT * FROM registration_regular_2yr WHERE registration_student_id = $student_Id";

	            	$query 	= "INSERT INTO registration_regular_2yr(registration_username, registration_ticket_number,registration_year, registration_sem, 
								registration_student_type, registration_course_id, registration_student_id, reg_schedule_id, registration_date_created) 
								VALUES('$username','$ticketNumber','$yearLevels','$semester','$type', $courseid, $student_Id, $get, '$today')";

	            	$regQuery = "SELECT * FROM registration_regular_2yr WHERE registration_id =(SELECT max(registration_id) FROM registration_regular_2yr)";
            		break;

            	#Senior High
            	case '4':
            		$subject_table 		= "subjects_senior";
	            	$subject_reg_id 	= "senior_reg_id";
	            	$subject_id 		= "senior_subject_id";
	            	$subject_stud_id 	= "senior_student_id";
	            	$subject_semester 	= "senior_semester";
					$queryType 			= "enrollment_senior";
					$testQuery = "SELECT * FROM registration_senior WHERE registration_student_id = $student_Id";

	            	$query = "INSERT INTO registration_senior(registration_username,registration_ticket_number, registration_year, registration_sem, 
								registration_student_type, registration_course_id, registration_student_id, reg_schedule_id, registration_date_created) 
								VALUES('$username','$ticketNumber','$yearLevels','$semester','$type', $courseid, $student_Id, $get, '$today')";

	            	$regQuery = "SELECT * FROM registration_senior WHERE registration_id =(SELECT max(registration_id) FROM registration_senior)";
            		break;
            	
            	default:
            		break;
            }

        	#Query - Inserts
			
			$countQuery = "INSERT INTO counter(count_date_now, count_ticket_number) VALUES('$dateNow', '$ticketNumber')";
			$countView = mysqli_query($connect, $countQuery);
        
            	$view 			= mysqli_query($connect, $query);

	        $reviewQuery 	= mysqli_query($connect,$regQuery);
	        $regview 		= mysqli_fetch_assoc($reviewQuery);
	        $regId 			= $regview['registration_id'];
	        $schedGet = schedules($code, $connect, $info);
			for($i = 0; $i < count($info); $i++) {
				$loopQuery 	= "INSERT INTO " . $subject_table . "(" . 
									$subject_reg_id . ", " . 
									$subject_id . ", " . 
									$subject_semester . ", 
									sched_daily,
									class_start, 
									class_end) 
									VALUES(" . 
									$regId . ", " . 
									$info[$i] . ", '" . 
									$semester . "', '" . 
									$schedGet[$i]['daily'] . "', '" .
									$schedGet[$i]['start'] . "', '" . 
									$schedGet[$i]['end'] . "')";

				$loopView 	= mysqli_query($connect, $loopQuery);
			
			}

			//check last registration to fetch its registration_id
			$viewExistingReg = mysqli_query($connect, $testQuery);
			$arrayExistingReg = array();
			while($countExistingReg = mysqli_fetch_assoc($viewExistingReg)):
				$igReg = $countExistingReg['registration_id'];
				array_push($arrayExistingReg, $igReg);
			endwhile;
			$regEx = end($arrayExistingReg);
			
		$queryStudentInfo 	= "SELECT * FROM students WHERE student_id = $student_Id";
		$viewStudentInfo 	= mysqli_query($connect, $queryStudentInfo);
			$details = mysqli_fetch_array($viewStudentInfo);
			$data1 = $details[1];
			$data2 = $details[2];
			$data3 = $details[3];
			$data4 = $details[4];
			$data5 = $details[5];
			$data6 = $details[6];
			$data7 = $details[7];
			$data8 = $details[8];
			$data9 = $details[10];

			
			$queryInsertInfo = "INSERT INTO enrollment_students(student_fname,
																student_mname,
																student_lname,
																student_address,
																student_gender,
																student_contact,
																student_email,
																username,
																date_created,
																student_image,
																$queryType)
														VALUES('$data1',
																'$data2',
																'$data3',										
																'$data4',
																'$data5',
																'$data6', 									
																'$data7',
																'$data8', 
																'$today',										
																'$data9',
																'" . $regEx . "')";
			$insertInfoSucess = mysqli_query($connect, $queryInsertInfo);

			$searchStudentInfo = "SELECT * FROM enrollment_students WHERE $queryType = $regEx";
			$selectStudentInfo = mysqli_query($connect, $searchStudentInfo);
			// $row = mysqli_num_rows($selectStudentInfo);
			// $arrayStudentId = array();
			// $arrayIndex = 0;
			$details = mysqli_fetch_assoc($selectStudentInfo);
				$arr = $details['student_id'];
			// 	array_push($arrayStudentId, $arr);
			// 	$arrayIndex++;
			// endwhile;
			// $studId = end($arrayStudentId);
				


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

		$query2 = "INSERT INTO enrollment_credential(student_id,
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
                                            VALUES('$arr', '$username',  '$status', '$religion', '$nationality', '$birthdate', '$birthplace', '$provinceAdd', '$provinceCon', 
                                                    '$motherFname', '$motherMname', '$motherLname','$motherAddress', '$motherContact', '$fatherFname', '$fatherMname', '$fatherLname', '$fatherAddress',
                                                    '$fatherContact',  '$guardianFname', '$guardianMname', '$guardianLname', '$guardianAdd', '$guardianContact', '$elemName',
                                                    '$elemAdd', '$elemFin', '$highName', '$highAdd', '$highFin', '$seniorName', '$seniorAdd',    
                                                    '$seniorFin', '$collName', '$collAdd', '$collCourse', '$collFin');";
	$searching = mysqli_query($connect, $query2);



	// for($i = 0; $i < count($info); $i++) {
	// 	$loopQuery 	= "INSERT INTO " . $subject_table . "(" . $subject_reg_id . ", " . $subject_id . ", " .	$subject_stud_id . ", " . $subject_semester . ") VALUES(" . $regId . ", " . $info[$i] . ", " . $arr . ", '" . $semester . "')";
	// 	$loopView 	= mysqli_query($connect, $loopQuery);
	
	// }

	// for($r = 0; count($imageArr); $r++) {
	// 		move_uploaded_file($tmp_names[$r], $elemArr[$r]);
	// 	}

	// $f137_front
	// $f137_back
	// $f138_front
	// $f138_back
	// $psa_front
	// $psa_back
	// $coe

	

	
	// $dirRequire = "INSERT INTO requirements(f137, f138, psa, coe, $regTable) 
	// 				VALUES('one', 'two', 'three', 'four', $regId)";
	// $initQuery = mysqli_query($connect, $dirRequire);
   
		
	

		
		

        echo $regId;

       
        

?>