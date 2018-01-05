$(document).ready (function(){
    $('.mar .ab').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.btns').on('click',function(){
        var btnv=this.name;
        $("#"+btnv).fadeIn(800).show().siblings().fadeOut(950).hide();
    });
    $('.slide').on('click',function(){
        var slid=this.name;
        //console.log(slid);
       $("#"+slid).fadeIn(800).show().siblings().fadeOut(950).hide();
        if(slid == "show2"){
            $(".fa-chevron-right").addClass("disable");
        }else if(slid == "show1"){
            $(".fa-chevron-left").addClass("disable");
        }
    });

    /*for navbar */
    $('.menu').on('click',function(){
        $('ul').toggleClass('active');
        $("#carousel").toggleClass('cus');
    });
});


