<?php
include 'connection.php';
date_default_timezone_set("Asia/Manila");
    if(isset($_POST['deleteRegistration'])) {
        $reg = $_POST['reg'];
        $category = $_POST['category'];
        $type = type($category);
        $query = "DELETE FROM $type WHERE registration_id = $reg";
        $delete = mysqli_query($connect, $query);

        sleep(2);
        echo "1";
    }

    

    if(isset($_POST['approveRegistration'])) {
        $reg        = $_POST['regid'];
        $category   = $_POST['category'];
        // $index      = $_POST['index'];
        $name = "";

        $type = type($category);

        $query = "UPDATE " . $type . " SET registration_status = 'ONGOING' WHERE registration_id = $reg";
        $approve = mysqli_query($connect, $query);

        $select  = "SELECT * FROM students, ". $type . " WHERE " . $type . ".registration_student_id = students.student_id AND registration_id = ". $reg . "";
        $selView = mysqli_query($connect, $select);
        $de = mysqli_fetch_assoc($selView);
        $gender = $de['student_gender'];
        $fname = $de['student_fname'];
        $mname = $de['student_lname'];
        $email = $de['student_email'];
        $arrElem = array();
        if($gender == "MALE" || $gender == "Male" || $gender == "male") {
            $name = "Mr. " . $fname . " " . $mname ."," . $email;

        } else if($gender == "FEMALE" || $gender == "Female" || $gender == "female") {
            $name = "Ms. " . $fname . " " . $mname ."," . $email;
        }

        sleep(2);
        echo $name; 
    }

    function type($type) {
        switch($type) {
            case 1: 
                return "registration_executive";
                break;
            case 2: 
                return "registration_regular_4yr";
                break;
            case 3: 
                return "registration_regular_2yr";
                break;
            case 4: 
                return "registration_senior";
        }
    }

    if(isset($_POST['inits'])) {
        $arr = array(); 
        $arr2 = array();
        $arr3 = array();
        $value = $_POST['index'];
        $newArr = array();

        $query = "SELECT * FROM course WHERE course_type = $value";
        $view = mysqli_query($connect, $query);
        $i = 0;
        while($details = mysqli_fetch_assoc($view)):
            $arr[$i] = array(
                0 => $details['course_id'],
                1 => $details['course_desc']
            );
            $i++;
        endwhile;

        if($value == 1) {
            $arr2 = array(
                0 => "N/A"
            );

            $arr3 = array(
                0 => "1st Module",
                1 => "2nd Module",
                2 => "3rd Module",
                3 => "4th Module",
                4 => "5th Module",
                5 => "6th Module"
            );

        } else if($value == 2) {
            $arr2 = array (
                0 => "1st Year",
                1 => "2nd Year",
                2 => "3rd Year",
                3 => "4th Year"
            );

            $arr3 = array (
                0 => "1st Semester",
                1 => "2nd Semester"
            );
            

        } else if($value == 3) {
            $arr2 = array (
                0 => "1st Year",
                1 => "2nd Year"
            );
            
            $arr3 = array (
                0 => "1st Semester",
                1 => "2nd Semester",
            );
        } else if($value == 4) {
            $arr2 = array (
                0 => "Grade 11",
                1 => "Grade 12"
            );
            
            $arr3 = array (
                0 => "1st Semester",
                1 => "2nd Semester",
            );
        }

        $newArray = array(
            0 => $arr,
            1 => $arr2,
            2 => $arr3
        );

        echo json_encode($newArray);
    }

    if(isset($_POST['subsViewing'])) {
        $arraySubjects = array();
        $i = 0;
        $query = "SELECT * FROM subjects ORDER BY subject_desc";
        $view = mysqli_query($connect, $query);
        while($details = mysqli_fetch_assoc($view)):
            $subject_id = $details['subject_id'];
            $subject_code = $details['subject_code'];
            $subject_desc = $details['subject_desc'];

            $arraySubjects[$i] = array(
                0 => $subject_id,
                1 => $subject_code,
                2 => $subject_desc
            );

            $i++;
        endwhile;
        echo json_encode($arraySubjects);
    }

    if(isset($_POST['enrolledRegistration'])) {
        $reg        = $_POST['regIds'];
        $category   = $_POST['cateGory'];
        $name = "";
        $type = type($category);

        $que = "UPDATE " . $type . " SET registration_status = 'ENLISTED' WHERE registration_id = $reg";
        $enrolled = mysqli_query($connect, $que);

        $select  = "SELECT * FROM students, ". $type . " WHERE " . $type . ".registration_student_id = students.student_id AND registration_id = ". $reg . "";
        $selView = mysqli_query($connect, $select);
        $de = mysqli_fetch_assoc($selView);
        $gender = $de['student_gender'];
        $fname = $de['student_fname'];
        $mname = $de['student_lname'];
        $email = $de['student_email'];
        $arrElem = array();
        if($gender == "MALE" || $gender == "Male" || $gender == "male") {
            $name = "Mr. " . $fname . " " . $mname ."," . $email;

        } else if($gender == "FEMALE" || $gender == "Female" || $gender == "female") {
            $name = "Ms. " . $fname . " " . $mname ."," . $email;
        }

        sleep(2);
        echo $name; 
    }

    if(isset($_POST['assignedSubjects'])) {
        $course_id      = $_POST['courseid'];
        $year_level     = $_POST['yearLevel'];
        $semester_id    = $_POST['semester'];
        $code           = $_POST['code'];
        $id             = $_POST['idReg'];
        date_default_timezone_set("Asia/Manila");
        $dateNow        = date('Ymd');
        $arrayDatas     = explode(',', $_POST['array']);

        $que = "INSERT INTO sched(sched_code_id, date_now, sched_year_level, sched_semester, 
                enrollment_period_id, sched_course_id) VALUES('$code', '$dateNow', '$year_level',
                '$semester_id', $id, $course_id)";
        $result = mysqli_query($connect, $que);

        $search = "SELECT * FROM sched WHERE sched_code_id = '$code' ORDER BY schedule_id DESC LIMIT 1";
        $results = mysqli_query($connect, $search);
        $detail = mysqli_fetch_assoc($results);
        $sched_id = $detail['schedule_id'];

        foreach($arrayDatas as $key) {
            $query = "INSERT INTO sched_subjects(sched_code_id, sched_subject_id, sched_course_id, date_now, enrollment_period_id, schedule_id)
                    VALUES('$code', $key, $course_id, '$dateNow', $id, $sched_id)";
            $view = mysqli_query($connect, $query);
        }
        
        sleep(2);
        echo "1";
    }

    if(isset($_POST['verify'])) {
        $category   = $_POST['category'];
        $code       = $_POST['fuse'];
        echo json_encode(existingScheduling($code, $connect, $category));
    }

    function existingScheduling($code, $connect, $category) {
        $return     = array();
        $dateNow2   = date('Ymd');
        $ques       = "SELECT * FROM enrollment_period WHERE period_course_type = $category ORDER BY period_id DESC LIMIT 1";
        $viewings   = mysqli_query($connect, $ques);
        $detailView = mysqli_fetch_assoc($viewings);
        
        $rowed      = mysqli_num_rows($viewings);

        if($rowed < 1) {
            $return = array(0=>"3", 1=>"");
        } else {
            $period_id  = $detailView['period_id'];
            $period_end = $detailView['period_end'];

            if($dateNow2 > $period_end) {
                $return = array(0=>"3", 1=>"");
            } else {
                $query  = "SELECT * FROM sched WHERE sched_code_id = '$code'";
                $view   = mysqli_query($connect, $query);
                $row    = mysqli_num_rows($view);

                if($row > 0) {
                    $que = "SELECT * FROM enrollment_period WHERE period_course_type = $category ORDER BY period_id DESC LIMIT 1";
                    $viewing = mysqli_query($connect, $que);
                    $detailing = mysqli_fetch_assoc($viewing);
                        $idPeriod = $detailing['period_id'];
                        $start = $detailing['period_start'];
                        $end = $detailing['period_end'];

                        $query2  = "SELECT * FROM sched WHERE sched_code_id = '$code' ORDER BY schedule_id DESC LIMIT 1";
                        $view2   = mysqli_query($connect, $query2);
                        $details = mysqli_fetch_assoc($view2);

                        $dateNow = intval($details['date_now']); 

                            if(intval($start) <= $dateNow && intval($end) >= $dateNow) {
                                $return = array(0=>"1", 1=>"");
                            } else {
                                $return =  array(0=>"2", 1=>$idPeriod);
                            } 
                } else {
                    $return = array(0=>'2', 1=>$period_id);
                }
            }
            
        }

        return $return;
    }

    if(isset($_POST['period'])) {
        $start = $_POST['start'];
        $end = $_POST['end'];
        $id = $_POST['id'];

        $query = "INSERT INTO enrollment_period(period_course_type, period_start, period_end) 
                VALUES($id, '$start', '$end')";
        $view = mysqli_query($connect, $query);

        echo "1";
    }


    if(isset($_POST['searchPeriod'])) 
    {
        date_default_timezone_set("Asia/Manila");
        $date = date('Ymd');
        $arrayType = array();
        $newArrayType = array();
        $arrayType = array(1, 2);

        // Convert string into integer using MYSQL
        $i = 0;
        foreach($arrayType as $type) 
            {
                $query  = "SELECT * FROM enrollment_period WHERE period_course_type = $type AND CAST(period_end AS UNSIGNED) > CAST($date AS UNSIGNED)";
                $view   = mysqli_query($connect, $query);
                $details= mysqli_fetch_assoc($view);
                $row    = mysqli_num_rows($view);

                if($row > 0) 
                {
                    $newArrayType[$i] = array(
                        0 => $details['period_start'],
                        1 => $details['period_end'],
                        2 => $details['period_id']
                    );   
                } 
                else 
                {
                    $newArrayType[$i] = array(
                        0 => '',
                        1 => '',
                        2 => ''
                    );
                }

                $i++;
            }
    echo json_encode($newArrayType);
        
    }

    if(isset($_POST['deletePeriods'])) {
        $period_id = $_POST['periodId'];

        $query = "DELETE FROM enrollment_period WHERE period_id = $period_id";
        $view = mysqli_query($connect, $query);
        sleep(2);
        echo "1";
    }

    if(isset($_POST['loadAll'])) {
        $type = array('1', '2');
        date_default_timezone_set("Asia/Manila");
        $values = array('exec1', 'reg4yr1');
        $arrayDatas = array();
        $j = 0;

        foreach($type as $key) {
            $count = 0;
            $array = array();
            $i = 0;
            $date = date('Ymd');
            $k = $key . "0";
            $code = $set = "";
            $query = "SELECT * FROM course WHERE course_type = $key";
            $view = mysqli_query($connect, $query);

            while($details = mysqli_fetch_assoc($view)):
                $query2  = "SELECT * FROM enrollment_period WHERE period_course_type = $key ORDER BY period_id DESC LIMIT 1";
                $view2   = mysqli_query($connect, $query2);
                $row     = mysqli_num_rows($view2);
                $value   = $key . ($i) . $k . $k;
                if($row < 1) {
                    $array[$count] = array(

                        0 => $details['course_desc'],
                                    1 => "Not Set",
                                    2 => $values[$j],
                                    3 => "",
                                    4 => $value,
                                    5 => $key,
                                    6 => $details['course_id'], 
                    ); 
                } else {
                    $periodDetail   = mysqli_fetch_assoc($view2);
                    $period_end     = intval($periodDetail['period_end']);
                    $period_start   = intval($periodDetail['period_start']);
                    $period_id   = intval($periodDetail['period_id']);

                    if($date > $period_end) {
                        $array[$count] = array(
                            0 => $details['course_desc'],
                                    1 => "Not Set",
                                    2 => $values[$j],
                                    3 => "",
                                    4 => $value,
                                    5 => $key,
                                    6 => $details['course_id'], 
                        ); 
                    } else {
                        $que    = "SELECT * FROM sched WHERE sched_code_id = '$value' ORDER BY schedule_id DESC LIMIT 1";
                        $vi     = mysqli_query($connect, $que);
                        $rowed  = mysqli_num_rows($vi);

                        if($rowed > 0) {
                            $detail2 = mysqli_fetch_assoc($vi);
                            $date_now = intval($detail2['date_now']);
                            $sched_id = intval($detail2['schedule_id']);

                            if($period_start <= $date_now && $period_end >= $date_now) {
                                $array[$count] = array(
                                    0 => $details['course_desc'],
                                    1 => "Set",
                                    2 => $values[$j],
                                    3 => $sched_id,
                                    4 => $value,
                                    5 => null,
                                    6 => null,
                                );
                            } else if($period_end < $date_now) {
                                $array[$count] = array(
                                    0 => $details['course_desc'],
                                    1 => "Not Set",
                                    2 => $values[$j],
                                    3 => "",
                                    4 => $value,
                                    5 => $key,
                                    6 => $details['course_id'], 
                                );
                            } 

                        } else {
                            $array[$count] = array(
                                0 => $details['course_desc'],
                                1 => "Not Set",
                                2 => $values[$j],
                                3 => "",
                                4 => $value,
                                5 => $key,
                                6 => $details['course_id'], 
                            ); 
                        }
                    }
                }

                $count++;
                $i++;
                
            endwhile;
            $arrayDatas[] = $array;
            $j++;
        }

        echo json_encode($arrayDatas);
    }
    
    if(isset($_POST['change'])) {
        $code = $_POST['code'];
        $type = $_POST['type'];
        $array = array();
        $values = array('exec1', 'reg4yr1');
        $date = date('Ymd');
        $arrayType = array();
        $query = "SELECT * FROM course WHERE course_type = '$type'";
        $view = mysqli_query($connect, $query);
        $i      = 0;
        $count  = 0;
        $value  = "";
        $types = intval($type) - 1;
     
        while($details = mysqli_fetch_assoc($view)):
            $value = $type . ($i) . $code;
            $query2  = "SELECT * FROM enrollment_period WHERE period_course_type = $type ORDER BY period_id DESC LIMIT 1";
            $view2   = mysqli_query($connect, $query2);
            $row     = mysqli_num_rows($view2);
                if($row < 1) {
                    $array[$count] = array(

                        0 => $details['course_desc'],
                        1 => "Not Set",
                        2 => $values[$types],
                        3=> "",
                        4 => $value,
                        5 => $type,
                        6 => $details['course_id'], 
                    ); 
                } else {
                    $periodDetail   = mysqli_fetch_assoc($view2);
                    $period_end     = intval($periodDetail['period_end']);
                    $period_start   = intval($periodDetail['period_start']);
                    $period_id      = intval($periodDetail['period_id']);

                    if($date > $period_end) {
                        $array[$count] = array(
                            0 => $details['course_desc'],
                            1 => "Not Set",
                            2 => $values[$types],
                            3 => "",
                            4 => $value,
                            5 => $type,
                            6 => $details['course_id'], 
                        ); 
                    } else {
                        $que    = "SELECT * FROM sched WHERE sched_code_id = '$value' ORDER BY schedule_id DESC LIMIT 1";
                        $vi     = mysqli_query($connect, $que);
                        $rowed = mysqli_num_rows($vi);

                        if($rowed > 0) {
                            $detail2 = mysqli_fetch_assoc($vi);
                            $date_now = intval($detail2['date_now']);
                            $sched_id = intval($detail2['schedule_id']);

                            if($period_start <= $date_now && $period_end >= $date_now) {
                                $array[$count] = array(
                                    0 => $details['course_desc'],
                                    1 => "Set",
                                    2 => $values[$types],
                                    3 => $sched_id,
                                    4 => $value,
                                    5 => null,
                                    6 => null,
                                );
                            } else if($period_end < $date_now) {
                                $array[$count] = array(
                                    0 => $details['course_desc'],
                                    1 => "Not Set",
                                    2 => $values[$types],
                                    3 => "",
                                    4 => $value,
                                    5 => $type,
                                    6 => $details['course_id'], 
                                );
                            } 

                        } else {
                            $array[$count] = array(
                                0 => $details['course_desc'],
                                1 => "Not Set",
                                2 => $values[$types],
                                3 => "",
                                4 => $value,
                                5 => $type,
                                6 => $details['course_id'], 
                            ); 
                        }
                    }
                }
               
                $count++;
                $i++;
            endwhile;    
            $arrayType[] = $array;

        echo json_encode($arrayType);

    }

    if(isset($_POST['viewSubjectSched'])) {
        $period = $_POST['periodic'];
        $sched = $_POST['scheds'];
        $array = array();
        $i = 0;
        $query = "SELECT * FROM sched_subjects, subjects WHERE sched_subjects.sched_subject_id = subjects.subject_id 
                AND sched_code_id = '$sched' AND schedule_id = $period";
        $view = mysqli_query($connect, $query);
        while($details = mysqli_fetch_assoc($view)):
            $subject_desc = $details['subject_desc'];
            $subject_code = $details['subject_code'];
            $subject_unit = $details['subject_unit'];
            $sched_id     = $details['sched_id'];
            $sched_start  = $details['sched_start'];
            $sched_end    = $details['sched_end'];
            $sched_daily  = $details['sched_daily'];

            $array[$i] = array(
                0 => $subject_desc,
                1 => $subject_code,
                2 => $subject_unit,
                3 => $sched_start,
                4 => $sched_end,
                5 => $sched_id,
                6 => $sched_daily
            );

            $i++;
        endwhile;    
        
        echo json_encode($array);
    }

    if(isset($_POST['deleteScheds'])) {
        $id = $_POST['ids'];
        $type = $_POST['types'];

        $que = "DELETE FROM sched WHERE sched_code_id = '$id' AND schedule_id = $type";
        $result = mysqli_query($connect, $que);

        sleep(2);
        echo "1";
    }

    if(isset($_POST['setSchedule'])) {
        $start = $_POST['start'];
        $end = $_POST['end'];
        $id = $_POST['id'];
        $schedule = $_POST['arrayEl'];

        $query = "UPDATE sched_subjects SET sched_start = '$start', sched_end = '$end',
                    sched_daily = '$schedule' WHERE sched_id = $id";

        $set = mysqli_query($connect, $query);

        echo "Success";

    }
    
?>

