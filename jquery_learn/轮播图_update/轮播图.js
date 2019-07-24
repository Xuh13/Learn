$(document).ready(function () {
    $(".btn-box-li").click(function () {
        for (var i = 0; i < $(".btn-box-li").length; i++) {
            $(".btn-box-li").eq(i).removeClass("active");
        }
        $(this).addClass("active");
        var left_num = (-750 * ($(this).index() + 1)) + "px";
        $("#img-box").animate({
            left: left_num
        });
    })

    $(".arrow-box-li").click(function () {
        var now = $("#img-box").css("left").replace("px", "");
        var change = 0;
        if ($(this).index() == 0) {
            change = -1;
        } else if ($(this).index() == 1) {
            change = 1;
        }
        now /= -750;
        now += change - 1;
        if (now == 5) {
            for (var i = 0; i < $(".btn-box-li").length; i++) {
                $(".btn-box-li").eq(i).removeClass("active");
            }
            $(".btn-box-li").eq(0).addClass("active");
            $("#img-box").animate({
                left: -750 * 6 + "px"
            })
            $("#img-box").animate({
                left: -750 + "px"
            }, 0)
        } else if (now < 0) {
            now += 5;
            $(".btn-box-li").eq(now).click();
        } else {
            $(".btn-box-li").eq(now).click();
        }
    })

    function lunbo() {
        var now = $("#img-box").css("left").replace("px", "");
        var change = 1;
        now /= -750;
        now += change - 1;
        if (now == 5) {
            for (var i = 0; i < $(".btn-box-li").length; i++) {
                $(".btn-box-li").eq(i).removeClass("active");
            }
            $(".btn-box-li").eq(0).addClass("active");
            $("#img-box").animate({
                left: -750 * 5 + "px"
            })
            $("#img-box").animate({
                left: -750 + "px"
            }, 0)
        } else if (now==-1) {
            for (var i = 0; i < $(".btn-box-li").length; i++) {
                $(".btn-box-li").eq(i).removeClass("active");
            }
            $(".btn-box-li").eq(4).addClass("active");
            $("#img-box").animate({
                left: "+=750px"
            },10000)
            $("#img-box").animate({
                left: -3750 + "px"
            }, 0)
        } else if (now < 0) {
            now += 5;
            $(".btn-box-li").eq(now).click();
        } else {
            $(".btn-box-li").eq(now).click();
        }
    }

    var timer = setInterval(lunbo, 2000);

    $("#container").mouseenter(function () {
        clearInterval(timer);
    })

    $("#container").mouseleave(function () {
        timer = setInterval(lunbo, 2000);
    })
})