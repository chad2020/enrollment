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
    var checks = 0;
    var courseId;
    let fname, mname, lname, email, religion, status, birthdate, birthplace, gender,
    address, contact, provinceAdd, provinceCon, guardianFname, guardianMname, guardianLname,  
    guardianAdd, guardianContact, nationality, username, password, 
    repassword, motherFname, motherMname, motherLname, motherAddress, motherContact, fatherFname,
    fatherMname, fatherLname, fatherAddress, fatherContact, elemName, elemAdd,  elemFin, highName, highAdd, highFin, 
    seniorName, seniorAdd,  seniorFin, collName, collAdd, collFin, que, msg;
    let count;
    $('.dash').remove('.cont');
    courseId = $('#exec2 option:selected').val();

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
        data: {id: id},
        success: function(data){
            $('img#images').attr('src', data);
            $('img.current').attr('src', data);
        }
    })
}


$('.showTicket').on('click', ()=>{
    $('.ticketFixed').fadeIn(300);
    setTimeout(()=>{
        $('.ticket').show();
        $('.ticket').css('animationName', 'downFade');
    });
     
});

$('.closeTicket').on('click', ()=>{
    $('.ticket').css('animationName', 'upFade'); 
    setTimeout(()=>{
        $('.ticket').hide();
        $('.ticketFixed').fadeOut(500);
    }, 500);
    
    
});

$('.ticketFixed').on('click', function(e){
    if(e.target == this) {
        $('.ticket').css('animationName', 'upFade'); 
            setTimeout(()=>{
                $('.ticket').hide();
                $('.ticketFixed').fadeOut(500);
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
    var date = $('table').find('tbody > tr:last-child').children('td:nth-child(7)').text();
    var status = $('table').find('tbody > tr:last-child').children('td:nth-child(6)').text();
    var regDate = "";
    for(var i = 0; i < date.length; i++){
        regDate += date[i];
        if(i === 10) {break;};
    }

    if(status == "IN PROCESS") {
        $('.me').html('Your registration is in process now.<br>You can\'t cancel or delete it.');
    } else if(status == "ENROLLED") {
        $('.me').html('Congratulations. You\'re enrolled now.');
    }

    var dateEndRegistration = "2021-04-26";

    if(regDate > dateEndRegistration) {
        $('.reg').attr('disabled', true);
}
    // var dateNow = new Date();
    // var dd = String(dateNow.getDate()).padStart(2, '0');
    // var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = dateNow.getFullYear();
    
    // dateNow = yyyy + '-' + dd + '-' + mm;
    // if(dateNow )
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
    gender          = capitalize($('.gender').text());
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
    
    var attributeId = this.getAttribute('data-id')
    var reg = this.getAttribute('data-regid')
    var type = this.getAttribute('data-type')
    
    if(bool == true) {
        
        let update = new FormData();
        update.append('update',  3),
        update.append('id', attributeId),
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
            url         : 'adminLoad.php',
            type        : 'POST',
            contentType : false,
            processData : false,
            data        : update,
            beforeSend  : function(){
                $('.loadFixing').css('display', 'flex');
                $('.loadFixing.fixing h5').html('Updating...')
            },
            success     : function(data){
                $('.loadFixing').hide();
                $('.loadFixing.fixing h5').html('Submitting...')
            
                if(data == "1") {
                    msg = "<div class=\"cont\"><div class=\"unregister\">Successfully updated your profile</div></div>";
                    $('.credentialTitle').append(msg);
                    setTimeout(function(){
                        var att = document.querySelector('.credentials')
                        var get = att.getAttribute('data-search')
                        searching(get,"")
                        credentialButtons();
                        deletingRegistration()
                        delCon(get)
                        getStudentInformation(attributeId, reg, type);
                        $('.cont').remove();
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

$('input').focus(function(){
    $(this).removeClass('red errBG');
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
            $.ajax({
                url: 'adminLoad.php',
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

    
    

    const validate = ()=>{
        var upload = document.querySelector('.uploadImage');
        var valid = ['jpg', 'png', 'jpeg'];

        var value = upload.value.lastIndexOf('.') + 1;
        var ext = upload.value.substring(value);

        return valid.includes(ext);
    };



                // var form = new FormData();
                // var id = item.getAttribute("data-id");
                // form.append('deleteReg', 1);
                // form.append('id', id);
                
                // $.ajax({
                //     url: 'register.php',
                //     type: 'POST',
                //     data: form,
                //     success: function(data){
                //         setTimeout(()=>{
                //             let me = "<div class=\"cont\"><div class=\"unregister\">Registration deleted successfully</div></div>";
                //             $('.dashboard_title').append(me);
                //                 setTimeout(function(){
                //                     $('.cont').remove();
                //                 }, 1500);
                //             }, 200);
                //     }
});