<?php 
	include 'connection.php';
	date_default_timezone_set("Asia/Manila");
	$fname=$mname=$lname=$address=$email=$contact=$gender=$username=$pwd=$image=$imageTmp=$name="";
	
	function clean($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

		$fname 		= clean($_POST['fname']);
		$mname 		= clean($_POST['mname']);
		$lname 		= clean($_POST['lname']);
		$address 	= clean($_POST['address']);
		$email 		= clean($_POST['email']);
		$contact 	= clean($_POST['contact']);
		$gender 	= clean($_POST['gender']);
		$username 	= clean($_POST['username']);
		$pwd 		= clean($_POST['password']);
		$image 		= $_FILES['file']['name'];

		$query 		= "SELECT * FROM students WHERE student_email = '" . $email . "'";
		$result 	= mysqli_query($connect, $query);
 		$count 		= mysqli_num_rows($result);
		 
		if($count > 0) {
			echo "0";
			exit();
		 } else {

			$queryUser 		= "SELECT * FROM students WHERE username = '" . $username . "'";
			$resultUser 	= mysqli_query($connect, $queryUser);
 			$countUser 		= mysqli_num_rows($resultUser);

			if($countUser > 0) {
				echo "3";
			} else {
				$location = "image/students/".$image;
				$upload = 1;
				$imageType = pathinfo($location, PATHINFO_EXTENSION);
				$valid = array('jpeg', 'png', 'jpg');

				if(!in_array(strtolower($imageType), $valid)) {
					echo "2";
					exit();
				}else {
					sleep(2);
					echo "1";
				}
			}
			
		 }

	




 ?>