<?php 

	include "fonts.php";
	include "connection.php";

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>Welcome to Login Page</title>
	 <link rel="icon" href="image/ptclogo.png" type="image/x-icon">
 	
 	<style type="text/css">
 		@import url(css/main.css);
		@import url(css/font.css);
 	</style>

 </head>
 <body>
 	<!-- <div class="back"> -->
	 	<div class="container">
	 		<div class="base">
	 			<div class="header">
	 				<div class="logo">
	 					<img src="image/ptclogo.png">
	 				</div>	
	 				<div class="title">
	 					<h1>Pateros Technological College</h1>
	 					<p style=" font-size: 9pt;font-weight: bold;">
          College St. Sto Rosario - Kanluran <br> Pateros, Metro Manila
        </p>
	 				
	 				</div>
	 			</div>
			 	<div class="c1">
				 	<p>The Development of Admission System of<br>Pateros Technological College</p>
				</div>
				<div class="c2">
				 	<form class="form">
						 <label for="formGroupExampleInput">Username</label>
				 		<div class="form-group user">
						 <div class="key"><i class="fad fa-user"></i></div>
							<input type="text" class="form-control"  id="username" autocomplete="off" value="">
						</div>
						<label for="exampleInputPassword1">Password</label>
						<div class="form-group pass">
						<div class="key"><i class="fad fa-key"></i></div>
							<input type="password" class="form-control" id="password" name="password">
							
						</div>

							<button type="submit" id="btn" name="login"><i class="fas fa-sign-in-alt" style="margin-right:10px"></i> Login</button>
							<div class="forgot">
								<a href="recover.php">Forgot Password</a>
							</div>
							<br>
							<p class="signing_up">Don't have an Account? <em><a href="signup.php">Sign up here</a></em></p>
							<script src="js/index.js"></script>
				 	</form>
				 </div>
	 		</div>
	 	</div>	
	<!-- </div> -->

		
 							
 </body>
 </html>