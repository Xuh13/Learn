$(document).ready(function () {
    function leaf() {
        this.img=new Image();
    }
    leaf.prototype.name = "aaa";
    leaf.prototype.fall =function () { 
        $(this).img.animate({
            top:"600px"
        },this.speed);
    }
    leaf.prototype.create = function () {
        var oImg=new Image();
        oImg.style.position="absolute";
        var choose = Math.round(Math.random() * 3 + 1);
        oImg.src = "./img/" + choose + ".png";
        var size = Math.round(Math.random() * 50 + 100);
        oImg.width = size;
        var leftsize = Math.round(Math.random() * 1500);
        oImg.style.left = leftsize+"px";
        oImg.style.top = 0+"px";
        this.img=oImg;
        $(".main").append(this.img);
        console.log(a)
    }
    $(document).mousedown(function () {
        for (var i = 0; i < $("img").length; i++) {
            var speed = Math.round(Math.random() * 3000+1000);
            var time = Math.round(Math.random() * 10000);
            setTimeout("",time);
            $("img").eq(i).animate({
                top: "600px"
            }, speed);
        }
    })
    var num = Math.round(Math.random() * 10);
    var a = new Array();
    for (var i = 0; i < num; i++) {
        a[i]=new leaf();
        a[i].create();
    }


})