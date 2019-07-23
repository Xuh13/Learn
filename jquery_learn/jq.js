$(document).ready(function () {
    $("div.test").click(function () {
        $("div.test").css("background", "red");
    })

    for(var i=0;i<3;i++){
        $(".tab-head").eq(i).click(function () {
            for (var j = 0; j < 3; j++) {
                $(".tab-head").eq(j).removeClass("tab-head-click");
                $(".tab-main").eq(j).hide();
            }
            $(".tab-head").eq(i).addClass("tab-head-click");
            $(".tab-main").eq(i).show();
        })
    }
    ///*
    $(".tab-head").eq(0).click(function () {
        for (var j = 0; j < 3; j++) {
            $(".tab-head").eq(j).removeClass("tab-head-click");
            $(".tab-main").eq(j).hide();
        }
        $(".tab-head").eq(0).addClass("tab-head-click");
        $(".tab-main").eq(0).show();
    })

    $(".tab-head").eq(1).click(function () {
        for (var j = 0; j < 3; j++) {
            $(".tab-head").eq(j).removeClass("tab-head-click");
            $(".tab-main").eq(j).hide();
        }
        $(".tab-head").eq(1).addClass("tab-head-click");
        $(".tab-main").eq(1).show();
    })

    $(".tab-head").eq(2).click(function () {
        for (var j = 0; j < 3; j++) {
            $(".tab-head").eq(j).removeClass("tab-head-click");
            $(".tab-main").eq(j).hide();
        }
        $(".tab-head").eq(2).addClass("tab-head-click");
        $(".tab-main").eq(2).show();
    })
    //*/
})