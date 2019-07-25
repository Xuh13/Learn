$(document).ready(function () {
    $(".box").mousedown(function (e) {
        var top1 = $(".box").offset().top;
        var left1 = $(".box").offset().left;
        var pageX_b = e.pageX;
        var pageY_b = e.pageY;
        $(document).on(
            "mousemove",function(x){
                var changeTop = x.pageY - pageY_b;
                var changeLeft = x.pageX - pageX_b;
                var top2;
                var left2;
                top2=x.pageY-pageY_b+top1;
                left2=x.pageX-pageX_b+left1;
                $(".box").css({
                    "top": top2+"px",
                    "left": left2+"px"
                })
            }
        )
    })
    $(document).mouseup(function(){
        $(document).off("mousemove");
    })
})