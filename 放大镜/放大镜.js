$(document).ready(function () {
    $(".img").mouseover(function (e) {
        var top1 = e.pageY - 100;
        var left1 = e.pageX - 100;
        $(".opc").css({
            "top": top1,
            "left": left1,
            "display": "block"
        })
        var top2 = 200 - 2 * e.pageY;
        var left2 = 200 - 2 * e.pageX;
        if (e.pageY <= 100) {
            top2 = 0;
        } else if (e.pageY >= 300) {
            top2 = -400;
        }
        if (e.pageX <= 100) {
            left2 = 0;
        } else if (e.pageX >= 300) {
            left2 = -400;
        }
        $(".img2").css({
            "top": top2,
            "left": left2
        })
    })
    $(".img").mousemove(function (e) {
        var top1 = e.pageY - 100;
        var left1 = e.pageX - 100;
        var top2 = 200 - 2 * e.pageY;
        var left2 = 200 - 2 * e.pageX;
        if (e.pageY <= 100) {
            top1 = 0;
            top2 = 0;
        } else if (e.pageY >= 300) {
            top1 = 200;
            top2 = -400;
        }
        if (e.pageX <= 100) {
            left1 = 0;
            left2 = 0;
        } else if (e.pageX >= 300) {
            left1 = 200;
            left2 = -400;
        }
        $(".opc").css({
            "top": top1,
            "left": left1,
            "display": "block"
        })
        $(".img2").css({
            "top": top2,
            "left": left2
        })
    })
    $(".img").mouseleave(function () {
        $(".opc").css({
            "top": 0,
            "left": 0,
            "display": "none"
        })
    })
})