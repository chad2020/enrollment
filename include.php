<?php  
	include 'connection.php';
    include 'fonts.php';

	$a = array(1,2,3);
    foreach($a as $val) {
        $value = "0" . ($val);
        echo $value . ($val) . "<br>";
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .message {
            background: #99cc99;
            transition: .2s;
            height: auto;
            padding: 30px;
            border-radius: 5px;
            font-weight: bolder;
            word-wrap: break-word;
        }
        .messages, .messages2 {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }

        .base {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        /* .m2 {
            height: auto
        } */
    </style>
</head>
<body>
    <div class="base">
        <div class="base1">
        <div class="center" style="width: 500px; height: auto; display: flex; flex-direction: column; margin: 30px auto; padding: 20px; border: 1px solid #ddd; border-radius: 7px">
            <label>Course Description</label>
            <input type="text" id="coursedesc" class="form-control">
            <br>
            <label>Course Type</label>
        <select class="form-select form-select-sm" style="height: 40px" id="coursetype" aria-label=".form-select-sm bach" name="bach">
            <option value="1">Executive Class (2-year Course)</option>
            <option value="2">Bachelor's Degree (4-year Course)</option>
            <option value="3">Certifcation (2-year Course)</option>
            <option value="4">Senior High</option>
        </select><button class="btn btn1" style="border: 2px solid #aaa; background: #aaaa88; margin-top: 20px; font-weight: bolder">Submit</button></div>
        <div class="messages" style="width: 500px; height: 300px; padding: 5px; margin: 10px auto; background: #eee; display: flex "></div>
        
            </div>
            <div class="base2">
            <div class="center" style="width: 500px; height: auto; display: flex; flex-direction: column; margin: 30px auto; padding: 20px; border: 1px solid #ddd; border-radius: 7px">
            Subject Code
            <input type="text" id="subjectcode" class="form-control">
            <br>
            Subject Description
            <input type="text" id="subjectdesc" class="form-control">
            
        <br>
        Subject Unit
            <input type="number"  id="subjectunit" class="form-control">
            <br>
            <button class="btn2 btn" style="border: 2px solid #aaa; background: #aaaa88; margin-top: 20px; font-weight: bolder">Submit</button>
    </div>
    <div class="messages2" style="width: 500px; height: 200px; padding: 5px; margin: 10px auto; background: #eee; display: flex "></div>
            </div>
            
        </div>
    <script>
        $(document).ready(function(){
            $('.btn1').on('click', function(){

                if(!$('#coursedesc').val()) {
                    let appendMsg = "<p class='message'>Please complete the parameters</p>";
                    $('div.messages').append(appendMsg);
                    setTimeout(() => {
                        $('p.message').fadeOut(300);
                    }, 2000);
                        
                } else {
                    
                    let formdata = new FormData();
                    formdata.append('createCourse', 1);
                    formdata.append('coursedesc', $('#coursedesc').val());
                    formdata.append('coursetype', $('#coursetype').val());

                    $.ajax({
                        url: 'createSubject.php',
                        type: 'POST',
                        data: formdata,
                        contentType: false,
                        processData: false,
                        success: function(data){
                            let append = "<p class='message'>" + data + "</p>";
                            $('.messages').append(append);
                            setTimeout(() => {
                                $('p.message').remove();
                                
                            }, 3000);
                            $('#coursedesc').val('');
                        }
                    });
                }
                
        });

        $('.btn2').on('click', function(){
            let bool = true;
            if(!$('#subjectcode').val() || !$('#subjectdesc').val() || !$('#subjectunit').val()) {
                let appendMsg = "<p class='message'>Please complete the parameters</p>";
                    $('div.messages2').append(appendMsg);
                    setTimeout(() => {
                        $('p.message').fadeOut(300);
                    }, 2000);
                bool = false;
            } else {
                let formdata = new FormData();
                formdata.append('createSubject', 2);
                formdata.append('subjectcode', $('#subjectcode').val());
                formdata.append('subjectdesc', $('#subjectdesc').val());
                formdata.append('subjectunit', $('#subjectunit').val());

                $.ajax({
                    url: 'createSubject.php',
                    type: 'POST',
                    data: formdata,
                    contentType: false,
                    processData: false,
                    success: function(data){
                        let append = "<p class='message'>" + data + "</p>";
                        $('.messages2').append(append);
                        setTimeout(() => {
                            $('p.message').remove();
                            
                        }, 3000);
                        $('.base2 input').val('');
                    }
                });
            }
        });
    });

    </script>  
</body>
</html>