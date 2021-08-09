<?php 	

	include 'connection.php';
	include "fonts.php";
	session_start();
	

	$id 		= $_SESSION['admin_id'];
	$user		= $_SESSION['admin_username'];
	$image 		= $_SESSION['admin_image'];
	$name 		= $_SESSION['admin_name'];
	$email 		= $_SESSION['admin_email'];

	if(!$id) {
		header ("location: logout.php");
	}
?>
		
<!DOCTYPE HTML>
<html>
<title>Dashboard</title>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
	@import url(css/adminDashboardTab.css);
	@import url(css/adminDashboardTab2.css);
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
				<!-- <div class="cropHandler" style=" display: none">
				<div class="cropImageCanvas">
					<img src="" width='500' id="cropImage">	
				</div>
				<div class="previewCrop" id="previewCrop">
				<div id="previewCropMini"></div>
				<button class="cancelCrop">Cancel</button>
				<button class="submitCrop">Crop</button>
				</div>
				</div> -->
	<div class="contain">
			
		<div class="base">
		<div class="fixing">
			<h5 style="font-weigth: 700">Submitting...</h5>
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
						<div class="img_panel" 	style="border-radius: 50%; 
														padding:0; 
														overflow: hidden; 
														position: relative">
							<img id="images" src="<?php echo $image?>" style="width:80px; ">
						</div>
						<div class="check">
							<i class="fad fa-plus-circle"></i>
							<div class="checkInt">Change your Profile Image</div>
						</div>

						<div class="han">
							<div class="nameHand"><?php echo $name?></div>
							<div class="name">
								<span id="nam"><?php echo $user?></span>
							</div>
						</div>
					</div>
			
				<div class="handle_side" style="position: relative">
					<hr class="hr">
					<!-- Dashboard -->
					<div class="dashboardSide">
						<div class="key">
							<i class="fad fa-chart-line"></i>
						</div>
						Dashboard
					</div>
					<!-- Profile -->
					<div class="profile">
						<div class="key">
							<i class="fad fa-id-badge"></i>
						</div>
						Profile
					</div>
					<!-- Subjects -->
					<div class="subjects">
						<div class="key">
							<i class="fad fa-address-card"></i>
						</div>
						Subjects
					</div>
					<!-- Semester Scheduling -->
					<div class="schedule">
						<div class="key">
							<i class="fad fa-calendar-alt"></i>
						</div>
						Semester Subject Scheduling
					</div>
					<!-- Courses -->
					<div class="courses">
						<div class="key">
							<i class="fad fa-chalkboard-teacher"></i>
						</div>
						Course
					</div>
					
					<div class="selectorIn"></div>

					<hr class="hr">
					<!-- Logout -->
					<div class="logout" style="align-self: bottom">
						<div class="key">
							<i class="fad fa-sign-out"></i>
						</div>
						Logout
					</div>
				</div>
			</section>
			<section class="dashboard">
				<header>Admin Dashboard</header>	
				
				<div class="handler1">
						
				</div>
					
					

					<div class="content">

					</div>
				
				
				<?php  include 'adminDashboardTab2.php';?>

</body>
</html>