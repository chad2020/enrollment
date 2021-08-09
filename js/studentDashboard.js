const set = () => {
    $('.registration').addClass('side_foc');
    $('.profile').removeClass('side_foc'); 
    $('.schedule').removeClass('side_foc'); 
    $('.selectorIn').css('top', '41px');
    $('.handler1').hide();
    $('.handler2').show();
    $('.handler3').hide();
    $('.regTable').hide();
    $('.subjectTable').hide();
    $('.tableBase1').show();
    $('.fixed').hide();
    $('.exec').show();
    $('.labelCourse').text($('#exec2 option:selected').text());
    $('.ch').show();
    $('.execYr').show();
    $('.semsExecutive').show();
    degree = "Executive - Bachelor's Degree ( Two-year Course )";
    $('.degree').val(degree);
    sem = $('.semsExec option:selected').text();
    $('.semesters').val(sem);
    enrolleeType = $('.stType option:selected').text();
    $('.enrollType').val(enrolleeType);
    year = $('.not_applicable option:selected').text();
    $('.yearLevel').val(year);
    studType = "Executive Student";
    $('.studType').val(studType);
    
}


const validateEnrollmentPeriodsDefaults = () => {
    // var att = document.querySelector('.register').getAttribute('data-id')
    var yeary   = document.querySelectorAll('.yrSelect')
    var yearVal = yeary[0].options[yeary[0].selectedIndex].value
    var semy    = document.querySelectorAll('.semSelect')
    var semVal  = semy[0].options[semy[0].selectedIndex].value
    var coursy  = document.querySelectorAll('.courseSelect')
    var courseVal = coursy[0].options[coursy[0].selectedIndex].getAttribute('data-id')
    var code    = courseVal + semVal + yearVal
    document.querySelector('.register').setAttribute('data-id', 0)
        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: {
                validateEnrollment: 1,
                code: code
            },
            success: function(data){
                var JSONstring = JSON.parse(data)
                $('.hands').children().remove()
                if(JSONstring.length > 0) {
                    
                    JSONstring.forEach((element, i) => {
                        var html = `<div class="form-group chs">
                                    <div class="delta" data-id="${element[0]}"><label class="labs" style="width: 390px">
                                                ${element[2]}
                                            </label></div>
                                        <div class="codeSub">${element[1]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[5]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[3]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[4]}</div>
                                    </div>`

                        $('.hands').append(html)
                    })
                    
                   $('.register').prop('disabled', false);
                   $('.rev').focus(function(){
                        $('.rev').removeClass('red errBG');
                    });
                } else if(JSONstring.length == 0) {
                    $('.register').prop('disabled', true);
                }
            }
        })
}

const validateEnrollmentPeriods = (index) => {
    var yeary   = document.querySelectorAll('.yrSelect')
    var yearVal = yeary[index].options[yeary[index].selectedIndex].value
    var semy    = document.querySelectorAll('.semSelect')
    var semVal  = semy[index].options[semy[index].selectedIndex].value
    var coursy  = document.querySelectorAll('.courseSelect')
    var courseVal = coursy[index].options[coursy[index].selectedIndex].getAttribute('data-id')
    var code    = courseVal + semVal + yearVal
    document.querySelector('.register').setAttribute('data-id', index)
    $.ajax({
        url: 'register.php',
        type: 'POST',
        data: {
            validateEnrollment: 1,
            code: code
        },
        success: function(data){
            var JSONstring = JSON.parse(data)
            $('.hands').children().remove()
            if(JSONstring.length > 0) {
                JSONstring.forEach((element, i) => {
                    var html = `<div class="form-group chs">
                                    <div class="delta" data-id="${element[0]}"><label class="labs" style="width: 390px;">
                                                ${element[2]}
                                            </label></div>
                                        <div class="codeSub">${element[1]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[5]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[3]}</div>
                                        <div class="codeSub" style="color: unset!important">${element[4]}</div>
                                    </div>`

                    $('.hands').append(html)
                })
                $('.rev').focus(function(){
                    $('.rev').removeClass('red errBG');
                });
                
               $('.register').prop('disabled', false);
            } else if(JSONstring.length == 0) {
                $('.register').prop('disabled', true);
            }
        }
    })
}



$(document).ready(function(){
    //Dashboard
    var sem = studType = degree = year = enrolleeType = "";
    let left = 170.66;
    let count2;
    validateEnrollmentPeriodsDefaults()
    set();
    $('.basic_info').on('click', function(){
        $('.basic_info').addClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').removeClass('foc');  
        $('.line').css('left', '0');
        $('.menu1').show();
        $('.menu2').hide();
        $('.menu3').hide();
        $('.menu4').hide();
        $('.menu5').hide();
        $('.menu6').hide();
    });

    $('.credentials').on('click', function(){
        left = 16.66666666666667;
        $('.basic_info').removeClass('foc'); 
        $('.credentials').addClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').removeClass('foc'); 
        $('.line').css('left', left + '%');
        $('.menu1').hide();
        $('.menu2').show();
        $('.menu3').hide();
        $('.menu4').hide();
        $('.menu5').hide();
        $('.menu6').hide();
    });

    $('.address').on('click', function(){
        left = 16.66666666666667;
        left = left * 2;
        $('.basic_info').removeClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').addClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').removeClass('foc'); 
        $('.line').css('left', left + '%');
        $('.menu1').hide();
        $('.menu2').hide();
        $('.menu3').show();
        $('.menu4').hide();
        $('.menu5').hide();
        $('.menu6').hide();
    });

    $('.parents').on('click', function(){
        left = 16.66666666666667;
        left = left * 3;
        $('.basic_info').removeClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').addClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').removeClass('foc'); 
        $('.line').css('left', left + '%');
        $('.menu1').hide();
        $('.menu2').hide();
        $('.menu3').hide();
        $('.menu4').show();
        $('.menu5').hide();
        $('.menu6').hide();
    });

    $('.guardian').on('click', function(){
        left = 16.66666666666667;
        left = left * 4;
        $('.basic_info').removeClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').addClass('foc'); 
        $('.education').removeClass('foc'); 
        $('.line').css('left', left + '%');
        $('.menu1').hide();
        $('.menu2').hide();
        $('.menu3').hide();
        $('.menu4').hide();
        $('.menu5').show();
        $('.menu6').hide();
    });

    $('.education').on('click', function(){
        left = 16.66666666666667;
        left = left * 5;
        $('.basic_info').removeClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').addClass('foc'); 
        $('.line').css('left', left + '%');
        $('.menu1').hide();
        $('.menu2').hide();
        $('.menu3').hide();
        $('.menu4').hide();
        $('.menu5').hide();
        $('.menu6').show();
    });

    //Side Menus

    $('.profile').on('click', function(){
        $(this).addClass('side_foc');
        $('.registration').removeClass('side_foc'); 
        $('.schedule').removeClass('side_foc'); 
        $('.selectorIn').css('top', '1px');
        $('.handler1').show();
        $('.handler2').hide();
        $('.handler3').hide();
        $('.menu1').show();
        $('.menu2').hide();
        $('.menu3').hide();
        $('.menu4').hide();
        $('.menu5').hide();
        $('.menu6').hide();
        $('.basic_info').addClass('foc'); 
        $('.credentials').removeClass('foc'); 
        $('.address').removeClass('foc'); 
        $('.parents').removeClass('foc'); 
        $('.guardian').removeClass('foc'); 
        $('.education').removeClass('foc'); 
        $('.line').css('left', '0');
    });

    $('.registration').on('click', function(){
        $(this).addClass('side_foc');
        $('.profile').removeClass('side_foc'); 
        $('.schedule').removeClass('side_foc'); 
        $('.selectorIn').css('top', '41px');
        $('.handler1').hide();
        $('.handler2').show();
        $('.handler3').hide();
        $('.regTable').hide();
        $('.subjectTable').hide();
        $('.tableBase1').show();
        $('.fixed').hide();
    });

    $('.schedule').on('click', function(){
        $(this).addClass('side_foc');
        $('.registration').removeClass('side_foc'); 
        $('.profile').removeClass('side_foc'); 
        $('.selectorIn').css('top', '81px');
        $('.handler1').hide();
        $('.handler2').hide();
        $('.handler3').show();
        $('.fixed').hide();
    });

    $('#ch1').on('change', function() {
        if(this.checked == true) {
            $('.rp').css('display', 'block');
            $('.oldPass').val('');
            $('.newPass').val('');
            $('.newRepass').val('');
        } else {
            $('.rp').css('display', 'none');
            $('.oldPass').val('');
            $('.newPass').val('');
            $('.newRepass').val('');
            $('.oldPass').removeClass('red errBG');
            $('.newPass').removeClass('red errBG');
            $('.newRepass').removeClass('red errBG');
            $('.fixedContent p#p_cr').remove()
        }

        count2 = $('.fixedContent').children().length;
                $('.count span').html(count2);
        if(count2 > 0){
            $('.fixed').show();
            $('.fixed').css('animationName', 'left');
        } else{
            $('.fixed').css('animationName', 'right');
            setTimeout(function(){
                $('.fixed').hide();
            }, 500);
        }
    });

    $('#ch2').on('change', function() {
        if(this.checked == false) {
            $('.province').prop('disabled', false);
            $('.provinceCont').prop('disabled', false);
        } else {
            $('.province').prop('disabled', true);
            $('.provinceCont').prop('disabled', true);

            $('.province').removeClass('red errBG');
            $('.provinceCont').removeClass('red errBG');
            $('.fixedContent p.pro').remove();
        }
        count2 = $('.fixedContent').children().length;
            $('.count span').html(count2);
        if(count2 > 0){
            $('.fixed').show();
            $('.fixed').css('animationName', 'left');
        } else{
            $('.fixed').css('animationName', 'right');
            setTimeout(function(){
                $('.fixed').hide();
            }, 500);
        }
    });

    $('.logout').on('click', function(){
        window.location.href="logout.php";
    })

    $('#ch3').on('change', function(){
        if($('#ch3').prop("checked") == false) {
            $('.snName').prop('disabled', false);
            $('.snAdd').prop('disabled', false);
            $('.snDegree').prop('disabled', false);
            
        } else {
            $('.snName').prop('disabled', true);
            $('.snAdd').prop('disabled', true);
            $('.snDegree').prop('disabled', true);

            $('.snName').removeClass('red errBG');
            $('.snAdd').removeClass('red errBG');
            $('.snDegree').removeClass('red errBG');
            $('.fixedContent p.senior_p').remove();
        }
        count2 = $('.fixedContent').children().length;
            $('.count span').html(count2);
        if(count2 > 0){
            $('.fixed').show();
            $('.fixed').css('animationName', 'left');
        } else{
            $('.fixed').css('animationName', 'right');
            setTimeout(function(){
                $('.fixed').hide();
            }, 500);
        }
    });

    $('#ch4').on('change', function(){
        if(this.checked == false) {
            $('.collName').prop('disabled', false);
            $('.collAdd').prop('disabled', false);
            $('.collCourse').prop('disabled', false);
            $('.collDegree').prop('disabled', false);
            
        } else {
            $('.collName').prop('disabled', true);
            $('.collAdd').prop('disabled', true);
            $('.collCourse').prop('disabled', true);
            $('.collDegree').prop('disabled', true);

            $('.collName').removeClass('red errBG');
            $('.collAdd').removeClass('red errBG');
            $('.collCourse').removeClass('red errBG');
            $('.collDegree').removeClass('red errBG');
            $('.fixedContent p.col_p').remove();

        }
        count2 = $('.fixedContent').children().length;
            $('.count span').html(count2);
        if(count2 > 0){
            $('.fixed').show();
            $('.fixed').css('animationName', 'left');
        } else{
            $('.fixed').css('animationName', 'right');
            setTimeout(function(){
                $('.fixed').hide();
            }, 500);
        }
        
    });

    $('.register').on('click', function(){
        let bool = true
        let bool2 = true
        var exec = document.getElementById('exBachRd')
        var bach = document.getElementById('bachRrd')
        // if(!$('.r1').val())
        if(exec.checked) {
            var require = document.querySelectorAll('.requirements')
            require.forEach((element, index) => {
                if(!element.value) {
                    element.classList.add('red','errBG')
                    let empty = "<div class=\"emp\">Please don't leave it empty</div>";
                        $(`.req${index}`).append(empty);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                    bool = false
                } else if(element) {
                    var valid = validateRequire(element)
                    if(!valid) {
                        let empty = "<div class=\"emp\">Unsupported image type</div>";
                        $(`.req${index}`).append(empty);
                        setTimeout(() => {
                            $('.emp').remove();
                        }, 1500);
                        bool2 = false
                        
                    }
                }
            })
            
        } else if(bach.checked) {
            var require = document.querySelectorAll('.requirements')
            require.forEach((element, index) => {
                if(index == 6)  {
                    
                } else {
                    if(!element.value){
                        element.classList.add('red','errBG')
                        let empty = "<div class=\"emp\">Please don't leave it empty</div>";
                            $(`.req${index}`).append(empty);
                            setTimeout(() => {
                                $('.emp').remove();
                            }, 1500);
                        bool = false
                    } else if(element) {
                        var valid = validateRequire(element)
                        if(!valid) {
                            let empty = "<div class=\"emp\">Unsupported image type</div>";
                            $(`.req${index}`).append(empty);
                            setTimeout(() => {
                                $('.emp').remove();
                            }, 1500);
                            bool2 = false
                        }
                    }
                }
            })
        }
        // var require = document.querySelectorAll('.requirements')
        // require.forEach((element, index) => {
        //     if(!element.value) {
        //         element.classList.add('red','errBG')
        //         let empty = "<div class=\"emp\">Please don't leave it empty</div>";
        //             $(`.req${index}`).append(empty);
        //             setTimeout(() => {
        //                 $('.emp').remove();
        //             }, 1500);
        //         bool = false
        //     } 
        // })

        if(!bool && bool2) {
            let me = "<div class=\"cont2\" style=\"z-index: 10\"><div class=\"unregister\">" + 
                "Please attached your Requirements</div></div>";
            $('.dashReg').append(me);
            setTimeout(function(){
                $('.cont2').remove();
            }, 1500);
        } else if(!bool2 && bool) {
            let me = "<div class=\"cont2\" style=\"z-index: 10\"><div class=\"unregister\">" + 
                "Please attached a valid image format</div></div>";
            $('.dashReg').append(me);
            setTimeout(function(){
                $('.cont2').remove();
            }, 1500);
        } else if(!bool && !bool2) {
            let me = "<div class=\"cont2\" style=\"z-index: 10\"><div class=\"unregister\">" + 
                "Please attached your Requirements and attached a valid image format</div></div>";
            $('.dashReg').append(me);
            setTimeout(function(){
                $('.cont2').remove();
            }, 1500);
        } 
        else if(bool && bool2) {
            $('.l1').css('width', '100%');
        
            setTimeout(function(){
                $('.gLogo').css('borderColor', '#2CBC5E');
                $('.gLogo').css('background', '#c0e9ce');
                $('.fa-th-list').css('color', '#2CBC5E');
                $('.subjectFixed').fadeIn(200, ()=>{
                    $('.subjectTable').css('animationName', 'left');
                    $('.subjectTable').show();
                    $('.dash').remove('.cont');
                });
            }, 800);
        }

       
        
    });

    let validationRequire = document.querySelectorAll('.requirements')
    validationRequire.forEach((elem, index) => {
        elem.addEventListener('change', (e)=>{
            var valid = validateRequire(elem)
            if(!valid) {
                elem.classList.add('red','errBG')
                let me = "<div class=\"cont2\" style=\"z-index: 10\"><div class=\"unregister\">" + 
                "Unsupported image format</div></div>";
                $('.dashReg').append(me);
                setTimeout(function(){
                    $('.cont2').remove();
                }, 1500);

            } else {
                // var preview = 
                var src = URL.createObjectURL(e.target.files[0]);
                var images = document.querySelectorAll('.imgRequire')
                images[index].src = src
                // preview.src = src;
            }
        })
        // if(element) {
        //     var elem = element.id
        //     
        //     alert
        //     $(`${elem}`).on('change', () => {
        //         if(valid) {
        //             
        //         }
        //     })
        // }
    })
    $('.subjectFixed').on('click', function(e){
        if(e.target == this) {
            $('.subjectTable').css('animationName', 'right');
            setTimeout(function(){
                $('.subjectTable').hide();
                $('.subjectFixed').fadeOut(200, ()=>{
                    $('.l1').css('width', '0%');
                    $('.gLogo').css('borderColor', '#8D8D8D');
                    $('.gLogo').css('background', '#D3D3D3');
                    $('.fa-th-list').css('color', '#8D8D8D');
                });
            }, 500);
        }
        
    });

    $('.can').on('click', function(){
        $('.subjectTable').css('animationName', 'right');
            setTimeout(function(){
                $('.subjectTable').hide();
                $('.subjectFixed').fadeOut(200, ()=>{
                    $('.l1').css('width', '0%');
                    $('.gLogo').css('borderColor', '#8D8D8D');
                    $('.gLogo').css('background', '#D3D3D3');
                    $('.fa-th-list').css('color', '#8D8D8D');
                });
            }, 500);
    });

    $('.dash').text($('.labelCourse').text());

    // courses  
    $('#exec2').on('change', function(){
        if($('.execBachRd').prop('checked') == true) {
            $('.labelCourse').text($('#exec2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.ch').show();
            validateEnrollmentPeriods(0)
        }
    }); 

    $('#bach2').on('change', function(){
        if($('.bachRd').prop('checked') == true) {
            $('.labelCourse').text($('#bach2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.ch').show();
            validateEnrollmentPeriods(1)
        }
    }); 

    $('#cert2').on('change', function(){
        if($('.certRd').prop('checked') == true) {
            $('.labelCourse').text($('#cert2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.ch').show();
            validateEnrollmentPeriods(2)
        }
    });

    $('#senior2').on('change', function(){
        if($('.seniorRd').prop('checked') == true) {
            $('.labelCourse').text($('#senior2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.ch').show();
            validateEnrollmentPeriods(3)
        }
    });

    // radiobuttons
    $('.execBachRd').on('change', function(){
        if(this.checked == true) {
            $('.exec').show();
            $('.bach').hide();
            $('.cert').hide();
            $('.senior').hide();
            $('.labelCourse').text($('#exec2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            let va = document.querySelector('.stType');
            $('.semsSeniors').hide();
            $('.sems4yr').hide();
            $('.sems2yr').hide();
            $('.semsExecutive').show();
            $('.execYr').show();
            $('.yr3').hide();
            $('.yr2').hide();
            $('.yr').hide();
            $('.ul2').show()
            $('.ul').hide()
            $('.execFinal').show()
            degree = "Executive - Bachelor's Degree ( 2-year Course )";
            $('.degree').val(degree);
            sem = $('.semsExec option:selected').text();
            $('.semesters').val(sem);
            enrolleeType = $('.stType option:selected').text();
            $('.enrollType').val(enrolleeType);
            year = $('.not_applicable option:selected').text();
            $('.yearLevel').val(year);
            studType = "Executive Student";
            $('.studType').val(studType);
            validateEnrollmentPeriods(0)
        }
    });

    $('.bachRd').on('change', function(){
        if(this.checked == true) {
            $('.exec').hide();
            $('.bach').show();
            $('.cert').hide();
            $('.senior').hide();
            $('.ul2').hide()
            $('.ul').show()
            $('.labelCourse').text($('#bach2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.semsSeniors').hide();
            $('.sems4yr').show();
            $('.sems2yr').hide();
            $('.semsExecutive').hide();
            $('.yr').show();
            $('.yr2').hide();
            $('.yr3').hide();
            $('.execYr').hide();
            $('.execFinal').hide()
            degree = "Bachelor's Degree ( Four-year Course )";
            sem = $('.semsReg4yr option:selected').text();
            $('.degree').val(degree);
            $('.semesters').val(sem);
            enrolleeType = $('.stType option:selected').text();
            $('.enrollType').val(enrolleeType);
            year = $('.yl option:selected').text();
            $('.yearLevel').val(year);
            studType = "Regular Student";
            $('.studType').val(studType);
            validateEnrollmentPeriods(1)
        }
    });

    $('.certRd').on('change', function(){
        if(this.checked == true) {
            $('.exec').hide();
            $('.bach').hide();
            $('.cert').show();
            $('.senior').hide();
            $('.labelCourse').text($('#cert2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.semsSeniors').hide();
            $('.sems4yr').hide();
            $('.sems2yr').show();
            $('.semsExecutive').hide();
            $('.yr').hide();
            $('.yr2').show();
            $('.yr3').hide();
            $('.execYr').hide();
            degree = "Certification ( Two-year Course )";
            $('.degree').val(degree);
            sem = $('.semsReg2yr option:selected').text();
            $('.semesters').val(sem);
            enrolleeType = $('.stType option:selected').text();
            $('.enrollType').val(enrolleeType);
            year = $('.yl2 option:selected').text();
            $('.yearLevel').val(year);
            studType = "Regular";
            $('.studType').val(studType);
            validateEnrollmentPeriods(2)
        }
    });

    $('.seniorRd').on('change', function(){
        if(this.checked == true) {
            $('.exec').hide();
            $('.bach').hide();
            $('.cert').hide();
            $('.senior').show();
            $('.labelCourse').text($('#senior2 option:selected').text());
            $('.dash').text($('.labelCourse').text());
            $('.semsSeniors').show();
            $('.sems4yr').hide();
            $('.sems2yr').hide();
            $('.semsExecutive').hide();
            $('.yr').hide();
            $('.yr2').hide();
            $('.yr3').show();
            $('.execYr').hide();
            degree = "Senior High";
            $('.degree').val(degree);
            sem = $('.semsSenior option:selected').text();
            $('.semesters').val(sem);
            enrolleeType = $('.stType option:selected').text();
            $('.enrollType').val(enrolleeType);
            year = $('.yl3 option:selected').text();
            $('.yearLevel').val(year);
            studType = "Regular";
            $('.studType').val(studType);
            validateEnrollmentPeriods(3)
        }
    });

    
    $('.back_btn').on('click', function(){
        $('.tableBase1').show();
        $('.regTable').hide();
        $('.subjectTable').hide();
    });

    $('.semsReg4yr').on('change', function(){
        sem = $('.semsReg4yr option:selected').text();
        $('.semesters').val(sem);
        validateEnrollmentPeriods(1)
    });
    $('.semsReg2yr').on('change', function(){
        sem = $('.semsReg2yr option:selected').text();
        $('.semesters').val(sem);
        validateEnrollmentPeriods(2)
    });
    $('.semsSenior').on('change', function(){
        sem = $('.semsSenior option:selected').text();
        $('.semesters').val(sem);
        validateEnrollmentPeriods(3)
    });
    $('.semsExec').on('change', function(){
        sem = $('.semsExec option:selected').text();
        $('.semesters').val(sem);
        validateEnrollmentPeriods(0)
    });
    
    $('.stType').on('change', () => {
        enrolleeType = $('.stType option:selected').text();
        $('.enrollType').val(enrolleeType);
    });

    $('.yl').on('change', ()=> {
        year = $('.yl option:selected').text();
        $('.yearLevel').val(year);
        validateEnrollmentPeriods(1)
    });
    $('.yl2').on('change', ()=> {
        year = $('.yl2 option:selected').text();
        $('.yearLevel').val(year);
        validateEnrollmentPeriods(2)
    });
    $('.yl3').on('change', ()=> {
        year = $('.yl3 option:selected').text();
        $('.yearLevel').val(year);
        validateEnrollmentPeriods(3)
    });

    $('.menu1 :text').css('textTransform', 'uppercase');
    $('.menu3 :text').css('textTransform', 'uppercase');
    $('.menu4 :text').css('textTransform', 'uppercase');
    $('.menu5 :text').css('textTransform', 'uppercase');
    $('.menu6 :text').css('textTransform', 'uppercase');
   
    $('.degree').val(degree);
    // console.log(validateEnrollmentPeriods(code))
});



const validateRequire = (requirement)=>{
        // var upload = document.querySelector('.uploadImage');
        var upload = requirement
        var valid = ['jpg', 'png', 'jpeg'];

        var value = upload.value.lastIndexOf('.') + 1;
        var ext = upload.value.substring(value);

        return valid.includes(ext);
    };
