
				

        <?php  

		?>
		<style>
		.form-control:focus, .form-select:focus {
			color: #212529;
			background-color: #fff;
			border-color: #0E9749;
			outline: 0;
			box-shadow: 0 0 0 0.1em #0E9749 inset!important;
		}
		</style>
		
		<!-- Handler 3 -->
		<div class="handler3 handChildren">
			<div class="dashboard_title">Profile</div>
		</div>

		<!-- Handler 4 -->
		<div class="handler4 handChildren">
			<div class="dashboard_title">Subjects</div>
			<div class="sched">
			<label>Course Description</label>
            	<input type="text" id="coursedesc" class="form-control">
            	<br>
            <label>Course Type</label>
			<select class="form-select form-select-sm" style="height: 40px" id="coursetype" aria-label=".form-select-sm bach" name="bach">
				<option value="1">Executive Class (2-year Course)</option>
				<option value="2">Bachelor's Degree (4-year Course)</option>
				<!-- <option value="3">Certifcation (2-year Course)</option>
				<option value="4">Senior High</option> -->
			</select>
			<button class="btn btn1" style="border: 2px solid #aaa; 
				background: #aaaa88; margin-top: 20px; font-weight: bolder">Submit
			</button>
			</div>


		</div>

		<!-- Handler 5 -->
		<div class="handler5 handChildren">
			<div class="dashboard_title" id="subjectHeader">Semester Subject Scheduling</div>
			<div class="menuSched position-relative">
				<div class="lineSched"></div>
				<div class="enrollPeriod btSched" data-tag="0">
					Enrollment Period Assignment
				</div>
				<div class="subjectSched btSched" data-tag="1">
					Subject Scheduling
				</div>
				<div class="courseLists btSched" data-tag="2">
					Course Schedule Lists
				</div>
			</div>
		<!-- Handler Base 1 -->
		<div class="handlerBase schedChild">
			<div class="form-group sched">
			<h5 class="labelTitle" style="margin-top: 10px;">Enrollment Period</h5>
			<p style="font-size: 10pt"><em>This is the length of days students should have to enroll.<br>Set the Enrollment period of the Course first before assigning subjects to its semester.</em></p>
			
			</div>

			<div class="form-group sched schedContent position-relative">
				<div class="setupSched position-absolute">Not Set</div>
				<h6 class="labelTitle" style="margin-top: 10px;">Executive Class - Bachelor's Degree (Two-year Courses)</h6>
				<div class="schedTime1">
					<label for="start">Enrollment Start</label>
				<div class="date">
					<input type="date" name="start" class="form-control execDateStart start">
					<label class="labelDateStart"></label></div>
				</div>
				<div class="schedTime2">
					<label for="start">Enrollment End</label>
					<div class="date">
						<input type="date" name="end" class="form-control execDateEnd end">
						<label class="labelDateEnd"></label>
						
					</div>
				</div>
				<button class="deletePeriod position-absolute " data-id="1">Delete <i class="fad fa-trash"></i></button>
				<button class="setBtn position-absolute setupBtn" data-id="1">Setup <i class="fad fa-calendar"></i></button>
			</div>

			<div class="form-group sched schedContent position-relative">
			<div class="setupSched position-absolute">Not Set</div>
				<h6 class="labelTitle" style="margin-top: 10px;">Regular Class - Bachelors Degree (Four-year Courses)</h6>
				<div class="schedTime1">
				
					<label for="start">Enrollment Start</label>
					
					<div class="date">
						<input type="date" name="start" class="form-control reg4yrDateStart start">
						<label class="labelDateStart"></label>
					</div>
				</div>
				<div class="schedTime2">
					<label for="start">Enrollment End</label>
					<div class="date">
						<input type="date" name="end" class="form-control reg4yrDateEnd end">
						<label class="labelDateEnd"></label>
					</div>
				</div>
				<button class="deletePeriod position-absolute" data-id="2" data-period-id="">Delete <i class="fad fa-trash"></i></button>
				<button class="setBtn position-absolute setupBtn" data-id="2">Setup <i class="fad fa-calendar"></i></button>
			</div>

			<!-- <div class="form-group sched schedContent position-relative">
			<div class="setupSched position-absolute">Not Set</div>
				<h6 class="labelTitle" style="margin-top: 10px;">Certification (Two-year Courses)</h6>
				<div class="schedTime1">
				
					<label for="start">Enrollment Start</label>
					<div class="date">
						<input type="date" name="start" class="form-control reg2yrDateStart start">
						<label class="labelDateStart"></label>	
					</div>
				</div>
				<div class="schedTime2">
					<label for="start">Enrollment End</label>
					<div class="date">
						<input type="date" name="end" class="form-control reg2yrDateEnd end">
						<label class="labelDateEnd"></label>
					</div>
				</div>
				<button class="deletePeriod position-absolute" data-id="3">Delete <i class="fad fa-trash"></i></button>
				<button class="setBtn position-absolute setupBtn" data-id="3">Setup <i class="fad fa-calendar"></i></button>
			</div> -->

			<!-- <div class="form-group sched schedContent position-relative">
			<div class="setupSched position-absolute">Not Set</div>
				<h6 class="labelTitle" style="margin-top: 10px;">Senior High</h6>
				<div class="schedTime1">
					<label for="start">Enrollment Start</label>
					<div class="date">
						<input type="date" name="start" class="form-control seniorDateStart start">
						<label class="labelDateStart"></label>
						</div>
					</div>
				<div class="schedTime2">
					<label for="start">Enrollment End</label>
					<div class="date">
						<input type="date" name="end" class="form-control seniorDateEnd end">
						<label class="labelDateEnd">Yes</label>
						</div>
					</div>
				<button class="deletePeriod position-absolute" data-id="4">Delete <i class="fad fa-trash"></i></button>
				<button class="setBtn position-absolute setupBtn" data-id="4">Setup <i class="fad fa-calendar"></i></button>
			</div> -->
			
		</div>

		<!-- Handler Base 2 -->
		<div class="handlerBase2 schedChild">
		<div class="form-group sched" style="margin-top: 10px">
			<h6 class="labelTitle">Degree Levels</h6>
			<div class="form-check">
				<input class="form-check-input  radioButtons" type="radio" name="radios" id="exec" value="1" checked>
				<label class="form-check-label" for="exampleRadios1">
					Executive Class - Bachelors Degree (Two-year Courses)
				</label>
			</div>

			<div class="form-check">
				<input class="form-check-input  radioButtons" type="radio" id="4yrs" name="radios" value="2">
				<label class="form-check-label" for="exampleRadios1">
					Regular Class - Bachelors Degree (Four-year Courses)
				</label>
			</div>

			<!-- <div class="form-check">
				<input class="form-check-input  radioButtons" type="radio" id="2yrs" name="radios" value="3">
				<label class="form-check-label" for="exampleRadios1">
					Certification (Two-year Courses)
				</label>
			</div> -->

			<!-- <div class="form-check">
			<input class="form-check-input  radioButtons" type="radio" id="senior" name="radios" value="4">
				<label class="form-check-label" for="exampleRadios1">
					Senior High
				</label>
			</div> -->
		</div>
		<div class="form-group sched">
			<h6 class="labelTitle">Course</h6>
			<select class="form-select form-select-sm" style="display: block"
				id="courseSelections">

			</select>
			<h6 class="labelTitle" style="margin-top: 20px;">Year Level</h6>
			<select class="form-select" style="display: block" 
				id="yearSelections" >

			</select>

			</select>
			<h6 class="labelTitle" style="margin-top: 20px;">Year Semester</h6>
			<select class="form-select form-select-sm" style="display: block"
				id="semesterSelections">

			</select>
		</div>

		<div class="form-group sched">
			<h6 class="labelTitle">Subjects Selections <em style="font-size:10pt; color: #555">( You can only assign a maximum of 8 subjects )</em></h6>
			<div class="multipleSelections">
				<label for="" class="labelSubjectSelection">Subject <span class="strSpan">1</span></label>
				<div class="form-group subsJect" id="subsJect">
				<select class="form-select subjectSelections" style="display: block">
				</select>
				<h6 class="labelTitle art"></h6>
			</div>
			</div>
			<div class="form-group subsButtons">
			<div class="addSubjectSched">
				<div class="key itemKey">
					<i class="fas fa-plus-circle" style="color: #209c52"></i> 
				</div><span>Add another subject</span>
			</div>	

			<div class="deleteSubjectSched">
				<div class="key itemKey">
					<i class="fas fa-minus-circle" style="color: #bf6161"></i> 
				</div><span>Delete one subject</span>
			</div>	
			</div>
		</div>
			
		</div>

		<!-- Handler Base 3 -->
		<div class="handlerBase3 schedChild">
			<div class="sched pose">
			<div class="dashboard_title dashes" style="margin-top: 10px;">Executive Class - Bachelor's Degree (Two-year Courses)</div>
			<div class="sched pose2">
			<div class="forming">
				<div>
					<h6 class="courseName">Year Level</h6>
				<select id="selectorYear2" class="form-select yearSelect" disabled>
					<option value="10">N/A</option>
				</select>
				</div>	
				<div>
					<h6 class="courseName">Semester</h6>
				<select id="selectorSemester1" class="form-select semesterSelector">
					<option value="10">1st Module</option>
					<option value="11">2nd Module</option>
					<option value="12">3rd Module</option>
					<option value="13">4th Module</option>
					<option value="14">5th Module</option>
					<option value="15">6th Module</option>
				</select>
				</div>
			</div><table class="table schedTable">
						<thead>
							<tr>
								<th style="width: 50%">Course</th>
								<th style="width: 10%">Year Level</th>
								<th style="width: 15%">Semester</th>
								<th style="width: 10%">Status</th>
								<th style="width: 15%">Action</th>
							</tr>
						</thead>

						<tbody>
							
						</tbody>
					</table>
			</div>
			

			</div>

			<div class="sched pose">
			<div class="dashboard_title dashes" style="margin-top: 10px;">Regular Class - Bachelors Degree (Four-year Courses)</div>
			<div class="sched pose2">
			<div class="forming">
				<div>
					<h6 class="courseName">Year Level</h6>
				<select id="selectorYear2" class="form-select yearSelect">
					<option value="20">1st Year</option>
					<option value="21">2nd Year</option>
					<option value="22">3rd Year</option>
					<option value="23">4th Year</option>
				</select>
				</div>	
				<div>
					<h6 class="courseName">Semester</h6>
				<select id="selectorSemester2" class="form-select semesterSelector">
					<option value="20">1st Semester</option>
					<option value="21">2nd Semester</option>
				</select>
				</div>
			</div>
					<table class="table schedTable">
						<thead>
							<tr>
							<th style="width: 50%">Course</th>
								<th style="width: 10%">Year Level</th>
								<th style="width: 15%">Semester</th>
								<th style="width: 10%">Status</th>
								<th style="width: 15%">Action</th>
							</tr>
						</thead>

						<tbody>
							
						</tbody>
					</table>
			</div>
			</div>

			<!-- <div class="sched pose">
			<div class="dashboard_title dashes" style="margin-top: 10px;">Certification (Two-year Courses)</div>
			<div class="sched pose2">
				<div class="forming">
				<div>
				<h6 class="courseName">Year Level</h6>
				<select id="selectorYear3" class="form-select yearSelect">
					<option value="30">1st Year</option>
					<option value="31">2nd Year</option>
				</select>
				</div>	
				<div>
					<h6 class="courseName">Semester</h6>
				<select id="selectorSemester3" class="form-select semesterSelector">
					<option value="30">1st Semester</option>
					<option value="31">2nd Semester</option>
				</select>
				</div>
			</div>
					<table class="table schedTable">
						<thead>
							<tr>
							<th style="width: 50%">Course</th>
								<th style="width: 10%">Year Level</th>
								<th style="width: 15%">Semester</th>
								<th style="width: 10%">Status</th>
								<th style="width: 15%">Action</th>
							</tr>
						</thead>

						<tbody>
							
						</tbody>
					</table>
			</div>
			</div> -->

			<!-- <div class="sched pose">
			<div class="dashboard_title dashes" style="margin-top: 10px;">Senior High</div>
			<div class="sched pose2">
				<div class="forming">
				<div>
					<h6 class="courseName">Year Level</h6>
				<select id="selectorYear4" class="form-select yearSelect">
					<option value="40">Grade 11</option>
					<option value="41">Grade 12</option>
				</select>
				</div>	
				<div>
					<h6 class="courseName">Semester</h6>
				<select id="selectorSemester4" class="form-select semesterSelector">
					<option value="40">1st Semester</option>
					<option value="41">2nd Semester</option>
				</select>
				</div>
			</div>
					<table class="table schedTable">
						<thead>
							<tr>
							<th style="width: 50%">Course</th>
								<th style="width: 10%">Year Level</th>
								<th style="width: 15%">Semester</th>
								<th style="width: 10%">Status</th>
								<th style="width: 15%">Action</th>
							</tr>
						</thead>

						<tbody>
							
						</tbody>
					</table>
			</div>
			</div> -->
		</div>

		<div class="addSavedSubjects">Submit</div>
		<!-- <button id="addsBtn">Submit</button> -->
		</div>

		<!-- Handler 6 -->
		<div class="handler6 handChildren">
			<div class="dashboard_title">Courses</div>
			<div class="loader-confirm">
				<div class="labelTitle labs">Confirm delete</div>
				<div class="btnHandler">
					<button class="confirmNo">No</button>
					<button class="confirmYes">Yes</button>
				</div>
			</div>
		</div>

		<!-- end section -->
			</section>
		</div>
	</div>
				<div class="subjectFixed">
					<div class="credentials" data-search="">
						<div class="dashboard_title position-relative credentialTitle">Student Information 
								<div class="key closing"><i class="fad fa-times-circle"></i></div>

						</div>
						<div class="menusCredential">
							<div class="basic_info credchild foc">Basic Information</div>
							<div class="credential credchild">Credentials</div>
							<div class="address credchild">Address</div>
							<div class="parents credchild">Parents Information</div>
							<div class="guardian credchild">Guardian</div>
							<div class="education credchild">Education</div>
							<div class="education credchild">Subjects</div>
							<div class="lineCredential"></div>
						</div>
				<div class="menu_handler">

				<!-- Menu 1 -->
					<div class="menuChild1 contentChild" style="display: block">
						<div class="form-group fn">
							<label for="fname">First Name</label>
							<input type="text" class="form-control fname basic" name="fname" onkeyup="letters(this)"  autocomplete="off" value="">
						</div>

						<div class="form-group mn">

							<label for="mname">Middle Name</label>
							<input type="text" class="form-control mname basic" spellcheck="on" name="mname" onkeyup="letters(this)" autocomplete="off" value="">
						</div>

						<div class="form-group ln">
							<label for="lname">Last Name</label>
							<input type="text" class="form-control lname basic" name="lname" onkeyup="letters(this)" autocomplete="off" value="">
						</div>

						<!-- ------------------- -->
						<center><hr width="100%" style="margin: 40px"></center>
						<!-- ------------------- -->

						<div class="form-group gd">
							<label for="gender">Gender</label>
							<select class="form-select form-select-sm gender basic" aria-label=".form-select-sm example" id="gender">
								<option value="1">MALE</option>
								<option value="2">FEMALE</option>
							</select>
						</div>

						<div class="form-group cs">
							<label for="civil_status">Civil Status</label>
							<select class="form-select form-select-sm statusSelect basic" id="civil_status" aria-label=".form-select-sm example" name="civil_status">
								<option value="1">SINGLE</option>
								<option value="2">MARRIED</option>
								<option value="3">WIDOW</option>
							</select>
						</div>

						<div class="form-group rl">
							<label for="religion">Religion</label>
							<input type="text" class="form-control religion basic" name="religion" value="">
						</div>

						<div class="form-group nl">
							<label for="nationality">Nationality</label>
							<input type="text" class="form-control nationality basic" name="nationality" value="">
						</div>

						<div class="form-group bd">
							<label for="lname">Date of Birth</label>
							<input type="date" class="form-control bday basic" name="lname" autocomplete="nope" value="">
						</div>

						<div class="form-group bp">
							<label for="birthplace">Place of Birth</label>
							<input type="text" class="form-control bplace basic" name="birth_place" value="">
						</div>

						
					</div>

					<!-- Menu 2 -->
					<div class="menuChild2 contentChild">

						<div class="form-group">
							<label for="email">Email Address</label>
							<input type="email" class="form-control email address" name="email" value="">
						</div>
						<div class="form-group">
							<label for="religion">Username</label>
							<input type="text" disabled="true" class="form-control user address" name="username" value="">
						</div>
						<label class="subsLabels">Attached Requirements</label><br>
						<div>
						<div class="gridRequire">
						<div class="placeItems">
						<label style="font-weight: bolder; font-size: 11pt">Form 137</label>
						<label style="font-size: 9pt"><em>(Back to back)</em></label>
							<div class="form137">
							    <img class="imgRequired" src=""/>
								<img class="imgRequired"/>
							</div>
						</div>    
						<div class="placeItems">
						<label style="font-weight: bolder;font-size: 11pt">Form 138</label>
						<label style="font-size: 9pt"><em>(Back to back)</em></label>
							<div class="form138">
							    <img class="imgRequired"/>
								<img class="imgRequired"/>
							</div>
						</div>
						<div class="placeItems">
						<label style="font-weight: bolder;font-size: 11pt">PSA or Birth Certificate</label>
						<label style="font-size: 9pt"><em>(Back to back)</em></label>
					        <div class="psa">
							    <img class="imgRequired"/>
								<img class="imgRequired"/>
							</div>
						</div>
						<div class="placeItems">
						<label style="font-weight: bolder;font-size: 11pt">COE ( For Executive Class )</label><br>
					        <div class="coe">
							    <img class="imgRequired"/>
							</div>

							<div class="emptyImage">
							    <span>N/A</span>
							</div>
						</div>
						</div>

						<!-- <div class="enrolledTableFooter addSub">
								<div class="studentAddSubject">
									<i class="fad fa-plus-circle"  style="margin-right: 10px; font-size: 14pt"></i>
									<span style="font-weight: bolder">Add Subject/s</span>
								</div>
							</div> -->
						</div>
					</div>

					<!-- Menu 3 -->
					<div class="menuChild3 contentChild">
						<div class="form-group">
							<label for="homeAddress">Complete Address</label>
							<input type="text"  class="form-control add address" name="homeAddress" value="">
						</div>

						<div class="form-group">
							<label for="contact">Contact Number</label>
							<input type="text" maxlength="13" onkeyup="numbers(this)" class="form-control homeCont address" name="contact" value="">
						</div>

						<div class="form-group">
							<label for="province">Provincial Address</label>
							<input type="text" disabled="true" class="form-control province address" name="province" value="">
						</div>

						<div class="form-group">
							<label for="provCont">Contact Number</label>
							<input type="text" disabled="true" maxlength="13" onkeyup="numbers(this)" class="form-control provinceCont address" name="provCont" value="">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch2" name="check">
							<label class="custom-control-label llb3" for="check">Check if Provincial Address is applicable</label>
						</div>
					</div>

					<!-- Menu 4 -->
					<div class="menuChild4 contentChild">
						<div class="form-group">
							<label for="mother">Mother's Maiden Name <i style="font-size: 8pt">( Mother's name before she married )</i></label>
							<input type="text" class="form-control motherFname parent" onkeyup="letters(this)" name="motherFname" placeholder="First Name" value="">
						</div>

						<div class="form-group">
							<input type="text" class="form-control motherMname parent" onkeyup="letters(this)" name="motherMname" placeholder="Middle Name" value="">
						</div>

						<div class="form-group">
							<input type="text" class="form-control motherLname parent" onkeyup="letters(this)" name="motherLname" placeholder="Last Name" value="">
						</div>

						<div class="form-group">
							<label for="motherAddress">Address</label>
							<input type="text" class="form-control motherAddress parent" name="motherAddress" value="">
						</div>

						<div class="form-group">
							<label for="motherContact">Contact Number</label>
							<input type="text" onkeyup="numbers(this)" class="form-control motherContact parent" name="motherContact" value="">
						</div>

						<center><hr style="margin: 40px"></center>

						<div class="form-group">
							<label for="fatherFname">Father's Name</label>
							<input type="text" class="form-control fatherFname parent" onkeyup="letters(this)" name="fatherFname" placeholder="First Name" value="">
						</div>

						<div class="form-group">
							<input type="text" class="form-control fatherMname parent" onkeyup="letters(this)" name="fatherMname" placeholder="Middle Name" value="">
						</div>

						<div class="form-group">
							<input type="text" class="form-control fatherLname parent" onkeyup="letters(this)" name="fatherLname" placeholder="Last Name" value="">
						</div>

						<div class="form-group">
							<label for="fatherAddress">Address</label>
							<input type="text" class="form-control fatherAddress parent" name="fatherAddress" value="">
						</div>

						<div class="form-group">
							<label for="fatherContact">Contact Number</label>
							<input type="text" class="form-control fatherContact parent" onkeyup="numbers(this)" name="fatherContact" value="">
						</div>


					</div>
					<!-- Menu 5 -->
					<div class="menuChild5 contentChild">
						<div class="form-group">
							<label for="guardianFname">Guardian <i style="font-size: 8pt">( Person to notify in case of emergency )</i></label>
							<input type="text" class="form-control guardianFname guardian" onkeyup="letters(this)" style="width: 40%" name="guardianFname" placeholder="First Name" value="">
						</div>

						<div class="form-group">
							<input type="text" class="form-control guardianMname guardian" onkeyup="letters(this)" maxlength='1' style="width: 20%" name="guardianMname" placeholder="Middle Initial" value="">
						</div>
						
						<div class="form-group">
							<input type="text" class="form-control guardianLname guardian" onkeyup="letters(this)" style="width: 40%" name="guardianLname" placeholder="Last Name" value="">
						</div>

						<div class="form-group">
							<label for="guardianAddress">Home Address</label>
							<input type="text"  class="form-control guardianAddress guardian" name="guardianAddress" value="">
						</div>

						<div class="form-group">
							<label for="guardianContact">Contact Number</label>
							<input type="text"  class="form-control guardianContact guardian" onkeyup="numbers(this)" style="width: 40%" name="guardianContact" value="">
						</div>
					</div>

					<!--Education Menu 6-->
					<div class="menuChild6 contentChild">
						<!-- elementary -->
						<h6 style="font-weight:bolder;margin:10px 40px">Elementary School Education Attainment</h6>
						<div class="form-group">
							<label for="elemName">School Name</label>
							<input type="text" class="form-control elemName educ" name="elemName" value="">
						</div>

						<div class="form-group">
							<label for="elemAdd">School Address</label>
							<input type="text"  class="form-control elemAdd educ" name="elemAdd" value="">
						</div>

						<div class="form-group">
							<label for="elemDeg">Year Degree Earned</label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" class="form-control elemDeg educ" name="elemDeg" value="">
						</div>
						<hr style="margin: 40px">


						<!-- high school -->
						<h6 style="font-weight:bolder;margin:10px 40px">High School Education Attainment</h6>
						<div class="form-group">
							<label for="highName">School Name</label>
							<input type="text"  class="form-control highName educ" name="highName" value="">
						</div>

						<div class="form-group">
							<label for="highAdd">School Address</label>
							<input type="text"  class="form-control highAdd educ" name="highAdd" value="">
						</div>

						<div class="form-group">
							<label for="highDegree">Year Degree Earned</label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" class="form-control highDegree educ" name="highDegree" value="">
						</div>

						<hr style="margin: 40px">

						<!-- senior high -->
						<h6 style="font-weight:bolder;margin:10px 40px">Senior High School Education Attainment</h6>
						
						<div class="form-group">
							<label for="snName">School Name</label>
							<input type="text" disabled="true" class="form-control snName educ" name="snName" value="">
						</div>

						<div class="form-group">
							<label for="snAdd">School Address</label>
							<input type="text" disabled="true" class="form-control snAdd educ" name="snAdd" value="">
						</div>

						<div class="form-group">
							<label for="snDegree">Year Degree Earned</label>
							<input type="text" disabled="true" maxlength="4" onkeyup="numbers(this)" class="form-control snDegree educ" name="snDegree" value="">
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
							<input type="text" disabled="true" class="form-control collName educ" name="collName" value="">
						</div>

						<div class="form-group">
							<label for="collAdd">School Address</label>
							<input type="text" disabled="true" class="form-control collAdd educ" name="collAdd" value="">
						</div>

						<div class="form-group">
							<label for="collCourse">Course</label>
							<input type="text" disabled="true" class="form-control collCourse educ" name="collCourse" value="">
						</div>

						<div class="form-group">
							<label for="collDegree">Year Degree Earned</label>
							<input type="text" maxlength="4" onkeyup="numbers(this)" disabled="true" class="form-control collDegree educ" name="collDegree" value="">
						</div>

						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ch4" name="checkCollege">
							<label class="custom-control-label llb5" for="checkCollege">Check if not applicable</label>
						</div>

				
					</div>
					<div class="menuChild7 contentChild">
						<div class="subTile"><h5 style="font-weight: bolder;  margin: 0;">Subject Lists</h5>
						<div class="menuSubject">Delete <i class="fa fa-trash"></i></div></div>
						<div class="baseParent">
						<div class="baseSubjectTable">
							<div class="noSubjects">
								Please add some subjects<br><i class="fad fa-plus-circle noSubjectAdded h1 mt-2"></i>
							</div>
							<table class="table subjectTableTab position-relative">
								
								<thead>
									<tr>
										<!-- <th style="width: 5%">
										<div class="form-check subjectCheckbox"
											data-toggle="tooltip" 
											data-placement="right" 
											title="Select All">
                                        	<input type="checkbox" class="form-check-input allSubjectCheck" data-checkbox="">
                                    	</div>  
										</th> -->
										<th style="width: 10%">Subject Code</th>
										<th style="width: 45%">Subject Description</th>
										<th style="width: 10%">Units</th>
										<th style="width: 15%">Schedule</th>
										<th style="width: 10%">Class Start</th>
										<th style="width: 10%">Class End</th>
										<!-- <th style="width: 20%">Action</th>-->
									</tr>
								</thead>
								<tbody>


								</tbody>	
							</table>
							
						</div>
						<br>
						
					</div>	
				</div>	
					<div class="fixedSaved">Save Changes</div>	
</div>
				<div class="fixed">
						<div class="headFixed">Errors <div class="count"><span></span></div><i class="far fa-times close" style="float: right;"></i></div>
						<div class="fixedContent">
						
						</div>
						
					</div>
					</div>
				</div>

					<div class="subFixed">
						<!-- finalDeci -->
						<div class="finalDeci">
							<div class="finalTitle"></div>
							<div class="_formDeci">
								<button class="no"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes" data-category="">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>

						<!-- finalDeci3 -->
						<div class="finalDeci3">
							<div class="finalTitle3"></div>
							<div class="_formDeci3">
								<button class="no3"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes3">Yes<i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>

						
					</div>

					<div class="subFixed2">
						<!-- finaldeci2 -->
						<div class="finalDeci2">
							<div class="finalTitle2"></div>
							<div class="_formDeci2">
								<button class="no2"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes2" data-category="">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>
						<!-- finaldeci4 -->
						<div class="finalDeci4">
							<div class="finalTitle4"></div>
							<div class="_formDeci4">
								<button class="no4"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes4" data-category="">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>
						<!-- finaldeci5 -->	
						<div class="finalDeci5">
							<div class="finalTitle5"></div>
							<div class="_formDeci5">
								<button class="no5"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes5" data-category="">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>
						
					</div>

				<div class="subjectListing">
					<!-- subject table -->
					<div class="baseSubjectListings"><div class="dashboard_title subjectListingTitle">Lists of Subjects
								<div class="key closing2"><i class="fad fa-times-circle"></i></div>
							</div>
							<div class="titleBars">
								<div style="width: 6%"></div>
										<div style="width: 14%" style="text-align:center!important">Subject Code</div>
										<div style="width: 51%;text-align:left!important">Subject Description</div>
										<div style="width: 15%">Units</div>
										<div style="width: 10%">Action</div>
								</div>
						<div class="subjectContentListing">
							<div class="noSubjects2">
								You already added all subjects<br><i class="fad fa-check-circle noSubjectAdded2 h1 mt-2"></i>
							</div>
							<table class="table subjectListingTable">
							
								<tbody>

								</tbody>
							</table>
						</div>
						<div class="enrolledTableFooter subjectListingFooter">
							<button class="multipleAdd" data-type="">
							<i class="fad fa-check-circle"  style="margin-right: 10px; font-size: 14pt"></i>
									<span style="font-weight: bolder">Confirm</span>
							</button>
						</div>
					</div>

					<div class="listingSched">
						<div class="dashboard_title position-relative schedTilt">Time schedule setup
							<div class="key closing4"><i class="fad fa-times-circle"></i></div>
								
					</div>
					<div class="listingContent" style="padding-top: 60px">
						<div class="firstListing">
							<label style="
										font-size: 15pt;
										text-align: center;
										font-weight: bolder;">Class Start<br> 
										<span><em style="font-size: 9pt">(Set the Class Start time)</em></span></label>
							<!-- <div class="timeAdjustUp">
								<div class="times u1"><i class="fas fa-chevron-up"></i></div>
								<div class="times u1"><i class="fas fa-chevron-up"></i></div>
								<div class="times u1"><i class="fas fa-chevron-up"></i></div>
							</div>
							<div class="timeStart">
								<div class="time t1">1</div>
								<div class="time t1">2</div>
								<div class="time t1">3</div>
							</div>
							<div class="timeAdjustDown">
								<div class="times d1"><i class="fas fa-chevron-down"></i></div>
								<div class="times d1"><i class="fas fa-chevron-down"></i></div>
								<div class="times d1"><i class="fas fa-chevron-down"></i></div>
							</div>
 -->
 							<div class="sched">
 								<div class="u1 position-relative">
 								<input type="time" class="form-control classStart" style="width: 100%!important;"></div>
 							</div>
							<label class="timeStartLabel"></label>
						</div>
						<div class="secondListing">
							<label style="
										font-size: 15pt;
										text-align: center;
										font-weight: bolder;">Class End<br> 
										<span><em style="font-size: 9pt">(Set the Class End time)</em></span></label>
							<!-- <div class="timeAdjustUp">
								<div class="times u2"><i class="fas fa-chevron-up"></i></div>
								<div class="times u2"><i class="fas fa-chevron-up"></i></div>
								<div class="times u2"><i class="fas fa-chevron-up"></i></div>
							</div>
							<div class="timeEnd">
								<div class="time t2">01</div>
								<div class="time t2">00</div>
								<div class="time t2">3</div>
							</div>
							<div class="timeAdjustDown">
								<div class="times d2"><i class="fas fa-chevron-down"></i></div>
								<div class="times d2"><i class="fas fa-chevron-down"></i></div>
								<div class="times d2"><i class="fas fa-chevron-down"></i></div>
							</div>

							 -->
							 <div class="sched schedStarting">
							 	<div class="u2 position-relative">
 								<input type="time" class="form-control classEnd" style="width: 100%!important;"></div>
 							</div>
							<label class="timeStartLabel"></label>

						</div>
						<div class="scheduleTab" style="grid-column: 1/3;
						margin:  20px auto;
														display: grid;
														grid-template-columns: repeat(7, 1fr);
														grid-gap: 3px;
														height: auto;
														place-items: center;">
														<label style="grid-column: 1/8;
																	font-size: 15pt;
																	text-align: center;
																	font-weight: bolder;">Schedule<br> 
																	<span><em style="font-size: 9pt">(Click the days of subject schedule)</em></span></label>
							<div class="boxes" data-value="M">Monday</div>
							<div class="boxes" data-value="T">Tuesday</div>
							<div class="boxes" data-value="W">Wednesday</div>
							<div class="boxes" data-value="Th">Thursday</div>
							<div class="boxes" data-value="F">Friday</div>
							<div class="boxes" data-value="S">Saturday</div>
							<div class="boxes" data-value="Su">Sunday</div>
							
						</div>
					</div>
						<button class="successSched">Set</button>
				</div>
					<!-- validation delete registration -->

				</div>

				<div class="ticketFixed">
					<!-- <div class="closing"><i class="fas fa-times-circle closeTicketing" style="font-size: 39px;
																						font-size: 39px;
																					    color: #ffffff;
																					    z-index: 12;
																					    top: -345px;
																					    right: 100px;"></i></div> -->
					<div class="basis">
					<div class="dashboard_title dashes int">Subject Lists <div class="key closing3"><i class="fad fa-times-circle"></i></div></div>
						<div class="baseTabSched">
							<table class="table schedTabView">
								<thead>
									<tr>
										<th>Subject Code</th>
										<th>Subject Description</th>
										<th>Units</th>
										<th style="width: 15%;">Schedule</th>
										<th style="text-align: center!important">Class start</th>
										<th>Class end</th>
										<th>Action</th>
									</tr>
									</thead>
									<tbody>

									</tbody>
							</table>
						</div>
						<div class="footer"></div>
					</div>

					<div class="imagePreview">
						<img src="" id="previewImage">
					</div>
				</div>
				

	<script src="js/adminDashboardTab.js"></script>
	<script src="js/adminDashboardTab2.js"></script>
	<script src="js/dataTables.js"></script>
	<script>
	let id = <?php echo $id?>;
	</script>



