
				<!-- Handler 2 -->

				<?php  
			$bool = false;
			$bools = $class = "";
			$nodata = $withdata = "";
			
			
			$exec_number_id = $exec_course = $exec_year_level = $exec_semester = $exec_status = $exec_type = $exec_enrolled = "";
			$reg4yr_number_id = $reg4yr_course = $reg4yr_year_level = $reg4yr_semester = $reg4yr_status = $reg4yr_type = $reg2yr_enrolled = "";
			
			// queries
			$query_course_exec 		= "SELECT * FROM course WHERE course_type = 1";
			$query_course_4yr 		= "SELECT * FROM course WHERE course_type = 2";
		
			$query_existing_reg_executive 	= "SELECT registration_id, registration_ticket_number,
			course_desc, registration_year,registration_sem,registration_status,registration_student_type, registration_date_created,  registration_date_enrolled  
			FROM registration_executive, course WHERE registration_executive.registration_course_id = course.course_id 
			AND registration_username = '$user' AND registration_student_id = $id";
			
			$query_existing_reg_regular_4yr = "SELECT registration_id, registration_ticket_number,
			course_desc, registration_year,registration_sem,registration_status,registration_student_type,registration_date_created, registration_date_enrolled  
			FROM registration_regular_4yr, course WHERE registration_regular_4yr.registration_course_id = course.course_id 
			AND registration_username = '$user' AND registration_student_id = $id";
			
			
			$subject_query = "SELECT * FROM subjects";
			// viewing course datas
			$view_exec 		= mysqli_query($connect, $query_course_exec);
			$view_4yr 		= mysqli_query($connect, $query_course_4yr);

			$view_subjects = mysqli_query($connect, $subject_query);

			// viewing registration histories
			$existingExecutive 		= mysqli_query($connect, $query_existing_reg_executive);
			$existingRegular_4yr 	= mysqli_query($connect, $query_existing_reg_regular_4yr);

			$row_executive 	= mysqli_num_rows($existingExecutive);
			$row_reg_4yr 	= mysqli_num_rows($existingRegular_4yr);

			if($row_executive > 0) {
				$bool = true;
			} else if($row_reg_4yr > 0) {
				$bool = true;
			} 

			if($bool == true) {
				$nodata 	= "none";
				$withdata 	= "";
			} else {
				$nodata 	= "block";
				$withdata 	= "style=\"display: none\"";
			}



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
		<script>let id = "<?php echo $id?>", jdiosio = '<?php echo $password;?>'</script>
		

		<div class="handler2">
			<div class="dashboard_title dashReg">Registration</div>
				<div class="tableBase1">
					<div class="menuReg">
						<div class="form-group courR">
						<label for="" class="courseRegLabel label2">Desired Degree Level</label>
						<div class="form-check">
								<input class="form-check-input execBachRd re" type="radio" name="exampleRadios" id="exBachRd" checked>
								<label class="form-check-label" for="exampleRadios1">
									Executive Class - Bachelors Degree (Two-year Program)
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input bachRd re" type="radio" name="exampleRadios" id="bachRrd">
								<label class="form-check-label" for="exampleRadios1">
									Regular Class - Bachelors Degree (Four-year Program)
								</label>
							</div>

							<!-- <div class="form-check">
								<input class="form-check-input certRd re" type="radio" name="exampleRadios" id="certRrd" value="option1">
								<label class="form-check-label" for="exampleRadios1">
									Certification (Two-year Courses)
								</label>
							</div> -->

							<!-- <div class="form-check">
								<input class="form-check-input seniorRd re" type="radio" name="exampleRadios" id="seniorRrd" value="option1">
								<label class="form-check-label" for="exampleRadios1">
									Senior High
								</label>
							</div> -->
							<label for="exec" class="courseRegLabel">Course <span style="color: red">*</span></label>
								<select class="form-select form-select-sm exec courseSelect" id="exec2" aria-label=".form-select-sm exec" name="exec">
									<?php
									$a = 0;
										while($view_exec_details = mysqli_fetch_assoc($view_exec)):
											$course_name = $view_exec_details['course_desc'];
											$course_id = $view_exec_details['course_id'];
										?>
											<option data-id="1<?php echo $a?>" value="<?php echo $course_id?>"><?php echo $course_name;?></option>
										<?php		
											$a++;
											endwhile;
										?>
								</select>

								<select class="form-select form-select-sm bach courseSelect" id="bach2" aria-label=".form-select-sm bach" name="bach">
									<?php
									$b = 0;
										while($view_4yr_details = mysqli_fetch_assoc($view_4yr)):
											$course_name = $view_4yr_details['course_desc'];
											$course_id = $view_4yr_details['course_id'];
										?>
											<option <option data-id="2<?php echo $b?>" value="<?php echo $course_id?>"><?php echo $course_name;?></option>
										<?php	
										$b++;	
											endwhile;
										?>
								</select>

							</div>
							<div class="form-group selReg">
								<button class="reg">New Registration</button>
								<div class="me">You already have existing registration <br>To cancel it, just delete your recent registration</div>
							</div>
						</div>

						<div class="tableBase table-wrapper-scroll-y my-custom-scrollbar">
							<table class="table .table-borderless " id="table">
								<thead class="thead-dark">
									<tr>
										<th style="width: 30%">Course</th>
										<th style="width: 100px">Year Level</th>
										<th>Semester</th>
										<th>Student Type</th>
										<th>Status</th>
										<th>Date Registration</th>
										<th style="width:auto">Action</th>
									</tr>
								</thead>

								<tbody <?php echo $withdata?>>
									<?php
										$i = 1;
										$bools1 = $class = "";
										$classes = "exec";
										while($exec_details = mysqli_fetch_assoc($existingExecutive)):
											$bools1 = "";
											$exec_id			= $exec_details['registration_id'];
											$exec_course 		= $exec_details['course_desc'];
											$exec_year_level 	= $exec_details['registration_year'];
											$exec_semester 		= $exec_details['registration_sem'];
											$exec_type 			= $exec_details['registration_student_type'];
											$exec_status 		= $exec_details['registration_status'];	
											$exec_date_register = $exec_details['registration_date_created'];
											$class = "exec" . $i;
											if($exec_status == "ENLISTED" || $exec_status == "ONGOING") {
												$bools1 = "disabled"; 
											}
									?>
									
									<tr class="execSubject">
										<td style="font-size: 9pt" class="cou"><?php echo $exec_course?></td>
										<td><?php echo $exec_year_level?></td>
										<td><?php echo $exec_semester?></td>
										<td><?php echo $exec_type?></td>
										<td><div class="strong td<?php echo $class?>"><?php echo $exec_status?></div></td>
										<td><?php echo $exec_date_register?></td>
										<td class="center">
												<button <?php echo $bools1?> class="button delete delete<?php echo $classes?> delete<?php echo $class?>" 
															data-toggle="tooltip" data-placement="right" title="Delete" data-id="<?php echo $exec_id?>" data-studentId="<?php echo $id?>">
													<i class="fas fa-trash-alt"></i>
												</button>
												<button class="button edit edit<?php echo $classes?> edit<?php echo $class?>" 
															data-toggle="tooltip" 
															data-placement="right" title="Info" 
															data-value="<?php echo $classes?>" 
															data-id="<?php echo $exec_id?>"
															data-type="1"
															data-ticket="<?php echo $exec_number_id?>">
															<i class="fas fa-info-circle"></i>
												</button>
										</td>
										<script type="text/javascript">
									$(document).ready(function(){
										let booleanEnrolled<?php echo $classes.$i;?> = "<?php echo $exec_status;?>";
										if(booleanEnrolled<?php echo $classes.$i;?> == "PENDING") {
											$('button.delete<?php echo $class?> i').css('color', "rgb(255, 79, 79)");
										} else if(booleanEnrolled<?php echo $classes.$i;?> == "ENLISTED") {
											$('.delete<?php echo $class?>').attr('disabled', true);
											$('.td<?php echo $class?>').css('background', 'rgb(137, 251, 172)');
										} else if(booleanEnrolled<?php echo $classes.$i;?> == "ONGOING") {
											$('.delete<?php echo $class?>').attr('disabled', true);
											$('.td<?php echo $class?>').css('background', 'rgb(255, 239, 189)');
											$('.td<?php echo $class?>').css('color', 'black');
										}
									});
										
									</script>
									</tr>
									
									<?php
										$i++;
										endwhile;
									?>

									<?php
										$i = 1;
										$classes = "reg4yr";
										$bools3 = $class = "";
										while($reg4yr_details = mysqli_fetch_assoc($existingRegular_4yr)):
											$bools3 = "";
											$reg4yr_id			= $reg4yr_details['registration_id'];
											$reg4yr_course 		= $reg4yr_details['course_desc'];
											$reg4yr_year_level 	= $reg4yr_details['registration_year'];
											$reg4yr_semester 	= $reg4yr_details['registration_sem'];
											$reg4yr_type 		= $reg4yr_details['registration_student_type'];
											$reg4yr_status 		= $reg4yr_details['registration_status'];
											$reg4yr_date_register = $reg4yr_details['registration_date_created'];	

											$class = "4yr" . $i;
											if($reg4yr_status == "ENLISTED" && $reg4yr_status == "ONGOING") {
												$bools3 = "disabled"; 
											}
									?>
									<tr class="reg4yrSubject" >
										<td class="cou"><?php echo $reg4yr_course?></td>
										<td><?php echo $reg4yr_year_level?></td>
										<td><?php echo $reg4yr_semester?></td>
										<td><?php echo $reg4yr_type?></td>
										<td><div class="strong td<?php echo $class?>"><?php echo $reg4yr_status?></div></td>
										<td><?php echo $reg4yr_date_register?></td>
										<td class="center">
												<button <?php echo $bools3?> class="button delete delete<?php echo $classes?> delete<?php echo $class?>" 
																data-toggle="tooltip" 
																data-placement="right" 
																title="Delete" 
																data-value="<?php echo $classes?>" 
																data-id="<?php echo $reg4yr_id?>">
													<i class="fas fa-trash-alt"></i>
												</button>
												<button class="button edit edit<?php echo $classes?> edit<?php echo $class?>" data-toggle="tooltip" 
																data-placement="right" 
																title="Info" 
																data-value="<?php echo $classes?>" 
																data-id="<?php echo $reg4yr_id?>"
																data-type="2"
																data-ticket="<?php echo $reg4yr_number_id?>">
												<i class="fas fa-info-circle"></i>
												</button>
										</td>
										<script type="text/javascript">
									$(document).ready(function(){
										
										let booleanEnrolled<?php echo $classes.$i;?> = "<?php echo $reg4yr_status;?>";
										if(booleanEnrolled<?php echo $classes.$i;?> == "PENDING") {
											$('button.delete<?php echo $class?> i').css('color', "rgb(255, 79, 79)");
											
										} else if(booleanEnrolled<?php echo $classes.$i;?> == "ENLISTED") {
											$('.td<?php echo $class?>').css('background', 'rgb(137, 251, 172)');
											$('.delete<?php echo $class?>').attr('disabled', true);
										} else if(booleanEnrolled<?php echo $classes.$i;?> == "ONGOING") {
											$('.td<?php echo $class?>').css('background', 'rgb(255, 239, 189)');
											$('.td<?php echo $class?>').css('color', 'black');
											$('.delete<?php echo $class?>').attr('disabled', true);
										}
									});
										
									</script>
									</tr>
									
									<?php
										$i++;
										endwhile;
									?>
								</tbody>
							</table>
							<div class="noData" style="display: <?php echo $nodata?>">No Data Found</div>
						</div>
			</div>
			<div class="regTable">
					<div class="contentReg">
                    	<!-- course setup -->
						<div class="setupReg">
							<div class="back_btn"><i class="fas fa-arrow-left turnLeft"></i></div>
                            <div class="cLogo">
                            <i class="fad fa-street-view"></i>
                            <div class="labelSet">Course Setup</div>
                            </div>

                            <div class="baseLine1">
                            <div class="lineSetup l1"></div></div>
                    
                            <div class="gLogo">
                            <i class="fad fa-th-list"></i>
                            <div class="labelSubject">Subjects</div>
                            </div>

							<div class="baseLine2">
                            <div class="lineSetup l2"></div></div>
                    
                            <div class="chLogo">
                            <i class="fad fa-check checking"></i>
                            <div class="labelFinish">Submitted</div>
                            </div>
							<div class="instruction">
								<div class="first">
									<h6 style="padding:10px; background: antiquewhite; font-size: 10pt;font-weight: bolder">Instruction</h6>
									<p class="insMsg">Please attached the following requirements (Digital Copy - <em>image type: .jpg, .jpeg, .png</em>) then after submitting your informations, we will send an email of confirmation that we received your application.</p>
									<h6 style="padding:10px; background: antiquewhite;font-size: 10pt; font-weight: bolder">Requirements</h6>			
									<ul class="ul">
										<li><i>Form 137</i></li>
										<li><i>Form 138</i></li>
										<li><i>PSA Form( <b>Philippine Statistics Office</b> )  or Birth Certificate</i></li>
									</ul>

									<ul class="ul2">
										<li><i>Form 137</i></li>
										<li><i>Form 138</i></li>
										<li><i>PSA Form( <b>Philippine Statistics Office</b> ) or Birth Certificate</i></li>
										<li><i>COE ( <b>Certificate of Employment</b>)</i></li>
									</ul>
									
								</div>
							</div>
						</div>
						<div class="contentHandler">
							<div class="contentTab">
							<h5 style="font-weight: bolder; margin-bottom: 30px; margin-left: 40px"><label class="labelCourse"></label></h5>	
							<div class="halves">
							<div class="firstMain">
							<div class="form-group ch firstHalf">
								
								<!-- 4 years Course -->
									<label for="stType" class="user">Enrollee type <span style="color: red">*</span></label>
									<select disabled class="form-select form-select-sm stType" aria-label=".form-select-sm" name="stType">
										<option value="Old">New Executive Class Student</option>
										<option value="New">New Regular Student</option>
									</select>
								</div>

								<!--  Executive Class -->
								<div class="form-group execYr firstHalf">
									<label for="yearLevel2" class="user">Year Level <span style="color: red">*</span></label>
									<!-- input type="text" class="form-control not_applicable" value="N/A" disabled="true"  -->
									<select class="form-select form-select-sm not_applicable yrSelect" disabled="true" aria-label=".form-select-sm" name="yearLevel2">
										<option value="10">N/A</option>
									</select>
								</div>
								<!-- 4 years Course -->
								<div class="form-group yr firstHalf">
									<label for="yearLevel" class="user">Year Level <span style="color: red">*</span></label>
									<select class="form-select form-select-sm yl yrSelect" aria-label=".form-select-sm" name="yearLevel">
										<option value="20">1st year</option>
										<option value="21">2nd year</option>
										<option value="22">3rd year</option>
										<option value="23">4th year</option>
									</select>
								</div>

								<!-- 2 years Course -->
								<div class="form-group yr2 firstHalf">
									<label for="yearLevel2" class="user">Year Level <span style="color: red">*</span></label>
									<select class="form-select form-select-sm yl2 yrSelect" aria-label=".form-select-sm" name="yearLevel2">
										<option value="30">1st year</option>
										<option value="31">2nd year</option>
									</select>
								</div>
								

								<!-- Senior High -->
								<div class="form-group yr3 firstHalf">
									<label for="yearLevelSn" class="user">Year Level <span style="color: red">*</span></label>
									<select class="form-select form-select-sm yl3 yrSelect" aria-label=".form-select-sm" name="yearLevelSn">
										<option value="40">Grade 11</option>
										<option value="41">Grade 12</option>
									</select>
								</div>
								
								<!-- Executive Class -->
								<div class="form-group semsExecutive firstHalf">
									<label for="semester" class="user">Semester <span style="color: red">*</span></label>
									<select class="form-select form-select-sm semsExec semSelect" aria-label=".form-select-sm" name="semester">
										<option value="10">1st Module</option>
										<option value="11">2nd Module</option>
										<option value="12">3rd Module</option>
										<option value="13">4th Module</option>
										<option value="14">5th Module</option>
										<option value="15">6th Module</option>
									</select>
								</div>
								<!-- 4 years Course, 2 years Course and Senior High-->
								<div class="form-group sems4yr firstHalf">
									<label for="semester" class="user">Semester <span style="color: red">*</span></label>
									<select class="form-select form-select-sm semsReg4yr semSelect" aria-label=".form-select-sm" name="semester">
										<option value="20">1st Semester</option>
										<option value="21">2nd Semester</option>
									</select>
								</div>

								<div class="form-group sems2yr firstHalf">
									<label for="semester" class="user">Semester <span style="color: red">*</span></label>
									<select class="form-select form-select-sm semsReg2yr semSelect" aria-label=".form-select-sm" name="semester">
										<option value="30">1st Semester</option>
										<option value="31">2nd Semester</option>
									</select>
								</div>

								<div class="form-group semsSeniors firstHalf">
									<label for="semester" class="user">Semester <span style="color: red">*</span></label>
									<select class="form-select form-select-sm semsSenior semSelect" aria-label=".form-select-sm" name="semester">
										<option value="40">1st Semester</option>
										<option value="41">2nd Semester</option>
									</select>
								</div>
								</div>
								<div class="secondMain">
								<div class="form-group ch secondHalf">
								
								<!-- Requirements-->
									<label for="tor">Form 137 (Digital Copy) <span style="color: red">*</span></label><br><span style="font-size: 10pt">Front</span>
									<div class="req0" >
									<input type="file" class="form-control requirements r0" id="req0" name="tor"></div><span style="font-size: 10pt">Back</span>
									<div class="req1" ><input type="file" id="req1"class="form-control requirements r1" name="tor"></div>
								</div>

								<div class="form-group ch secondHalf">
								
								<!-- Requirements-->
									<label for="tor">Form 138 (Digital Copy) <span style="color: red">*</span></label><br><span style="font-size: 10pt">Front</span>
									<div class="req2">
									<input type="file" id="req2" class="form-control requirements r2" name="tor"></div><span style="font-size: 10pt">Back</span>
									<div class="req3">
									<input type="file" id="req3" class="form-control requirements r3" name="tor"></div>
								</div>

								<div class="form-group ch secondHalf">
								
								<!-- Requirements -->
									<label for="psa">PSA or Birth Certificate (Digital Copy) <span style="color: red">*</span></label><br><span style="font-size: 10pt">Front</span>
									<div class="req4">
									<input type="file" id="req4" class="form-control requirements r4" name="psa"></div><span style="font-size: 10pt">Back</span>
									<div class="req5">
									<input type="file" id="req5" class="form-control requirements r5" name="psa"></div>
								</div>

								<div class="form-group ch secondHalf execRequire">
								
								<!-- Requirements -->
									<label for="coe">Certificate of Employment (Digital Copy) <span style="color: red">*</span></label><br><span style="font-size: 10pt">Front</span>
									<div class="req6">
									<input type="file" id="req6" class="form-control requirements r6" name="coe"></div>
								</div>
								
								</div>
								</div>
								

								<button class="register" data-id="">Submit</button>
								<div class="notSet">The enrollment for this course's<br>year level and semester is not yet started</div>
							</div>
							
						</div>
                    	
					</div>
					<!-- course registration -->


				</div>

				
			</div>
<!-- this -->
				<!-- registration table -->
				
				

				<!-- Handler 3 -->
				<div class="handler3">
				<div class="dashboard_title">Schedules</div>
				</div>
			</section>
		</div>
	</div>
				<div class="subjectFixed">
					<div class="subjectTable">
					<div class="dashboard_title dash" style="margin-bottom: 10px">
					
					</div>
						
					<div class="handlerSub">
						<div class="formHand">
						<h5 style="margin-left: 20px; font-weight: bolder; position: sticky; top: 0; background: white; width: 100%;">Review</h5>
						<div class="form-group">
							<label for="degree">Degree Level</label>
							<input type="text" class="form-control degree review" disabled name="degree">
						</div>

						<div class="form-group">
							<label for="studType">Student Type</label>
							<input type="text" class="form-control studType review" disabled name="enrollType">
						</div>

						<div class="form-group">
							<label for="studType">Enrollee Type</label>
							<input type="text" class="form-control enrollType review" disabled name="studType">
						</div>

						<div class="form-group">
							<label for="yearLevel">Year Level</label>
							<input type="text" class="form-control yearLevel review" disabled name="yearLevel">
						</div>

						<div class="form-group">
							<label for="semesters">Semester</label>
							<input type="text" class="form-control semesters review" disabled name="semesters">
						</div>

						<div class="form-group">
							<label for="semesters">Form 137 (Digital Copy)</label>
							<div class="form137">
							    <img id="img1" class="imgRequire"/>
								<img id="img2" class="imgRequire"/>
							</div>
						</div>

						<div class="form-group">
							<label for="semesters">Form 138 (Digital Copy)</label>
							<div class="form138">
							    <img id="img3" class="imgRequire"/>
								<img id="img4" class="imgRequire"/>
							</div>
						</div>

						<div class="form-group">
							<label for="semesters">PSA / Birth Certificate (Digital Copy)</label>
							<div class="psa">
							    <img id="img5" class="imgRequire"/>
								<img id="img6" class="imgRequire"/>
							</div>
						</div>

						<div class="form-group execFinal">
							<label for="semesters">Certificate of Employment (Digital Copy)</label>
							<div class="coe">
							    <img id="img7" class="imgRequire"/>
							</div>
						</div>

						</div>
						<div class="form-group handSubject">
							<label class="messageTitle">Subject Offers</label><br>
							<div class="form-group chs">
                                        
                                        <div class="codeTitle"><label class="labs" style="width: 390px;font-size: 12pt">
                                                Subject Description
                                            </label></div>
                                        <div class="codeTitle">Subject Code</div>
                                        <div class="codeTitle">Schedule</div>
                                        <div class="codeTitle">Class Start</div>
                                        <div class="codeTitle">Class End</div>
                                    </div>
							<div class="form-group hands">
								
							
							</div>
						</div>
						
					</div>
					<div class="_form buttonClick">	
						<button class="can">Cancel</button>
						<button class="sub">Submit</button>
					</div>
					<div class="subFixed">
						<div class="finalDeci">
							<div class="finalTitle">Are you sure you want to submit it?</div>
							<div class="_formD
							eci">
								<button class="no"><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
								<button class="yes">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>

				<div class="subjectListing">
				
					<div class="subjectListingContent">
						<div class="dashboard_title subsHeader">Other Informations
								<!-- <button class="showTicket" data-value="" data-regid="">Show Ticket</button> -->
						
						</div><br>
						<label class="subsLabels">Subjects</label>
						<div class="headerDiv">
								<div>Subject Code</div>
								<div>Subject Description</div>
								<div>Unit</div>
								<div>Schedule</div>
								<div>Class Start</div>
								<div>Class End</div>
							</div>
						<div class="contentSub">
							
							
						</div>	
						<br>
						<label class="subsLabels">Attached Requirements</label><br>
						<div>
						<div class="gridRequire">
						<div class="placeItems">
						<label style="font-weight: bolder; font-size: 11pt">Form 137</label>
						<label style="font-size: 9pt"><em>(Back to back)</em></label>
							<div class="form137">
							    <img class="imgRequired" src="<?php echo $image?>"/>
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
							<div class="exitSubject"><i class="far fa-chevron-double-up"></i></div>
					</div>			
					

					
				</div>
				<div class="validateDeleteReg">
					<div class="finalTitle">Are you sure you want to delete it?</div>
					<div class="deleteButtons">
						<button class="cancelDelete" data-id="" data-value=""><i class="fas fa-times-circle" style="font-size: 11pt; margin-right: 10px; color: white"></i>No</button>
						<button class="confirmDelete">Yes <i class="fas fa-check-circle" style="font-size: 11pt; margin-left: 10px; color: white"></i></button>
							
				</div>
						
					</div>
					</div>
				<div class="ticketFixed">
				<div class="closing"><i class="fas fa-times-circle closeTicketing" style="font-size: 39px;
																						color: #ffffff;
																						z-index: 12;
																						top: 10px;
																						right: 100px"></i></div>
					<div class="ticket">
							
					</div>
				
					<div class="imagePreview">
						<img src="" id="previewImage">
					</div>

				</div>
				

	<script src="js/studentDashboard.js"></script>
	<script src="js/studentDashboard2.js"></script>
	<script type="text/javascript"src="js/emailjs.js"></script>
		<script type="text/javascript">
			(function() {
				emailjs.init("user_wCJhR96h8eW06rGggEZbT");
			})();
		</script>

	<script>
		$(document).ready(function(){
			$('.province').val('<?php echo $provinceAdd?>');
			$('.provinceCont').val('<?php echo $provinceCon?>');
			$('.snName').val('<?php echo $seniorName?>');
			$('.snAdd').val('<?php echo $seniorAdd?>');
			$('.snDegree').val('<?php echo $seniorFin?>');
			$('.collName').val('<?php echo $collName?>');
			$('.collAdd').val('<?php echo $collAdd?>');
			$('.collCourse').val('<?php echo $collCourse?>');
			$('.collDegree').val('<?php echo $collFin?>');

			$('#ch2').prop('checked', '<?php if($provinceAdd == 'N/A') {echo true;}?>');
			if($('#ch2').prop('checked') == true) {
				$('.province').prop('disabled', true);
				$('.provinceCont').prop('disabled', true);
			} else {
				$('.province').prop('disabled', false);
				$('.provinceCont').prop('disabled', false);
			}

			$('#ch3').prop('checked', '<?php if($seniorName == 'N/A') {echo true;}?>');
			if($('#ch3').prop('checked') == true) {
				$('.snName').prop('disabled', true);
				$('.snAdd').prop('disabled', true);
				$('.snDegree').prop('disabled', true);
			} else {
				$('.snName').prop('disabled', false);
				$('.snAdd').prop('disabled', false);
				$('.snDegree').prop('disabled', false);
			}

			$('#ch4').prop('checked', '<?php if($collName == 'N/A') {echo true;}?>');
			if($('#ch4').prop('checked') == true) {
				$('.collName').prop('disabled', true);
				$('.collAdd').prop('disabled', true);
				$('.collCourse').prop('disabled', true);
				$('.collDegree').prop('disabled', true);
			} else {
				$('.collName').prop('disabled', false);
				$('.collAdd').prop('disabled', false);
				$('.collCourse').prop('disabled', false);
				$('.collDegree').prop('disabled', false);
			}

			$('#ch2').on('change', function(){
				if(this.checked == false) {
					$('.province').val('<?php echo $provinceAdd?>');
					$('.provinceCont').val('<?php echo $provinceCon?>');
				} else {
					$('.province').val('N/A');
					$('.provinceCont').val('N/A');
				}
				
			});

			$('#ch3').on('change', function(){
				if(this.checked == false) {
					$('.snName').val('<?php echo $seniorName?>');
					$('.snAdd').val('<?php echo $seniorAdd?>');
					$('.snDegree').val('<?php echo $seniorFin?>');
				} else {
					$('.snName').val('N/A');
					$('.snAdd').val('N/A');
					$('.snDegree').val('N/A');
				}
				
			});

			$('#ch4').on('change', function(){
				if(this.checked == false) {
					$('.collName').val('<?php echo $collName?>');
					$('.collAdd').val('<?php echo $collAdd?>');
					$('.collCourse').val('<?php echo $collCourse?>');
					$('.collDegree').val('<?php echo $collFin?>');
				} else {
					$('.collName').val('N/A');
					$('.collAdd').val('N/A');
					$('.collCourse').val('N/A');
					$('.collDegree').val('N/A');
				}
				
			});
		});

	</script>

