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
    let y = document.getElementsByClassName("ad-box-ad2-list-li")
    x[0].style.display = "none"
    x[1].style.display = "none"
    y[0].style.backgroundColor = "#c3c3c3"
    y[0].style.color = "#000"
    y[1].style.backgroundColor = "#c3c3c3"
    y[1].style.color = "#000"
    x[0].style.display = (x[0].style.display == "block" ? "none" : "block");
    y[0].style.backgroundColor = (y[0].style.backgroundColor == "rgb(30, 197, 55)" ? "rgb(195, 195 ,195)" : "rgb(30, 197, 55)")
    y[0].style.color = (y[0].style.color == "rgb(255, 255, 255)" ? "rgb(0 ,0 ,0)" : "rgb(255, 255, 255)")
}

function enter2() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    let y = document.getElementsByClassName("ad-box-ad2-list-li")
    x[0].style.display = "none"
    x[1].style.display = "none"
    y[0].style.backgroundColor = "#c3c3c3"
    y[0].style.color = "#000"
    y[1].style.backgroundColor = "#c3c3c3"
    y[1].style.color = "#000"
    x[1].style.display = (x[1].style.display == "block" ? "none" : "block")
    y[1].style.backgroundColor = (y[1].style.backgroundColor == "rgb(30, 197, 55)" ? "rgb(195, 195 ,195)" : "rgb(30, 197, 55)")
    y[1].style.color = (y[1].style.color == "rgb(255, 255, 255)" ? "rgb(0 ,0 ,0)" : "rgb(255, 255, 255)")
}

function move1() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[0].style.display = (x[0].style.display == "block" ? "none" : "block")
    let y = document.getElementsByClassName("ad-box-ad2-list-li")
    y[0].style.backgroundColor = (y[0].style.backgroundColor == "rgb(30, 197, 55)" ? "rgb(195, 195 ,195)" : "rgb(30, 197, 55)")
    y[0].style.color = (y[0].style.color == "rgb(255, 255, 255)" ? "rgb(0 ,0 ,0)" : "rgb(255, 255, 255)")
}

function move2() {
    let x = document.getElementsByClassName("ad-box-ad2-list-image")
    x[1].style.display = (x[1].style.display == "block" ? "none" : "block")
    let y = document.getElementsByClassName("ad-box-ad2-list-li")
    y[1].style.backgroundColor = (y[1].style.backgroundColor == "rgb(30, 197, 55)" ? "rgb(195, 195 ,195)" : "rgb(30, 197, 55)")
    y[1].style.color = (y[1].style.color == "rgb(255, 255, 255)" ? "rgb(0 ,0 ,0)" : "rgb(255, 255, 255)")
}