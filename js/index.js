$(document).ready(function() {
    $('#btn').on('click', function(e){
        e.preventDefault();

        if(!$('#username').val()) {

            empty = "<div class=\"emp\">Please enter your username</div>";
            $('.user').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('#username').addClass('red errBG');

        }
        
        if(!$('#password').val()) {

            empty = "<div class=\"emp\">Please enter your password</div>";
            $('.pass').append(empty);
            setTimeout(() => {
                $('.emp').remove();
            }, 1500);
            $('#password').addClass('red errBG');

        }

        $('input').focus(function(){
            $(this).removeClass('red errBG');
        });

        if($('#password').val() && $('#username').val()) {
        
            var logInfo = new FormData();
                logInfo.append('username', $('#username').val());
                logInfo.append('password', $('#password').val());
            
            $.ajax({
                url			: 'loginUsers.php',
                type		: 'POST',
                data		: logInfo,
                contentType	: false,
                processData	: false,
                success: function(data){
                    var message = "";

                    if(data == "0") {

                        message = "<div class=\"emp\">Wrong Admin Password</div>";
                        $('.pass').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('#password').addClass('red errBG');

                    } else if(data == "1") {

                        message = "<div class=\"cont\"><div class=\"unregister\">Successfully Logged in!!!</div></div>";
                        $('.header').append(message);
                        setTimeout(() => {
                            $('.cont').remove();
                            window.location.href='adminDashboardTab.php';
                        }, 1500);

                    } else if(data == "2") {

                        message = "<div class=\"emp\">Username doesn't exists</div>";
                        $('.user').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('#username').addClass('red errBG');

                    } else if(data == "3") {

                        message = "<div class=\"emp\">Wrong Password</div>";
                        $('.pass').append(message);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        $('#password').addClass('red errBG');

                    } else if(data == "4") {

                        message = "<div class=\"cont\"><div class=\"unregister\">Successfully Logged in!!!</div></div>";
                        $('.header').append(message);
                        setTimeout(() => {
                            $('.cont').remove();
                            window.location.href='studentDashboard.php';
                        }, 1500);
                    }
                }
            });	

        } 

    });
});