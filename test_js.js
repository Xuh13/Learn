function changeImage()
{
    let element;
    try {
        element = document.getElementById('light')
        if (element.src.match("buliang")) {
            element.src = "./images/liang.gif";
        } else {
            element.src = "./images/buliang.gif";
        }
    } catch (err) {
        let txt = "本页有一个错误。\n\n";
        txt += "错误描述：" + err.message + "\n\n";
        txt += "点击确定继续。\n\n";
        alert(txt);
    }
}//灯泡亮不亮