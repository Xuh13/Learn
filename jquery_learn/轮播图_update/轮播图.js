$(document).ready(function () {
    $(".btn-box-li").click(function () {
        for (var i = 0; i < $(".btn-box-li").length; i++) {
            $(".btn-box-li").eq(i).removeClass("active");
        }
        $(this).addClass("active");
        var left_num = (-750 * $(this).index()) + "px";
        $("#img-box").animate({
            left: left_num
        });
    })

    $(".arrow-box-li").click(function () {
        var now = $("#img-box").css("left").replace("px","");
        var change =0;
        if ($(this).index() == 0) {
            change =-1;
        }
        else if($(this).index() == 1){
            change =1;
        }
        now/=-750;
        now+=change;
        if(now>4){
            now-=5;
        }
        else if(now<0){
            now+=5;
        }
        $(".btn-box-li").eq(now).click();
    })

    function lunbo(){
        var now = $("#img-box").css("left").replace("px","");
        var change =1;
        now/=-750;
        now+=change;
        if(now>4){
            now-=5;
        }
        else if(now<0){
            now+=5;
        }
        $(".btn-box-li").eq(now).click();
    }

    var timer = setInterval(lunbo,2000);

    $("#container").mouseenter(function(){
        clearInterval(timer);
    })

    $("#container").mouseleave(function(){
        timer = setInterval(lunbo,2000);
    })
})
