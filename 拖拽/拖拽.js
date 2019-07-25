$(document).ready(function () {
    $(".box").mousedown(function (e) {
        e = e || window.event;
        var top1 = $(".box").offset().top;
        var left1 = $(".box").offset().left;
        var pageX_b = e.pageX;
        var pageY_b = e.pageY;
        $(document).on(
            "mousemove",
            function (x) {
                var changeTop = x.pageY - pageY_b;
                var changeLeft = x.pageX - pageX_b;
                var top2;
                var left2;
                var doc_height = $(document).height();
                var doc_width = $(document).width();
                top2 = x.pageY - pageY_b + top1;
                left2 = x.pageX - pageX_b + left1;
                if (top2 < 0) {
                    top2 = 0;
                } else if (top2 > doc_height - 100) {
                    top2 = doc_height - 100;
                }
                if (left2 < 0) {
                    left2 = 0;
                } else if (left2 > doc_width - 100) {
                    left2 = doc_width - 100;
                }
                $(".box").animate({
                    top: top2 + "px",
                    left: left2 + "px"
                }, 0)
            }
        )
    })
    $(document).mouseup(function () {
        $(document).off("mousemove");
    })
})