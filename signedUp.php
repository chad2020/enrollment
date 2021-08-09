<?php
include 'connection.php';
date_default_timezone_set("Asia/Manila");
function clean($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

$fname=$mname=$lname=$address=$email=$contact=$gender=$username=$pwd=$image=$imageTmp=$name="";
		$fname 		= clean($_POST['fname']);
		$mname 		= clean($_POST['mname']);
		$lname 		= clean($_POST['lname']);
		$address 	= clean($_POST['address']);
		$email 		= clean($_POST['email']);
		$contact 	= clean($_POST['contact']);
		$gender 	= clean($_POST['gender']);
		$username 	= clean($_POST['username']);
		$pwd 		= clean(md5($_POST['password']));
		$image 		= $_FILES['file']['name'];
		$ext 		= explode('.', $image);
		$today = date('F j, Y h:i a'); 
		
		// $randName = rand(15);
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
	    
	    $randName 	= strval(uniqid("$username", false)) . "." . $ext[1];
		$location = "image/students/$username/".$randName;
$insertQuery = 	  "INSERT INTO students(student_fname,
 										student_mname,
 										student_lname,
 										student_address,
 										student_gender,
 										student_contact,
 										student_email,
 										username,
 										student_password,
 										student_image)
								VALUES('$fname',
 										'$mname',
 										'$lname',										
										'$address',
										'$gender',
 										'$contact', 									
										'$email',
										'$username', 										
										'$pwd',
										'$location')";
	
	$res 	= 	mysqli_query($connect, $insertQuery);
				move_uploaded_file($_FILES['file']['tmp_name'], $location);
				echo "1";

?>