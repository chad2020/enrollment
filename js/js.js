function letters(data) {
    let reg = /[^a-z A-Z]/g;
    data.value = data.value.replace(reg, "");
}

function validateServerEmail(email) {
    let reg = /\w+@(gmail)+\.(com)/;
    return reg.test(email);
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);  
}

$(document).ready(function() {

    $('#exit').click(function(){
        $('.back').css('animationName', 'popout');
        setTimeout(() => {
            $('.back').hide();
        }, 300);
        
    });

    $('.code').on('keyup', function(){

        if($('.code').val().length === 6) {
            $('#sub').prop('disabled', false);
        } else {
            $('#sub').prop('disabled', true);
        }

    });

    $('.code').on('paste', function(){

        if($('.code').val().length === 6) {
            $('#sub').prop('disabled', false);
        } else {
            $('#sub').prop('disabled', true);
        }

    });
    
    $('.username').on('keyup', function(){
        let reg = /[^a-zA-Z\d+\.\-_]/g;
        this.value = this.value.replace(reg, "");
    });

    

    $('input.code').on('keyup', function(){
        let reg = /[^a-zA-Z\d]/g;
        this.value = this.value.replace(reg, "");
    });

    $('#submit').click(function() {
        
        let empty = "";
        let bool = use = true;
        if(!$('.fname').val()) {

            empty = "<div class=\"emp\">Please enter your First Name</div>";
            $('.b').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.fname').addClass('red errBG');
            bool = false;

        } 

        if(!$('.mname').val()) {

            empty = "<div class=\"emp\">Please enter your Middle Name</div>";
            $('.c').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.mname').addClass('red errBG');
            bool = false;

        }

        if(!$('.lname').val()) {

            empty = "<div class=\"emp\">Please enter your Last Name</div>";
            $('.d').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.lname').addClass('red errBG');
            bool = false;

        } 

        if(!$('.address').val()) {

            empty = "<div class=\"emp\">Please enter your Address</div>";
            $('.f').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.address').addClass('red errBG');
            bool = false;

        } else if($('.address').val().length < 15) {

            empty = "<div class=\"emp\">Please enter your Complete Address</div>";
            $('.f').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.address').addClass('red errBG');
            bool = false;

        }

        if(!$('.contact').val()) {

            empty = "<div class=\"emp\">Please enter your Contact Number</div>";
            $('.j').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.contact').addClass('red errBG');
            bool = false;

        }

        if(!$('.email').val()) {

            empty = "<div class=\"emp\">Please enter you Email</div>";
            $('.h').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.email').addClass('red errBG');
            bool = false;

        } else if($('.email').val()) {

            let em = validateEmail($('.email').val());
            if(em == false) {

                empty = "<div class=\"emp\">Please enter a valid email address</div>";
                $('.h').append(empty);
                setTimeout(() => {
                    $('.emp').remove();
                }, 1500);
                $('.email').addClass('red errBG');
                bool = false;

            } else {
                
                let val = validateServerEmail($('.email').val());
                
                if(val == false) {

                    empty = "<div class=\"emp\">Only Gmail account is accepted</div>";
                    $('.h').append(empty);
                    setTimeout(() => {
                        $('.emp').remove();
                    }, 1500);
                    $('.email').addClass('red errBG');
                    bool = false;

                } 

            }
        }

        if(!$('.username').val()) {

            empty = "<div class=\"emp\">Provide your Username</div>";
            $('.n').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.username').addClass('red errBG');
            bool = false;

        } else if($('.username').val().length <= 2) {

            empty = "<div class=\"emp\">Please enter at least 3 characters</div>";
            $('.n').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.username').addClass('red errBG');
            bool = false;

        } 

        if(!$('.password').val()) {

            empty = "<div class=\"emp\">Provide your Password</div>";
            $('.p').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.password').addClass('red errBG');
            bool = false;

        } else if($('.password').val().length < 8) {

            empty = "<div class=\"emp\">Please enter at least 8 characters</div>";
            $('.p').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.password').addClass('red errBG');
            bool = false;

        }
        
        if(!$('.photo').val()) {

            empty = "<div class=\"emp\">Provide your picture</div>";
            $('.u').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('.cont').remove();
            $('#photo').addClass('red errBG');
            bool = false;
            
        }

        if(!$('.password').val() && $('.repassword').val()) {

                empty = "<div class=\"emp\">Please provide your<br>password first</div>";
                $('.r').append(empty);
                setTimeout(() => {
                    $('.emp').remove();
                }, 1500);
                $('.repassword').addClass('red errBG');
                bool = false;

            }  else if($('.password').val() && !$('.repassword').val()) {

                empty = "<div class=\"emp\">Please re-enter your password</div>";
                $('.r').append(empty);
                setTimeout(() => {
                    $('.emp').remove();
                }, 1500);
                $('.repassword').addClass('red errBG');
                bool = false;

            } 

        //here is the start If   <<<
    if(bool == true){

        if($('.password').val() == $('.repassword').val()) {

            var datas = new FormData();
            datas.append('fname', 		$('.fname').val());
            datas.append('mname',		$('.mname').val());
            datas.append('lname', 		$('.lname').val());
            datas.append('address', 	$('.address').val());
            datas.append('contact', 	$('.contact').val());
            datas.append('email', 		$('.email').val());
            datas.append('gender', 		$('.gender').val());
            datas.append('username', 	$('.username').val());
            datas.append('password', 	$('.password').val());
            datas.append('file', 		$('#photo')[0].files[0]);
            $.ajax({
                url			: 'studentReg.php',
                type		: 'POST',
                data		: datas,
                contentType	: false,
                processData	: false,
                success: function(data) {

                    let message = "";
                    if(data == "1") {
                        var rand = Math.floor(100000 + Math.random() * 900000);
                        emailing(rand);
                        $('#sub').on('click', function(){

                            if($('.code').val() == rand) {
                                var datas2 = new FormData();
                                datas2.append('fname', 		$('.fname').val());
                                datas2.append('mname',		$('.mname').val());
                                datas2.append('lname', 		$('.lname').val());
                                datas2.append('address', 	$('.address').val());
                                datas2.append('contact', 	$('.contact').val());
                                datas2.append('email', 		$('.email').val());
                                datas2.append('gender', 	$('.gender').val());
                                datas2.append('username', 	$('.username').val());
                                datas2.append('password', 	$('.password').val());
                                datas2.append('file', 		$('#photo')[0].files[0]);
                                
                                $.ajax({
                                    url			: 'signedUp.php',
                                    type		: 'POST',
                                    data		: datas2,
                                    contentType	: false,
                                    processData	: false,
                                    success: function(msg){
                                        if(msg == "1") {
                                            message = "<div class=\"cont\"><div class=\"unregister\">Signing up successfully!!!</div></div>";
                                            $('.heading').append(message);
                                            setTimeout(() => {
                                                $('.cont').remove();
                                                window.location.href="index.php";
                                            }, 1300);
                                            clear();
                                        }
                                        
                                    }
                                });
                            }  else {
                                empty = "<div class=\"empVerify\">Wrong verification code</div>";
                                $('.hand').append(empty);
                                setTimeout(() => {
                                    $('.empVerify').remove();
                                }, 1500);
                                $('.code').addClass('red errBG');
                            }
                                
                        });
                          

                    } else if(data == "0") {

                        message = "<div class=\"emp\">This email is already taken!!!</div></div></div>";
                        $('.h').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('.email').addClass('red errBG');

                    } else if(data == "2"){

                        message = "<div class=\"emp\">Unsupported file!!!</div>";
                        $('.u').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('#photo').addClass('red errBG');

                    } else if(data == "3") {

                        message = "<div class=\"emp\">This username is already taken!!!</div>";
                        $('.n').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('.username').addClass('red errBG');
                        
                    }	
                }
        });

        //here it is
            } else {
                empty = "<div class=\"emp\">Password didn't match!!!</div>";
                $('.p').append(empty);
                setTimeout(() => {
                    $('.emp').remove();
                }, 1500);
                $('.password').addClass('red errBG');
                $('.repassword').addClass('red errBG');
            }
            
        
        } //here is the End If   <<<<
    });


    
});
    var cancel = document.getElementById('cancel').addEventListener('click', function(){
             window.location.href='index.php';
        });	

        function clear() {
            $('.fname').val('');
            $('.mname').val('');
            $('.lname').val('');
            $('.address').val('');
            $('.contact').val('');
            $('.email').val('');
            $('.gender').val('');
            $('.username').val('');
            $('.password').val('');
            $('.repassword').val('');
            $('#photo').val('');
        }
        
        $('.fname').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.mname').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.lname').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.address').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.contact').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.email').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.username').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.password').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('.repassword').focus(function(){
            $(this).removeClass('red errBG');
        });
        $('#photo').focus(function(){
            $(this).removeClass('red errBG');
        });

        $('.code').focus(function(){
            $(this).removeClass('red errBG');
        });

        

        function emailing(rand) {
            var full_name = $('.fname').val() + " " + $('.lname').val();
            var params = {
                to_email: $('#email').val(),
                fullname: full_name,
                code: rand,

            }

            emailjs.send("enrollmentSystem","template_q2hj07f", params)
                .then(function(){
                    $('.back').css('animationName', 'popin'),
                            setTimeout(()=>{
                                $('.back').show();
                            }, 300);
                });
        }