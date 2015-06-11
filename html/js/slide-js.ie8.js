$(document).ready(function() {
    var $slideBtn = $("#slideBtn"),
        $left = $(".left"),
        $right = $(".right"),
        $slideL = $(".slideL"),
        $slideR = $(".slideR");

function slideObj(){};
    slideObj.flag = 0;

        function slideForIE(){
            if(slideObj.flag == 0){
                $slideL.animate({
                    "left":"0"
                },1000);
                $slideR.animate({
                    "left":'100%'
                },1000)
                slideObj.flag = 1;
            }else{
                $slideL.animate({
                    'left':'-100%'
                },1000);
                $slideR.animate({
                    'left':0
                },1000)
                slideObj.flag = 0;
            }
        }
        slideObj.slideForIE = slideForIE;
        
        $slideBtn.click(slideObj.slideForIE);
});

