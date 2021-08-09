$(document).ready(function(){

    $('.pending').on('click', function(){
        $('.pending').addClass('focus_pen');
        $('.ongoing').removeClass('focus_on');
        $('.enrolled').removeClass('focus_en');
    });

    $('.ongoing').on('click', function(){
        $('.pending').removeClass('focus_pen');
        $('.ongoing').addClass('focus_on');
        $('.enrolled').removeClass('focus_en');
    });

    $('.enrolled').on('click', function(){
        $('.pending').removeClass('focus_pen');
        $('.ongoing').removeClass('focus_on');
        $('.enrolled').addClass('focus_en');
    });
    
    // $(window).on('mouseup', function(eve){
    //     var elem1 = $('.pending');
    //     var elem2 = $('.ongoing');
    //     var elem3 = $('.enrolled');

    //     if(eve.target != elem1 && eve.target.parentNode != elem1) {

    //         $('.pending').removeClass('focus_pen');

    //     } 
        
    //     if(eve.target != elem2 && eve.target.parentNode != elem2) {

    //         $('.ongoing').removeClass('focus_on');

    //     } 
        
    //     if(eve.target != elem3 && eve.target.parentNode != elem3) {

    //         $('.enrolled').removeClass('focus_en');

    //     }

        

        

    
});
