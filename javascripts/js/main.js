console.log('This would be the main JS file.');

//判断向上滑动 向下滑动 
(function(){

    var obj = {};

        obj.scrollTop = 0;
    //判断向上或是向下滑动
    //获取浏览器窗口高度
    if (window.innerHeight)
    obj.winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
    obj.winHeight = document.body.clientHeight;

    obj.myScroll = function(){
        var pre = obj.scrollTop;
        obj.scrollTop = $("body").scrollTop();
        return (obj.scrollTop-pre)>0?1:-1;
    }
    window.obj = obj;
})()
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(){
                window.setTimeout(callback, 1000 / 60);
            };
})();
//滑动页面
var $slide = $("slide");
    function animate(){
        requestAnimFrame(animate);
        bodyGo();
    }
    function bodyGo(){
        for(var i=obj.winHeight;i<)
        $("body").scrollTop(obj.scrollTop++);
    }
    animate();