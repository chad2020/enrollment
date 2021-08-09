<?php 	

	include 'connection.php';
	include "fonts.php";
	session_start();
	if(!isset($_SESSION['admin_id'])) {
		header ("location: logout.php");
	}

	$id 		= $_SESSION['admin_id'];
	$user		= $_SESSION['admin_username'];
	$image 		= $_SESSION['admin_image'];
	$name 		= $_SESSION['admin_name'];
	$email 		= $_SESSION['admin_email'];

	
?>
		
<!DOCTYPE HTML>
<html>
<title>Dashboard</title>
<head>
<link rel="icon" href="image/ptclogo.png" type="image/x-icon">
<script>
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
</script>
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
		<div class="loadFixing">
			<div class="fixing">
				<h5 style="font-weight: 700">Submitting...</h5>
				<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
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
							<img id="images" src="" style="width:80px; ">
						</div>
						<div class="check">
							<i class="fad fa-plus-circle"></i>
							<div class="checkInt">
								<span>Change your Profile Image</span></div>
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
					<div class="dashboardSide side" data-tag='0'>
						<div class="key">
							<i class="fad fa-chart-line"></i>
						</div>
						Dashboard
					</div>
					<div style="margin-top: 20px">
						<label style="color: #a9ffc4">Maintenance</label>
					</div>
					<!-- Tickets -->
					<div class="ticketLabel side" data-tag='1'>
						<div class="key">
							<i class="fad fa-ticket-alt"></i>
						</div>
						Enrollees
					</div>
					<!-- Profile -->
					<div class="profile side" data-tag='2'>
						<div class="key">
							<i class="fad fa-id-badge"></i>
						</div>
						Profile
					</div>
					<!-- Subjects -->
					<div class="subjects side" data-tag='3'>
						<div class="key">
							<i class="fad fa-address-card"></i>
						</div>
						Subjects
					</div>
					<!-- Semester Scheduling -->
					<div class="schedule side" data-tag='4'>
						<div class="key">
							<i class="fad fa-calendar-alt"></i>
						</div>
						Semester Subject Scheduling
					</div>
					<!-- Courses -->
					<div class="courses side" data-tag='5'>
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
				<header>Administration</header>	
				<!-- Handler 1 -->
				<div class="handler1 handChildren">
					<div class="dashboard_title">Dashboard</div>
					<!-- Menus -->
					<div class="menus">
							<div class="tickets child" data-att="0">
								<div class="title">
								<h4>Student Name</h4></div>
								<div class="info">
								
								<div class="infoChild in0">
									<i class="fad fa-ticket-alt"></i>
								</div>
									<div class="icon i0">Total no. of Tickets</div>
								<div class="infoCount pend">
									<div class="num n0"></div></div>							
								</div>
							</div>
							<div class="pending child" data-att="1">
								<div class="title">
								<h4>Pending</h4></div>
								<div class="info">
								
								<div class="infoChild in1">
									<i class="fad fa-external-link-square-alt"></i>
								</div>
									<div class="icon i1">Total no. of Pending Application</div>
								<div class="infoCount pend">
									<div class="num n1"></div></div>							
								</div>
							</div>
							<div class="ongoing child" data-att="2">
								<h4>Ongoing Application</h4>
								<div class="info">
								
								<div class="infoChild in2">
									<i class="fad fa-arrow-alt-circle-right"></i>
								</div>
									<div class="icon i2">Total no. of Ongoing Application</div>
								<div class="infoCount on">
									<div class="num n2"></div></div>							
								</div>
							</div>
							<div class="enrolled child" data-att="3">
								<h4>Enlisted</h4>
								<div class="info">
								
								<div class="infoChild in3">
									<i class="fad fa-check-circle"></i>
								</div>
									<div class="icon i3">Total no. of Enlisted Students</div>
								<div class="infoCount en">
									<div class="num n3"></div></div>							
								</div>
							</div>
					</div>

					<!-- Content -->
					<div class="contentHandler1">
						<!-- First Enrolled Handler -->
						<div class="enrolledTable handChild">
							<!-- header enrolledTable-->
							<div class="preTitle">Today's Enrollees</div>
							<div class="noNewEnrollee">
								No new enrollee student<br>for this category<br><i class="fad fa-telescope h1 mt-2"></i>
							</div>
							<div class="enrolledTableBase">
							<table class="table student">
								<thead>
									<tr>
										<!-- <th style="width: 15%">Ticket Number</th> -->
										<th style="width: 38%;text-align: left!important; padding-left: 10px!important;">Student Name</th>
										<th style="width: 12%">Course</th>
										<th style="width: 20%">Time Registered</th>
										<th style="width: 10%">Status</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
							</div>
							
							<!-- footer enrolledTable-->
							<div class="enrolledTableFooter">
								<div class="form-group selectors">
									<label for="" style="margin-right: 10px">Student Type</label>
									<select id="selector" class="form-select">
										<option value="0">All Students</option>
										<option value="1">Executive Class - Bachelor's Degree</option>
										<option value="2">4-Year Program - Bachelors Degree</option>
										<!-- <option value="3">2-Year Program - Certification</option>
										<option value="4">Senior High</option> -->
									</select>
								</div>
								<div class="form-group has-search">
									<span class="fa fa-search form-control-feedback"></span>
									<input type="text" class="form-control" placeholder="Search">
								</div>
								
							</div>
						</div>
						<div class="pre_enrolledTable">
							<!-- Last Enrolled Handler -->
							<div class="lastPreEnrolled handChild">
								<!-- header lastPreEnrolled-->
								<div class="preTitle">Today's Pre-Enlisted student</div>

								<!-- footer lastPreEnrolled -->
								<div class="pre_table">
									<div class="noNewEnrollee3">
										No newly enlisted students<br>for today<br><i class="fad fa-telescope h1 mt-2"></i>
									</div>
									<table class="table" id="pre_table">
										<thead>
											<tr>
												<th style="text-align:left!important; width: 35%; padding-left: 20px">Student Name</th>
												<th style="text-align:left!important">Course</th>
												<th>Enlisted</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>

									
								</div>
								<div class="pre_footer">
									<div class="arrows"
										style="height: 20px;
												padding: 3px;
												display: flex;
												
												align-items: center;">
										<span style="font-size:10pt; font-weight:bold; margin: 3px;">Previous</span>
										<i class="fad fa-arrow-circle-left"></i>
										<span style="font-size:10pt;font-weight:bold;margin: 3px;">Next</span>
										<i class="fad fa-arrow-circle-right"></i>
									</div>
								</div>
							</div>

							<!-- Today's Enrolled Handler -->
							<div class="previousPreEnrolled handChild">
								<div class="preTitle">Today's Report</div>
								<div class="grid_reports">
									<div class="ticketReport">Tickets</div>
									<div class="ticketReport countNum"></div>
									<div class="ticketReport">Pending Applications</div>	
									<div class="ticketReport countNum"></div>
									<div class="ticketReport">Ongoing Application</div>	
									<div class="ticketReport countNum"></div>
									<div class="ticketReport">Enlisted</div>	
									<div class="ticketReport countNum"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Handler 2 -->
				<div class="handler2 handChildren">
					<div class="dashboard_title position-relative ticketTitleDashboard">Enrollee Tickets</div>	
					<div class="menu position-relative">
						<div class="line"></div>
						<div class="ticketMenu bt" data-tag="0">
							Enrollees
						</div>
						<div class="pendingMenu bt" data-tag="1">
							Pending Application
						</div>
						<div class="ongoingMenu bt" data-tag="2">
							Ongoing Application
						</div>
						<div class="enrolledMenu bt" data-tag="3">
							Enlisted
						</div>
					</div>
					<div class="searchBar form-group position-absolute">
						<input type="text" class="form-control ds-input w-100 h-100" 
							id="search-input" placeholder="Search student here..."
							autocomplete="off" spellcheck="false" data-category="0"
							style="position: relative; vertical-align: top;">
					</div>


					<!-- Handler Menus -->
					<div class="menu1 menuChild">
						<h5 style="font-weight: bold">Students Applications</h5>
						<div class="noNewEnrollee2">
							Student not found<br><i class="fad fa-telescope h1 mt-2"></i>
						</div>
						<div class="baseTicketTable">
							<table class="table ticketTable">
								<thead>
								<tr>
										<!-- <th style="width:10%">Ticket Number</th> -->
										<th style="width: 30%; text-align: left!important; padding-left: 10px!important;">Student Name</th>
										<th style="width: 10%">Course</th>
										<th style="width: 10%">Year Level</th>
										<th style="width:10%">Semester</th>
										<th style="width:10%">Student Type</th>
										<th>Status</th>
										<th style="width:15%">Date Registration</th>
										<th style="width:15%">Action</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
								
							</table>
							
							<div class="enrolledTableFooter"></div>
						</div>
						<div class="handEllip" style="margin: 20px auto; height: auto;">
									<span class="position-relative">Loading...</span>
									<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
								</div>
					</div>
				</div>	
					

					<div class="content">

					</div>
				
				
				<?php  include 'adminDashboardTab2.php';?>
				
				<script type="text/javascript"src="js/emailjs.js"></script>
				<script type="text/javascript">
				(function() {
					emailjs.init("user_foqPJUTwpFT9afCsTsiC4");
				})();
				</script>

				

</body>
</html>