<?php 

	include "fonts.php";
	include "connection.php";

 ?>

 <title>Student Account Application</title>
 <head>
 <link rel="icon" href="image/ptclogo.png" type="image/x-icon">
 	<style type="text/css">
 		@import url(css/signup.css);
 		@import url(css/font.css);
		 
 	</style>
 </head>
 <body>
 	
 	<div class="container">
 			
 			<div class="handler">
 			<div class="c1">
  
 				<div class="header">
 				<div class="logo">
	 				</div>	
	 				
 			</div>
				 	
				</div>
				<form class="form">
				<div class="c2">
					<div class="heading"><h1>Sign up Here</h1>
						</div>
					<div class="bar"><p>Please fill-out the parameters below in order to create you account</p></div>
					<!-- Full Name -->
					<div class="c-base">		
				 		<div class="name in a">
							<label class="user">Full Name</label>
						</div>
						<div class="in b">
						<div class="key" style="width: 50px;"><i class="fad fa-id-card"></i>
						</div>
							<input type="text" onkeyup="letters(this)" class="form-control input fname" name="fname" autocomplete="on" value="" id="fname" placeholder="First Name">
						</div>
						<div class="in c">
							<input type="text" onkeyup="letters(this)" class="form-control input mname" name="mname" autocomplete="off" value="" placeholder="Middle Name">
						</div>
						<div class="in d"><input onkeyup="letters(this)" type="text" class="form-control input lname" name="lname" autocomplete="off" value="" placeholder="Last Name">
						</div>
					<!-- Email Address -->
						<div class="in e">
							<label class="user" >Home Address</label>
						</div>
						<div class="address-input in f">
						<div class="key"><i class="fad fa-address-card"></i></div><input type="text" class="form-control input address" name="address" autocomplete="off" value="">
						</div>
					<!--  -->
						<div class="in g">
							<label  class="user">Email Address</label>
						</div>
						<div class="email-input in h">
							<div class="key"><i class="fad fa-envelope"></i></div><input type="email" required class="form-control input email" id="email" name="email" autocomplete="off" value="">
						</div>

						<div class="in i">
							<label for="formGroupExampleInput9" class="user">Contact Number</label>
						</div>
						<div class="in j">
							<div class="key" style="width: 50px;"><i class="fad fa-mobile-alt"></i></div><input type="number" min="13" max="13" class="form-control input contact" name="contact" autocomplete="off" value="">
						</div>

						<div class="in k">
							<label for="formGroupExampleInput9" class="user">Gender</label>
						</div>
						<div class="gender-input in l">
							<div class="key" style="width: 50px;"><i class="fad fa-venus-mars"></i></div>
							<select class="form-select form-select-sm gender" aria-label=".form-select-sm example">
								<option selected value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>

						<div class="in m">
							<label class="user">Username</label>
						</div>
						<div class="username-input in n">
							
							<div class="key" style="width: 39px!important; padding: 0"><i class="fad fa-user"></i></div><input type="text" class="form-control input username" name="username" autocomplete="off" value="">
						</div>

						<div class="in o">
							<label class="user">Password</label>
						</div>
						<div class="password-input in p">
						<div class="key" style="width: 50px;"><i class="fad fa-key"></i></div><input type="password" class="form-control input password" name="password" autocomplete="off" value="">
							
						</div>

						<div class="in q">
							<label class="user">Re-enter Password</label>
						</div>
						<div class="retypePass-input in r">
						<div class="key" style="width: 50px;"><i class="fad fa-key"></i></div><input type="password" class="form-control input repassword" name="contact" autocomplete="off" value="">
							
						</div>

						<div class="in t">
							<label class="user">Photo</label>
						</div>
						<div class="image-input in u">
						<div class="key" style="width: 39px;"><i class="fad fa-images"></i></div><input type="file" class="form-control input photo" name="photo" id="photo" value="">
							
						</div>

						<div class="btns in s">
							<button type="button" class="btn" id="cancel" name="cancel" value="Cancel">Cancel</button>
							<button type="button" class="btn submit"  name="submit" id='submit' value="Sub">Submit</button></div>
							<div class="fixing">
								<h5 style="font-weight: bolder">Submitting.....</h5>
								<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
							</div>
								
							

						</div>
						
				 	</div>
				 	
					<!-- <script src="js/validator.js"></script>
					<script src="js/jqueryForm.js"></script> -->

				</form>
			</div>
		<div class="back">
			<div class="verify">
				<div class="verifyHeader">Verification</div>
					<div class="parDiv"><p>Verification Code sent to your provided email address</p></div>
					<p class="par">Please check your email and copy the code we sent to you then paste it here..</p>
					
					<div class="hand">
					<div class="code-input in">
					<div class="key codes" style="width: 40px;"><i class="fad fa-hand-point-right"></i></div><input maxlength='6' type="text" class="form-control input code" name="code" autocomplete="off" value="">
						
					</div>
					</div>
					<div class="btns in">
							<button type="button" class="btn" id="exit" name="exit">Cancel</button>
							<button type="button" class="btn" name="sub" disabled="true" id='sub'>Submit</button></div>
							

						</div>
					</div>	
			</div>
 	</div>	
	 
	 
		<script type="text/javascript"src="js/emailjs.js"></script>
		<script type="text/javascript">
			(function() {
				emailjs.init("user_wCJhR96h8eW06rGggEZbT");
			})();
		</script>
	 	<script src="js/signup.js"></script>
		</script>
 	
 </body>