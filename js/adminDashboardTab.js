const set = () => {
    $('.dashboardSide').addClass('side_foc')
    $('.selectorIn').css('top', '0px')
    $('.handler1').addClass('sideDisplayShow')
    document.querySelectorAll('.bt')[0].classList.add('foc')
    document.querySelectorAll('.btSched')[0].classList.add('foc')
    document.querySelectorAll('.schedChild')[0].style.display ='block'
    $('.menuChild1').css('display', 'block')
    var modal = "<div class='mode'><span>Close</span></div>";
    $('.credentialTitle').append(modal);
    var modal2 = "<div class='mode'><span>Close</span></div>";
    $('.subjectListingTitle').append(modal2);
    var modal3 = "<div class='mode'><span>Close</span></div>";
    $('.int').append(modal3);
    defaultCounter();
    enrollmentPeriodViews()
    getImage(id)
    defaults(0)
    pre_default()
    mainDefaultCounter()
    viewSchedLists()
    allTickets(0)
    // credentialButtons()
    // deletingRegistration()
    // approveRegistration()
    document.querySelector('.credentials').setAttribute('data-search', 0)
    delCon(0)
    radioButtons(1, "", "", "")
    subjectsView()
}

const enrolledRegistration = () => {
    var enrolled = document.querySelectorAll('.enrolled')
        enrolled.forEach((enr)=>{
            enr.addEventListener('click', () => {
                var index       = enr.getAttribute('data-index')
                var reg         = enr.getAttribute('data-regid') 
                var category    = enr.getAttribute('data-category')
                $('.finalTitle5').html('Are you sure you want to Enlist this Student?')
                $('.subFixed2').fadeIn(200, function() {
                    $('.finalDeci5').slideDown(200)
                })
                document.querySelector('.yes5').addEventListener('click', ()=>{
                    confirmEnrolled(reg, index, category)
                })
                
            })
        })
}



const confirmEnrolled = (reg, index, category) => {
    $.ajax({
        url:    'adminLoad.php',
        type:   'POST',
        data:   {
            enrolledRegistration: 1,
            regIds: reg,
            cateGory: category,
        },
        beforeSend  : function(){
            $('.loadFixing').css('display', 'flex')
            document.querySelector('.fixing h5').innerHTML = "Approving..."
        },
        success: function(data){
            if(data) {
                var strFin = data.split(',')
                $('.loadFixing').hide()
                    $('.finalDeci5').slideUp(200, function(){
                        $('.subFixed2').fadeOut();
                    });
                document.querySelector('.fixing h5').innerHTML = "Submitting..."
                msg = "<div class=\"cont\"><div class=\"unregister\">You successfully Enlisted this student </div></div>";
                $('.ticketTitleDashboard').append(msg)
                emailEnrolled(strFin[0], strFin[1])
                setTimeout(function(){
                    delCon(category)
                    defaultCounter();
                    defaults(category)
                    pre_default()
                    mainDefaultCounter()
                    searching(index, "", "")
                    // allTickets(index)
                    $('.cont').remove()
                }, 1500)
            }
        }
    })
}


const approveRegistration = () => {
        var approve = document.querySelectorAll('.approve')
        approve.forEach((app)=>{
            app.addEventListener('click', () => {
                var index       = app.getAttribute('data-index')
                var reg         = app.getAttribute('data-regid') 
                var category    = app.getAttribute('data-category')
                $('.finalTitle4').html('Are you sure you want to approve this application?')
                $('.subFixed2').fadeIn(200, function() {
                    $('.finalDeci4').slideDown(200)
                })
                
                document.querySelector('.yes4').addEventListener('click', ()=>{
                    confirmApproval(reg, index, category)
                })
                
            })
        })
}

const confirmApproval = (reg, index, category) => {
    $.ajax({
        url:    'adminLoad.php',
        type:   'POST',
        data:   {
            approveRegistration: 1,
            regid: reg,
            category: category,
        },
        beforeSend  : function(){
            $('.loadFixing').css('display', 'flex')
            document.querySelector('.fixing h5').innerHTML = "Approving..."
        },
        success: function(data){
            // var str = data.toString()
            var strFin = data.split(',')
            if(data) {
                $('.loadFixing').hide()
                    $('.finalDeci4').slideUp(200, function(){
                        $('.subFixed2').fadeOut();
                    });
                document.querySelector('.fixing h5').innerHTML = "Submitting..."
                msg = "<div class=\"cont\"><div class=\"unregister\">You successfully approve this registration </div></div>";
                $('.ticketTitleDashboard').append(msg)
                emailS(strFin[0], strFin[1])

                setTimeout(function(){
                    delCon(category)
                    defaultCounter();
                    defaults(category)
                    pre_default()
                    mainDefaultCounter()
                    searching(index, "", "")
                    // allTickets(index)
                    $('.cont').remove()
                }, 1500)
            }
        }
    })
}
const delCon = (index) => {

    setTimeout(() => {
        var dels = document.querySelectorAll('.delete');
        var edits = document.querySelectorAll('.edit');
        var approve = document.querySelectorAll('.approve');
        var enrolled = document.querySelectorAll('.enrolled');
        for(var i = 0; i < dels.length; i++) {
            dels[i].setAttribute('data-index', index);
            edits[i].setAttribute('data-index', index);
            if(approve[i] !== undefined) {
                approve[i].setAttribute('data-index', index);
            }
            if(enrolled[i] !== undefined) {
                enrolled[i].setAttribute('data-index', index);
            }
        }
    }, 500);

}



const regReset = (regId,type, sched) =>{
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data : {
            resetRegViewing: 1,
            reg: regId, 
            type: type,
        }, 
        success: function(data){
            
            var JSONstring = JSON.parse(data)
            var array = [];
            var i = 0;
            JSONstring.forEach((arr) => {
                array.push(arr[0])
                i++
            })
            var JSONstrings = JSON.stringify(array)
            subjectListing(regId, type, array.toString())
        }   
    })
}

const addingSubject = (reg, type, subjectId) => {
    var sched = document.querySelector('.studentAddSubject').getAttribute('data-schedid')
    $.ajax ({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            add: 1,
            reg: reg,
            subjectId: subjectId.toString(),
            type: type
        },
        success: function(data) {
            var att = document.querySelector('.credentials').getAttribute('data-search')
            if(data.length < 4) {
                msg = "<div class=\"cont\"><div class=\"unregister\">Subject successfully added</div></div>";
                $('.subjectListingTitle').append(msg)
                setTimeout(() =>{
                    credentialButtons()
                    deletingRegistration()
                    approveRegistration()
                    delCon(att)
                    defaultCounter();
                    defaults(att)
                    pre_default()
                    mainDefaultCounter()
                    getSubjects(reg, type)
                    $('.cont').remove()
                    regReset(reg, type, sched)
                    $('.multipleAdd').css('display', 'none')
                    document.querySelector(".multipleAdd").removeAttribute('disabled')
                }, 1500)
            } else if(data.length > 3) {
                msg = "<div class=\"cont\"><div class=\"unregister\">Subjects successfully added</div></div>";
                $('.subjectListingTitle').append(msg)
                setTimeout(() => {
                    credentialButtons()
                    deletingRegistration()
                    approveRegistration()
                    delCon(att)
                    defaultCounter();
                    defaults(att)
                    pre_default()
                    mainDefaultCounter()
                    getSubjects(reg, type)
                    $('.cont').remove()
                    regReset(reg, type)
                    $('.multipleAdd').css('display', 'none')
                    document.querySelector(".multipleAdd").removeAttribute('disabled')
                    // var array = JSONstring.split(",");
                    // array.push(JSONstring[0])
                    // console.log(array[0])
                    
                }, 1500)
            }
        }
    })
}

const subjectListing = (reg, type, existingSubject) => {
    // var regId = reg;
    var sched = document.querySelector('.studentAddSubject').getAttribute('data-schedid')
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            subjectsViewing: 1,
            exists: existingSubject,
            sched: sched
        },
        success: function(data){
            var JSONstring = JSON.parse(data);
            var htmlContent = ""
            var tbody = $('.subjectContentListing table').find('tbody')
            tbody.find('tr').remove();
            if(JSONstring.length === 0) {
                $('.noSubjects2').show()

                $('.titleBars').hide()
                $('table.subjectListingTable').hide()
                $('.multipleAdd').css('display', 'none')
                // document.querySelector('.studentAddSubject').setAttribute('data-array', '')
            } else {
                $('.noSubjects2').hide()
                
                $('.titleBars').css('display', 'flex')
                $('table.subjectListingTable').show()
            JSONstring.forEach((arr)=>{
                htmlContent = `<tr>
                                    <td><input type="checkbox" class="form-check-input addCheck" 
                                        data-subject="${arr[3]}"
                                        data-reg="${reg}"</td>
                                    <td>${arr[0]}</td>
                                    <td style="text-align: left!important">${arr[1]}</td>
                                    <td>${arr[2]}</td>
                                    <td><button class="button add"
                                            data-id="${arr[3]}"
                                            data-toggle="tooltip" 
                                            data-placement="right" 
                                            title="Add subject"
                                            data-reg="${reg}">
                                        <i class="fad fa-plus-circle insert"></i>
                                        </button></td></tr>`
                tbody.append(htmlContent)               
            })
            $('.insert').css({
                cssText: 'color: #466b46 !important; font-size: 16pt!important'
            })
            var add = document.querySelectorAll('.add');
            var addCheck = document.querySelectorAll('.addCheck');
                add.forEach((element)=>{
                    element.addEventListener('click', () => {
                    var subjectId = []
                    var att = element.getAttribute('data-id')
                    subjectId.push(att)
                    addingSubject(reg, type, subjectId);
                })

                addCheck.forEach((element) => {
                    element.addEventListener('change', () =>{
                        var checkboxAll = document.querySelectorAll('.addCheck')
                        var arrayLength = []
                        arrayLength.length = 0;
                        for(var i = 0; i < checkboxAll.length; i++) {
                            if(checkboxAll[i].checked == true) {
                                
                                $('.multipleAdd').css('display', 'flex');
                                $('.multipleAdd').attr('data-type', type)
                                
                                break;
                            } else {
                                $('.multipleAdd').hide();
                                // document.querySelector('.allSubjectCheck').checked = false;
                            }
                            // alert($('div.multipleAdd').attr('data-type'))
                        }
                    
                    })
                })

            })

        }
        //  success   // 
        }
    })

    
}


const deletingDatas = (arrayElements, regId, types) => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            deleteMultipleSubjects: 1,
            arrayElements:   JSON.stringify(arrayElements),
        },
        beforeSend  : function(){
            $('.loadFixing').css('display', 'flex')
            document.querySelector('.fixing h5').innerHTML = "Deleting..."
        },
        success     : function(data){
            $('.loadFixing').hide()
            $('.finalDeci2').slideUp(200, function(){
                $('.subFixed2').fadeOut();
            });
            document.querySelector('.fixing h5').innerHTML = "Submitting..."
            var attributeId = document.querySelector('.fixedSaved').getAttribute('data-id')
            var regs = document.querySelector('.fixedSaved').getAttribute('data-regid')
            var type = document.querySelector('.fixedSaved').getAttribute('data-type')
            if(data) {
                var att = document.querySelector('.credentials').getAttribute('data-search')
                msg = "<div class=\"cont\"><div class=\"unregister\">Successfully deleted subjects</div></div>";
                $('.credentialTitle').append(msg)
                setTimeout(function(){
                    credentialButtons()
                    deletingRegistration()
                    approveRegistration()
                    delCon(att)
                    defaultCounter();
                    defaults(att)
                    pre_default()
                    mainDefaultCounter()
                    getSubjects(regId, type)
                    getStudentInformation(attributeId, regs, type)
                    $('.menuSubject').hide()
                    document.querySelector('.allSubjectCheck').checked = false;
                    $('.cont').remove()
                }, 1500)
                
            } 
        }
    })
};

const confirmDeleteSubject = (element, reg, type) => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            deleteSubjects: 1,
            subject: element,
            regId: reg,
            category: type
        },
        beforeSend  : function(){
            $('.loadFixing').css('display', 'flex');
            document.querySelector('.fixing h5').innerHTML = "Deleting..."
        },
        success     : function(data){
            $('.loadFixing').hide();
            $('.finalDeci').slideUp(200, function(){
                $('.subFixed').fadeOut();
            });
            var attributeId = document.querySelector('.fixedSaved').getAttribute('data-id')
            var regs = document.querySelector('.fixedSaved').getAttribute('data-regid')
            var type = document.querySelector('.fixedSaved').getAttribute('data-type')
            if(data) {
                var att = document.querySelector('.credentials').getAttribute('data-search')
                msg = "<div class=\"cont\"><div class=\"unregister\">Successfully deleted the subject</div></div>";
                $('.credentialTitle').append(msg);
                setTimeout(function(){
                    var att = document.querySelector('.credentials')
                    var get = att.getAttribute('data-search')
                    searching(get,"", "")
                    delCon(get)
                    defaultCounter();
                    defaults(get)
                    pre_default()
                    mainDefaultCounter()
                    getSubjects(reg, type)
                    getStudentInformation(attributeId, regs, type)
                    
                    $('.menuSubject').hide()
                    $('.cont').remove();
                }, 1500);
            } 
            // else {
            //     // document.querySelector('.studentAddSubject').setAttribute('data-array', '')
            // }

        }
    });
}


    $('.yes').on('click', function(){
        var id = $(this).attr('data-id');
        var reg = $(this).attr('data-reg');
        var type = $(this).attr('data-type');
        confirmDeleteSubject(id, reg, type)
    })


const deleteSubjects = () => {
    var deleteSubjects = document.querySelectorAll('.deleteSubjects');
    deleteSubjects.forEach((element, index)=>{
        element.addEventListener('click',()=>{
            // alert(deleteSubjects.length)
            
                $('.subFixed').fadeIn(200, function(){
                    $('.finalDeci').slideDown();
                });

                document.querySelector('.finalTitle').innerHTML = 'Are you sure you want to delete this subject?'
                var elementAtt  = element.getAttribute('data-subject')
                var reg         = element.getAttribute('data-reg')
                var type        = element.getAttribute('data-category')
                setAtt(document.querySelector('.yes'), {
                    'data-id': elementAtt,
                    'data-reg': reg,
                    'data-type': type
                })
        });
    })
};

const checkBoxesCredentials = (arrayProvince, arraySenior, arrayCollege) => {
    var check1 = document.getElementById('ch2')
    var check2 = document.getElementById('ch3')
    var check3 = document.getElementById('ch4')
    let count2;
    
    check1.addEventListener('change', function() {
        if(this.checked) {
            $('.province').val('N/A')
            $('.provinceCont').val('N/A')
            $('.province').prop('disabled', true)
            $('.provinceCont').prop('disabled', true)
            $('.province').removeClass('red errBG');
            $('.provinceCont').removeClass('red errBG');
            $('.fixedContent p.pro').remove();

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
        }
        else {
            $('.province').prop('disabled', false)
            $('.provinceCont').prop('disabled', false)
            $('.province').val(arrayProvince[0])  
            $('.provinceCont').val(arrayProvince[1])  
            
            
        }
        
    });

    check2.addEventListener('change', function(){
        let educ = document.getElementsByClassName('educ');
        if(this.checked) {
            educ[6].disabled = true
            educ[6].value = 'N/A'
            educ[7].disabled = true
            educ[7].value = 'N/A'
            educ[8].disabled = true
            educ[8].value = 'N/A'
            $('.snName').removeClass('red errBG');
            $('.snAdd').removeClass('red errBG');
            $('.snDegree').removeClass('red errBG');
            $('.fixedContent p.senior_p').remove();

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
        } else {
            educ[6].disabled = false
            educ[6].value = arraySenior[0]
            educ[7].disabled = false
            educ[7].value = arraySenior[1]
            educ[8].disabled = false
            educ[8].value = arraySenior[2]
            
        }
    });

    check3.addEventListener('change', function(){
        let educ = document.getElementsByClassName('educ');
        if(this.checked) {
            educ[9].disabled = true
            educ[9].value = 'N/A'
            educ[10].disabled = true
            educ[10].value = 'N/A'
            educ[11].disabled = true
            educ[11].value = 'N/A'
            educ[12].disabled = true
            educ[12].value = 'N/A'

            count2 = $('.fixedContent').children().length;
            $('.count span').html(count2);
            if(count2 > 0){
                $('.fixed').show();
                $('.fixed').css('animationName', 'left');
            } else {
                $('.fixed').css('animationName', 'right');
                setTimeout(function(){
                    $('.fixed').hide();
                }, 500);
            }
        } else {
            educ[9].disabled = false
            educ[9].value = arrayCollege[0]
            educ[10].disabled = false
            educ[10].value = arrayCollege[1]
            educ[11].disabled = false
            educ[11].value = arrayCollege[2]
            educ[12].disabled = false
            educ[12].value = arrayCollege[3]
        }
    });
}

const resetCheckbox = () => {
    $('#ch2').prop('checked',false);
    $('#ch3').prop('checked',false);
    $('#ch4').prop('checked',false);
    $('.province').prop('disabled',false);
    $('.provinceCont').prop('disabled',false);

}
const resetSubject = (childSubject, allSubjectCheck, subjectButton) => {
    for(var i = 0; i < childSubject.length; i++) {
        childSubject[i].checked = false
    }
    allSubjectCheck.checked = false
    subjectButton.style.display = 'none'

};

const getSubjects = (reg, type) => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            setSubjects: 1,
            id: reg,
            type: type,
            // sched: sched
        },
        success: function(data){
            var JSONstring = JSON.parse(data);
            var tbody = $('.subjectTableTab').find('tbody');
            tbody.find('tr').remove();
            var arrayDatas = [];

            if(JSONstring.length === 0) {
                $('.noSubjects').show();
                $('.baseSubjectTable table').hide()
                document.querySelector('.studentAddSubject').setAttribute('data-array', '')
            } else if(JSONstring.length > 0){
                $('.noSubjects').hide();
                $('.baseSubjectTable table').show()
                JSONstring.forEach((arr, index)=>{
                    var datas = `<tr class="checks${index}">
                                    <td>${arr[0]}</td>
                                    <td>${arr[1]}</td>
                                    <td>${arr[2]}</td>
                                    <td>${arr[4]}</td>
                                    <td style="font-family: monospace; font-weight: bolder">${changeFormatTime(arr[5])}</td>
                                    <td style="font-family: monospace; font-weight: bolder">${changeFormatTime(arr[6])}</td>
                                </tr>`;

                    // var datas = `<tr class="checks${index}">
                    //                 <td>
                    //                     <div class="form-check subjectCheckbox">
                    //                         <input type="checkbox" class="form-check-input subjectCheck" 
                    //                             data-checkbox=""
                    //                             data-subject="${arr[3]}"
                    //                             data-reg="${reg}"
                    //                             data-category="${type}">
                    //                     </div>    
                    //                 </td>
                    //                 <td>${arr[0]}</td>
                    //                 <td>${arr[1]}</td>
                    //                 <td>${arr[2]}</td>
                    //                 <td>
                    //                 <button class="button deleteSubjects" 
                    //                 data-toggle="tooltip" 
                    //                 data-placement="right" 
                    //                 data-subject="${arr[3]}"
                    //                 data-reg="${reg}"
                    //                 data-category="${type}"
                    //                 title="Delete">
                    //                     <i class="fas fa-trash-alt"></i>
                    //             </button></td>
                    //             </tr>`;                                
                    tbody.append(datas);
                    arrayDatas.push(arr[3]);
                });
                // var checkboxAll = document.querySelectorAll('.subjectCheck');
                // checkboxAll.forEach((checkbox)=>{
                //     checkbox.addEventListener('change', ()=>{
                //         for(var i = 0; i < checkboxAll.length; i++) {
                //             if(checkboxAll[i].checked == true) {
                //                 $('div.menuSubject').show();
                //                 break;
                //             } else {
                //                 $('div.menuSubject').hide();
                //                 document.querySelector('.allSubjectCheck').checked = false;
                //             }
                //         }
                //     });
                // });     
                // var data    = document.querySelector('.studentAddSubject');
                // var att     = document.createAttribute('data-array');
                // att.value   = arrayDatas;
                // data.setAttributeNode(att);
                // deleteSubjects();
            }
            
        }
    });

    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            setImages: 1,
            register: reg,
            types: type,
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

                        
    images.forEach((element, index) => {
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

                }
    })
}


const credentialButtons = () =>{
    // setTimeout(()=>{
        var button = document.querySelectorAll('.edit')
        button.forEach((element)=>{
            element.addEventListener('click', ()=>{
                var att     = element.getAttribute('data-id')
                var reg     = element.getAttribute('data-regid')
                var type    = element.getAttribute('data-category')
                var sched    = element.getAttribute('data-schedId')
                var scheds    = document.createAttribute('data-schedId')
                var createAtt = document.createAttribute('data-id')
                var createAtt2 = document.createAttribute('data-id')
                var createType = document.createAttribute('data-type')
                var createType2 = document.createAttribute('data-type')
                var createReg = document.createAttribute('data-regid')
                var createReg2 = document.createAttribute('data-regid')
                createAtt.value = att
                createAtt2.value = att
                createType.value = type
                createType2.value = type
                createReg.value = reg
                createReg2.value = reg
                scheds.value = sched
                var fixed = document.querySelector('.fixedSaved')
                fixed.setAttributeNode(createAtt)
                fixed.setAttributeNode(createType)
                fixed.setAttributeNode(createReg)
                // var add = document.querySelector('.studentAddSubject')
                // add.setAttributeNode(createReg2)
                // add.setAttributeNode(createType2)
                // add.setAttributeNode(scheds)
                
                getSubjects(reg, type)
                getStudentInformation(att, reg, type)
                $('.subjectFixed').fadeIn(300)
                    setTimeout(()=>{
                        $('.credentials').show()
                        $('.credentials').css('animationName','downFade')
                    }, 100);
                $('.credentials').css('animationName','none')
            });
        });
    // }, 1000);
};

const getStudentInformation = (studId, regId, studentType) => {
    $.ajax({
        url: "adminLoad.php",
        type: "POST",
        data: {
            viewCredentials: 1,
            regid: regId,
            studentId: studId,
            studentType: studentType
        },
        success: function(data){

            var JSONstring = JSON.parse(data)
            JSONstring.forEach((arr)=>{
                var basic       = document.querySelectorAll('.basic')
                var address     = document.querySelectorAll('.address')
                var parent      = document.querySelectorAll('.parent')
                var guardian    = document.querySelectorAll('.guardian')
                var educ        = document.querySelectorAll('.educ')
                var arrayProvince = [];
                var arraySenior = [];
                var arrayCollege = [];
                for(var i = 0; i <= 2; i++) {
                    basic[i].value = arr[i]
                }

                for(i; i <= 4; i++) {
                    if(i == 3) {
                        if(arr[i] == 'MALE'){
                            document.getElementById('gender').selectedIndex = "0"
                        }    
                        else if(arr[i] == 'FEMALE'){
                            document.getElementById('gender').selectedIndex = "1"
                        }
                    } else if(i == 4) {
                        if(arr[i] == 'SINGLE') {
                            document.getElementById('civil_status').selectedIndex = "0"
                        }
                        else if(arr[i] == 'MARRIED') {
                            document.getElementById('civil_status').selectedIndex = "1"
                        }
                        else if(arr[i] == 'WIDOW') {
                            document.getElementById('civil_status').selectedIndex = "2"
                        }
                    }       
                }

                for(i; i < 9; i++) {
                    basic[i].value = arr[i]
                }
                i--;
                for(var j = 0; j < address.length; j++) {
                    address[j].value = arr[i]
                    if(j === 5) {
                        arrayProvince.push(arr[i])
                        if(arr[i] == "N/A") {
                            $('#ch2').prop('checked', true)
                            $('.provinceCont').prop('disabled', true)
                            $('.province').prop('disabled', true)
                        } else {
                            $('#ch2').prop('checked', false)
                            $('.province').prop('disabled', false)
                            $('.provinceCont').prop('disabled', false)
                        }
                    }

                    if(j === 6) {
                        arrayProvince.push(arr[i])
                    }
                    i++;
                }
                
                for(var k = 0; k < parent.length; k++) {
                    parent[k].value = arr[i]  
                    i++;
                }
                i--;
                for(var l = 0; l < guardian.length; l++) {
                    guardian[l].value = arr[i]  
                    i++;
                }
                for(var m = 0; m < educ.length; m++) {
                    educ[m].value = arr[i]
                    if(m == 6) {
                        var educ = document.getElementsByClassName('educ')
                        if(arr[i] == "N/A") {
                            document.getElementById('ch3').checked = true
                            educ[6].disabled = true
                            educ[7].disabled = true
                            educ[8].disabled = true
                        } else {
                            document.getElementById('ch3').checked = false
                            educ[6].disabled = false
                            educ[7].disabled = false
                            educ[8].disabled = false
                        }
                    }

                    if(m < 9 && m >= 6) {
                        arraySenior.push(arr[i])
                    }

                    if(m == 9) {
                        var educ = document.getElementsByClassName('educ')
                        if(arr[i] == "N/A") {
                            document.getElementById('ch4').checked = true
                            educ[9].disabled    = true
                            educ[10].disabled   = true
                            educ[11].disabled   = true
                            educ[12].disabled   = true
                        } else {
                            document.getElementById('ch4').checked = false
                            educ[9].disabled    = false
                            educ[10].disabled   = false
                            educ[11].disabled   = false
                            educ[12].disabled   = false
                        }
                    }

                    if(m < 13 && m >= 9) {
                        arrayCollege.push(arr[i])
                    }
                    i++
                }

                            $('.ticketFixed').on('click', function(e){
                                if(e.target == this) {
                                    $('.basis').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.basis').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                    $('.imagePreview').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.imagePreview').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);
                                }

                                

                            });
                checkBoxesCredentials(arrayProvince, arraySenior, arrayCollege);
            });
        }
    }); 
}

const getImage = (id) => {
    $.ajax({
        url: 'imageLoad.php',
        type: 'POST',
        data: {
            admin_image: 1,
            id: id
        },
        success: function(data){
            $('img#images').attr('src', data);
            $('img.current').attr('src', data);
        }
    })
};

const defaults = (param) =>{
    $.ajax({
        url     : 'adminLoad.php',
        type    : 'POST',
        data    : {
            default: 1,
            param: param
        },
        success: function(data){
            var tbody =  $('.student').children('tbody');
            tbody.find('tr').remove()
            var JSONstring = JSON.parse(data);
            if(JSONstring.length == 0) {
                $('.enrolledTableBase').hide();
                $('.noNewEnrollee').show();
            } else if(JSONstring.length > 0){
                $('.enrolledTableBase').show();
                $('.noNewEnrollee').hide();
                JSONstring.forEach((arr)=>{
                    var time = arr[3].lastIndexOf(' ') - 5;
                    var ext = arr[3].substring(time);
                    var html = "<tr>";
                        // html += `<td>${arr[0]}</td>`;
                        html += `<td style="text-align: left!important; padding-left: 10px!important;">${arr[1]}</td>`;
                        html += `<td>${arr[2]}</td>`;
                        html += `<td>${ext}</td>`;
                        html += `<td>${arr[4]}</td></tr>`;
                    tbody.append(html);
                }); 
            }
            
        }  
    });
};

const allTickets = (param) =>{
    $.ajax({
        url     : 'adminLoad.php',
        type    : 'POST',
        data    : {
            allTicket: 1,
            param: param
        },
        success: function(data){
            var tbody =  $('.ticketTable').children('tbody');
            $(tbody).children('tr').remove()
            var JSONstring = JSON.parse(data);
            var num = 0;
            if(JSONstring.length == 0) {
                $('.baseTicketTable').hide();
                $('.noNewEnrollee2').show();
            } else {
                $('.baseTicketTable').show();
                $('.noNewEnrollee2').hide();
                JSONstring.forEach((arr)=>{
                    var html = "<tr>";
                        // html += `<td>${arr[0]}</td>`;
                        html += `<td style="text-align: left!important; padding-left: 10px!important;">${arr[1]}</td>`;
                        html += `<td>${arr[2]}</td>`;
                        html += `<td>${arr[3]}</td>`;
                        html += `<td>${arr[4]}</td>`;
                        html += `<td>${arr[5]}</td>`;
                        html += `<td><span class="backGround${num} sp">${arr[6]}</span></td>`;
                        html += `<td>${arr[7]}</td>`;
                        html += `<td>
                        <button class="button delete del${num}" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Delete"
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-index="${param}"
                        data-regId="${arr[9]}">
                            <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="button edit" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Info" 
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-regId="${arr[9]}"
                        data-schedId="${arr[11]}"
                        data-index="${param}">
                            <i class="fas fa-info-circle"></i>
                     </button>
                     <button class="button approve app${num}" 
                        type="button"
                        data-toggle="popover" 
                        data-placement="right" 
                        title="Approve"
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-regId="${arr[9]}">
                            <i class="fas fa-user-check"></i>
                     </button></td></tr>`;
                     tbody.append(html);
                     var span = document.querySelector(`span.backGround${num}`);
                     if(span.textContent == "PENDING") {
                        span.style.background = "rgb(255, 203, 203)";
                        $(`.app${num}`).attr('disabled', false);
                    } else if(span.textContent == "ONGOING"){
                        span.style.background = "rgb(249, 251, 137)";
                        $(`.app${num}`).removeClass('approve')
                        $(`.app${num}`).addClass('enrolled')
                        // $(`.app${num} i`).css({
                        //     "color": "#ccc"
                        // })
                    } else if(span.textContent == "ENLISTED"){
                        span.style.background = "rgb(137, 251, 172)";
                        $(`.app${num}`).remove()
                        
                        $(`.del${num}`).remove()
                    }
                            num++;
                }); 

                deletingRegistration()
                credentialButtons()
                approveRegistration()
            }
        }  
    });

};

const confirmDeleteReg = (id, reg, dataindex, category) =>{
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            deleteRegistration: 1,
            id: id,
            reg: reg, 
            category: dataindex,

        },
        beforeSend: function(){
            $('.loadFixing').css('display', 'flex')
            document.querySelector('.fixing h5').innerHTML = "Deleting..."
        },
        success: function (data) {
            $('.loadFixing').hide()
            $('.finalDeci3').slideUp(200, function(){
                $('.subFixed').fadeOut();
            });
            document.querySelector('.fixing h5').innerHTML = "Submitting..."
                msg = "<div class=\"cont\"><div class=\"unregister\">You successfully deleted this registration </div></div>";
                $('.ticketTitleDashboard').append(msg)
                setTimeout(function(){
                    delCon(category)
                    defaultCounter();
                    defaults(category)
                    pre_default()
                    mainDefaultCounter()
                    searching(category, "", "")
                    $('.cont').remove()
                }, 1500)
            
        }
    })
}

const deletingRegistration = () =>{
    // setTimeout(() => {
        var deleteReg = document.querySelectorAll('.delete')
        deleteReg.forEach((element) => {
            element.addEventListener('click', () =>{
                var id          = element.getAttribute('data-id')
                var reg         = element.getAttribute('data-regid')
                var dataIndex = element.getAttribute('data-category')                
                var category = element.getAttribute('data-index')
                
                $('.subFixed').fadeIn(200, function(){
                    $('.finalTitle3').html('Are you sure you want to delete this <br>Student Registration?')
                    $('.finalDeci3').slideDown();
                });
                $('.yes3').on('click', ()=>{
                    confirmDeleteReg(id, reg, dataIndex, category)
                })
            })
        })
    // }, 1000)
}

const searching = (dataAttr, param, index) =>  {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            search: 1,
            category: dataAttr,
            value: param
        },
        beforeSend: function(){
            $('.handEllip').css('display', 'grid')
            $('.baseTicketTable').hide();
            $('.noNewEnrollee2').hide();
        },
        success: function(data){
        $('.handEllip').hide()
        var tbody =  $('.ticketTable').children('tbody');
        var JSONstring = JSON.parse(data);
        var num = 0;
        if(JSONstring.length == 0) {
            $('.ticketTable').children('tbody tr').remove();
            $('.baseTicketTable').hide();
            $('.noNewEnrollee2').show();
        } else if(JSONstring.length > 0) {
            $('.baseTicketTable').show();
            $('.noNewEnrollee2').hide();
            $(tbody).children('tr').remove()
            JSONstring.forEach((arr)=>{
                
                var html = "<tr>";
                    // html += `<td>${arr[0]}</td>`;
                    html += `<td style="text-align: left!important; padding-left: 10px!important;">${arr[1]}</td>`;
                    html += `<td>${arr[2]}</td>`;
                    html += `<td>${arr[3]}</td>`;
                    html += `<td>${arr[4]}</td>`;
                    html += `<td>${arr[5]}</td>`;
                    html += `<td><span class="backGround${num} sp">${arr[6]}</span></td>`;
                    html += `<td>${arr[7]}</td>`;
                    html += `<td>
                    <button class="button delete del${num}" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Delete"
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-index="${dataAttr}"
                        data-regId="${arr[9]}">
                            <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="button edit" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Info" 
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-regId="${arr[9]}"
                        data-schedId="${arr[11]}"
                        data-index="${dataAttr}">
                            <i class="fas fa-info-circle"></i>
                     </button>
                     <button class="button approve app${num}" 
                        type="button"
                        data-toggle="popover" 
                        data-placement="right" 
                        title="Approve"
                        data-category="${arr[10]}" 
                        data-id="${arr[8]}"
                        data-index="${dataAttr}"
                        data-regId="${arr[9]}">
                            <i class="fas fa-user-check"></i>
                     </button></td></tr>`;
                     tbody.append(html);
                     var span = document.querySelector(`span.backGround${num}`);
                     if(span.textContent == "PENDING") {
                        span.style.background = "rgb(255, 203, 203)";
                        $(`.app${num}`).attr('disabled', false);
                    } else if(span.textContent == "ONGOING"){
                        span.style.background = "rgb(249, 251, 137)";
                        $(`.app${num}`).removeClass('approve')
                        $(`.app${num}`).addClass('enrolled')
                        // $(`.app${num} i`).css({
                        //     "color": "#ccc"
                        // })
                    } else if(span.textContent == "ENLISTED"){
                        span.style.background = "rgb(137, 251, 172)";
                        $(`.app${num}`).remove()

                        $(`.del${num}`).remove()
                    }
                
                 num++;
            }); 

                credentialButtons()
                deletingRegistration()
                approveRegistration()
                enrolledRegistration()
        }
            
        }
    });
}

// const enrolled = () => {

// }

const mainDefaultCounter = () => {
    $.ajax({
        url     : 'adminLoad.php',
        type    : 'POST',
        data    : {
            mainDefault: 1,
        },
        success: function(data){
            var ticket = 0, pending = 0, ongoing = 0, enlisted = 0;;
            var temp = document.querySelectorAll('.num');
            var JSONstring = JSON.parse(data);
            if(JSONstring.length == 0) {
                for(var i = 0; i < temp.length; i++) {
                    temp[i].innerHTML = 0;
                }
                    
            } else if(JSONstring.length > 0){
                JSONstring.forEach((arr)=>{
                    ticket++;
                    return  (arr[0] == "PENDING") ? pending++ :
                            (arr[0] == "ONGOING") ? ongoing++ :
                            (arr[0] == "ENLISTED") ? enlisted++ : 0;
                    
                }); 
                temp[0].innerHTML = ticket;
                temp[1].innerHTML = pending;
                temp[2].innerHTML = ongoing;
                temp[3].innerHTML = enlisted;
            }
            
        } 
    });
};

const defaultCounter = () =>{
    $.ajax({
        url     : 'adminLoad.php',
        type    : 'POST',
        data    : {
            default: 1,
            param: 0
        },
        success: function(data){
            var ticket = 0, pending = 0, ongoing = 0, enlisted = 0;;
            var temp = document.querySelectorAll('.countNUm');
            var JSONstring = JSON.parse(data);
            if(JSONstring.length == 0) {
                for(var i = 0; i < temp.length; i++) {
                    temp[i].innerHTML = 0;
                }
                    
            } else if(JSONstring.length > 0){
                JSONstring.forEach((arr)=>{
                    ticket++;
                    return  (arr[4] == "PENDING") ? pending++ :
                            (arr[4] == "ONGOING") ? ongoing++ :
                            (arr[4] == "ENLISTED") ? enlisted++ : 0;
                    
                }); 
                temp[0].innerHTML = ticket;
                temp[1].innerHTML = pending;
                temp[2].innerHTML = ongoing;
                temp[3].innerHTML = enlisted;
            }
            
        } 
    });
};

const pre_default = () => {
    $.ajax({
        url     : 'adminLoad.php',
        type    : 'POST',
        data    : {
            pre_default: 1,
        },
        success: function(data){
            var tbody =  $('#pre_table').children('tbody');
            tbody.find('tr').remove()
            var JSONstring = JSON.parse(data);
                
            if(JSONstring.length > 0){
                $('#pre_table').show()
                $('.noNewEnrollee3').hide()
                JSONstring.forEach((arr)=>{
                    var html = "<tr>";
                        html += `<td>${arr[0]}</td>`;
                        html += `<td>${arr[1]}</td>`;
                        html += `<td><i class='fad fa-check-circle'></i></td></tr>`;
                    tbody.append(html);
                }); 
            } else if(JSONstring.length === 0) {
                $('#pre_table').hide()
                $('.noNewEnrollee3').show()
                
            }
            
            
        }
    });
};


$(document).ready(function(){
    // Default Settings
        set();
    //Side Menu
    
    const side = document.querySelectorAll('.side');
    side.forEach((param, index)=>{
        param.addEventListener('click', (e)=>{
            $('.side').removeClass('side_foc');
            $('.handChildren').removeClass('sideDisplayShow');
            
            var child = document.querySelectorAll('.handChildren');
            var attr = param.getAttribute('data-tag', index);
            var line = document.querySelector('.selectorIn');
            if(e.target == param) {
                param.classList.add('side_foc');
            }
            return  (attr == 0) ? (line.style.top = "1px", line.style.height    = '40px', child[0].classList.add('sideDisplayShow')) : 
                    (attr == 1) ? (line.style.top = "85px", line.style.height   = '40px', child[1].classList.add('sideDisplayShow')) : 
                    (attr == 2) ? (line.style.top = "125px", line.style.height  = '40px', child[2].classList.add('sideDisplayShow')) : 
                    (attr == 3) ? (line.style.top = "165px", line.style.height  = '40px', child[3].classList.add('sideDisplayShow')) : 
                    (attr == 4) ? (line.style.top = "205px", line.style.height  = '60px', child[4].classList.add('sideDisplayShow')) : 
                    (attr == 5) ? (line.style.top = "265px", line.style.height  = '40px', child[5].classList.add('sideDisplayShow')) : 0;
            
        })
    });

    $('.logout').on('click', function(){
        window.location.href="logout.php";
    });

    //tables
    $('#selector').on('change', function(){
        $('.student').find('tbody tr').remove();
        
        return  (this.value == 1) ? defaults(1) : 
                (this.value == 2) ? defaults(2) : 
                (this.value == 3) ? defaults(3) : 
                (this.value == 4) ? defaults(4) : defaults(0);
    });

    var target = document.querySelectorAll('.bt');
    target.forEach((bool, index) => {
        bool.addEventListener('click', function(e){
            $('#search-input').val("");
            $('.bt').removeClass('foc');
            var attribute = bool.getAttribute('data-tag');
            var lay = document.getElementById('search-input');
            lay.setAttribute('data-category', index);
            $('.yes3').attr('data-type', attribute)
            
            target[index].classList.add('foc');
             searching(index,"", "")
             document.querySelector('.credentials').setAttribute('data-search', index)
             delCon(index)
             defaultCounter();
             defaults(index)
             pre_default()
             mainDefaultCounter()
             if(attribute == '0') {
                $('.line').css('left', '0');
            } else if(attribute == '1') {
                $('.line').css('left', '25%');
            } else if(attribute == '2') {
                $('.line').css('left', '50%');
                
            } else if(attribute == '3') {
                $('.line').css('left', '75%');
                
            }
            if(index === 2 || index === 3) {
                $('.approve').css('display', "none")
            }
        });
    });

    document.getElementById('search-input').addEventListener('keyup', (e)=>{
        var dataAttr = document.getElementById('search-input').getAttribute('data-category')
        var value = document.getElementById('search-input').value
        searching(dataAttr, value, "")
        defaultCounter();
        defaults(0)
        pre_default()
        mainDefaultCounter()
    });

    

    var childMenus = document.querySelectorAll('.child');
    childMenus.forEach((menu, index) =>{
        menu.addEventListener('click', ()=>{
            var child = document.querySelectorAll('.bt')
            $('.side').removeClass('side_foc')
            $('.handChildren').removeClass('sideDisplayShow')
            $('.handler2').addClass('sideDisplayShow')
            $('.bt').removeClass('foc')
            var att = menu.getAttribute('data-att')
            document.querySelector('.ticketLabel').classList.add('side_foc')
            document.querySelector('.selectorIn').style.top = '85px'
            child[index].classList.add('foc')
            searching(index, "", "")
            var lay = document.getElementById('search-input')
            lay.setAttribute('data-category', index)
            defaultCounter();
            delCon(index)
            pre_default()
            mainDefaultCounter()
            
            return  (att == 0) ? $('.line').css('left', '0') :
                    (att == 1) ? $('.line').css('left', '25%') :
                    (att == 2) ? $('.line').css('left', '50%') :
                    (att == 3) ? $('.line').css('left', '75%') : 0
            
        });
    });
    
    const credentialChild = document.querySelectorAll('.credChild');
    const menuChild = document.querySelectorAll('.contentChild');
    credentialChild.forEach((child, index) => {
        child.addEventListener('click', ()=>{
            for(var i = 0; i < credentialChild.length; i++){
                credentialChild[i].classList.remove('foc');
                menuChild[i].style.display = 'none';
            }
            if(index === 6) {
                $('.fixedSaved').fadeOut(200);
            } else {
                $('.fixedSaved').show();
            }
            child.classList.add('foc');
            document.querySelector('.lineCredential').style.left = `${14.28571428571429 * index}%`;
            $(menuChild[index]).fadeIn(200);
        });
    });
   

    // var allCheck = document.querySelectorAll('.subjectCheck');
    // var checkBoxing = document.querySelector('.allSubjectCheck');
    document.querySelector('.closing').addEventListener('click', ()=>{
        $('.credentials').css('animationName', 'upFade');
        setTimeout(()=>{
            $('.credentials').hide();
            $('.subjectFixed').fadeOut(700);
            $('.fixedSaved').show()
            setTimeout(()=>{
                for(var i = 0; i < credentialChild.length; i++){
                    credentialChild[i].classList.remove('foc');
                    menuChild[i].style.display = 'none';
                }
                    document.querySelector('.lineCredential').style.left = "0%";
                    credentialChild[0].classList.add('foc');
                    $(menuChild[0]).fadeIn(200);
                    $(menuChild[0]).fadeIn(200);
            }, 200);
        }, 400);
        // resetSubject(allCheck, checkBoxing, document.querySelector('.menuSubject'));
    });

    document.querySelector('.closing2').addEventListener('click', ()=>{

    })
    
    var thisTarget = document.querySelector('.subjectFixed')
    thisTarget.addEventListener('click', (target)=>{
        if(target.target === thisTarget) {
            $('.credentials').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.credentials').hide();
                $('.subjectFixed').fadeOut(700);
                $('.fixedSaved').show()
                setTimeout(()=>{
                    for(var i = 0; i < credentialChild.length; i++){
                        credentialChild[i].classList.remove('foc');
                        menuChild[i].style.display = 'none';
                    }
                        document.querySelector('.lineCredential').style.left = "0%";
                        credentialChild[0].classList.add('foc');
                        $(menuChild[0]).fadeIn(200);
                        $(menuChild[0]).fadeIn(200);

                }, 200);
            }, 400);
            
            // resetSubject(allCheck, checkBoxing, document.querySelector('.menuSubject'));
        }
    });
    
    // checkBoxing.addEventListener('change', ()=>{
    //     var allCheck = document.querySelectorAll('.subjectCheck');
    //     if(checkBoxing.checked == true) {
    //         for(var i = 0; i < allCheck.length; i++) {
    //             allCheck[i].checked = true;
    //         }
    //         $('div.menuSubject').show();
            
    //     } else {
    //         for(var i = 0; i < allCheck.length; i++) {
    //             allCheck[i].checked = false;
    //         }
    //         $('div.menuSubject').hide();
    //     }
    // });
    
    $('.no').on('click', ()=> {
        $('.finalDeci').slideUp(200, function(){
            $('.subFixed').fadeOut();
        });
    });

    $('.no3').on('click', ()=> {
        $('.finalDeci3').slideUp(200, function(){
            $('.subFixed').fadeOut();
        });
    });

    document.querySelector('.menuSubject').addEventListener('click', ()=>{
        let check = document.querySelectorAll('.subjectCheck')
        let count = 0
        for(var i = 0; i < check.length; i++) {
            if(check[i].checked) {
                count++;
            }
        }
        if(count > 1) {
            document.querySelector('.finalTitle2').innerHTML = "Are you sure you want to delete these subjects?"
        } else if(count === 1) {
            document.querySelector('.finalTitle2').innerHTML = "Are you sure you want to delete this subject?"
        }
        
        $('.subFixed2').fadeIn(200, function(){
            $('.finalDeci2').slideDown();
        });
    })

    document.querySelector('.no2').addEventListener('click', ()=>{
        $('.finalDeci2').slideUp(200, function(){
            $('.subFixed2').fadeOut();
            document.querySelector('.finalTitle2').innerHTML = ""
        });
    });

    document.querySelector('.no4').addEventListener('click', ()=>{
        $('.finalDeci4').slideUp(200, function(){
            $('.subFixed2').fadeOut();
            document.querySelector('.finalTitle4').innerHTML = ""
        });
    });
    document.querySelector('.no5').addEventListener('click', ()=>{
        $('.finalDeci5').slideUp(200, function(){
            $('.subFixed2').fadeOut();
            document.querySelector('.finalTitle5').innerHTML = ""
        });
    });


    document.querySelector('.subFixed2').addEventListener('click', (event)=>{
        if(event.target == document.querySelector('.subFixed2')) {
            $('.finalDeci2').slideUp(200, function(){
                $('.subFixed2').fadeOut();
                document.querySelector('.finalTitle2').innerHTML = ""
            });

            $('.finalDeci4').slideUp(200, function(){
                $('.subFixed2').fadeOut();
                document.querySelector('.finalTitle4').innerHTML = ""
            });

            $('.finalDeci5').slideUp(200, function(){
                $('.subFixed2').fadeOut();
                document.querySelector('.finalTitle5').innerHTML = ""
            });
        }
    })

    document.querySelector('.subFixed').addEventListener('click', (event)=>{
        if(event.target == document.querySelector('.subFixed')) {
            $('.finalDeci').slideUp(200, function(){
                $('.subFixed').fadeOut();
                document.querySelector('.finalTitle').innerHTML = ""
            });

            $('.finalDeci3').slideUp(200, function(){
                $('.subFixed').fadeOut();
                document.querySelector('.finalTitle').innerHTML = ""
            });
        }
    })

    document.querySelector(".yes2").addEventListener("click", ()=>{
        var arrayElements = []
        var subjectId
        var regId
        var category
        arrayElements.length = 0
        var elementChecks = document.querySelectorAll(".subjectCheck");
        elementChecks.forEach((element)=>{
            if(element.checked) {
                subjectId = element.getAttribute('data-subject')
                regId = element.getAttribute('data-reg')
                category = element.getAttribute('data-category')
                var data = {
                    id: subjectId,
                    regId: regId,
                    category: category
                
                };
                arrayElements.push(data);
                    
            }
        });
        deletingDatas(arrayElements, regId, category)
        
    });

    $('.studentAddSubject').on('click',() => {
        var reg = document.querySelector('.studentAddSubject').getAttribute('data-regid')
        var type = document.querySelector('.studentAddSubject').getAttribute('data-type')
        var sched = document.querySelector('.studentAddSubject').getAttribute('data-schedid')
        var arrayDatas = document.querySelector('.studentAddSubject').getAttribute('data-array')
        var arrayDatas = document.querySelector('.studentAddSubject').getAttribute('data-array') 
        $('.subjectListing').fadeIn(300);
        setTimeout(()=>{
            $('.baseSubjectListings').show();
            $('.baseSubjectListings').css('animationName','downFade');
            subjectListing(reg, type, arrayDatas, sched);
            
        }, 100);

        
    })

    var subs = document.querySelector('.subjectListing')
    subs.addEventListener('click', (e)=> {
        if(e.target == subs) {
            $('.baseSubjectListings').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.baseSubjectListings').hide();
                $('.subjectListing').fadeOut();
            }, 400); 

            $('.listingSched').css('animationName', 'upFade');
            var sc = document.querySelectorAll('.boxes')
                                sch.forEach((elem)=>{
                                    elem.classList.remove('green')
                                })
            setTimeout(()=>{
                $('.listingSched').hide();
                $('.subjectListing').fadeOut();
            }, 400); 

            $('.cont').remove()
        }
    });

    document.querySelector('.closing2').addEventListener('click', ()=>{
        $('.baseSubjectListings').css('animationName', 'upFade');
            setTimeout(()=>{
                $('.baseSubjectListings').hide();
                $('.subjectListing').fadeOut();
            }, 400); 
    })
    // $(".multipleAdd").attr('disabled', true)
    document.querySelector(".multipleAdd").addEventListener("click", ()=>{
        var arrayElements = []
        var subjectId
        var regId
        var category
        arrayElements.length = 0
        var elementChecks = document.querySelectorAll(".addCheck");
        elementChecks.forEach((element)=>{
            if(element.checked) {
                subjectId = element.getAttribute('data-subject')
                regId = element.getAttribute('data-reg')
                category = document.querySelector(".multipleAdd").getAttribute('data-type')
                arrayElements.push(subjectId);
            }
        });
        $(".multipleAdd").attr('disabled', true)
        addingSubject(regId, category, arrayElements)
    });


    var radioButtonsSelection = document.querySelectorAll('.radioButtons')
    radioButtonsSelection.forEach((element, index) => {
        element.addEventListener('change', () =>{
            var int = index + 1
            if(element.checked) {
                radioButtons(int, "", "", "")
            }
        })
    })

    $('.addSubjectSched').on('click', ()=>{
        subjects()
    })

    $('.deleteSubjectSched').on('click', ()=>{
        deletedSubjects()
    })

        document.querySelector('.addSavedSubjects').addEventListener('click', ()=>{

            var course          = document.getElementById('courseSelections').options[document.getElementById('courseSelections').selectedIndex].getAttribute('data-tag')
            var category        = document.getElementById('courseSelections').options[document.getElementById('courseSelections').selectedIndex].getAttribute('data-category')
            var courseVal       = document.getElementById('courseSelections').options[document.getElementById('courseSelections').selectedIndex].value
            var yearLevel       = document.getElementById('yearSelections').options[document.getElementById('yearSelections').selectedIndex].getAttribute('data-tag2')
            var yearLevelText   = document.getElementById('yearSelections').options[document.getElementById('yearSelections').selectedIndex].text
            var semester        = document.getElementById('semesterSelections').options[document.getElementById('semesterSelections').selectedIndex].getAttribute('data-tag3')
            var semesterText    = document.getElementById('semesterSelections').options[document.getElementById('semesterSelections').selectedIndex].text
            var fuse            = course + "" + semester + "" + yearLevel
    //  alert(course + " " + category + " " + courseVal)
                    $.ajax({
                        url: 'adminLoad.php',
                        type: 'POST',
                        data: {
                            verify: 1,
                            fuse: fuse,
                            category: category
                        },
                        success: function(data) {
                            var returnValue  =  JSON.parse(data)
                            var return1 = returnValue[0]
                            var return2 = returnValue[1]
                            if(return1 == "1") {
                                msg = "<div class=\"cont2\"><div class=\"unregister\">You already assigned semester subjects for this course<i class=\"fa fa-times-circle\" style=\"font-size: 25pt\"></i></div></div>";
                                $('#subjectHeader').append(msg)
                                setTimeout(()=>{
                                    document.querySelector('.cont2').remove()
                                }, 1500)
                            } else if(return1 == "2") {
                                var subjects = Array.from(document.querySelectorAll('.subjectSelections'))
                                var subjectsArray = [];
                                subjectsArray.length = 0
                                var bool = true
                
                                subjects.forEach((subject)=>{
                                        if(subjectsArray.includes(subject.options[subject.selectedIndex].value)) {
                                            bool = false
                                            subject.classList.add('red', 'errBG')
                                        } else {
                                            subjectsArray.push(subject.options[subject.selectedIndex].value)
                                        }
                                })
                                if(bool == true) {
                                    document.querySelector('.loadFixing').style.display = 'flex'
                                    document.querySelector('.fixing h5').innerHTML = "Assigning..."
                                    
                                    var datas =     "assignedSubjects=1&courseid="+ courseVal + "&semester=" + semesterText + 
                                                    "&yearLevel=" + yearLevelText + "&array=" + subjectsArray.toString() + "&code=" + fuse + "&idReg=" + return2
                        
                                    // AJAX Requests
                                    var ajax = new XMLHttpRequest()
                                    ajax.open('POST', 'adminLoad.php')
                                    ajax.onload = () => {
                                        if(ajax.responseText !== "2" || ajax.response !== 3) {
                                            document.querySelector('.loadFixing').style.display = 'none'
                                            msg = "<div class=\"cont\"><div class=\"unregister\">You successfully assigned subjects for this course</div></div>";
                                            $('#subjectHeader').append(msg)
                                            setTimeout(()=>{
                                                document.querySelector('.cont').remove()
                                                resetSubjectSelections()
                                                // enrollmentPeriodViews()
                                                changeAfterSetup(category)
                                            }, 1500)
                                        } else {
                                            document.querySelector('.loadFixing').style.display = 'none'
                                            alert('error')
                                        }
                                    }   
                                    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                                    ajax.send(datas)
                        
                                } else if(bool == false) {
                                    msg = "<div class=\"cont2\"><div class=\"unregister\">You assigned duplicate subjects<i class=\"fa fa-times-circle\" style=\"font-size: 25pt\"></i></div></div>";
                                    $('#subjectHeader').append(msg)
                                    setTimeout(()=>{
                                        document.querySelector('.cont2').remove()
                                    }, 1500)
                                }
                            } else if(return1 == "3") {
                                var schedChild = document.querySelectorAll('.schedChild')
                                var btSched = document.querySelectorAll('.btSched')
                                msg = "<div class=\"cont2\"><div class=\"unregister\">Please set the Enrollment period for this Degree Category first<i class=\"fa fa-times-circle\" style=\"font-size: 25pt\"></i></div></div>";
                                    $('#subjectHeader').append(msg)
                                    setTimeout(()=>{
                                        document.querySelector('.cont2').remove()
                                        schedChild.forEach((array, indexes) => {
                                            if(indexes === 0) {
                                                array.style.display = "block"
                                            } else {
                                                array.style.display = "none"
                                            }

                                            document.querySelector('.addSavedSubjects').style.display = 'none'
                                        })
        
                                        btSched.forEach((arr, ind) => {
                                            if(ind === 0) {
                                                arr.classList.add('foc')
                                                document.querySelector('.lineSched').style.left = '0%'
                                            } else {
                                                arr.classList.remove('foc')
                                            }
                                        })
                                    }, 1500)
                            }



                        }
                    })

    })
        
    $('#addsBtn').on('click', ()=>{
        alert($('.execDateStart').val())
        var char = $('.execDateStart').val().split('-')
        alert(char[0])
        var newChar = char[1] + char[2] + char[0]
        alert(newChar)
    })

    var sch = document.querySelectorAll('.boxes')
                            
                            sch.forEach((elem)=>{
                                $(elem).on('click', ()=>{
                                    $(elem).toggleClass('green')

                                })
                            })

    var setupBtn = document.querySelectorAll('.setBtn')
    setupBtn.forEach((element, index) => {
        element.addEventListener('click', () => {
            var dateNow = new Date();
            var dd = String(dateNow.getDate()).padStart(2, '0');
            var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); 
            var yyyy = dateNow.getFullYear();
            var date = yyyy + mm + dd 

            var bool = true
            var att     = element.getAttribute('data-id')
            var start   = document.querySelectorAll('.start')
            var end     = document.querySelectorAll('.end')
            var sched     = document.querySelectorAll('.schedContent')
            var schedTimeStart     = document.querySelectorAll('.schedTime1')
            var schedTimeEnd     = document.querySelectorAll('.schedTime2')

            var startArray = Array.from(start)
            var endArray = Array.from(end)

            var startValue  = startArray[index].value
            var newStart    = startValue.split('-')
            var newStringStart = newStart[0] + newStart[1] + newStart[2]
            var endValue    = endArray[index].value
            var newEnd      = endValue.split('-')
            var newStringEnd = newEnd[0] + newEnd[1] + newEnd[2]

            if(!startValue) {
                startArray[index].classList.add('red',  'errBG')
                var empty = "<div class=\"emp\">Please don't leave it empty</div>";
                $(schedTimeStart[index]).append(empty)
                setTimeout(() => {
                    schedTimeStart[index].lastChild.remove();
                }, 1500);
                bool = false
            } else if(parseInt(newStringStart) !== parseInt(date)) {
                startArray[index].classList.add('red',  'errBG')
                var empty = "<div class=\"emp\">The date you must enter is today's date</div>";
                $(schedTimeStart[index]).append(empty)
                setTimeout(() => {
                    schedTimeStart[index].lastChild.remove();
                }, 1500);
                bool = false
            } 

            if(!endValue) {
                endArray[index].classList.add('red',  'errBG')
                var empty = "<div class=\"emp\">Please don't leave it empty</div>";
                $(schedTimeEnd[index]).append(empty)
                setTimeout(() => {
                    schedTimeEnd[index].lastChild.remove();
                }, 1500);
                bool = false
            } else if(parseInt(newStringEnd) <= parseInt(date)) {
                endArray[index].classList.add('red',  'errBG')
                var empty = "<div class=\"emp\">The date you must enter is greater than to your Enrollment Start</div>";
                $(schedTimeEnd[index]).append(empty)
                setTimeout(() => {
                    schedTimeEnd[index].lastChild.remove();
                }, 1500);
                bool = false
            } 

            if(bool) {
                startArray[index].classList.remove('red',  'errBG')
                endArray[index].classList.remove('red',  'errBG')
                var strStart    = startValue.split('-')            
                var strEnd      = endValue.split('-')
    
                var newStart    = strStart[0] + strStart[1]   + strStart[2]  
                var newEnd      = strEnd[0] + strEnd[1] + strEnd[2]   
                var data = "period=1&start=" + newStart + "&end=" + newEnd + "&id=" + att
                var ajax = new XMLHttpRequest()
                ajax.open("POST", 'adminLoad.php')

                ajax.onload = () => {
                    var elementCreated = elementCreating('div', 'loader-handler', "")
                        var elementLoader = elementCreating('div', 'mini-loader', "")
                        var elementText = elementCreating('h6', 'labelTitle h6Label', 'Setting up...')
                        elementCreated.appendChild(elementText)
                        elementCreated.appendChild(elementLoader)
                        sched[index].appendChild(elementCreated)
                    if(ajax.responseText !== "1") {
                        setTimeout(()=>{
                            sched[index].lastChild.remove()
                            setTimeout(()=>{
                                var elementCreated2 = elementCreating('div', 'loader-handler', "")
                                var elementText2 = elementCreating('h6', 'labelTitle h6Label', 'Enrollment Period has been successfully created')
                                elementCreated2.appendChild(elementText2)
                                sched[index].appendChild(elementCreated2)
                                setTimeout(()=>{
                                    sched[index].lastChild.remove()
                                    enrollmentPeriodViews()
                                }, 1500)
                                
                            }, 100)
                        }, 1500)
                    }
                }
    
                ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                ajax.send(data)
    
    
            }
            // alert(startValue + ' ' + endValue)
        })


    })
    

    var schedBlocks =  document.querySelectorAll('.btSched')
    schedBlocks.forEach((element, index) =>{
        element.addEventListener('click', () =>{
            var schedBlock =  document.querySelectorAll('.btSched')
            schedBlock.forEach((elemental, index) =>{
                elemental.classList.remove('foc')
            })
            var schedChild = document.querySelectorAll('.schedChild')
            schedChild.forEach((sched) =>{
                sched.style.display = "none"
            })

            document.querySelector('.lineSched').style.left = (33.33333 * index) + "%"
            document.querySelectorAll('.schedChild')[index].style.display = "block"
            element.classList.add('foc')

            if(index === 2 || index == 0) {
                document.querySelector('.addSavedSubjects').style.display = "none"
            } else {
                document.querySelector('.addSavedSubjects').style.display = "block"
            }

        })
    })

    var semesterSelect = document.querySelectorAll('.semesterSelector')
    var yearLevel = document.querySelectorAll('.yearSelect')
    semesterSelect.forEach((element, index) => {
        element.addEventListener('change', ()=> {
            var yearSelect = document.querySelectorAll('.yearSelect')
            // $(table[index]).find('tbody').children('tr').remove()
            // var arr = []
            var type = index + 1
            var sem     = element.options[element.selectedIndex].value
            var year    = yearSelect[index].options[yearSelect[index].selectedIndex].value
            var code = sem + year
            var semText = element.options[element.selectedIndex].textContent
            var yearText = yearSelect[index].options[yearSelect[index].selectedIndex].textContent
            onChangeViewSched(type, code, yearText, semText)
        })
    })

    yearLevel.forEach((element, index) => {
        element.addEventListener('change', ()=> {
            var semesterSelect = document.querySelectorAll('.semesterSelector')
            // $(table[index]).find('tbody').children('tr').remove()
            // var arr = []
            var type = index + 1
            var year   = element.options[element.selectedIndex].value
            var sem    = semesterSelect[index].options[semesterSelect[index].selectedIndex].value
            var code = sem + year
            var yearText = element.options[element.selectedIndex].textContent
            var semText = semesterSelect[index].options[semesterSelect[index].selectedIndex].textContent    
            onChangeViewSched(type, code, yearText, semText)
        })
    })

    var dateSelectEnd = document.querySelectorAll('.end')
    dateSelectEnd.forEach((element, index) => {
        element.addEventListener('change', () => {
            var arrayMonth = [
                "January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"
            ]
            var label = document.querySelectorAll('.end')[index].value
            var labelText = document.querySelectorAll('.labelDateEnd')[index]
            var arr = label.split('-')
            var month = arrayMonth[parseInt(arr[1]) - 1]
            var days = arr[2]
            var year = arr[0]
            labelText.innerText = `${days} ${month}, ${year}`
        })
    })


});

const radioButtons = (indexes, str, year, sem) => {
    var selections1 = document.getElementById('courseSelections')
    var selections2 = document.getElementById('yearSelections')
    var selections3 = document.getElementById('semesterSelections')
    var int = indexes
    if(indexes === 1) {
        $('#yearSelections').attr('disabled', 'true')
    } else {
        $('#yearSelections').removeAttr('disabled')
    }

    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            inits: 1,
            index: int
        },
        success: function(data){
            var string = JSON.parse(data)

    if(indexes === 1) {
        selections2.style.disabled = true
    } else {
        selections2.style.disabled = false
    }

    selections1.length = 0
    selections2.length = 0
    selections3.length = 0
    
    
    var array2 = string[1].toString().split(',')
    var array3 = string[2].toString().split(',')

    
    string[0].forEach((arr, index) => {
        var option = document.createElement('option')
        var create = document.createAttribute('data-tag')
        var category = document.createAttribute('data-category')
        category.value = indexes 
        create.value = indexes + "" +  index
        option.setAttributeNode(create)
        option.setAttributeNode(category)
        option.value = arr[0];
        option.textContent = arr[1];
        selections1.appendChild(option)
    })
    
    array2.forEach((arr, index) => {
        var option = document.createElement('option')
        var create = document.createAttribute('data-tag2')
        create.value = indexes + "" +  index
        option.setAttributeNode(create)
        option.textContent = arr;
        selections2.appendChild(option)
    })

    array3.forEach((arr, index) => {
        var option = document.createElement('option')
        var create = document.createAttribute('data-tag3')
        create.value = indexes + "" +  index
        option.setAttributeNode(create)
        option.textContent = arr;
        selections3.appendChild(option)
    })

    if(str) {
        var course = document.getElementById('courseSelections')
        var years = document.getElementById('yearSelections')
        var sems = document.getElementById('semesterSelections')
        var courseOptions = course.options
        var yearsOptions = years.options
        var semsOptions = sems.options
        
        for(var a = 0; a < courseOptions.length; a++) {
            var att = courseOptions[a].getAttribute('data-tag')
            if(att == str) {
                course.options[a].selected = true
            }
        }

        for(var a = 0; a < yearsOptions.length; a++) {
            var att = yearsOptions[a].getAttribute('data-tag2')
            if(att == year) {
                years.options[a].selected = true
            }
        }

        for(var a = 0; a < semsOptions.length; a++) {
            var att = semsOptions[a].getAttribute('data-tag3')
            if(att == sem) {
                sems.options[a].selected = true
            }
        }
    }
    
        }
    })
    
    // ajax.onload= () => {
    //     var string = JSON.parse(ajax.responseText)

    //         if(indexes === 1) {
    //             selections2.style.disabled = true
    //         } else {
    //             selections2.style.disabled = false
    //         }

    //         selections1.length = 0
    //         selections2.length = 0
    //         selections3.length = 0
            
            
    //         var array2 = string[1].toString().split(',')
    //         var array3 = string[2].toString().split(',')

            
    //         string[0].forEach((arr, index) => {
    //             var option = document.createElement('option')
    //             var create = document.createAttribute('data-tag')
    //             var category = document.createAttribute('data-category')
    //             category.value = indexes 
    //             create.value = indexes + "" +  index
    //             option.setAttributeNode(create)
    //             option.setAttributeNode(category)
    //             option.value = arr[0];
    //             option.textContent = arr[1];
    //             selections1.appendChild(option)
    //         })
            
    //         array2.forEach((arr, index) => {
    //             var option = document.createElement('option')
    //             var create = document.createAttribute('data-tag2')
    //             create.value = indexes + "" +  index
    //             option.setAttributeNode(create)
    //             option.textContent = arr;
    //             selections2.appendChild(option)
    //         })

    //         array3.forEach((arr, index) => {
    //             var option = document.createElement('option')
    //             var create = document.createAttribute('data-tag3')
    //             create.value = indexes + "" +  index
    //             option.setAttributeNode(create)
    //             option.textContent = arr;
    //             selections3.appendChild(option)
    //         })
    // }
}

const elementCreating = function(element, _class, texts){
    const elements = document.createElement(element)
    elements.className = _class
    elements.innerHTML = texts

    return elements
}

const subjects = () => {
    // var JSONstring = JSON.parse(data)
    var spanElementCount = document.querySelectorAll('.strSpan')
    var arrayEquivalent = Array.from(spanElementCount)
    var count = arrayEquivalent[arrayEquivalent.length - 1]
    var newCount = count.textContent
    newCount = newCount - 0
    newCount++ 
    if(newCount < 9) {
        var html = `<label for="" class="labelSubjectSelection">Subject <span class="strSpan">${newCount}</span></label>
                    <div class="form-group subsJect">  
                    <select class="form-select subjectSelections" style="display: block"></select><h6 class="labelTitle art"></h6>
                        </div>`
    $('.multipleSelections').append(html)
    $('.deleteSubjectSched').css('display', 'flex')
    } 
    if(newCount === 8) {
        $('.addSubjectSched').hide()
    }

    subjectsView()
    
}

const verify = () => {
    
}

const deletedSubjects = () => {
    var selection = document.querySelectorAll('.subsJect')
    var labelSelection = document.querySelectorAll('.labelSubjectSelection')
    var newSelect = Array.from(selection)
    var newLabel = Array.from(labelSelection)
    newSelect[newSelect.length - 1].remove()
    newLabel[newLabel.length - 1].remove()
    // alert(newSelect.length)
    if(newSelect.length == 2) {
        $('.deleteSubjectSched').hide()
    }

    if(newSelect.length < 9) {
        $('.addSubjectSched').css('display', 'flex')
    }
}

const subjectsView = () => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            subsViewing: 1,
        },
        success: function(data) {
            var JSONstring = JSON.parse(data)
            var subjectSelection = document.querySelectorAll('.subjectSelections')
            var artSelection = document.querySelectorAll('.art')

            var label = artSelection[artSelection.length - 1]
            var subs = subjectSelection[subjectSelection.length - 1]

            JSONstring.forEach((arr1)=>{
                var option = document.createElement('option')
                option.value = arr1[0]
                option.textContent = `${arr1[1]} - ${arr1[2]}`
                subs.appendChild(option)
            })

            var texts = subs.options[subs.selectedIndex].text
            var nextTexts = texts.lastIndexOf('-') + 2;
            var newTexts = texts.substring(nextTexts);
            label.textContent = newTexts
            var art = Array.from(artSelection)

            subjectSelection.forEach((element, index)=>{
                element.addEventListener('change', ()=>{
                    var text = element.options[element.selectedIndex].text
                    var nextText = text.lastIndexOf('-') + 2;
                    var newText = text.substring(nextText);
                    art[index].textContent = newText
                    element.classList.remove('red', 'errBG')
                })
            })


            
        }
    })
}

const resetSubjectSelections = () => {
    var selections  = document.querySelectorAll('.subsJect')
    var label       = document.querySelectorAll('.labelSubjectSelection')
    var dele      = document.querySelector('.deleteSubjectSched')
    var add      = document.querySelector('.addSubjectSched')
    
    for(var i = 0; i < selections.length; i++) {
        if(i !== 0) {
            selections[i].remove()
            label[i].remove()
            dele.style.display = 'none'
        }
    }

    document.querySelectorAll('.subjectSelections')[0].length = 0
    add.style.display = 'flex'
    subjectsView();
    
}


const enrollmentPeriodViews = () => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            searchPeriod: 1
        }, 
        success: function(data){
        var string      = JSON.parse(data)
        var start       = document.querySelectorAll('.start')
        var end         = document.querySelectorAll('.end')
        var setup       = document.querySelectorAll('.setupSched')
        var setupBtn    = document.querySelectorAll('.setupBtn')
        var deleteBtn   = document.querySelectorAll('.deletePeriod')

        string.forEach((arr, index) => {

            var start1  = arr[0].substring(0, 4)
            var start2  = arr[0].substring(4, 6)
            var start3  = arr[0].substring(6, 8)

            var end1    = arr[1].substring(0, 4)
            var end2    = arr[1].substring(4, 6)
            var end3    = arr[1].substring(6, 8)

            var id      = arr[2]
            
            var arrayMonth = [
                "January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"
            ]
            
            var dateNow = new Date();
            var dd = String(dateNow.getDate()).padStart(2, '0');
            var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); 
            var yyyy = dateNow.getFullYear();
            var date = `${yyyy}-${mm}-${dd}` 

            var getMonthString = dateNow.getMonth()
            var monthDate = arrayMonth[getMonthString]
            var str = `${dd} ${monthDate}, ${yyyy}`
            deleteBtn[index].setAttribute('data-period-id', id)
            var labelStart = document.querySelectorAll('.labelDateStart')
            var labelEnd = document.querySelectorAll('.labelDateEnd')
            if(!arr[0] && !arr[1]) {
                start[index].value  = date
                labelStart[index].innerText = str
                start[index].setAttribute('disabled', 'disabled')
                start[index].style.background = "rgb(219 250 231)"
                end[index].value   = ""
                labelEnd[index].innerText = end[index].value
                end[index].removeAttribute('disabled')
                end[index].style.background = "#fff"
                setup[index].innerText = 'Not Set '
                var create = elementCreating('i', 'far fa-times', "")
                setup[index].style.background = "#FF5656"
                setup[index].appendChild(create)
                setup[index].style.color = "white"
                setup[index].childNodes[1].style.fontSize = "10pt"
                setup[index].childNodes[1].style.marginLeft = "10px"
                setup[index].childNodes[1].style.color = "white"
                setupBtn[index].removeAttribute('disabled')
                deleteBtn[index].setAttribute('disabled', 'disabled')
            } else {
                start[index].value  = `${start1}-${start2}-${start3}`
                end[index].value    = `${end1}-${end2}-${end3}`
                labelStart[index].innerText = `${start3} ${arrayMonth[parseInt(start2) - 1]}, ${start1}`
                labelEnd[index].innerText = `${end3} ${arrayMonth[parseInt(end2) - 1]}, ${end1}`
                start[index].setAttribute('disabled', 'disabled')
                start[index].style.background = "rgb(219 250 231)"
                end[index].setAttribute('disabled', 'disabled')
                end[index].style.background = "rgb(219 250 231)"
                setup[index].innerText = 'Set'
                var create = elementCreating('i', 'far fa-check', "")
                setup[index].appendChild(create)
                setup[index].style.background = "#238650"
                setup[index].style.color = "white"
                setup[index].childNodes[1].style.fontSize = "10pt"
                setup[index].childNodes[1].style.marginLeft = "10px"
                setup[index].childNodes[1].style.color = "white"
                setupBtn[index].setAttribute('disabled', 'disabled')
                deleteBtn[index].removeAttribute('disabled')
            }
    })

    var deletePeriod = document.querySelectorAll('.deletePeriod')
    deletePeriod.forEach((element, index) => {
        element.addEventListener('click', () => {
            var periodId = element.getAttribute('data-period-id')
            var type = element.getAttribute('data-id')
            // var ajax = new XMLHttpRequest()
                var sched = document.querySelectorAll('.schedContent')
                var schedLoader = document.querySelectorAll('.loader-confirm')
                schedLoader.forEach((arr) => {
                    arr.remove()
                })
                var elementCreateds = elementCreating('div', 'loader-confirm', "")
                var elementTexts    = elementCreating('div', 'labelTitle labs', 'Confirm delete')
                var elementHandler  = elementCreating('div', 'btnHandler', '')
                var elementYes      = elementCreating('button', 'confirmYes', 'Yes')
                var elementNo       = elementCreating('button', 'confirmNo', 'No')

                elementHandler.appendChild(elementYes)
                elementHandler.appendChild(elementNo)
                
                elementCreateds.appendChild(elementTexts)
                elementCreateds.appendChild(elementHandler)
                sched[index].appendChild(elementCreateds)


                var confirmYes = document.querySelectorAll('.confirmYes')
                confirmYes.forEach((arr)=> {
                    arr.addEventListener('click', () => {
                        $.ajax({
                            url: 'adminLoad.php',
                            type: 'POST',
                            data: {
                                deletePeriods: 1,
                                periodId: periodId
                            }, 
                            beforeSend: function(){
                                sched[index].lastChild.remove()
                                var elementCreated = elementCreating('div', 'loader-handler', "")
                                var elementLoader = elementCreating('div', 'mini-loader', "")
                                var elementText = elementCreating('h6', 'labelTitle h6Label', 'Deleting...')
                                elementCreated.appendChild(elementText)
                                elementCreated.appendChild(elementLoader)
                                sched[index].appendChild(elementCreated)
                            },
                            success: function(data){
                                sched[index].lastChild.remove()
                                        setTimeout(()=>{
                                            var elementCreated2 = elementCreating('div', 'loader-handler', "")
                                            var elementText2 = elementCreating('h6', 'labelTitle h6Label', 'Enrollment Period has been successfully deleted')
                                            elementCreated2.appendChild(elementText2)
                                            sched[index].appendChild(elementCreated2)
                                            setTimeout(()=>{
                                                sched[index].lastChild.remove()
                                                enrollmentPeriodViews()
                                                changeAfterSetup(type)
                                            }, 1500)
                                        }, 100)
                                
                            
                            }
                        })
                    //     ajax.open('POST', 'adminLoad.php')
                    //     ajax.onload = () => {
                    //         sched[index].lastChild.remove()
                    //         setTimeout(()=>{
                    //             var elementCreated = elementCreating('div', 'loader-handler', "")
                    //             var elementLoader = elementCreating('div', 'mini-loader', "")
                    //             var elementText = elementCreating('h6', 'labelTitle h6Label', 'Deleting...')
                    //             elementCreated.appendChild(elementText)
                    //             elementCreated.appendChild(elementLoader)
                    //             sched[index].appendChild(elementCreated)
                
                    //             if(ajax.responseText == "1") {
                    //                 setTimeout(()=>{
                    //                     sched[index].lastChild.remove()
                    //                     setTimeout(()=>{
                    //                         var elementCreated2 = elementCreating('div', 'loader-handler', "")
                    //                         var elementText2 = elementCreating('h6', 'labelTitle h6Label', 'Enrollment Period has been successfully deleted')
                    //                         elementCreated2.appendChild(elementText2)
                    //                         sched[index].appendChild(elementCreated2)
                    //                         setTimeout(()=>{
                    //                             sched[index].lastChild.remove()
                    //                             enrollmentPeriodViews()
                    //                         }, 1500)
                    //                     }, 100)
                    //                 }, 1500)
                    //             }
                    //         }, 100)
                            
                    //     }
                    //     ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                    //     ajax.send('deletePeriods=1&periodId=' + periodId)
                    // })
                })

                var confirmNo = document.querySelectorAll('.confirmNo')
                confirmNo.forEach((arr, int) => {
                    arr.addEventListener('click', () => {
                        $('.loader-confirm').fadeOut(100)
                    })
                    
                })
        })
    })
})
        }
    })
// var xml = new XMLHttpRequest()
// xml.open('POST', 'adminLoad.php')
// xml.onload = () => {
    
// }
// xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// xml.send("searchPeriod=1")

}

const absolute = (period_id, sched_id) => {
                    $.ajax({
                        url: 'adminLoad.php',
                        type: 'POST',
                        data: {
                            viewSubjectSched: 1,
                            periodic: period_id,
                            scheds: sched_id                            
                        },
                        success: function(data){
                            var string = JSON.parse(data)
                            var tbodySched = $(document.querySelector('.schedTabView')).find('tbody')
                            $(tbodySched).children('tr').remove()
                            string.forEach((elem, index) => {
                                var mess = ""
                                var arrEl = ""
                                if(elem[3] == "" || elem[4] == "") {
                                    mess = `<td>
                                                <span class="not_set" style="text-align: left!important">Not set</span>
                                            </td>
                                            <td style="text-align: center!important">
                                                <span class="not_set">Not set</span>
                                            </td>
                                            <td>
                                                <span class="not_set">Not set</span>
                                            </td>`
                                } else {
                                    arrEl = elem[6].split('-')
                                    mess = `<td><b>${elem[6]}</b></td>
                                            <td style="text-align: center!important;font-family: monospace; font-weight: bolder"><b>${changeFormatTime(elem[3])}</b></td>
                                            <td style="font-family: monospace; font-weight: bolder"><b>${changeFormatTime(elem[4])}</b></td>`
                                }
                            var html2 = `<tr>
                                            <td>${elem[1]}</td>
                                            <td>${elem[0]}</td>
                                            <td>${elem[2]}</td>
                                            ${mess}
                                            <td><button class="button setting sets${index}" 
                                                type="button"
                                                data-toggle="popover" 
                                                data-placement="right" 
                                                title="Set time schedule"
                                                data-id="${elem[5]}">
                                                <i class="fas fa-cog"></i>
                                             </button></td>
                                        </tr>`
                            $(tbodySched).append(html2)
                            document.querySelector(`.sets${index}`).addEventListener('click', () => {
                                    
                                    document.querySelector('.classEnd').value = elem[4]
                                    $('.subjectListing').fadeIn(300);
                                    if(Array.isArray(arrEl)){
                                        arrEl.forEach((element, int) => {
                                        var scheList = document.querySelectorAll('.boxes')
                                            scheList.forEach((arrElem, index) => {
                                                if(element === arrElem.getAttribute('data-value')) {
                                                    arrElem.classList.add('green')
                                                }
                                            })
                                        })
                                    }
                                        setTimeout(()=>{
                                            $('.listingSched').show();
                                            $('.listingSched').css('animationName','downFade');
                                            var id = document.querySelector(`.sets${index}`).getAttribute('data-id')
                                            document.querySelector('.successSched').setAttribute('data-id', id)
                                            $('.classStart').val(`${elem[3]}`)
                                            $('.classEnd').val(`${elem[4]}`)
                                        }, 100);

                                        $('.successSched').on('click', () => {
                                            var elemArray = []
                                            elemArray.length = 0
                                            var sc = document.querySelectorAll('.boxes')
                                            sc.forEach((elem, indexings)=> {
                                                if(elem.classList.contains("green")) {
                                                        elemArray.push(elem.getAttribute('data-value')) 
                                                }
                                            })

                                

                                // alert(elemArray)
                                var id = document.querySelector('.successSched').getAttribute('data-id')
                                var start = document.querySelector('.classStart')
                                var end = document.querySelector('.classEnd')
                                var u1 = document.querySelector('.u1')
                                var empty1 = "", empty2 = ""
                                var u2 = document.querySelector('.u2')
                                var bool = true
                                if(!start.value && end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    bool = false
                                } else if(start.value && !end.value) {
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u2).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(end).addClass('red errBG');
                                    bool = false
                                } else if(!start.value && !end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                        var elemArrayStr = elemArray.join('-')

                                    bool = false
                                } else if(elemArray.length === 0) {
                                            msg =`<div class=\"cont2\"><div class=\"unregister\">
                                                        Please set the day/s of class schedule                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                setTimeout(() => {
                                                    $('.cont2').remove();
                                                }, 1500);
                                    bool = false
                                    
                                    
                                }
                                

                                if(bool) {
                                    var elemArrayStr = elemArray.join('-')
                                    $.ajax({
                                        url: 'adminLoad.php',
                                        type: 'POST',
                                        data: {
                                            setSchedule: 1,
                                            id: id,
                                            arrayEl: elemArrayStr,
                                            start: start.value,
                                            end: end.value,
                                        },
                                        success: function(data) {
                                            if(data) {
                                                msg =`<div class=\"cont\"><div class=\"unregister\">
                                                        Subject Schedule has been successfully setup
                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                
                                                    setTimeout(()=>{
                                                         start.value = ""
                                                        end.value = ""
                                                        $('.schedTilt').children('.cont').remove()
                                                        absolute(period_id, sched_id)
                                                            $('.listingSched').css('animationName', 'upFade');
                                                            setTimeout(()=>{
                                                                $('.listingSched').hide();
                                                                $('.subjectListing').fadeOut();
                                                                sc.forEach(elm => {
                                                                    elm.classList.remove("green")
                                                                })
                                                            }, 400); 

                                                            document.querySelectorAll('.boxes').forEach(elem => {
                                                                elem.classList.remove('green')
                                                            })
                                                    }, 1500)
                                                
                                            }
                                        } 
                                    })
                                }
                            })
                                })


                            })

                            // var sch = document.querySelectorAll('.boxes')
                            
                            // sch.forEach((elem)=>{
                            //     $(elem).on('click', ()=>{
                            //         $(elem).toggleClass('green')

                            //     })
                            // })



                            // var setting = document.querySelectorAll('.setting')
                            // setting.forEach((elem, index) => {
                            //     elem.addEventListener('click', () => {
                            //         document.querySelector('.classStart').value = `${elem[3]}`
                            //         document.querySelector('.classEnd').value = `${elem[4]}`
                            //         $('.subjectListing').fadeIn(300);
                            //             setTimeout(()=>{
                            //                 $('.listingSched').show();
                            //                 $('.listingSched').css('animationName','downFade');
                            //                 var id = elem.getAttribute('data-id')
                            //                 document.querySelector('.successSched').setAttribute('data-id', id)
                                            
                            //             }, 140);
                            //     })
                            // })

                            // $('.successSched').on('click', () => {
                            //     var elemArray = []
                            //     elemArray.length = 0
                            //     var sc = document.querySelectorAll('.boxes')
                            //     sc.forEach((elem, indexings)=> {
                            //         if(elem.classList.contains("green")) {
                            //             if(indexings == 3) {
                            //                 elemArray.push(elem.innerText[0] + elem.innerText[1])
                            //             }else if(indexings == 6) {
                            //                 elemArray.push(elem.innerText[0] + elem.innerText[1])
                            //             } else{
                            //                 elemArray.push(elem.innerText[0])
                            //             }
                                        
                            //         }
                            //     })

                                

                            //     // alert(elemArray)
                            //     var id = document.querySelector('.successSched').getAttribute('data-id')
                            //     var start = document.querySelector('.classStart')
                            //     var end = document.querySelector('.classEnd')
                            //     var u1 = document.querySelector('.u1')
                            //     var empty1 = "", empty2 = ""
                            //     var u2 = document.querySelector('.u2')
                            //     var bool = true
                            //     if(!start.value && end.value) {
                            //         empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                            //             $(u1).append(empty1);
                            //             setTimeout(() => {
                            //                 $('.emp').remove();
                            //             }, 1500);
                            //             $(start).addClass('red errBG');
                            //         bool = false
                            //     } else if(start.value && !end.value) {
                            //         empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                            //             $(u2).append(empty2);
                            //             setTimeout(() => {
                            //                 $('.emp').remove();
                            //             }, 1500);
                            //             $(end).addClass('red errBG');
                            //         bool = false
                            //     } else if(!start.value && !end.value) {
                            //         empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                            //             $(u1).append(empty1);
                            //             setTimeout(() => {
                            //                 $('.emp').remove();
                            //             }, 1500);
                            //             $(start).addClass('red errBG');
                            //         empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                            //             $(u1).append(empty2);
                            //             setTimeout(() => {
                            //                 $('.emp').remove();
                            //             }, 1500);
                            //             $(start).addClass('red errBG');
                            //             var elemArrayStr = elemArray.join('-')

                            //         bool = false
                            //     } else if(!Array.isArray(elemArray)) {
                            //         var sch = document.querySelectorAll('.boxes')
                            //         sch.forEach((arr, index)=> {
                            //             if(arr.classList.contains('green')) {
                            //                 msg =`<div class=\"cont2\"><div class=\"unregister\">
                            //                             Please set the day/s of class schedule                                                        </div></div>`;
                            //                     $('.schedTilt').append(msg)
                            //                     setTimeout(() => {
                            //                         $('.cont2').remove();
                            //                     }, 1500);
                            //         bool = false
                            //             }
                            //         })
                                    
                            //     }


                            //     if(bool) {
                            //         var elemArrayStr = elemArray.join('-')
                            //         $.ajax({
                            //             url: 'adminLoad.php',
                            //             type: 'POST',
                            //             data: {
                            //                 setSchedule: 1,
                            //                 id: id,
                            //                 arrayEl: elemArrayStr,
                            //                 start: start.value,
                            //                 end: end.value,
                            //             },
                            //             success: function(data) {
                            //                 if(data) {
                            //                     msg =`<div class=\"cont\"><div class=\"unregister\">
                            //                             Subject Schedule has been successfully setup
                            //                             </div></div>`;
                            //                     $('.schedTilt').append(msg)
                            //                     sc.forEach(elm => {
                            //                         elm.classList.remove("green")
                            //                     })
                            //                         setTimeout(()=>{
                            //                              start.value = ""
                            //                             end.value = ""
                            //                             $('.schedTilt').children('.cont').remove()
                            //                             absolute(period_id, sched_id)
                            //                         }, 1500)
                                                
                            //                 }
                            //             } 
                            //         })
                            //     }
                            // })


                            $('.ticketFixed').on('click', function(e){
                                if(e.target == this) {
                                    $('.basis').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.basis').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                    $('.imagePreview').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.imagePreview').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                }
                                
                            });

                            $('.closing3').on('click', function(){
                                $('.basis').css('animationName', 'upFade'); 
                                setTimeout(()=>{
                                    $('.basis').hide();
                                    $('.ticketFixed').fadeOut(500);
                                }, 300);
                            });

                            $('.closing4').on('click', function(){
                                $('.listingSched').css('animationName', 'upFade');
                                setTimeout(()=>{
                                    $('.listingSched').hide();
                                    $('.subjectListing').fadeOut();
                                }, 400); 
                                document.querySelectorAll('.boxes').forEach(elem => {
                                    elem.classList.remove('green')
                                })
                            });
                        }
                    })
}

const viewSchedLists = () => {

    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            loadAll: 1            
        }, 
        success: function(data){
        var stringData = JSON.parse(data)
        var table = document.querySelectorAll('.schedTable')
        table.forEach((tab) => {
            $(tab).find('tbody').children('tr').remove()
        })
        
        var arrTable = Array.from(table)
        stringData.forEach((arr, index) => {
            var year = document.querySelectorAll('.yearSelect')[index].options[document.querySelector('.yearSelect').selectedIndex].textContent
            var sem = document.querySelectorAll('.semesterSelector')[index].options[document.querySelector('.semesterSelector').selectedIndex].textContent
            var tbody = $(arrTable[index]).find('tbody')
            var i = 0
            arr.forEach((element, index2) => {
                
                var html = `<tr>
                                <td>${element[0]}</td>
                                <td>${year}</td>
                                <td>${sem}</td>
                                <td><div class="statusQuo ${element[2]}${i}">${element[1]}</div></td>
                                <td>
                                    <button class="button schedInfo info${element[2]}${i} in" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-id="${element[4]}"
                                        data-type="${element[3]}"
                                        title="Info">
                                        <i class="fas fa-info-circle"></i>
                                    </button>
    
                                    <button class="button setSched set${element[2]}${i} setting" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-type="${element[5]}"
                                        data-id="${element[6]}"
                                        data-code="${element[4]}"
                                        title="Set up">
                                        <i class="fas fa-plus-circle"></i>
                                    </button>

                                    <button class="button deleteInfo del${element[2]}${i} out" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-id="${element[4]}"
                                        data-type="${element[3]}"
                                        title="Delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>`
                $(tbody).append(html)
                // i++

                if(element[1] == "Not Set") {
                    var x = ` <i class="fas fa-times" style="font-size: 9pt"></i>`
                    var ed = document.querySelector(`.${element[2]}${i}`)
                    ed.style.background = "rgb(251, 110, 110)"
                    $(ed).append(x)
                    $(`.info${element[2]}${i}`).prop('disabled', true)
                    $(`.del${element[2]}${i}`).prop('disabled', true)
                } else {
                    var x = ` <i class="fas fa-check" style="font-size: 9pt; color: #555"></i>`
                    var ed = document.querySelector(`.${element[2]}${i}`)
                    $(ed).append(x)
                    $(`.set${element[2]}${i}`).prop('disabled', true)
                }
                var events = document.querySelector(`.info${element[2]}${i}`)
                events.addEventListener('click', () => {
                    var fixed = document.querySelector('.ticketFixed')
                    var basis = document.querySelector('.basis')
                    $(fixed).fadeIn(200)
                    setTimeout(() => {
                        basis.style.display = 'block'
                        basis.style.animationName = "downFade"
                    }, 0)
                    
                    var sched_id =  events.getAttribute('data-id')
                    var period_id =  events.getAttribute('data-type')

                    document.querySelector('.successSched').setAttribute('data-code', sched_id)
                    document.querySelector('.successSched').setAttribute('data-type', period_id)
                    $.ajax({
                        url: 'adminLoad.php',
                        type: 'POST',
                        data: {
                            viewSubjectSched: 1,
                            periodic: period_id,
                            scheds: sched_id                            
                        },
                        success: function(data){
                            var string = JSON.parse(data)
                            var tbodySched = $(document.querySelector('.schedTabView')).find('tbody')
                            $(tbodySched).children('tr').remove()
                            string.forEach((elem, index) => {
                                var arrEl = ""

                                var mess = ""
                                if(elem[3] == "" || elem[4] == "") {
                                    mess = `<td>
                                                <span class="not_set" style="text-align: left!important">Not set</span>
                                            </td>
                                            <td style="text-align: center!important">
                                                <span class="not_set">Not set</span>
                                            </td>
                                            <td>
                                                <span class="not_set">Not set</span>
                                            </td>`
                                } else {
                                    arrEl = elem[6].split('-')
                                    mess = `<td><b>${elem[6]}</b></td>
                                            <td style="text-align: center!important; font-family: monospace; font-weight: bolder"><b>${changeFormatTime(elem[3])}</b></td>
                                            <td style="font-family: monospace; font-weight: bolder"><b>${changeFormatTime(elem[4])}</b></td>`
                                }
                            var html2 = `<tr>
                                            <td>${elem[1]}</td>
                                            <td>${elem[0]}</td>
                                            <td>${elem[2]}</td>
                                            ${mess}
                                            <td><button class="button setting sets${index}" 
                                                type="button"
                                                data-toggle="popover" 
                                                data-placement="right" 
                                                title="Set time schedule"
                                                data-id="${elem[5]}">
                                                <i class="fas fa-cog"></i>
                                             </button></td>
                                        </tr>`
                            $(tbodySched).append(html2)

                            document.querySelector(`.sets${index}`).addEventListener('click', () => {
                                    $('.subjectListing').fadeIn(300);
                                    if(Array.isArray(arrEl)){
                                        arrEl.forEach((element, int) => {
                                        var scheList = document.querySelectorAll('.boxes')
                                            scheList.forEach((arrElem, index) => {
                                                if(element === arrElem.getAttribute('data-value')) {
                                                    arrElem.classList.add('green')
                                                }
                                            })
                                        })
                                    }
                                   
                                        setTimeout(()=>{
                                            $('.listingSched').show();
                                            $('.listingSched').css('animationName','downFade');
                                            var id = document.querySelector(`.sets${index}`).getAttribute('data-id')
                                            document.querySelector('.successSched').setAttribute('data-id', id)
                                            $('.classStart').val(`${elem[3]}`)
                                            $('.classEnd').val(`${elem[4]}`)
                                        }, 100);



                            $('.successSched').on('click', () => {
                                var sch_id = document.querySelector('.successSched').getAttribute('data-code')
                                var per_id = document.querySelector('.successSched').getAttribute('data-type')
                                let elemArray = []
                                elemArray.length = 0
                                var sc = document.querySelectorAll('.boxes')
                                sc.forEach((elem, indexings)=> {
                                    if(elem.classList.contains("green")) {
                                            elemArray.push(elem.getAttribute('data-value')) 
                                    }
                                })

                                // alert(elemArray)
                                var id = document.querySelector('.successSched').getAttribute('data-id')
                                var start = document.querySelector('.classStart')
                                var end = document.querySelector('.classEnd')
                                var u1 = document.querySelector('.u1')
                                var empty1 = "", empty2 = ""
                                var u2 = document.querySelector('.u2')
                                var bool = true
                                if(!start.value && end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    bool = false
                                } else if(start.value && !end.value) {
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u2).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(end).addClass('red errBG');
                                    bool = false
                                } else if(!start.value && !end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');

                                    bool = false
                                } 
                                else if(elemArray.length === 0) {
                                            msg =`<div class=\"cont2\"><div class=\"unregister\">
                                                        Please set the day/s of class schedule                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                setTimeout(() => {
                                                    $('.cont2').remove();
                                                }, 1500);
                                    bool = false
                                    
                                    
                                }

                                if(bool) {
                                    var elemArrayStr = elemArray.join('-')
                                    $.ajax({
                                        url: 'adminLoad.php',
                                        type: 'POST',
                                        data: {
                                            setSchedule: 1,
                                            id: id,
                                            arrayEl: elemArrayStr,
                                            start: start.value,
                                            end: end.value,
                                        },
                                        success: function(data) {
                                            if(data) {
                                                msg =`<div class=\"cont\"><div class=\"unregister\">
                                                        Subject Schedule has been successfully setup
                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                
                                                    setTimeout(()=>{
                                                         start.value = ""
                                                        end.value = ""
                                                        $('.schedTilt').children('.cont').remove()
                                                        absolute(period_id, sched_id)
                                                            $('.listingSched').css('animationName', 'upFade');
                                                            setTimeout(()=>{
                                                                $('.listingSched').hide();
                                                                $('.subjectListing').fadeOut();
                                                                sc.forEach(elm => {
                                                                    elm.classList.remove("green")
                                                                })
                                                            }, 400); 

                                                            document.querySelectorAll('.boxes').forEach(elem => {
                                                                elem.classList.remove('green')
                                                            })
                                                    }, 1500)
                                                
                                            }
                                        } 
                                    })
                                }
                            })
                                })

                            })

                            // 



                            // var setting = document.querySelectorAll('.setting')
                            // setting.forEach((elems, index) => {
                            //     elems.addEventListener('click', () => {
                            //         $('.classStart').val(`${elem[3]}`)
                            //         $('.classEnd').val(`${elem[4]}`)
                            //         document.querySelector('.classEnd').value = elem[4]
                            //         $('.subjectListing').fadeIn(300);
                            //             setTimeout(()=>{
                            //                 $('.listingSched').show();
                            //                 $('.listingSched').css('animationName','downFade');
                            //                 var id = elem.getAttribute('data-id')
                            //                 document.querySelector('.successSched').setAttribute('data-id', id)
                                            
                            //             }, 100);
                            //     })
                            // })


                            $('.ticketFixed').on('click', function(e){
                                if(e.target == this) {
                                    $('.basis').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.basis').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                    $('.imagePreview').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.imagePreview').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);
                                }

                                

                            });

                            $('.closing3').on('click', function(){
                                $('.basis').css('animationName', 'upFade'); 
                                setTimeout(()=>{
                                    $('.basis').hide();
                                    $('.ticketFixed').fadeOut(500);
                                }, 300);
                            });

                            $('.closing4').on('click', function(){
                                $('.listingSched').css('animationName', 'upFade');
                                setTimeout(()=>{
                                    $('.listingSched').hide();
                                    $('.subjectListing').fadeOut();
                                }, 400); 

                                document.querySelectorAll('.boxes').forEach(elem => {
                                    elem.classList.remove('green')
                                })
                            });
                        }
                    })
                })
                
                var el = element[4]
                // alert(el)
                var set = document.querySelector(`.set${element[2]}${i}`)
                set.addEventListener('click', () => {
                    var radio = document.querySelectorAll('.radioButtons')
                    var id = set.getAttribute('data-id')
                    var typing = set.getAttribute('data-type')
                    var str1 = typing + index2.toString()
                    radio[index].checked = true
                    var years = el[4] + el[5] 
                    var sems = el[2] + el[3] 
                    
                    radioButtons(typing, str1, years, sems)
                    var sched = document.querySelectorAll('.btSched')
                    var schedChild = document.querySelectorAll('.schedChild')
                    sched.forEach((elem, indexing) => {
                        if(indexing === 1) {
                            elem.classList.add('foc')
                        } else {
                            elem.classList.remove('foc')
                        }    
                    })

                    schedChild.forEach((e, ins) => {
                        if(ins === 1) {
                            e.style.display = 'block'
                        } else {
                            e.style.display = 'none'
                        }  
                    })

                    document.querySelector('.lineSched').style.left = "33.3333%"
                    document.querySelector('.addSavedSubjects').style.display = 'block'
                    // sem
                    // year
                })

                var deleteInfo = document.querySelectorAll(`.del${element[2]}${i}`)
                deleteInfo.forEach((arr) => {
                    arr.addEventListener('click', () => {
                        var year2 = document.querySelectorAll('.yearSelect')[index].options[document.querySelector('.yearSelect').selectedIndex].textContent
                        var sem2 = document.querySelectorAll('.semesterSelector')[index].options[document.querySelector('.semesterSelector').selectedIndex].textContent
                        var years = el[4] + el[5] 
                        var sems = el[2] + el[3] 
                        var code = years + sems
                        var ids      = arr.getAttribute('data-id')
                        var typo    = arr.getAttribute('data-type')
                        $('.finalTitle5').html('Are you sure you want to delete this?')
                        $('.subFixed2').fadeIn(200, function() {
                            $('.finalDeci5').slideDown(200)
                        })

                        setAtt(document.querySelector('.yes5'), {
                            'data-id': ids,
                            'data-type': typo
                        })

                        var objArr = [index + 1, code, year2, sem2]    
                        initDelete(ids, typo, objArr)
                    })
                })
                i++
            })
            
        })
        }
    })
}

const onChangeViewSched = (type, code, year, semester) => {
    $.ajax({
        url: 'adminLoad.php',
        type: 'POST',
        data: {
            change: 1,
            type: type,
            code: code
        }, 
        success: function(data){
            var i = 0
            var JSONstring = JSON.parse(data)
            var table = document.querySelectorAll('.schedTable')
            var tbody = $(table[type - 1]).find('tbody')
            $(tbody).children('tr').remove()
            JSONstring.forEach((arr, indexing) => {

                arr.forEach((element, index) => {
                    var html = `<tr>
                                <td>${element[0]}</td>
                                <td>${year}</td>
                                <td>${semester}</td>
                                <td><div class="statusQuo ${element[2]}${i}">${element[1]}</div></td>
                                <td>
                                    <button class="button schedInfo info${element[2]}${i} in" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-id="${element[4]}"
                                        data-type="${element[3]}"
                                        title="Info">
                                        <i class="fas fa-info-circle"></i>
                                    </button>
    
                                    <button class="button setSched set${element[2]}${i} setting" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-type="${element[5]}"
                                        data-id="${element[6]}"
                                        data-code="${element[4]}"
                                        title="Set up">
                                        <i class="fas fa-plus-circle"></i>
                                    </button>

                                    <button class="button deleteInfo del${element[2]}${i} out" 
                                        data-toggle="tooltip" 
                                        data-placement="right" 
                                        data-id="${element[4]}"
                                        data-type="${element[3]}"
                                        title="Delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>`
                $(tbody).append(html)

                if(element[1] == "Not Set") {
                    var x = ` <i class="fas fa-times" style="font-size: 9pt"></i>`
                    var ed = document.querySelector(`.${element[2]}${i}`)
                    ed.style.background = "rgb(251 110 110)"
                    $(ed).append(x)
                    $(`.info${element[2]}${i}`).prop('disabled', true)
                    $(`.del${element[2]}${i}`).prop('disabled', true)
                } else {
                    var x = ` <i class="fas fa-check" style="font-size: 9pt; color: #555"></i>`
                    var ed = document.querySelector(`.${element[2]}${i}`)
                    $(ed).append(x)
                    // var say = document.querySelector(`.set${element[2]}`)
                    $(`.set${element[2]}${i}`).prop('disabled', true)
                }

                var events = document.querySelector(`.info${element[2]}${i}`)
                events.addEventListener('click', () => {
                    var fixed = document.querySelector('.ticketFixed')
                    var basis = document.querySelector('.basis')
                    $(fixed).fadeIn(200)
                    setTimeout(() => {
                        basis.style.display = 'block'
                        basis.style.animationName = "downFade"
                    }, 0)
                    
                    var sched_id =  events.getAttribute('data-id')
                    var period_id =  events.getAttribute('data-type')

                    document.querySelector('.successSched').setAttribute('data-code', sched_id)
                    document.querySelector('.successSched').setAttribute('data-type', period_id)
                    $.ajax({
                        url: 'adminLoad.php',
                        type: 'POST',
                        data: {
                            viewSubjectSched: 1,
                            periodic: period_id,
                            scheds: sched_id                            
                        },
                        success: function(data){
                            var string = JSON.parse(data)
                            var tbodySched = $(document.querySelector('.schedTabView')).find('tbody')
                            $(tbodySched).children('tr').remove()
                            string.forEach((elem, index) => {
                            var mess = ""
                            var arrEl = ""
                                if(elem[3] == "" || elem[4] == "") {
                                    mess = `<td>
                                                <span class="not_set" style="text-align: left!important">Not set</span>
                                            </td>
                                            <td style="text-align: center!important">
                                                <span class="not_set">Not set</span>
                                            </td>
                                            <td>
                                                <span class="not_set">Not set</span>
                                            </td>`
                                } else {
                                    arrEl = elem[6].split('-')
                                    mess = `<td><b>${elem[6]}</b></td>
                                            <td style="text-align: center!important"><b>${changeFormatTime(elem[3])}</b></td>
                                            <td><b>${changeFormatTime(elem[4])}</b></td>`
                                }
                            var html2 = `<tr>
                                            <td>${elem[1]}</td>
                                            <td>${elem[0]}</td>
                                            <td>${elem[2]}</td>
                                            ${mess}
                                            <td><button class="button setting sets${index}" 
                                                type="button"
                                                data-toggle="popover" 
                                                data-placement="right" 
                                                title="Set time schedule"
                                                data-id="${elem[5]}">
                                                <i class="fas fa-cog"></i>
                                             </button></td>
                                        </tr>`
                            $(tbodySched).append(html2)
                            document.querySelector(`.sets${index}`).addEventListener('click', () => {
                                    
                                    document.querySelector('.classEnd').value = elem[4]
                                    $('.subjectListing').fadeIn(300);
                                    if(Array.isArray(arrEl)){
                                        arrEl.forEach((element, int) => {
                                        var scheList = document.querySelectorAll('.boxes')
                                            scheList.forEach((arrElem, index) => {
                                                if(element === arrElem.getAttribute('data-value')) {
                                                    arrElem.classList.add('green')
                                                }
                                            })
                                        })
                                    }
                                    
                                        setTimeout(()=>{
                                            $('.listingSched').show();
                                            $('.listingSched').css('animationName','downFade');
                                            var id = document.querySelector(`.sets${index}`).getAttribute('data-id')
                                            document.querySelector('.successSched').setAttribute('data-id', id)
                                            $('.classStart').val(`${elem[3]}`)
                                    $('.classEnd').val(`${elem[4]}`)
                                        }, 100);
                                })
                            })

                            



                            // var setting = document.querySelectorAll('.setting')
                            // setting.forEach((elem, index) => {
                            //     elem.addEventListener('click', () => {
                            //         $('.subjectListing').fadeIn(300);
                            //             setTimeout(()=>{
                            //                 $('.listingSched').show();
                            //                 $('.listingSched').css('animationName','downFade');
                            //                 var id = elem.getAttribute('data-id')
                            //                 document.querySelector('.successSched').setAttribute('data-id', id)
                                            
                            //             }, 100);
                            //     })
                            // })

                            $('.successSched').on('click', () => {
                                var sch_id = document.querySelector('.successSched').getAttribute('data-code')
                                var per_id = document.querySelector('.successSched').getAttribute('data-type')
                                var elemArray = []
                                var sc = document.querySelectorAll('.boxes')
                                sc.forEach((elem, indexings)=> {
                                    if(elem.classList.contains("green")) {
                                            elemArray.push(elem.getAttribute('data-value')) 
                                    }
                                })

                                // alert(elemArray)
                                var id = document.querySelector('.successSched').getAttribute('data-id')
                                var start = document.querySelector('.classStart')
                                var end = document.querySelector('.classEnd')
                                var u1 = document.querySelector('.u1')
                                var empty1 = "", empty2 = ""
                                var u2 = document.querySelector('.u2')
                                var bool = true
                                if(!start.value && end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    bool = false
                                } else if(start.value && !end.value) {
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u2).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(end).addClass('red errBG');
                                    bool = false
                                } else if(!start.value && !end.value) {
                                    empty1 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty1);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                    empty2 = "<div class=\"emp\">Please don't leave it empty</div>";
                                        $(u1).append(empty2);
                                        setTimeout(() => {
                                            $('.emp').remove();
                                        }, 1500);
                                        $(start).addClass('red errBG');
                                        var elemArrayStr = elemArray.join('-')

                                    bool = false
                                } else if(elemArray.length === 0) {
                                            msg =`<div class=\"cont2\"><div class=\"unregister\">
                                                        Please set the day/s of class schedule                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                setTimeout(() => {
                                                    $('.cont2').remove();
                                                }, 1500);
                                    bool = false
                                    
                                    
                                }

                                if(bool) {
                                    var elemArrayStr = elemArray.join('-')
                                    $.ajax({
                                        url: 'adminLoad.php',
                                        type: 'POST',
                                        data: {
                                            setSchedule: 1,
                                            id: id,
                                            arrayEl: elemArrayStr,
                                            start: start.value,
                                            end: end.value,
                                        },
                                        success: function(data) {
                                            if(data) {
                                                msg =`<div class=\"cont\"><div class=\"unregister\">
                                                        Subject Schedule has been successfully setup
                                                        </div></div>`;
                                                $('.schedTilt').append(msg)
                                                
                                                    setTimeout(()=>{
                                                         start.value = ""
                                                        end.value = ""
                                                        $('.schedTilt').children('.cont').remove()
                                                        absolute(per_id, sch_id)
                                                            $('.listingSched').css('animationName', 'upFade');
                                                            setTimeout(()=>{
                                                                $('.listingSched').hide();
                                                                $('.subjectListing').fadeOut();
                                                                sc.forEach(elm => {
                                                                    elm.classList.remove("green")
                                                                })
                                                            }, 400); 

                                                            document.querySelectorAll('.boxes').forEach(elem => {
                                                                elem.classList.remove('green')
                                                            })
                                                    }, 1500)
                                                
                                            }
                                        } 
                                    })
                                }
                                // 
                            })


                            $('.ticketFixed').on('click', function(e){
                                if(e.target == this) {
                                    $('.basis').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.basis').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                    $('.imagePreview').css('animationName', 'upFade'); 
                                    setTimeout(()=>{
                                        $('.imagePreview').hide();
                                        $('.ticketFixed').fadeOut(500);
                                    }, 300);

                                }
                            });

                            $('.closing3').on('click', function(){
                                $('.basis').css('animationName', 'upFade'); 
                                setTimeout(()=>{
                                    $('.basis').hide();
                                    $('.ticketFixed').fadeOut(500);
                                }, 300);
                            });

                             $('.closing4').on('click', function(){
                                $('.listingSched').css('animationName', 'upFade');
                                setTimeout(()=>{
                                    $('.listingSched').hide();
                                    $('.subjectListing').fadeOut();
                                }, 400); 
                                var sc = document.querySelectorAll('.boxes')
                                sch.forEach((elem)=>{
                                    elem.classList.remove('green')
                                })
                            });
                        }
                    })
                })

                var el = element[4]
                var set = document.querySelector(`.set${element[2]}${i}`)
                set.addEventListener('click', () => {
                    var radio = document.querySelectorAll('.radioButtons')
                    var id = set.getAttribute('data-id')
                    var typing = set.getAttribute('data-type')
                    var str1 = typing + index.toString()
                    radio[typing - 1].checked = true
                    var years = el[4] + el[5] 
                    var sems = el[2] + el[3] 
                    radioButtons(typing, str1, years, sems)
                    var sched = document.querySelectorAll('.btSched')
                    var schedChild = document.querySelectorAll('.schedChild')
                    sched.forEach((elem, indexing) => {
                        if(indexing === 1) {
                            elem.classList.add('foc')
                        } else {
                            elem.classList.remove('foc')
                        }    
                    })

                    schedChild.forEach((e, ins) => {
                        if(ins === 1) {
                            e.style.display = 'block'
                        } else {
                            e.style.display = 'none'
                        }  
                    })

                    document.querySelector('.lineSched').style.left = "33.3333%"
                    document.querySelector('.addSavedSubjects').style.display = 'block'
                    
                })

                var deleteInfo = document.querySelectorAll(`.del${element[2]}${i}`)
                deleteInfo.forEach((arr) => {
                    arr.addEventListener('click', () => {
                        var ids      = arr.getAttribute('data-id')
                        var typo    = arr.getAttribute('data-type')
                        $('.finalTitle5').html('Are you sure you want to delete this?')
                        $('.subFixed2').fadeIn(200, function() {
                            $('.finalDeci5').slideDown(200)
                        })
                        setAtt(document.querySelector('.yes5'), {
                            'data-id': id,
                            'data-type': type
                        })
                        var objArr = [type, code, year, semester]
                        initDelete(ids, typo, objArr)
                    })
                })

                // $('.no5').on('click', () => {
                //     $('.finalDeci5').slideUp(200, function(){
                //         $('.subFixed2').fadeOut();
                //     });
                // })

                // $('.yes5').on('click', ()=> {
                //     var id      = $('.yes5').getAttribute('data-id')
                //     var type    = $('.yes5').getAttribute('data-type')
                //     confirmDeleteSchedSubjects(id, type)
                // })
                i++
                })
                
            })
        }
    })
}

const setAtt = (element, attribute) => {
    for(var key in attribute) {
        element.setAttribute(`${key}`, `${attribute[key]}`)
    }
}

const initDelete = (id, type, objArr) => {

    $('.yes5').on('click', ()=> {
        confirmDeleteSchedSubjects(id, type, objArr)
    })
    
    $('.no5').on('click', ()=> {
        $('.finalDeci5').slideUp(200, function(){
            $('.subFixed2').fadeOut();
        });
    })
}

const confirmDeleteSchedSubjects = (id, type, objArr) => {
        $.ajax({
            url: 'adminLoad.php',
            type: 'POST',
            data: {
                deleteScheds: 1,
                ids: id,
                types: type
            }, 
            beforeSend  : function(){
                $('.loadFixing').css('display', 'flex')
                document.querySelector('.fixing h5').innerHTML = "Deleting..."
            },
            success: function(data) {
                if(data) {
                    $('.loadFixing').fadeOut(200)
                    $('.finalDeci5').slideUp(200, function(){
                        $('.subFixed2').fadeOut();
                    });
                    msg =`<div class=\"cont\"><div class=\"unregister\">
                                Subject Schedule has been successfully deleted
                          </div></div>`;
                    $('#subjectHeader').append(msg)
                    setTimeout(()=>{
                        document.querySelector('.cont').remove()
                        onChangeViewSched(objArr[0], objArr[1], objArr[2], objArr[3])
                    }, 1500)
    
                } else {
                    alert('error')
                    $('.loadFixing').fadeOut(200)
                    $('.finalDeci5').slideUp(200, function(){
                        $('.subFixed2').fadeOut();
                    });
                }
            }
        })
}


const changeAfterSetup = (type) => {
    var semesterSelect = document.querySelectorAll('.semesterSelector')[type - 1]
    var yearSelect = document.querySelectorAll('.yearSelect')[type - 1]
    var sem     = semesterSelect.options[semesterSelect.selectedIndex].value
    var year    = yearSelect.options[yearSelect.selectedIndex].value
    var code    = sem + year
    var semText = semesterSelect.options[semesterSelect.selectedIndex].textContent
    var yearText = yearSelect.options[yearSelect.selectedIndex].textContent
    onChangeViewSched(type, code, yearText, semText)
}


function emailS(name, email) {
            
            var full_name = name
            var params = {
                to_email: email,
                full_name: full_name,

            }

            emailjs.send("notify","template_jsrmqek", params)
                // .then(function(){
                //     $('.back').css('animationName', 'popin'),
                //         setTimeout(()=>{
                //             $('.back').show();
                //         }, 300);
                // });
        }

        function emailEnrolled(name, email) {
            
            var full_name = name
            var params = {
                to_email: email,
                full_name: full_name,

            }

            emailjs.send("notify","template_d5tmu9b", params)
                // .then(function(){
                //     $('.back').css('animationName', 'popin'),
                //         setTimeout(()=>{
                //             $('.back').show();
                //         }, 300);
                // });
        }

        const changeFormatTime = (time) => {
                var tim = time.toString()
                var split = tim.split(':')
                var hour 
                var times

                if(parseInt(split[0]) > 12) {
                    var inits = parseInt(split[0]) - 12
                    var hour = inits.toString().padStart(2, '0')
                    times = `${hour}:${split[1]} PM`
                } else if(split[0] == "00") {
                    hour = "12"
                    times = `${hour}:${split[1]} AM`
                }  else if(split[0] == "12"){
                    times = time + " PM"
                } else {
                    times = time + " AM"
                }

                return times
            }