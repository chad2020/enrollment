
const croppingTool = () => {
    //     let preview = document.getElementById('cropImage');
    //     let file = document.getElementById('uploadImage');
    
    //     let reader = new FileReader();
    //     let fileIn = file.files[0];
    // if(fileIn) {
    //         reader.readAsDataURL(fileIn);
    //     }
    //     reader.addEventListener('load', () =>{
    //         preview.src = reader.result;
    //         // alert(reader.result);
    //     }, false);
    //     let pre = document.getElementById('previewCropMini');
    //     document.getElementById('cropImage').addEventListener('load', ()=>{
    //     new Cropper(preview,{
    //         aspectRatio: 1,
    //         maxCanvasWidth: 500,
    //         maxCanvasHeight: 500,
    //         preview: pre,
    //         // crop: function(){
    
    //         // }
    //         // movable: true
    //     });
    // });
        // 
       
        // $('#cropImage').attr('src', $('#uploadImage')[0].files[0]);
    
        $('#cropImage').cropper({
            aspectRatio: 1/1,
            
        });
    }
    
     function emailing() {
            var gen = ""
            if(document.querySelector('.gender').selectedIndex == 0) {
                gen = "Mr. "
            } else {
                gen = "Ms. "
            }
            var full_name = gen + $('.fname').val() + " " + $('.lname').val();
            var params = {
                to_email: $('#email').val(),
                full_name: full_name,

            }

            emailjs.send("enrollmentSystem","template_ibgycyr", params)
                // .then(function(){
                //     $('.back').css('animationName', 'popin'),
                //         setTimeout(()=>{
                //             $('.back').show();
                //         }, 300);
                // });
        }
    
    croppingTool();


function letters(data) {
    let reg = /[^a-z A-Z]/g;
    data.value = data.value.replace(reg, "");
}

function numbers(data){
    let reg = /[^0-9]/gi;
    data.value = data.value.replace(reg, "");
}
const capitalize = (s) => {
    return s.toUpperCase();
  }
  

  
$(document).ready(function(){
    var type = document.querySelector('.stType')
    if(type.selectedIndex == 0) {
            $('.ul2').show()
            $('.ul').hide()
    } else if (type.selectedIndex == 1) {
        $('.ul2').hide()
        $('.ul').show()
    } 
    var checks = 0;
    var courseId;
    let fname, mname, lname, email, religion, status, birthdate, birthplace, gender,
    address, contact, provinceAdd, provinceCon, guardianFname, guardianMname, guardianLname,  
    guardianAdd, guardianContact, nationality, username, password, 
    repassword, motherFname, motherMname, motherLname, motherAddress, motherContact, fatherFname,
    fatherMname, fatherLname, fatherAddress, fatherContact, elemName, elemAdd,  elemFin, highName, highAdd, highFin, 
    seniorName, seniorAdd,  seniorFin, collName, collAdd, collFin, que, msg, 
    f137_front, 
    f137_back,
    f138_front, 
    f138_back,
    psa_front,
    psa_back,
    coe

    let count;
    $('.dash').remove('.cont');
    let passes = $('.oldPass').val();
    courseId = $('#exec2 option:selected').val();
    count = $('.fixedContent').children().length;
            $('.count span').html(count);
    if(count > 0){
        $('.fixed').show();
        $('.fixed').css('animationName', 'left');
    } else{
        $('.fixed').css('animationName', 'right');
        setTimeout(function(){
            $('.fixed').hide();
        }, 500);
    }

function validateServerEmail(email) {
    let reg = /\w+@(gmail)+\.(com)/;
    return reg.test(email);
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);  
}

function getImage(id){

    $.ajax({
        url: 'imageLoad.php',
        type: 'POST',
        data: {
            student_image: 1,
            id: id
        },
        success: function(data){
            $('img#images').attr('src', data);
            $('img.current').attr('src', data);
            // $('img.imgRequire').attr('src', data);
        }
    })
}


$('.showTicket').on('click', ()=>{
    $('.closing').hide()
    $('.ticketFixed').fadeIn(300);
    setTimeout(()=>{
        $('.ticket').show();
        $('.ticket').css('animationName', 'downFade');

        fetch()
    });
    
    var value   = $('.showTicket').attr('data-value')
    var id      = $('.showTicket').attr('data-id')
    var ticket = document.querySelector('.ticket')
    // $('.ticket').children().remove()

    $.ajax({
        url: 'register.php',
        type: 'POST',
        data:{
            setTicketInfo: 1,
            value: value,
            id: id
        },
        success: function(data) {
            var JSONstring = JSON.parse(data)
            var html = `<i class="fas fa-times-circle closeTicket" style="font-size: 26px; color: #335533; z-index:12"></i>
                            <div class="ticketDivs" style="font-size: 12pt;">Ticket Number</div>
                            <div class="ticketNumber">${JSONstring[0]}</div>
                        <label class="labelTicket">Name</label>
                            <div class="ticketDivs">${JSONstring[1]}</div>
                        <label class="labelTicket">Date Submitted</label>
                            <div class="ticketDivs">${JSONstring[2]}</div>
                        <label class="labelTicket">Status</label>
                            <div class="ticketDivs stats">${JSONstring[3]}</div>`
            $('.ticket').append(html)
            
            if(JSONstring[3] == "PENDING") {
                $('.stats').css({
                    'background': '#FFCBCB',
                   
                })
            } else if(JSONstring[3] == "ONGOING"){
                $('.stats').css({
                    'background': '#F9FB89',
                    
                })
            } else if(JSONstring[3] == "ENLISTED"){
                $('.stats').css({
                    'background': '#70E4B4',
                    
                })
            }

            $('.closeTicket').on('click', ()=>{
                $('.ticket').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.ticket').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').children().remove()
                }, 500);

                $('.imagePreview').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.imagePreview').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').attr('src', '')
                }, 500);
            });

            
        }
    })
     
});

var type = document.querySelector('.stType')
type.addEventListener('change', () => {
    if(type.selectedIndex == 0) {
        $('.ul2').show()
        $('.ul').hide()
        document.querySelector('.execBachRd').checked = true
        document.querySelector('.exec').style.display = 'block'
        document.querySelector('.bach').style.display = 'none'
        studType = "Executive Student";
        $('.studType').val(studType);
        $('.semsExecutive').show()
        $('.execYr').show()
        $('.yr').hide()
        $('.sems4yr').hide()
        document.querySelector('.execRequire').style.display = 'block'
        validateEnrollmentPeriods(0)

    } else if (type.selectedIndex == 1) {
        $('.ul2').hide()
        $('.ul').show()
        document.querySelector('.bachRd').checked = true
        document.querySelector('.bach').style.display = 'block'
        document.querySelector('.exec').style.display = 'none'
        studType = "Regular Student";
        $('.studType').val(studType);
        $('.yr').show()
        $('.sems4yr').show()
        $('.semsExecutive').hide()
        $('.execYr').hide()
        document.querySelector('.execRequire').style.display = 'none'
        validateEnrollmentPeriods(1)
    } 
})

$('.ticketFixed').on('click', function(e){
    if(e.target == this) {
        $('.ticket').css('animationName', 'upFade'); 
            setTimeout(()=>{
                $('.ticket').hide();
                $('.ticketFixed').fadeOut(500);
                $('.ticket').children().remove()
            }, 500);

        $('.imagePreview').css('animationName', 'upFade'); 
            setTimeout(()=>{
                $('.imagePreview').hide();
                $('.ticketFixed').fadeOut(500);
                $('#previewImage').attr('src', "")
            }, 500);
        }
});

    // var dateNow = new Date();
    // var dd = String(dateNow.getDate()).padStart(2, '0');
    // var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = dateNow.getFullYear();
    
    // dateNow = yyyy + '' + dd + '' + mm + "-0008";
    // alert(dateNow);

const sortingTbodyDatas = () =>{
    var records = $('.table').find('tbody > tr');
    records.sort(function(a,b){
        var val_a = $(a).children('td:nth-child(7)').text();
        var val_b = $(b).children('td:nth-child(7)').text();
        return (val_a < val_b) ? -1 : (val_a > val_b ? 1: 0);
    }); 
    $.each(records, (index, row)=>{
        $('tbody').append(row);
    });
};

const registrationLimiter = () =>{
    var date = $('table').find('tbody > tr:last-child').children('td:nth-child(6)').text();
    var status = $('table').find('tbody > tr:last-child').children('td:nth-child(5)').text();
    var regDate = "";
    for(var i = 0; i < date.length; i++){
        regDate += date[i];
        if(i === 10) {break;};
    }

    if(status == "ONGOING") {
        $('.me').html('Your registration is in process now.<br>You can\'t cancel or delete it now.');
    } else if(status == "ENLISTED") {
        $('.me').html(`Congratulations. You're Enlisted from Admission now.`);
    }

    var dateEndRegistration = "2021-04-26";

    if(regDate > dateEndRegistration) {
        $('.reg').attr('disabled', true);
}
};

    sortingTbodyDatas();
    registrationLimiter();

$('.fixedSaved').on('click', function(){
    var bool = true;
    var bool2 = true;
    var par;
    
    fname           = capitalize($('.fname'). val());
    mname           = capitalize($('.mname').val());
    lname           = capitalize($('.lname').val());
    religion        = capitalize($('.religion').val());
    nationality     = capitalize($('.nationality').val());
    birthdate       = $('.bday').val();
    birthplace      = capitalize($('.bplace').val());
    email           = $('.email').val();
    status          = capitalize($('.statusSelect').val());
    gender          = capitalize($('.gender').val());
    let check       = document.getElementById('ch1');
    username        = $('.user').val();
    address         = capitalize($('.add'). val());
    contact         = $('.homeCont'). val();
    password        = $('.newPass'). val();
    provinceAdd     = capitalize($('.province').val());
    provinceCon     = $('.provinceCont'). val();
    let provinceCheck = document.getElementById('ch2');
    motherFname     = capitalize($('.motherFname').val()); 
    motherMname     = capitalize($('.motherMname').val());
    motherLname     = capitalize($('.motherLname').val());
    motherAddress   = capitalize($('.motherAddress').val());
    motherContact   = $('.motherContact').val();
    fatherFname     = capitalize($('.fatherFname').val()); 
    fatherMname     = capitalize($('.fatherMname').val());
    fatherLname     = capitalize($('.fatherLname').val());
    fatherAddress   = capitalize($('.fatherAddress').val());
    fatherContact   = $('.fatherContact').val();
    guardianFname   = capitalize($('.guardianFname').val());
    guardianMname   = capitalize($('.guardianMname').val());
    guardianLname   = capitalize($('.guardianLname').val());
    guardianAdd     = capitalize($('.guardianAddress').val());
    guardianContact = $('.guardianContact').val();
    elemName        = capitalize($('.elemName').val());
    elemAdd         = capitalize($('.elemAdd').val());
    elemFin         = $('.elemDeg').val();
    highName        = capitalize($('.highName').val());
    highAdd         = capitalize($('.highAdd').val());
    highFin         = $('.highDegree').val();
    seniorName      = capitalize($('.snName').val());
    seniorFin       = $('.snDegree').val();
    seniorAdd       = capitalize($('.snAdd').val());
    collName        = capitalize($('.collName').val());
    collAdd         = capitalize($('.collAdd').val());
    collCourse      = $('.collCourse').val();
    collFin         = $('.collDegree').val();
    $('.fixedContent p').remove();
    

    // basic information>>>>>>>>>>>>>>>>>>>>
    
    if(!fname) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Don't leave your First Name empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.fname').addClass('red errBG');
        bool = false;
    } 
    
    if(!mname) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Don't leave your Middle Name empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.mname').addClass('red errBG');
        bool = false;
    }
    
    if(!lname) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Don't leave your Last Name empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.lname').addClass('red errBG');
        bool = false;
    }
    
    if(!religion) {
        par = "<p id='p_bi' class='bb'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Religion</strong></em></p";
        $('.fixedContent').append(par);
        $('.religion').addClass('red errBG');
        bool = false;
    }
    
    if(!nationality) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Nationality</strong></em></p";
        $('.fixedContent').append(par);
        $('.nationality').addClass('red errBG');
        bool = false;
    }
    
    if(!birthdate) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Date of Birth </strong></em></p";
        $('.fixedContent').append(par);
        $('.bday').addClass('red errBG');
        bool = false;
    }
    
    if(!birthplace) {
        par = "<p id='p_bi'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Place of Birth </strong></em></p";
        $('.fixedContent').append(par);
        $('.bplace').addClass('red errBG');
        bool = false;
    }

    const biMsg = "<span class=\"tabIndent\">Basic Information</span>";
    $('p#p_bi').append(biMsg);

    // credentials>>>>>>>>>>>>>>>>>>>>
    
    if(!email) {
        par = "<p id='p_cr'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Don't leave your email empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.email').addClass('red errBG');
        bool = false;

    } else if(email) {
        let em = validateEmail(email);
        if(em == false) {
            par = "<p id='p_cr'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please enter a valid email address</strong></em></p";
            $('.fixedContent').append(par);
            $('.email').addClass('red errBG');
            bool = false;
        } else {

            let val = validateServerEmail(email);
            if(val == false) {
                par = "<p id='p_cr'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a Gmail account</strong></em></p";
                $('.fixedContent').append(par);
                $('.email').addClass('red errBG');
                bool = false;

            } 

        }
    }
    
    
    if(check.checked == true) {
        if(!$('.oldPass').val()) {
            par = "<p id='p_cr' class='pas'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Old Password!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.oldPass').addClass('red errBG');
            bool = false;
        } else if(CryptoJS.MD5($('.oldPass').val()) != jdiosio) {
            par = "<p id='p_cr'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Your provided Old Password didn't match to your Old Password!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.oldPass').addClass('red errBG');
            bool = false;
        }
        
        
        if(!password) {
            par = "<p id='p_cr' class='pas'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your New Password!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.newPass').addClass('red errBG');
            bool = false;
        } else if(password.length < 8 ) {
            par = "<p id='p_cr' class='pas'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide password atleast 8 characters!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.newPass').addClass('red errBG');
            bool = false;
        }

        if(!password && $('.newRepass').val()) {
            par = "<p id='p_cr' class='pas'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide password first!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.newRepass').addClass('red errBG');
            bool = false;
        }  else if(password && !$('.newRepass').val()) {
            par = "<p id='p_cr'class='pas' ><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please re-enter your password!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.newRepass').addClass('red errBG');
            bool = false;
        } 

        if(password != $('.newRepass').val()) {
            par = "<p id='p_cr'class='pas' ><i class=\"far fa-exclamation-triangle\"></i><em><strong>Password didn't match!!!</strong></em></p";
            $('.fixedContent').append(par);
            $('.newRepass').addClass('red errBG');
            bool = false;
        } 

    } 

    const crMsg = "<span class=\"tabIndent\">Credentials</span>";
    $('p#p_cr').append(crMsg);

    // address>>>>>>>>>>>>>>>>>>>>
    
    if(!address) {
        par = "<p id='p_add'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Address empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.add').addClass('red errBG');
        bool = false;
    } else if(address.length < 20) {
        par = "<p id='p_add'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a Complete Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.add').addClass('red errBG');
        bool = false;
    }

    
    if(!contact) {
        par = "<p id='p_add'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Contact empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.homeCont').addClass('red errBG');
        bool = false;
    } else if(contact.length < 7) {
        par = "<p id='p_add'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.homeCont').addClass('red errBG');
        bool = false;
    } 

     
    if(provinceCheck.checked == false) {
        if(!provinceAdd) {
            par = "<p id='p_add' class='pro'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Province Address empty</strong></em></p";
            $('.fixedContent').append(par);
            $('.province').addClass('red errBG');
            bool = false;
        } else if(provinceAdd.length < 20) {
            par = "<p id='p_add' class='pro'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a Complete Provincial Address</strong></em></p";
            $('.fixedContent').append(par);
            $('.province').addClass('red errBG');
            bool = false;
        } 

        
        if(!provinceCon) {
            par = "<p id='p_add' class='pro'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Provincial Contact empty</strong></em></p";
            $('.fixedContent').append(par);
            $('.provinceCont').addClass('red errBG');
            bool = false;
        } else if(provinceCon.length < 7) {
            par = "<p id='p_add' class='pro'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Contact Number</strong></em></p";
            $('.fixedContent').append(par);
            $('.provinceCont').addClass('red errBG');
            bool = false;
        }
    }

    const addMsg = "<span class=\"tabIndent\">Address</span>";
    $('p#p_add').append(addMsg);

    // parents>>>>>>>>>>>>>>>>>>>>>>>
    // mother
   
    if(!$('.motherFname').val()) {
        par = "<p id='p_parents' class='mother'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Mother's Name</strong></em></p";
        $('p.mother').remove();
        $('.fixedContent').append(par);
        $('.motherFname').addClass('red errBG');
        bool = false;
    }
    if(!$('.motherMname').val()) {
        par = "<p id='p_parents' class='mother'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Mother's Name</strong></em></p";
        $('p.mother').remove();
        $('.fixedContent').append(par);
        $('.motherMname').addClass('red errBG');
        bool = false;
    } 
    if(!$('.motherLname').val()) {
        par = "<p id='p_parents' class='mother'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Mother's Name</strong></em></p";
        $('p.mother').remove();
        $('.fixedContent').append(par);
        $('.motherLname').addClass('red errBG');
        bool = false;
    }
    
    if(!motherAddress) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Mother's Address empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.motherAddress').addClass('red errBG');
        bool = false;
    } else if(motherAddress.length < 20) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.motherAddress').addClass('red errBG');
        bool = false;
    }
    
    if(!motherContact) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Mother's Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.motherContact').addClass('red errBG');
        bool = false;
    } else if(motherContact.length < 7) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Mother's Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.motherContact').addClass('red errBG');
        bool = false;
    }

    // father
    
    if(!$('.fatherFname').val()) {
        par = "<p id='p_parents' class='father'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Mother's Name</strong></em></p";
        $('p.father').remove();
        $('.fixedContent').append(par);
        $('.fatherFname').addClass('red errBG');
        bool = false;
    }
    if(!$('.fatherMname').val()) {
        par = "<p id='p_parents' class='father'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Father's Name</strong></em></p";
        $('p.father').remove();
        $('.fixedContent').append(par);
        $('.fatherMname').addClass('red errBG');
        bool = false;
    } 
    if(!$('.fatherLname').val()) {
        par = "<p id='p_parents' class='father'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete your Father's Name</strong></em></p";
        $('p.father').remove();
        $('.fixedContent').append(par);
        $('.fatherLname').addClass('red errBG');
        bool = false;
    }

    
    if(!fatherAddress) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't leave your Father's Address empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.fatherAddress').addClass('red errBG');
        bool = false;
    } else if(fatherAddress.length < 20) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.fatherAddress').addClass('red errBG');
        bool = false;
    }

    
    if(!fatherContact) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Father's Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.fatherContact').addClass('red errBG');
        bool = false;
    } else if(fatherContact.length < 7) {
        par = "<p id='p_parents'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.fatherContact').addClass('red errBG');
        bool = false;
    }

    const parentsMsg = "<span class=\"tabIndent\">Parents</span>";
    $('p#p_parents').append(parentsMsg);

    // guardian>>>>>>>>>>>>>>>>>>>>

    
    if(!$('.guardianFname').val()) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete the name of your Guardian</strong></em></p";
        $('p#p_guardian').remove();
        $('.fixedContent').append(par);
        $('.guardianFname').addClass('red errBG');
        bool = false;
    } 
    if(!$('.guardianMname').val()) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete the name of your Guardian</strong></em></p";
        $('p#p_guardian').remove();
        $('.fixedContent').append(par);
        $('.guardianMname').addClass('red errBG');
        bool = false;
    } 
    if(!$('.guardianLname').val()) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please complete the name of your Guardian</strong></em></p";
        $('p#p_guardian').remove();
        $('.fixedContent').append(par);
        $('.guardianLname').addClass('red errBG');
        bool = false;
    }

    
    if(!guardianAdd) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Guardian's Address empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.guardianAddress').addClass('red errBG');
        bool = false;
    } else if(guardianAdd.length < 20) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Address empty</strong></em></p";
        $('.fixedContent').append(par);
        $('.guardianAddress').addClass('red errBG');
        bool = false;
    }

    
    if(!guardianContact) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Guardian's Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.guardianContact').addClass('red errBG');
        bool = false;
    } else if(guardianContact.length < 7) {
        par = "<p id='p_guardian'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Contact Number</strong></em></p";
        $('.fixedContent').append(par);
        $('.guardianContact').addClass('red errBG');
        bool = false;
    }

    const guardMsg = "<span class=\"tabIndent\">Guardian</span>";
    $('p#p_guardian').append(guardMsg);

    //education

    // elementary
    
    if(!elemName) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Elementary School Name</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemName').addClass('red errBG');
        bool = false;
    } else if(elemName.length < 4) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't use acronym to your Elementary School Name</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemName').addClass('red errBG');
        bool = false;
    }

    
    if(!elemAdd) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Elementary School Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemAdd').addClass('red errBG');
    } else if(elemAdd.length < 15) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Elementary School Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemAdd').addClass('red errBG'); 
        bool = false;   
    }

    
    if(!elemFin) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Year Degree Earned ( Elementary )</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemDeg').addClass('red errBG');
        bool = false;
    } else if(elemFin.length < 4) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Year ( Elementary Degree Earned )</strong></em></p";
        $('.fixedContent').append(par);
        $('.elemDeg').addClass('red errBG');
        bool = false;
    }

    // high school
    
    if(!highName) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your High School Name</strong></em></p";
        $('.fixedContent').append(par);
        $('.highName').addClass('red errBG');
        bool = false;
    } else if(highName.length < 4) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't use acronym to your High School Name</strong></em></p";
        $('.fixedContent').append(par);
        $('.highName').addClass('red errBG');
        bool = false;
    }

    
    if(!highAdd) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your High School Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.highAdd').addClass('red errBG');
        bool = false;
    } else if(highAdd.length < 15) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid High School Address</strong></em></p";
        $('.fixedContent').append(par);
        $('.highAdd').addClass('red errBG');   
        bool = false; 
    }

    
    if(!highFin) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Year Degree Earned ( High School )</strong></em></p";
        $('.fixedContent').append(par);
        $('.highDegree').addClass('red errBG');
        bool = false;
    } else if(highFin.length < 4) {
        par = "<p id='p_education'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Year ( High Degree Earned )</strong></em></p";
        $('.fixedContent').append(par);
        $('.highDegree').addClass('red errBG');
        bool = false;
    }

    // Senior high
    
    let senior = document.getElementById('ch3');
    if(senior.checked == false) {
        if(!seniorName) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Senior High School Name</strong></em></p";
            $('.fixedContent').append(par);
            $('.snName').addClass('red errBG');
            bool = false;
        } else if(seniorName.length < 4) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't use acronym to your Senior High School Name</strong></em></p";
            $('.fixedContent').append(par);
            $('.snName').addClass('red errBG');
            bool = false;
        }

        
        if(!seniorAdd) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Senior High School Address</strong></em></p";
            $('.fixedContent').append(par);
            $('.snAdd').addClass('red errBG');
            bool = false;
        } else if(seniorAdd.length < 15) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Senior High School Address</strong></em></p";
            $('.fixedContent').append(par);
            $('.snAdd').addClass('red errBG');  
            bool = false;  
        }

        if(!seniorFin) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Year Degree Earned ( Senior High School )</strong></em></p";
            $('.fixedContent').append(par);
            $('.snDegree').addClass('red errBG');
            bool = false;
        } else if(seniorFin.length < 4) {
            par = "<p id='p_education' class='senior_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Year ( Senior High Degree Earned )</strong></em></p";
            $('.fixedContent').append(par);
            $('.snDegree').addClass('red errBG');
            bool = false;
        }
    }

    //College
    
    let college = document.getElementById('ch4');
    if(college.checked == false) {
        if(!collName) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your College/Vocational School Name</strong></em></p";
            $('.fixedContent').append(par);
            $('.collName').addClass('red errBG');
            bool = false;
        } else if(collName.length < 4) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't use acronym to your College/Vocational School Name</strong></em></p";
            $('.fixedContent').append(par);
            $('.collName').addClass('red errBG');
            bool = false;
        }
        
        if(!collAdd) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your College/Vocational School Address</strong></em></p";
            $('.fixedContent').append(par);
            $('.collAdd').addClass('red errBG');
            bool = false;
        } else if(collAdd.length < 15) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid College/Vocational School Address</strong></em></p";
            $('.fixedContent').append(par);
            $('.collAdd').addClass('red errBG');   
            bool = false; 
        }
        
        if(!collCourse) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Course Taken</strong></em></p";
            $('.fixedContent').append(par);
            $('.collCourse').addClass('red errBG');
            bool = false;
        } else if(collName.length < 4) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please don't use acronym to your College/Vocational School Name</strong></em></p";
            $('.fixedContent').append(par);
            $('.collName').addClass('red errBG');
            bool = false;
        }
        
        if(!collFin) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide your Year Degree Earned ( College/Vocational )</strong></em></p";
            $('.fixedContent').append(par);
            $('.collDegree').addClass('red errBG');
            bool = false;
        } else if(collFin.length < 4) {
            par = "<p id='p_education' class='col_p'><i class=\"far fa-exclamation-triangle\"></i><em><strong>Please provide a valid Year ( College/Vocational Degree Earned )</strong></em></p";
            $('.fixedContent').append(par);
            $('.collDegree').addClass('red errBG');
            bool = false;
        }
    }

    const educationMsg = "<span class=\"tabIndent\">Education</span>";
    $('p#p_education').append(educationMsg);

    count = $('.fixedContent').children().length;
            $('.count span').html(count);
    if(count > 0){
        $('.fixed').show();
        $('.fixed').css('animationName', 'left');
    } else if(count < 1) {
        $('.fixed').css('animationName', 'right');
        setTimeout(function(){
            $('.fixed').hide();
        }, 500);
    }
            
    if(bool == true) {
        
        if(check.checked == true) {
            que = "true";
        } else {
            que = "false";
        }

        let update = new FormData();
        update.append('registerFinal',  3);
        update.append('id', id);
        update.append('que',            que);
        update.append('fname',          fname);
        update.append('mname',          mname);
        update.append('lname',          lname);
        update.append('email',          email);
        update.append('religion',       religion);
        update.append('nationality',    nationality);
        update.append('gender',         gender);
        update.append('status',         status);
        update.append('birthdate',      birthdate);
        update.append('birthplace',     birthplace);
        update.append('username',       username);
        update.append('password',       password);
        update.append('address',        address);
        update.append('contact',        contact);
        update.append('provinceAdd',    provinceAdd);
        update.append('provinceCon',    provinceCon);
        update.append('guardianFname',   guardianFname);
        update.append('guardianMname',   guardianMname);
        update.append('guardianLname',   guardianLname);
        update.append('guardianAdd',    guardianAdd);
        update.append('guardianContact',guardianContact);
        update.append('motherFname',     motherFname);
        update.append('motherMname',     motherMname);
        update.append('motherLname',     motherLname);
        update.append('motherAddress',  motherAddress);
        update.append('motherContact',  motherContact);
        update.append('fatherFname',     fatherFname);
        update.append('fatherMname',     fatherMname);
        update.append('fatherLname',     fatherLname);
        update.append('fatherAddress',  fatherAddress);
        update.append('fatherContact',  fatherContact);
        update.append('elemName',       elemName);
        update.append('elemAdd',        elemAdd);
        update.append('elemFin',        elemFin);
        update.append('highName',       highName);
        update.append('highAdd',        highAdd);
        update.append('highFin',        highFin);
        update.append('seniorName',     seniorName);
        update.append('seniorAdd',      seniorAdd);
        update.append('seniorFin',      seniorFin);
        update.append('collName',       collName);
        update.append('collAdd',        collAdd);
        update.append('collCourse',     collCourse);
        update.append('collFin',        collFin);

        $.ajax({
            url         : 'register.php',
            type        : 'POST',
            contentType : false,
            processData : false,
            data        : update,
            beforeSend  : function(){
                $('.fixing').css('display', 'flex');
            },
            success     : function(data){
                $('.fixing').hide();
                if(data == "1") {
                    msg = "<div class=\"cont\"><div class=\"unregister\">Successfully updated your profile</div></div>";
                    $('.dashboard_title').append(msg);
                    setTimeout(function(){
                        location.reload();
                    }, 1500);
                } 
                
            }
        });
    }
});
    count = $('.fixedContent').children().length;
    $('#ch1').on('change', function() {
        if(this.checked == true) {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        } else {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        }
        
    });

    $('#ch2').on('change', function() {
        if(this.checked == true) {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        } else {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        }
    });

    $('#ch3').on('change', function() {
        if(this.checked == true) {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        } else {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        }
    });

    $('#ch4').on('change', function() {
        if(this.checked == true) {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        } else {
            count = $('.fixedContent').children().length;
            $('.count span').html(count);
        }
    });
    

$('.close').on('click', function(){
    $('.fixed').css('animationName', 'right');
    setTimeout(function(){
        $('.fixed').hide();
    }, 500);
    
});
$('.reg').on('click', function(e){
    e.preventDefault();
    var stringReg = "";
    var i =0;
    
    if($('.table').find('tbody > tr:last-child').children('td:nth-child(6)').text() == 'PENDING') {
        let message = "<div class=\"cont\"><div class=\"unregister\">You already have your registration!!!</div></div>";
        $('.dashboard_title').append(message);
        setTimeout(function(){
            $('.cont').remove();
        }, 1300);
    } else {

        var log = new FormData();
        log.append('reg', 1);
        log.append('studentId', id);
        log.append('username2', $('.user').val());
        $.ajax({
            url         : 'register.php',
            type        : 'POST',
            data        : log,
            contentType : false,
            processData : false,
            success: function(data){
                if(data == "1") {
                    $('.regTable').show();
                    $('.subjectTable').hide();
                    $('.tableBase1').hide();
                } else if(data == "2") {
                    let message = "<div class=\"cont\"><div class=\"unregister\">Please complete your Personal Information first!!!</div></div>";
                    $('.dashboard_title').append(message);
                    setTimeout(function(){
                        $('.profile').addClass('side_foc');
                        $('.registration').removeClass('side_foc'); 
                        $('.schedule').removeClass('side_foc'); 
                        $('.selectorIn').css('top', '1px');
                        $('.handler1').show();
                        $('.handler2').hide();
                        $('.handler3').hide();
                        $('.cont').remove();
                    }, 1300);
                }
            }
        });  
    }
    

});




$('.keys').on('click', function(){
    let oldPass = document.querySelector('.oldPass');
    let newPass = document.querySelector('.newPass');
    let newRepass = document.querySelector('.newRepass');
    $('.fa-eye').toggleClass('fa-eye-slash');
    if(oldPass.type === 'password' && newPass.type === 'password') {
        oldPass.type = 'text';
        newPass.type = 'text';
        newRepass.type = 'text';
    } else {
        oldPass.type = 'password';
        newPass.type = 'password';
        newRepass.type = 'password';
    }
});



$('input').focus(function(){
    $(this).removeClass('red errBG');
});

var val = $('.count span').text(function(){
    if(this.text == '0') {
        $('fixed').hide();
    }
});

$('.sub').on('click', function(){
    // let ball;
    // let omg = "";
    // let app = document.querySelectorAll('.rev');
    // let i = la = 0;
    // ball = 0;
    // let bool = true;
    // app.forEach((arr)=> {
    //     if(arr.checked) {
    //         ball++;
    //     }
    //     i++;
    // });

    // if(ball < 1) {
    //     omg = "<div class=\"cont\"><div class=\"unregister\">Please select at least 1 Subject</div></div>";
    //     $('.dash').append(omg);
    //     setTimeout(function(){
    //         $('.cont').remove();
    //     }, 1500);
    //     bool = false;
    //     app.forEach((len)=> {
    //             len.classList.add('red', 'errBG');
          
    //     });
        
    // }
    
    // if(bool == true) {
        $('.subFixed').fadeIn(100, function(){
            $('.finalDeci').slideDown();
        });
    // }
    // 
});

$('.no').on('click', ()=> {
    $('.finalDeci').slideUp(200, function(){
        $('.subFixed').fadeOut();
    });
    
});
$('.subFixed').on('click', function(e) {
        if(e.target == this) {
            $('.finalDeci').slideUp(200, function(){
            $('.subFixed').fadeOut();
        });    
    }
    
});


// radio button
$('.execBachRd').on('change', function(){
    if(this.checked == true) {
        courseId = $('#exec2 option:selected').val();
        document.querySelector('.stType').selectedIndex = 0
        document.querySelector('.execRequire').style.display = 'block'
    }
});

$('.bachRd').on('change', function(){
    if(this.checked == true) {
        courseId = $('#bach2 option:selected').val();
        document.querySelector('.stType').selectedIndex = 1
        document.querySelector('.execRequire').style.display = 'none'
    }
});

// $('.certRd').on('change', function(){
//     if(this.checked == true) {
//         courseId = $('#cert2 option:selected').val();
//     }
// });

// $('.seniorRd').on('change', function(){
//     if(this.checked == true) {
//         courseId = $('#senior2 option:selected').val();
//     }
// });

// select box
$('#exec2').on('change', function(){
    if($('.execBachRd').prop('checked') == true) {
        courseId = $('#exec2 option:selected').val();
    }
}); 

$('#bach2').on('change', function(){
    if($('.bachRd').prop('checked') == true) {
        courseId = $('#bach2 option:selected').val();
    }
}); 

// $('#cert2').on('change', function(){
//     if($('.certRd').prop('checked') == true) {
//         courseId = $('#cert2 option:selected').val();
//     }
// });

// $('#senior2').on('change', function(){
//     if($('.seniorRd').prop('checked') == true) {
//         courseId = $('#senior2 option:selected').val();
//     }
// });
$('.yes :disabled').hover(function(){
    $(this).css('backgroundColor', 'unset');
    $(this).css('boxShadow', 'none');
})


/*f137_front, 
    f137_back,
    f138_front, 
    f138_back,
    psa_front;
    psa_back,
    coe */

$('.yes').on('click', ()=>{
    var j
    if($('.execBachRd').prop('checked') == true) {
        j = 0
        // var img = document.querySelectorAll('.imgRequire')
        
    } else if($('.bachRd').prop('checked') == true) {
        j = 1
    } 

        // f137_front  = $('#req0')[0].files[0]
        // f137_back   = $('#req1')[0].files[0]
        // f138_front  = $('#req2')[0].files[0]
        // f138_back   = $('#req3')[0].files[0]
        // psa_front   = $('#req4')[0].files[0]
        // psa_back    = $('#req5')[0].files[0]
        // coe         = $('#req6')[0].files[0]
    // else if($('.certRd').prop('checked') == true) {
    //     j = 2
    // } else if($('.seniorRd').prop('checked') == true) {
    //     j = 3
    // }
    var semSelect = document.querySelectorAll('.semSelect')
    var yearSelect = document.querySelectorAll('.yrSelect')
    var courseSelect = document.querySelectorAll('.courseSelect')

    var sems = semSelect[j].options[semSelect[j].selectedIndex].value
    var years = yearSelect[j].options[yearSelect[j].selectedIndex].value
    var coursed = courseSelect[j].options[courseSelect[j].selectedIndex].getAttribute('data-id')

    var code = coursed + sems + years 
    
    fname           = capitalize($('.fname'). val());
    mname           = capitalize($('.mname').val());
    lname           = capitalize($('.lname').val());
    religion        = capitalize($('.religion').val());
    nationality     = capitalize($('.nationality').val());
    birthdate       = $('.bday').val();
    birthplace      = capitalize($('.bplace').val());
    email           = $('.email').val();
    status          = capitalize($('.statusSelect').val());
    gender          = capitalize($('.gender').val());
    username        = $('.user').val();
    address         = capitalize($('.add'). val());
    contact         = $('.homeCont'). val();
    password        = $('.newPass'). val();
    provinceAdd     = capitalize($('.province').val());
    provinceCon     = $('.provinceCont'). val();
    motherFname     = capitalize($('.motherFname').val()); 
    motherMname     = capitalize($('.motherMname').val());
    motherLname     = capitalize($('.motherLname').val());
    motherAddress   = capitalize($('.motherAddress').val());
    motherContact   = $('.motherContact').val();
    fatherFname     = capitalize($('.fatherFname').val()); 
    fatherMname     = capitalize($('.fatherMname').val());
    fatherLname     = capitalize($('.fatherLname').val());
    fatherAddress   = capitalize($('.fatherAddress').val());
    fatherContact   = $('.fatherContact').val();
    guardianFname   = capitalize($('.guardianFname').val());
    guardianMname   = capitalize($('.guardianMname').val());
    guardianLname   = capitalize($('.guardianLname').val());
    guardianAdd     = capitalize($('.guardianAddress').val());
    guardianContact = $('.guardianContact').val();
    elemName        = capitalize($('.elemName').val());
    elemAdd         = capitalize($('.elemAdd').val());
    elemFin         = $('.elemDeg').val();
    highName        = capitalize($('.highName').val());
    highAdd         = capitalize($('.highAdd').val());
    highFin         = $('.highDegree').val();
    seniorName      = capitalize($('.snName').val());
    seniorFin       = $('.snDegree').val();
    seniorAdd       = capitalize($('.snAdd').val());
    collName        = capitalize($('.collName').val());
    collAdd         = capitalize($('.collAdd').val());
    collCourse      = $('.collCourse').val();
    collFin         = $('.collDegree').val();


    $('.yes').prop('disabled', true);
    let types =  yearLevels = semesters = enroll = courseid = user = "";
    var stTypes = document.querySelector('.stType')
    
    types       = $('.studType').val();
    yearLevels  = $('.yearLevel').val();
    semesters   = $('.semesters').val();
    user        = $('.user').val();
    // var dateNow = new Date();
    // var dd = String(dateNow.getDate()).padStart(2, '0');
    // var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = dateNow.getFullYear();
    
    // dateNow = yyyy + '' + dd + '' + mm + "-0008";
    // // [  ]

    var arr = [];
        let app = document.querySelectorAll('.delta');
        app.forEach((elem)=> {
            
                arr.push(elem.getAttribute('data-id'));
            
        });

            
        $('.fixing').css('display', 'flex');
        
        var att = parseInt(document.querySelector('.register').getAttribute('data-id'))
        var yeary   = document.querySelectorAll('.yrSelect')
        var yearVal = yeary[att].options[yeary[att].selectedIndex].value
        var semy    = document.querySelectorAll('.semSelect')
        var semVal  = semy[att].options[semy[att].selectedIndex].value
        var coursy  = document.querySelectorAll('.courseSelect')
        var courseVal = coursy[att].options[coursy[att].selectedIndex].getAttribute('data-id')
        var code    = courseVal + semVal + yearVal
        var update = new FormData();

        update.append('addRegistration', 1);
        update.append('student_id',     id);
        update.append('fname',          fname);
        update.append('mname',          mname);
        update.append('lname',          lname);
        update.append('email',          email);
        update.append('religion',       religion);
        update.append('nationality',    nationality);
        update.append('gender',         gender);
        update.append('status',         status);
        update.append('birthdate',      birthdate);
        update.append('birthplace',     birthplace);
        update.append('username',       username);
        update.append('address',        address);
        update.append('contact',        contact);
        update.append('provinceAdd',    provinceAdd);
        update.append('provinceCon',    provinceCon);
        update.append('guardianFname',  guardianFname);
        update.append('guardianMname',  guardianMname);
        update.append('guardianLname',  guardianLname);
        update.append('guardianAdd',    guardianAdd);
        update.append('guardianContact',guardianContact);
        update.append('motherFname',    motherFname);
        update.append('motherMname',    motherMname);
        update.append('motherLname',    motherLname);
        update.append('motherAddress',  motherAddress);
        update.append('motherContact',  motherContact);
        update.append('fatherFname',    fatherFname);
        update.append('fatherMname',    fatherMname);
        update.append('fatherLname',    fatherLname);
        update.append('fatherAddress',  fatherAddress);
        update.append('fatherContact',  fatherContact);
        update.append('elemName',       elemName);
        update.append('elemAdd',        elemAdd);
        update.append('elemFin',        elemFin);
        update.append('highName',       highName);
        update.append('highAdd',        highAdd);
        update.append('highFin',        highFin);
        update.append('seniorName',     seniorName);
        update.append('seniorAdd',      seniorAdd);
        update.append('seniorFin',      seniorFin);
        update.append('collName',       collName);
        update.append('collAdd',        collAdd);
        update.append('collCourse',     collCourse);
        update.append('collFin',        collFin);
        update.append('info',           arr);
        update.append('type',           types);
        update.append('yearLevels',     yearLevels);
        update.append('semester',       semesters);
        update.append('courseid',       courseId);
        update.append('code',           code);
        // update.append('f137_front',     $('#req0').prop('files')[0]);
        // update.append('f137_back',      $('#req1').prop('files')[0]);
        // update.append('f138_front',     $('#req2').prop('files')[0]);
        // update.append('f138_back',      $('#req3').prop('files')[0]);
        // update.append('psa_front',      $('#req4').prop('files')[0]);
        // update.append('psa_back',       $('#req5').prop('files')[0]);
        // update.append('coe',            $('#req6').prop('files')[0]);

    $.ajax({
        url             : 'regFinal.php',
        type            : 'POST',
        contentType     : false,
        processData     : false,
        data            : update,
        success         : function(data){
                    var str = data;
                    var up = new FormData()
                    up.append('uploadRequirements', 1);
                    up.append('registration',            str);
                    up.append('username',       username);
                    up.append('courseid',       courseId);
                    up.append('f137_front',     $('#req0').prop('files')[0]);
                    up.append('f137_back',      $('#req1').prop('files')[0]);
                    up.append('f138_front',     $('#req2').prop('files')[0]);
                    up.append('f138_back',      $('#req3').prop('files')[0]);
                    up.append('psa_front',      $('#req4').prop('files')[0]);
                    up.append('psa_back',       $('#req5').prop('files')[0]);
                    up.append('coe',            $('#req6').prop('files')[0]);
                    $.ajax({
                        url: 'register.php',
                        type: 'POST',
                        contentType     : false,
                        processData     : false,
                        data: up,
                        success: function(data) {
                            $('.subFixed').fadeOut(150);
                                $('.subjectFixed').fadeOut(100);
                                $('.fixing').fadeOut(50);
                                $('.l2').css('width', '100%');
                            setTimeout(function(){
                                $('.chLogo').css('borderColor', 'rgb(44, 188, 94)');
                                $('.chLogo').css('background', '#c0e9ce');
                                $('.fad.fa-check').css('color', 'rgb(44, 188, 94)');
                            }, 800);
                            emailing()
                            if(data) {

                                let me = "<div class=\"cont\"><div class=\"unregister\">Your registration has been successfully submitted</div></div>";
                                $('.dashboard_title').append(me);
                                    setTimeout(function(){
                                        $('.cont').remove();
                                        location.reload();
                                    }, 1500);
                            }
                            
                        }
                    })

                    
                        
                }
            })
});



$('.subjectListing').on('click', function(e) {
    if(e.target == this) {
        $('.exitSubject').fadeOut(200);
        setTimeout(()=>{
           $('.subjectListingContent').css('animationName', 'upFade');
           $('.validateDeleteReg').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.subjectListingContent').hide();
                $('.validateDeleteReg').hide();
            }, 300);
            setTimeout(()=>{
                $('.subjectListing').fadeOut();
                setTimeout(()=>{
                    $('.subjectListingContent li').remove();
                }, 200);
            }, 400); 
        }, 200);
    }
});

$('.cancelDelete').on('click', () =>{
    $('.exitSubject').fadeOut(200);
           $('.subjectListingContent').css('animationName', 'upFade');
           $('.validateDeleteReg').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.subjectListingContent').hide();
                $('.validateDeleteReg').hide();
            }, 300);
            setTimeout(()=>{
                $('.subjectListing').fadeOut();
                setTimeout(()=>{
                    $('.subjectListingContent li').remove();
                }, 200);
            }, 400); 
});

    var seniorSub = document.querySelectorAll(".editsenior");
    seniorSub.forEach((item)=>{
        $('.headDiv').remove();
        item.addEventListener('click', ()=>{
        
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.subjectListingContent').show();
                $('.subjectListingContent').css('animationName', 'downFade');
                setTimeout(()=>{
                    $('.exitSubject').fadeIn(300);
                    $('.exitSubject').css('display', 'flex');
                }, 300);
            }, 100);


            
            var value = item.getAttribute("data-value");
            var id = item.getAttribute("data-id");

            // var buttTicket = document.querySelector('.showTicket')
            // buttTicket.setAttribute('data-value', value);
            // buttTicket.setAttribute('data-id', id);
            $.ajax({
                url :   'register.php',
                type:   'POST',
                data:   {
                    set     : 1,
                    id      : id,
                    value   : value
                },
                success: function(data){
                    var JSONstring = JSON.parse(data);
                    $('.contentSub').children().remove()
                    JSONstring.forEach((arr)=>{
                        var html = "<div class=\"headDiv\">";
                            html+= `<div>${arr[0]}</div>`;
                            html+= `<div>${arr[1]}</div>`;
                            html+= `<div>${arr[2]}</div></div>`;
                        $('.contentSub').append(html);
                    });
                }
            });
        
        });
    });

    var reg2yrSub = document.querySelectorAll(".editreg2yr");
    reg2yrSub.forEach((item)=>{
        $('.headDiv').remove();
        item.addEventListener('click', ()=>{
        
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.subjectListingContent').show();
                $('.subjectListingContent').css('animationName', 'downFade');
                setTimeout(()=>{
                    $('.exitSubject').fadeIn(300);
                    $('.exitSubject').css('display', 'flex');
                }, 300);
            }, 100);


            
            var value = item.getAttribute("data-value");
            var id = item.getAttribute("data-id");

            // var buttTicket = document.querySelector('.showTicket')
            // buttTicket.setAttribute('data-value', value);
            // buttTicket.setAttribute('data-id', id);
            $.ajax({
                url :   'register.php',
                type:   'POST',
                data:   {
                    set     : 1,
                    id      : id,
                    value   : value
                },
                success: function(data){
                    $('.contentSub').children().remove()
                    var JSONstring = JSON.parse(data);
                    JSONstring.forEach((arr)=>{
                        var html = "<div class=\"headDiv\">";
                            html+= `<div>${arr[0]}</div>`;
                            html+= `<div>${arr[1]}</div>`;
                            html+= `<div>${arr[2]}</div></div>`;
                        $('.contentSub').append(html);
                    });
                }
            });
        
        });
    });

    

    var execSub = document.querySelectorAll(".editexec");
    execSub.forEach((item)=>{
        item.addEventListener('click', ()=>{
            $('.headDiv').remove(); 
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.subjectListingContent').show();
                $('.subjectListingContent').css('animationName', 'downFade');
                setTimeout(()=>{
                    $('.exitSubject').fadeIn(300);
                    $('.exitSubject').css('display', 'flex');
                }, 300);
            }, 100);
            
           
            // var ticketNumber = item.getAttribute('data-ticket');
            // document.querySelector('.ticketNumber').innerHTML = ticketNumber;
            // alert(item.getAttribute('data-ticket'));
            var value = item.getAttribute("data-value");
            var id = item.getAttribute("data-id");
            var type = item.getAttribute("data-type");

            // var buttTicket = document.querySelector('.showTicket')
            // buttTicket.setAttribute('data-value', value);
            // buttTicket.setAttribute('data-id', id);
            $.ajax({
                url :   'register.php',
                type:   'POST',
                data:   {
                    set     : 1,
                    id      : id,
                    value   : value
                },
                success: function(data){
                    $('.contentSub').children().remove()
                    var JSONstring = JSON.parse(data);

                    JSONstring.forEach((arr)=>{
                        
                        var html = `<div class="headDiv">
                                    <div>${arr[0]}</div>
                                    <div>${arr[1]}</div>
                                    <div>${arr[2]}</div>
                                    <div>${arr[5]}</div>
                                    <div>${arr[3]}</div>
                                    <div>${arr[4]}</div></div>`;
                        $('.contentSub').append(html);

                        
                    });
                }
            });

            $.ajax({
                url: 'register.php',
                type: 'POST',
                data: {
                    setImages: 1,
                    ids: id,
                    type: type
                }, 
                success: function(data) {

                    var jsonstr = JSON.parse(data)
                  
                        var img1 = jsonstr[0].split(',')
                        var img2 = jsonstr[1].split(',')
                        var img3 = jsonstr[2].split(',')
                        var img4 = jsonstr[3]

                        if(!img4) {
                            $('.emptyImage').css('display', 'grid')
                            $('.coe').hide()
                        } else {
                            $('.coe').css('display', 'grid')
                            $('.emptyImage').hide()
                        }

                        var arrElement = []
                        arrElement.push(img1[0])
                        arrElement.push(img1[1])
                        arrElement.push(img2[0])
                        arrElement.push(img2[1])
                        arrElement.push(img3[0])
                        arrElement.push(img3[1])
                        arrElement.push(img4)
                    
                        var images = document.querySelectorAll('.imgRequired')
                        images.forEach((elem, index) => {
                            elem.src = arrElement[index]
                        })

                }
            })
        
        });
    });
    
    var reg4yrSub = document.querySelectorAll(".editreg4yr");
    reg4yrSub.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            $('.headDiv').remove();
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.subjectListingContent').show();
                $('.subjectListingContent').css('animationName', 'downFade');
                setTimeout(()=>{
                    $('.exitSubject').fadeIn(300);
                    $('.exitSubject').css('display', 'flex');
                }, 300);
            }, 100);

            var value = item.getAttribute("data-value");
            var id = item.getAttribute("data-id");
            var type = item.getAttribute("data-type");
            // var buttTicket = document.querySelector('.showTicket')
            // buttTicket.setAttribute('data-value', value);
            // buttTicket.setAttribute('data-id', id);
            $.ajax({
                url :   'register.php',
                type:   'POST',
                data:   {
                    set     : 1,
                    id      : id,
                    value   : value
                },
                success: function(data){
                    $('.contentSub').children().remove()
                    var JSONstring = JSON.parse(data);
                    JSONstring.forEach((arr)=>{
                        var html = `<div class="headDiv">
                                    <div>${arr[0]}</div>
                                    <div>${arr[1]}</div>
                                    <div>${arr[2]}</div>
                                    <div>${arr[5]}</div>
                                    <div>${arr[3]}</div>
                                    <div>${arr[4]}</div></div>`;
                        $('.contentSub').append(html);
                    });
                }
            });

            $.ajax({
                url: 'register.php',
                type: 'POST',
                data: {
                    setImages: 1,
                    ids: id,
                    type: type
                }, 
                success: function(data) {

                    var jsonstr = JSON.parse(data)
                  
                        var img1 = jsonstr[0].split(',')
                        var img2 = jsonstr[1].split(',')
                        var img3 = jsonstr[2].split(',')
                        var img4 = jsonstr[3]

                        if(!img4) {
                            $('.emptyImage').css('display', 'grid')
                            $('.coe').hide()
                        } else {
                            $('.coe').css('display', 'grid')
                            $('.emptyImage').hide()
                        }

                        var arrElement = []
                        arrElement.push(img1[0])
                        arrElement.push(img1[1])
                        arrElement.push(img2[0])
                        arrElement.push(img2[1])
                        arrElement.push(img3[0])
                        arrElement.push(img3[1])
                        arrElement.push(img4)
                    
                        var images = document.querySelectorAll('.imgRequired')
                        images.forEach((elem, index) => {
                            elem.src = arrElement[index]
                        })

                }
            })
        
        //this is the end if
        });
    });


    $('.check').on('click', ()=>{
        $('.contain').css('transform', 'scale(0.80) translate(0px, 0px)');
        setTimeout(()=>{
            $('.contain').css('transform', 'scale(0.80) translate(300px, 0px)');
        }, 500);

        $('.contain').css('borderRadius', '7px');
        $('.imageFixed').fadeIn(200);
        setTimeout(()=>{
            $('.imageFixedContent').show();
            $('.imageFixedContent').css('animationName', 'right2');
                setTimeout(()=>{
                    $('.hides').fadeIn(200);
                    $('.hides').css('display', 'flex');
                }, 500);
        }, 100);
        
    });
    
    $('.exitSubject').on('click', ()=>{
        $('.exitSubject').fadeOut(200);
        setTimeout(()=>{
           $('.subjectListingContent').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.subjectListingContent').hide();
            }, 300);
            setTimeout(()=>{
                $('.subjectListing').fadeOut();
                setTimeout(()=>{
                    $('.subjectListingContent li').remove();
                }, 200);
            }, 400); 
        }, 200);
    });

    $('.hides').on('click', ()=>{
        $('.uploadImage').val("");
        $('.hides').fadeOut(200);
        setTimeout(()=>{ 
            $('.contain').css('transform', 'scale(0.80) translate(0px, 0px)');
        setTimeout(()=>{
            $('.contain').css('transform', 'scale(1)');
        }, 400);
            $('.contain').css('borderRadius', '0px');
            $('.imageFixed').fadeOut(1000);
            $('.imageFixedContent').css('animationName', 'left2');
            setTimeout(()=>{
                $('.imageFixedContent').css('display', 'none');
                document.querySelector('.new').src = "image/default/avatar3.svg";
            }, 500);
        }, 200);
            
    });

    
    $('.imageFixed').on('click', function(e){
        
        if(e.target == this) {
            $('.uploadImage').val("");
            $('.hides').fadeOut(200);
            setTimeout(()=>{
                $('.contain').css('transform', 'scale(0.80) translate(0px, 0px)');
                setTimeout(()=>{
                    $('.contain').css('transform', 'scale(1)');
                }, 400);
                $('.contain').css('borderRadius', '0px');
                $('.imageFixed').fadeOut(1000);
                $('.imageFixedContent').css('animationName', 'left2');
                setTimeout(()=>{
                    $('.imageFixedContent').css('display', 'none');
                    document.querySelector('.new').src = "image/default/avatar3.svg";
                }, 500);
            }, 200);
        }
    });

    $('#uploadImage').on('change', (e)=>{
        // document.getElementById('cropImage').src = "";
        // $('.cropper-container').remove();
        //    croppingTool();
        var preview = document.querySelector('.new');
        if(validate()) {
            $('.subs').prop('disabled', false);
            if(e.target.files.length > 0) {
                var src = URL.createObjectURL(e.target.files[0]);
                preview.src = src;
                preview.style.display = "block";
            } 
        } else {
            preview.src = "image/default/unknown2.svg";
            $('.subs').prop('disabled', true);
            let me = "<div class=\"cont\"><div class=\"unregister\">Unsupported file type</div></div>";
            $('.imageContenFixedTitle').append(me);
                setTimeout(function(){
                    $('.cont').remove();
                }, 1500);
        }

     
        
    });

    //load() function
    $('.subs').on('click', ()=>{
        if($('#uploadImage').val()) {
            var dataForm = new FormData();
            dataForm.append('get', 1);
            dataForm.append('upload', $('#uploadImage')[0].files[0]);
            dataForm.append('id', id);
            dataForm.append('user', $('.name span').text());
            alert($('.name span').text())
            $.ajax({
                url: 'register.php',
                type: 'POST',
                processData: false,
                contentType: false,
                data: dataForm,
                 
                success: function(data){
                        let me = "<div class=\"cont\"><div class=\"unregister\">Profile image successfully changed</div></div>";
                        $('.imageContenFixedTitle').append(me);
                        setTimeout(function(){
                            $('.cont').remove();
                            $('img#images').attr('src', data);
                            $('img.current').attr('src', data);
                            document.querySelector('.new').src = "image/default/avatar3.svg";
                            $('#uploadImage').val("");
                            $('.subs').prop('disabled', true);
                            $('.hides').fadeOut(200);
                            setTimeout(()=>{
                                $('.contain').css('transform', 'scale(0.80) translate(0px, 0px)');
                                setTimeout(()=>{
                                    $('.contain').css('transform', 'scale(1)');
                                }, 400);
                                $('.contain').css('borderRadius', '0px');
                                $('.imageFixed').fadeOut(1000);
                                $('.imageFixedContent').css('animationName', 'left2');
                                setTimeout(()=>{
                                    $('.imageFixedContent').css('display', 'none');
                                    document.querySelector('.new').src = "image/default/avatar3.svg";
                                }, 500);
                            }, 200);
                        }, 1500);
                }
            });
        }
    });

    
    getImage(id);
    

    const validate = ()=>{
        var upload = document.querySelector('.uploadImage');
        var valid = ['jpg', 'png', 'jpeg'];

        var value = upload.value.lastIndexOf('.') + 1;
        var ext = upload.value.substring(value);

        return valid.includes(ext);
    };



    var letPreview = document.querySelectorAll('.imgRequire')
    letPreview.forEach((element, index) => {
        element.addEventListener('click', () =>{
            $('.closing').show()
            var elem = element.getAttribute('src')
            var image = document.getElementById('previewImage')
            image.src = elem
            $('.ticketFixed').fadeIn(300);
            setTimeout(()=>{
                $('.imagePreview').show();
                $('.imagePreview').css('animationName', 'downFade');
            });

            $('.closeTicketing').on('click', ()=>{
                $('.ticket').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.ticket').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').children().remove()
                }, 500);

                $('.imagePreview').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.imagePreview').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').attr('src', '')
                }, 500);
            });
        })
    })

    var letPreviews = document.querySelectorAll('.imgRequired')
    letPreviews.forEach((element, index) => {
        element.addEventListener('click', () =>{
            $('.closing').show()
            var elem = element.getAttribute('src')
            var image = document.getElementById('previewImage')
            image.src = elem
            $('.ticketFixed').fadeIn(300);
            setTimeout(()=>{
                $('.imagePreview').show();
                $('.imagePreview').css('animationName', 'downFade');
            });

            $('.closeTicketing').on('click', ()=>{
                $('.ticket').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.ticket').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').children().remove()
                }, 500);

                $('.imagePreview').css('animationName', 'upFade'); 
                setTimeout(()=>{
                    $('.imagePreview').hide();
                    $('.ticketFixed').fadeOut(500);
                    $('.ticket').attr('src', '')
                }, 500);
            });
        })
    })


    // sortData();


    let deleteExec = document.querySelectorAll('.deleteexec');
    deleteExec.forEach((itemClass)=>{
        itemClass.addEventListener('click', ()=>{
            var ids = itemClass.getAttribute("data-id")
            var itemClassParent = document.querySelector('.confirmDelete');
            itemClassParent.setAttribute('data-id', ids);
            itemClassParent.setAttribute('data-value', 'exec');
            itemClassParent.setAttribute('data-subjectid', id);
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.validateDeleteReg').show();
                $('.validateDeleteReg').css('animationName', 'downFade');
            }, 100);
        });
                
    });

    let deleteReg4yr = document.querySelectorAll('.deletereg4yr');
    deleteReg4yr.forEach((itemClass)=>{
        itemClass.addEventListener('click', ()=>{
            var ids = itemClass.getAttribute("data-id")
            var itemClassParent = document.querySelector('.confirmDelete');
            itemClassParent.setAttribute('data-id', ids);
            itemClassParent.setAttribute('data-value', 'reg4yr');
            itemClassParent.setAttribute('data-subjectid', id);
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.validateDeleteReg').show();
                $('.validateDeleteReg').css('animationName', 'downFade');
            }, 100);
        });
                
    });

    let deleteReg2yr = document.querySelectorAll('.deletereg2yr');
    deleteReg2yr.forEach((itemClass)=>{
        itemClass.addEventListener('click', ()=>{
            var ids = itemClass.getAttribute("data-id")
            var itemClassParent = document.querySelector('.confirmDelete');
            itemClassParent.setAttribute('data-id', ids);
            itemClassParent.setAttribute('data-value', 'reg2yr');
            itemClassParent.setAttribute('data-subjectid', id);
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.validateDeleteReg').show();
                $('.validateDeleteReg').css('animationName', 'downFade');
            }, 100);
        });
                
    });

    let deleteSenior = document.querySelectorAll('.deletesenior');
    deleteSenior.forEach((itemClass)=>{
        itemClass.addEventListener('click', ()=>{
            var ids = itemClass.getAttribute("data-id")
            var itemClassParent = document.querySelector('.confirmDelete');
            itemClassParent.setAttribute('data-id', ids);
            itemClassParent.setAttribute('data-value', 'senior');
            itemClassParent.setAttribute('data-subjectid', id);
            $('.subjectListing').fadeIn(200);
            setTimeout(()=>{
                $('.validateDeleteReg').show();
                $('.validateDeleteReg').css('animationName', 'downFade');
            }, 100);
        });
                
    });

    $('.confirmDelete').on('click', function() {
        var idEncode      = this.getAttribute('data-id');
        var value   = this.getAttribute('data-value');
        var id   = this.getAttribute('data-subjectid');
         $('.fixing').css('display', 'flex');
         setTimeout(()=>{
            $.ajax({
                url: 'register.php',
                type: 'POST',
                data: {
                    deleteRegistration: 6,
                    id: idEncode,
                    studId: id,
                    value: value
                }, 
                success: function(data){
                    $('.fixing').fadeOut();
                    
                    if(data) {
                        $('.validateDeleteReg').fadeOut();
                        setTimeout(()=>{
                            $('.subjectListing').fadeOut(200);
                        }, 300);
                        setTimeout(()=>{
                            let me = "<div class=\"cont\" style=\"z-index: 10\"><div class=\"unregister\">" + 
                                "You've Successfully deleted your Registration</div></div>";
                            $('.dashboard_title').append(me);
                                setTimeout(function(){
                                    $('.cont').remove();
                                    location.reload();
                                }, 1500);
                        }, 300);
                    }
                }
            });
         }, 1000);
        
    });
    
    
});

const validateEnrollmentPeriod = (code) => {
    $.ajax({
        url: 'register.php',
        type: 'POST',
        data: {
            validateEnrollment: 1,
            code: code
        },
        success: function(data){
            if(data.length == 5) {
                // $('.register').attr('disabled', 'disabled');
                return "No enrollment period"
            } else if(data.length == 4) {
                return "Existed"
            }
        }
    })

}

