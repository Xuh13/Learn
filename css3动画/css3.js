$(document).ready(function () {
    $(".img0").mouseenter(function () {
        for (var i = 0; i < $(".img0").length; i++) {
            $(".img0").eq(i).css({
                "z-index": "0"
            })
        }
        console.log($(this).css("transform"));
        $(this).css({
            "z-index": "1",
            "width": "350px",
            "height": "350px"
        },1000);
    })
    $(".img0").mouseleave(function () {
        for (var i = 0; i < $(".img0").length; i++) {
            $(".img0").eq(i).css({
                "z-index": "1",
                "width": "200px",
                "height": "200px"
            },1000)
        }
    })
})