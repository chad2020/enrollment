<?php 	

	include 'connection.php';
	include "fonts.php";
	session_start();
	if(!isset($_SESSION['stdt_id'])) {
		header ("location: logout.php");
	}
		$fname              = $mname            = $lname            = $email            = $religion         = 
		$status             = $birthdate        = $birthplace       = $address          = $contact          = 
		$provinceAdd        = $provinceCon      = $guardianFname    = $guardianAdd      = $guardianContact  = 
		$nationality        = $username         = $password         = $motherFname      = $motherAddress    =
		$motherContact      = $fatherFname      = $fatherAddress    = $fatherContact    = $elemName         = 
		$elemAdd            = $elemFin          = $highName         = $highAdd          = $highFin          = 
		$seniorName         = $seniorAdd        = $seniorFin        = $collName         = $collAdd          = 
		$collFin            = $query            = $query2           = $gender           = $guardianMname    = 
		$guardianLname      = $fatherMname      = $fatherLname      = $motherMname      = $motherLname      = 
		$collCourse			= "";

	$id 		= $_SESSION['stdt_id'];
	// $user		= $_SESSION['stdt_username'];
	// $name 		= $_SESSION['stdt_name'];
	// $email 		= $_SESSION['stdt_email'];
	// $fname 		= $_SESSION['stdt_fname'];
	// $mname 		= $_SESSION['stdt_mname'];
	// $lname 		= $_SESSION['stdt_lname'];
	// $password 	= $_SESSION['stdt_password'];
	// $gender 	= $_SESSION['stdt_gender'];
	// $contact	= $_SESSION['stdt_contact'];
	// $address 	= $_SESSION['stdt_address'];
	$viewQuery = "SELECT * FROM students WHERE student_id = $id";
	$viewResults = mysqli_query($connect, $viewQuery);
	$details = mysqli_fetch_assoc($viewResults);
	$user		= $details['username'];
	$email 		= $details['student_email'];
	$fname 		= $details['student_fname'];
	$mname 		= $details['student_mname'];
	$lname 		= $details['student_lname'];
	$name 		= $fname . " " . $mname[0] . ". " . $lname;
	$password 	= $details['student_password'];
	$gender 	= $details['student_gender'];
	$contact	= $details['student_contact'];
	$address 	= $details['student_address'];
	

	

	$que    			= "SELECT * FROM student_credential WHERE username = '$user' AND student_id = '$id'";
	$viewCredential   	= mysqli_query($connect, $que);
	$fetchCredential  	= mysqli_fetch_assoc($viewCredential);
	$credentialCount  	= mysqli_num_rows($viewCredential);

	if($credentialCount > 0) {
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

	}
		?>
		
<!DOCTYPE HTML>
<html>
<title>Dashboard</title>
<head>
<link rel="icon" href="image/ptclogo.png" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
	@import url(css/studentDashboard.css);
	@import url(css/studentDashboard2.css);
	@import url(css/font.css);

	.form-control:focus {
		color: #212529;
		background-color: #fff;
		border-color: #0E9749;
		outline: 0;
		box-shadow: 0 0 0 0.1em #0E9749 inset!important;
	}
</style>

</head>
<body>
<div class="imageFixed">

					<div class="imageFixedContent">
					<div class="dashboard_title imageContenFixedTitle">Change Profile Image</div>
					<div class="handlerImage" style="	display: grid; 
														grid-template-columns: 1fr 1fr">

					<div class="imageSource">
						<img class="current" src="">
						
					</div>
					<div class="imageSource">
						<img class="new" src="image/default/avatar3.svg">
						
					</div>

					</div>
					<div class="labelImage" style=" display: grid;
													grid-template-columns: 1fr 1fr;
													grid-gap: .5rem;
													padding: 5px;">
						<label style="text-align: center; font-weight:bolder; font-size: 10pt">Current Profile Image</label>
						<label style="text-align: center;font-weight:bolder;font-size: 10pt">Choose your <br> New Profile Image</label>
						
							<input type="file" id="uploadImage" class="form-control uploadImage" style="	grid-row: 2;
																			grid-column: 2 / 3; 
																			width: 90%;
																			margin: 0 auto;
																			height: 35px">
					</div>
						<div class="hides">
						<i class="fas fa-arrow-left" style="color: #555; "></i>
						</div>
						<button class="subs" disabled style="float: right; margin-right: 100px; width: 15%; margin-top: 5px">Submit</button>
					</div>
				</div>
				<div class="cropHandler" style=" display: none">
				<div class="cropImageCanvas">
					<img src="image/zoids_wallpaper_blade_liger_wallpaper_hd-wide.jpg" width='500' id="cropImage">	
				</div>
				<div class="previewCrop" id="previewCrop">
				<div id="previewCropMini"></div>
				<button class="cancelCrop">Cancel</button>
				<button class="submitCrop">Crop</button>
				</div>
				</div>
	<div class="contain">
			
		<div class="base">
		<div class="fixing"><label class="lab" style="display:none"><?php echo $gender?></label>
			<h5 style="font-weight: 700">Submitting...</h5>
			<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
			<section class="side_bar">
				<div class="side_header">
					<div class="img">
						<img src="image/ptclogo.png">
					
					<div class="side_title">Pateros Technological College
					</div></div>
				</div>
					
					<div class="info_user">
					<div class="img_panel" style="border-radius: 50%; ;padding:0; overflow: hidden; position: relative">
					<img id="images" src="" style="width:80px; ">

						
					</div><div class="check"><i class="fad fa-camera" style="font-size: 12pt"></i>
					<div class="checkInt">Change your Profile Image</div>
				</div>

						<div class="han"><div class="nameHand"><?php echo $name?></div><div class="name"><span id="nam"><?php echo $user?></span></div></div>
					</div>
			
				<div class="handle_side" style="position: relative">
				<hr class="hr">
				<div class="profile"><div class="key"><i class="fad fa-id-badge"></i></div>Profile</div>
				<div class="registration"><div class="key"><i class="fad fa-address-card"></div></i>Registration</div>
				<!-- <div class="schedule"><div class="key"><i class="fad fa-chalkboard-teacher"></i></div>Schedules</div> -->
				<div class="selectorIn"></div>
				<hr class="hr">
				<!-- <div class="status_base" >
				<div class="status"><div class="key"><i class="fad fa-user"></i></div>Student Info</div>
				<div class="status_container">
					<div class="studentNum">
						<span class="stTile sp">Student Number</span><br>
						<span class="par">N/A</span>
					</div>
					<div class="course">
						<span class="stCou sp">Course</span><br>
						<span class="par">N/A</span>
					</div>
					<div class="yrSec">
						<span class="stYr sp">Year Level</span><br>
						<span class="par">N/A</span>
					</div>
					<div class="sem">
						<span class="stSem sp">Semester</span><br>
						<span class="par">N/A</span>
					</div>
				</div>
				</div> -->	
				<div class="logout" style="align-self: bottom"><div class="key"><i class="fad fa-sign-out"></i></div>Logout</div></div>
			</section>
			<section class="dashboard">
				<header>Student Dashboard</header>	
				
				<div class="handler1">
					<div class="dashboard_title">Personal Information</div>
					<div class="menus">
						<div class="line"></div>
						<div class="basic_info bt">
							Basic Information
						</div>
						<div class="credentials bt">
							Credentials
						</div>
						<div class="address bt">
							Address
						</div>
						<div class="parents bt">
							Parents
						</div>
						<div class="guardian bt">
							Guardian
						</div>
						<div class="education bt">
							Education
						</div>
					</div>
				<div class="menu_handler">
					<form autocomplete="off">
					<div class="menu1">
						
						<div class="form-group fn">
							<label for="fname">First Name <span style="color: red">*</span></label>
							<input type="text" class="form-control fname" name="fname" onkeyup="letters(this)"  autocomplete="off" value="<?php echo $fname;?>">
						</div>

						<div class="form-group mn">

							<label for="mname">Middle Name <span style="color: red">*</span></label>
							<input type="text" class="form-control mname" spellcheck="on" name="mname" onkeyup="letters(this)" autocomplete="off" value="<?php echo $mname;?>">
						</div>

						<div class="form-group ln">
							<label for="lname">Last Name <span style="color: red">*</span></label>
							<input type="text" class="form-control lname" name="lname" onkeyup="letters(this)" autocomplete="off" value="<?php echo $lname;?>">
						</div>

						<!-- ------------------- -->
						<center><hr width="100%" style="margin: 40px"></center>
						<!-- ------------------- -->

						<div class="form-group gd">
							<label for="gender">Gender <span style="color: red">*</span></label>
							<select class="form-select form-select-sm gender" aria-label=".form-select-sm example" name="gender">
								<option <?php if($gender == "MALE") {echo "selected";}?>>MALE</option>
								<option <?php if($gender == "FEMALE") {echo "selected";}?>>FEMALE</option>
							</select>
						</div>

						<div class="form-group cs">
							<label for="civil_status">Civil Status <span style="color: red">*</span></label>
							<select class="form-select form-select-sm statusSelect" aria-label=".form-select-sm example" name="civil_status">
								<option <?php if($status == "SINGLE") {echo "selected";}?>>SINGLE</option>
								<option <?php if($status == "MARRIED") {echo "selected";}?>>MARRIED</option>
								<option <?php if($status == "WIDOW") {echo "selected";}?>>WIDOW</option>
							</select>
						</div>

						<div class="form-group rl">
							<label for="religion">Religion <span style="color: red">*</span></label>
							<input type="text" class="form-control religion" name="religion" value="<?php echo $religion?>">
						</div>

						<div class="form-group nl">
							<label for="nationality">Nationality <span style="color: red">*</span></label>
							<input type="text" class="form-control nationality " name="nationality" value="<?php echo $nationality;?>">
						</div>

						<div class="form-group bd">
							<label for="lname">Date of Birth <span style="color: red">*</span></label>
							<input type="date" class="form-control bday" name="lname" autocomplete="nope" value="<?php echo $birthdate;?>">
						</div>

						<div class="form-group bp">
							<label for="birthplace">Place of Birth <span style="color: red">*</span></label>
							<input type="text" class="form-control bplace" name="birth_place" value="<?php echo $birthplace;?>">
						</div>

						
					</div>
					<div class="menu2">

						<div class="form-group">
							<label for="email">Email Address <span style="color: red">*</span></label>
							<input type="email" id="email" class="form-control email" name="email" value="<?php echo $email?>">
						</div>
						<div class="form-group">
							<label for="username">Username</label>
							<input type="text" disabled="true" class="form-control user" name="username" value="<?php echo $user?>">
						</div>

						<div class="form-group rp">
							<label for="password">Old Password <span style="color: red">*</span></label>
							<input type="password" class="form-control oldPass" name="password">
						</div>

						<div class="form-group rp rel">
							<label for="password">New Password <span style="color: red">*</span></label>
							<input type="password" class="form-control newPass" name="password"><div class="keys"><i class="fad fa-eye fals"></i></div>
						</div>

						<div class="form-group rp">
							<label for="repassword">Re-enter New Password <span style="color: red">*</span></label>
							<input type="password" class="form-control newRepass" name="newRepass">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch1" name="check">
							<label class="custom-control-label llb2" for="check">Check to change your Password / Uncheck if not</label>
						</div>
					</div>

					<div class="menu3">
						<div class="form-group">
							<label for="homeAddress">Complete Address <span style="color: red">*</span></label>
							<input type="text"  class="form-control add" name="homeAddress" value="<?php echo $address?>">
						</div>

						<div class="form-group">
							<label for="contact">Contact Number <span style="color: red">*</span></label>
							<input type="text" maxlength="13" onkeyup="numbers(this)" class="form-control homeCont" name="contact" value="<?php echo $contact?>">
						</div>

						<div class="form-group">
							<label for="province">Provincial Address</label>
							<input type="text" disabled="true" class="form-control province" name="province">
						</div>

						<div class="form-group">
							<label for="provCont">Contact Number</label>
							<input type="text" disabled="true" maxlength="13" onkeyup="numbers(this)" class="form-control provinceCont" name="provCont">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch2" name="check">
							<label class="custom-control-label llb3" for="check">Check if you don't have Provincial Address</label>
						</div>
					</div>

					<div class="menu4">
						<div class="form-group">
							<label for="mother">Mother's Maiden Name <i style="font-size: 8pt">( Your Mother's name before she married ) <span style="color: red">*</span></i></label>
							<input type="text" class="form-control motherFname" onkeyup="letters(this)" name="motherFname" placeholder="First Name" value="<?php echo $motherFname?>">
						</div>

						<div class="form-group">
							<input type="text" class="form-control motherMname" onkeyup="letters(this)" name="motherMname" placeholder="Middle Name" value="<?php echo $motherMname?>">
						</div>

						<div class="form-group">
							<input type="text" class="form-control motherLname" onkeyup="letters(this)" name="motherLname" placeholder="Last Name" value="<?php echo $motherLname?>">
						</div>

						<div class="form-group">
							<label for="motherAddress">Address <span style="color: red">*</span></label>
							<input type="text" class="form-control motherAddress" name="motherAddress" value="<?php echo $motherAddress?>">
						</div>

						<div class="form-group">
							<label for="motherContact">Contact Number <span style="color: red">*</span></label>
							<input type="text" onkeyup="numbers(this)" class="form-control motherContact" name="motherContact" value="<?php echo $motherContact?>">
						</div>

						<center><hr style="margin: 40px"></center>

						<div class="form-group">
							<label for="fatherFname">Father's Name <span style="color: red">*</span></label>
							<input type="text" class="form-control fatherFname" onkeyup="letters(this)" name="fatherFname" placeholder="First Name" value="<?php echo $fatherFname;?>">
						</div>

						<div class="form-group">
							<input type="text" class="form-control fatherMname" onkeyup="letters(this)" name="fatherMname" placeholder="Middle Name" value="<?php echo $fatherMname?>">
						</div>

						<div class="form-group">
							<input type="text" class="form-control fatherLname" onkeyup="letters(this)" name="fatherLname" placeholder="Last Name" value="<?php echo $fatherLname?>">
						</div>

						<div class="form-group">
							<label for="fatherAddress">Address <span style="color: red">*</span></label>
							<input type="text" class="form-control fatherAddress" name="fatherAddress" value="<?php echo $fatherAddress?>">
						</div>

						<div class="form-group">
							<label for="fatherContact">Contact Number <span style="color: red">*</span></label>
							<input type="text" class="form-control fatherContact" onkeyup="numbers(this)" name="fatherContact" value="<?php echo $fatherContact?>">
						</div>


					</div>

					<div class="menu5">
						<div class="form-group">
							<label for="guardianFname">Guardian <i style="font-size: 8pt">( Person to notify in case of emergency ) <span style="color: red">*</span></i></label>
							<input type="text" class="form-control guardianFname" onkeyup="letters(this)" style="width: 40%" name="guardianFname" placeholder="First Name" value="<?php echo $guardianFname?>">
						</div>

						<div class="form-group">
							<input type="text" class="form-control guardianMname" onkeyup="letters(this)" maxlength='1' style="width: 20%" name="guardianMname" placeholder="Middle Initial" value="<?php echo $guardianMname?>">
						</div>
						
						<div class="form-group">
							<input type="text" class="form-control guardianLname" onkeyup="letters(this)" style="width: 40%" name="guardianLname" placeholder="Last Name" value="<?php echo $guardianLname?>">
						</div>

						<div class="form-group">
							<label for="guardianAddress">Home Address <span style="color: red">*</span></label>
							<input type="text"  class="form-control guardianAddress" name="guardianAddress" value="<?php echo $guardianAdd?>">
						</div>

						<div class="form-group">
							<label for="guardianContact">Contact Number <span style="color: red">*</span></label>
							<input type="text"  class="form-control guardianContact" onkeyup="numbers(this)" style="width: 40%" name="guardianContact" value="<?php echo $guardianContact?>">
						</div>
					</div>

					<!--Education-->
					<div class="menu6">
						<!-- elementary -->
						<h6 style="font-weight:bolder;margin:10px 40px">Elementary School Education Attainment</h6>
						<div class="form-group">
							<label for="elemName">School Name <span style="color: red">*</span></label>
							<input type="text" class="form-control elemName" name="elemName" value="<?php echo $elemName?>">
						</div>

						<div class="form-group">
							<label for="elemAdd">School Address <span style="color: red">*</span></label>
							<input type="text"  class="form-control elemAdd" name="elemAdd" value="<?php echo $elemAdd?>">
						</div>

						<div class="form-group">
							<label for="elemDeg">Year Degree Earned <span style="color: red">*</span></label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" class="form-control elemDeg" name="elemDeg" value="<?php echo $elemFin?>">
						</div>
						<hr style="margin: 40px">


						<!-- high school -->
						<h6 style="font-weight:bolder;margin:10px 40px">High School Education Attainment</h6>
						<div class="form-group">
							<label for="highName">School Name <span style="color: red">*</span></label>
							<input type="text"  class="form-control highName" name="highName" value="<?php echo $highName?>">
						</div>

						<div class="form-group">
							<label for="highAdd">School Address <span style="color: red">*</span></label>
							<input type="text"  class="form-control highAdd" name="highAdd" value="<?php echo $highAdd?>">
						</div>

						<div class="form-group">
							<label for="highDegree">Year Degree Earned <span style="color: red">*</span></label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" class="form-control highDegree" name="highDegree" value="<?php echo $highFin?>">
						</div>

						<hr style="margin: 40px">

						<!-- senior high -->
						<h6 style="font-weight:bolder;margin:10px 40px">Senior High School Education Attainment</h6>
						
						<div class="form-group">
							<label for="snName">School Name</label>
							<input type="text" disabled="true" class="form-control snName" name="snName" value="<?php echo $seniorName?>">
						</div>

						<div class="form-group">
							<label for="snAdd">School Address</label>
							<input type="text" disabled="true" class="form-control snAdd" name="snAdd" value="<?php echo $seniorAdd?>">
						</div>

						<div class="form-group">
							<label for="snDegree">Year Degree Earned</label>
							<input type="text" disabled="true" maxlength="4" onkeyup="numbers(this)" class="form-control snDegree" name="snDegree" value="<?php echo $seniorFin?>">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch3" name="checkSenior">
							<label class="custom-control-label llb4" for="checkSenior">Check if not applicable</label>
						</div>

						<hr style="margin: 40px">

						<!-- college -->
						<h6 style="font-weight:bolder; margin:10px 40px">College / Vocational Education Attainment</h6>
						
						<div class="form-group">
							<label for="collName">School Name</label>
							<input type="text" disabled="true" class="form-control collName" name="collName" value="<?php echo $collName?>">
						</div>

						<div class="form-group">
							<label for="collAdd">School Address</label>
							<input type="text" disabled="true" class="form-control collAdd" name="collAdd" value="<?php echo $collAdd?>">
						</div>

						<div class="form-group">
							<label for="collCourse">Course</label>
							<input type="text" disabled="true" class="form-control collCourse" name="collCourse" value="<?php echo $collCourse?>">
						</div>

						<div class="form-group">
							<label for="collDegree">Year Degree Earned</label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" disabled="true" class="form-control collDegree" name="collDegree" value="<?php echo $collFin?>">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch4" name="checkCollege">
							<label class="custom-control-label llb5" for="checkCollege">Check if not applicable</label>
						</div>

				
					</div>
					<div class="fixedSaved">Save Changes</div>
					</form>
					<div class="fixed">
						<div class="headFixed">Errors <div class="count"><span></span></div><i class="far fa-times close" style="float: right;"></i></div>
						<div class="fixedContent">
						
						</div>
						
						</div>
						
				</div>	
					

					<div class="content">

					</div>
					
				</div>
				
				<?php  include 'studentDashboard2.php';?>

</body>
</html>