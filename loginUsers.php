<?php
    include 'connection.php';
    $getUser=$getPassword="";
    $stdtId=$stdtFname=$stdtMname=$stdtLname=$stdtUsername=$stdtPassword=$stdtImage=$stdtEmail="";
    $adminId=$adminFname=$adminMname=$adminLname=$adminUsername=$adminPassword=$adminImage=$adminEmail="";


    function clean($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

    $getUser        = clean($_POST['username']);
    $getPassword    = clean(md5($_POST['password']));

    $query 	    = "SELECT * FROM adminuser WHERE username = '$getUser'";
	$login 	    = mysqli_query($connect, $query);
	$details 	= mysqli_fetch_assoc($login);
	$row 		= mysqli_num_rows($login);

    if($row > 0) {
        
        $adminId        = $details['user_id'];
        $adminFname     = $details['user_fname'];
        $adminMname     = $details['user_mname'];
        $adminLname     = $details['user_lname'];
        $adminUsername  = $details['username'];
        $adminPassword  = $details['password'];
        $adminImage     = $details['user_image'];
        $adminEmail     = $details['admin_email'];
        $fullAdminName  = ucFirst($adminFname) . " " . 
                          ucFirst($adminMname)[0] . ". " . 
                          ucFirst($adminLname);

        if($getPassword == $adminPassword) {
            session_start();
            $_SESSION['admin_id']       = $adminId;
            $_SESSION['admin_name']     = $fullAdminName;
            $_SESSION['admin_username'] = $adminUsername;
            $_SESSION['admin_image']    = $adminImage;
            $_SESSION['admin_email']    = $adminEmail;
            
            //Admin Successfully Logged In...
            echo "1";
            exit();

        } else {

            //Wrong admin password...
            echo "0";
            exit();

        }

    } else {
        

        $stdtQuery 	    = "SELECT * from students where username = '$getUser'";
        $stdtLogin 	    = mysqli_query($connect, $stdtQuery);
        $stdtDetails 	= mysqli_fetch_assoc($stdtLogin);
        $stdntRow 		= mysqli_num_rows($stdtLogin);

        if($stdntRow > 0) {
            
                $stdtId         = $stdtDetails['student_id'];
                $stdtFname      = $stdtDetails['student_fname'];
                $stdtMname      = $stdtDetails['student_mname'];
                $stdtLname      = $stdtDetails['student_lname'];
                $stdtUsername   = $stdtDetails['username'];
                $stdtPassword   = $stdtDetails['student_password'];
                $stdtAddress    = $stdtDetails['student_address'];
                $stdtImage      = $stdtDetails['student_image'];
                $stdtEmail      = $stdtDetails['student_email'];
                $stdtContact    = $stdtDetails['student_contact'];
                $stdtGender     = $stdtDetails['student_gender'];
                $fullStdtName   = ucFirst($stdtFname) . " " . 
                                  ucFirst($stdtMname[0]) . ". " . 
                                  ucFirst($stdtLname);
                                  
                    



                if($getPassword == $stdtPassword) {

                    session_start();
                    $_SESSION['stdt_id']         = $stdtId;
                    $_SESSION['stdt_name']       = $fullStdtName;
                    $_SESSION['stdt_username']   = $stdtUsername;
                    $_SESSION['stdt_image']      = $stdtImage;
                    $_SESSION['stdt_email']      = $stdtEmail;
                    $_SESSION['stdt_fname']      = $stdtFname;
                    $_SESSION['stdt_mname']      = $stdtMname;
                    $_SESSION['stdt_lname']      = $stdtLname;
                    $_SESSION['stdt_password']   = $stdtPassword;
                    $_SESSION['stdt_contact']    = $stdtContact;
                    $_SESSION['stdt_gender']     = $stdtGender;
                    $_SESSION['stdt_address']    = $stdtAddress;   


                    //Student Successfully Logged in
                    echo "4";
                    exit();

                } else {
    
                    //Wrong student password...
                    echo "3";
                    exit();

                }

        } else {

            //Username doesn't exists...
            echo "2";
            exit();

        }

    }

?>

