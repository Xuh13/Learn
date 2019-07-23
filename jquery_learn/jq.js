$(document).ready(function () {
    $("div.test").click(function () {
        $("div.test").css("background", "red");
    })

    $(".tab-head").click(function () {
        for (var j = 0; j < $(".tab-head").toArray().length; j++) {
            $(".tab-head").eq(j).removeClass("tab-head-click");
            $(".tab-main").eq(j).hide();
        }
        $(".tab-head").eq($(this).index()).addClass("tab-head-click");
        
        $(".tab-main").eq($(this).index()).show();
    })
})