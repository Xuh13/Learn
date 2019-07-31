var count = 0;
for (var i = 0; i < 24; i++) {
    var oImg = new Image();
    oImg.onload = function () {
        count++;
        if (count == 48) {
            loadSuccess();
        }
    }
    oImg.src = "./img/" + (i + 1) + ".jpg";
}
for (var i = 0; i < 24; i++) {
    var oImg = new Image();
    oImg.onload = function () {
        count++;
        if (count == 48) {
            loadSuccess();
        }
    }
    oImg.src = "./img/thumbs/" + (i + 1) + ".jpg";
}


var oContainer = document.getElementById("container");
var oLast = document.getElementById("last");
var oNext = document.getElementById("next");
var index = 0;

function loadSuccess() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 6; j++) {
            var oDiv = document.createElement("div");
            oDiv.className = "box";
            oDiv.rowCol = {
                row: i,
                col: j
            }
            oDiv.style.background = 'url(./img/thumbs/' + (index + 1) + '.jpg) 0 0 no-repeat';
            oDiv.mark = index;
            oDiv.innerHTML = "<span></span>";
            oDiv.style.height = "125px";
            oDiv.style.width = "125px";
            oDiv.style.position = "absolute";
            oDiv.onclick = fn;
            oContainer.appendChild(oDiv);
            index++;
        }
    }


    var l_margin = (oContainer.offsetWidth - 125 * 6) / 7;
    var r_margin = (oContainer.offsetHeight - 125 * 4) / 5;

    var aDiv = oContainer.getElementsByTagName('div');
    for (i = 0; i < aDiv.length; i++) {
        aDiv[i].style.transitionDelay = (23 - i) * 100 + "ms";
        aDiv[i].style.left = aDiv[i].rowCol.col * (l_margin + 125) + l_margin + "px";
        aDiv[i].style.top = aDiv[i].rowCol.row * (r_margin + 125) + r_margin + "px";
        aDiv[i].style.WebkitTransform = 'rotate(' + (Math.random() - 0.5) * 40 + 'deg)';
        aDiv[i].style.border = "5px solid #fff";
    }

    var top_b = 126;
    var left_b = 387;
    var mark_now = 0;
    var flag = true;

    function fn() {
        //收起来
        if (flag) {
            mark_now = this.mark+1;
            for(var i = 0; i < aDiv.length; i++){
                aDiv[i].style.transition = "all 0s ease 0s";
                var x = -aDiv[i].rowCol.col * 125;
                var y = -aDiv[i].rowCol.row * 125;
                aDiv[i].style.background = 'url(./img/' + (this.mark + 1) + '.jpg) ' + x + 'px ' + y + 'px no-repeat';
            }
            for (var i = 0; i < aDiv.length; i++) {
                aDiv[i].style.transition = "all 2s ease 0s";
                aDiv[i].style.left = aDiv[i].rowCol.col * (127) + left_b + "px";
                aDiv[i].style.top = aDiv[i].rowCol.row * (127) + top_b + "px";
                aDiv[i].style.WebkitTransform = 'rotate(0deg)';
                aDiv[i].style.border = "1px solid #fff";
            }
            oLast.style.display = "block";
            oNext.style.display = "block";
            flag = false;
        }
        //打开
        else {
            for(i=0;i<aDiv.length;i++){
                aDiv[i].style.transition = "all 0s ease 0s";
                aDiv[i].style.background = 'url(./img/thumbs/' + (i + 1) + '.jpg) 0 0 no-repeat';
            }
            for (i = 0; i < aDiv.length; i++) {
                aDiv[i].style.transitionDelay = (23 - i) * 100 + "ms";
                aDiv[i].style.transition = "all 2s ease 0s";
                aDiv[i].style.left = aDiv[i].rowCol.col * (l_margin + 125) + l_margin + "px";
                aDiv[i].style.top = aDiv[i].rowCol.row * (r_margin + 125) + r_margin + "px";
                aDiv[i].style.WebkitTransform = 'rotate(' + (Math.random() - 0.5) * 40 + 'deg)';
                aDiv[i].style.border = "5px solid #fff";
                
            }
            oLast.style.display = "none";
            oNext.style.display = "none";
            flag = true;
        }
    }

    oLast.onclick = function(){
        if(mark_now==1){
            mark_now=25;
        }
        for(var i = 0; i < aDiv.length; i++){
            aDiv[i].style.transition = "all 0.4s ease 0s";
            aDiv[i].style.transitionDelay = Math.random()*0.4 + "s";
            var x = -aDiv[i].rowCol.col * 125;
            var y = -aDiv[i].rowCol.row * 125;
            aDiv[i].style.background = 'url(./img/' + (mark_now - 1) + '.jpg) ' + x + 'px ' + y + 'px no-repeat';
        }
        mark_now -=1;
    }
    oNext.onclick = function(){
        if(mark_now==24){
            mark_now=0;
        }
        for(var i = 0; i < aDiv.length; i++){
            aDiv[i].style.transition = "all 0.4s ease 0s";
            aDiv[i].style.transitionDelay = Math.random()*0.4 + "s";
            var x = -aDiv[i].rowCol.col * 125;
            var y = -aDiv[i].rowCol.row * 125;
            aDiv[i].style.background = 'url(./img/' + (mark_now + 1) + '.jpg) ' + x + 'px ' + y + 'px no-repeat';
        }
        mark_now +=1;
    }
}

// var top_b = 126;
// var left_b = 387;
// var aDiv = document.getElementsByTagName("div");
// index = 1;
// for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 6; j++) {
//         aDiv[index].style.top = top_b + "px";
//         aDiv[index].style.left = left_b + "px";
//         left_b += 127;
//         index++;
//     }
//     left_b = 387;
//     top_b += 127;
// }