setTimeout('move1()', 0)
var abc = setInterval('move1()', 2000)
var bcd = setInterval('move2()', 2000)

function time_continue() {
    abc = setInterval('move1()', 2000)
    bcd = setInterval('move2()', 2000)
}

function time_pause() {
    clearInterval(abc)
    clearInterval(bcd)
}

function enter1() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[0].style.display = (x[0].style.display == "block" ? "none" : "block");
}

function enter2() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[1].style.display = (x[1].style.display == "block" ? "none" : "block");
}

function move1() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[0].style.display = (x[0].style.display == "block" ? "none" : "block");
    let y =document.getElementsByClassName("ad-box-ad2-list-li")
    // y[0].style.background = (y[0].style.background=="#c3c3c3"?"#1ec537":"#c3c3c3")
    y[0].style.color=(y[0].style.color== "#ffffff" ? "#000000" : "#ffffff")
}

function move2() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[1].style.display = (x[1].style.display == "block" ? "none" : "block");
    let y =document.getElementsByClassName("ad-box-ad2-list-li")
    // y[1].style.background = (y[1].style.background=="#c3c3c3"?"#1ec537":"#c3c3c3")
    y[1].style.color=(y[1].style.color=="#ffffff"?"#000000":"#ffffff")
}