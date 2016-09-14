           /* меню mobile */


$(document).ready(function(){
    $('#trge').click(function(){
        $('.menu').slideToggle(500);
        
    });
    
    
    $('#trge').click(function(){
       var pos = $('#trge').offset().top;
        $("body,html").scrollTop(pos);
    });
    
    
    $(window).resize(function(){
       if ($(window).width() > 420){
           $('.menu').removeAttr('style');
       } 
    });
});