function myFunction() {
    const x = document.getElementById("111");
    x.innerHTML="PTX天下第一!!!";
}//改标题
function changeImage()
{
    let element;
    try {
        element = document.getElementById('light')
        if (element.src.match("buliang")) {
            element.src = "../images/liang.gif";
        } else {
            element.src = "../images/buliang.gif";
        }
    } catch (err) {
        let txt = "本页有一个错误。\n\n";
        txt += "错误描述：" + err.message + "\n\n";
        txt += "点击确定继续。\n\n";
        alert(txt);
    }
}//灯泡亮不亮
function Love() {
    try{
        let time=new Date().getHours();
        let x="";
        if(time>21){
           x="很晚了哦,去睡吧,晚安,好梦"
        }
        else if (time<9){
            x="早安,每天都要元气满满哦"
        }
        else{
            x="过得开心点,适当放松哦"
        }
        alert(x)
    }
    catch(err){
        let txt = "本页有一个错误。\n\n";
        txt+="错误描述：" + err.message + "\n\n";
        txt+="点击确定继续。\n\n";
        alert(txt)
    }
}//句尾分号可有可无
function number() {
    let a;
    let x = document.forms["text11"]["text1"].value;
    if (x == null || x === "") {
        alert("需要输入名字。");
        return false;
    }
    a=document.getElementById('number1').value;
    if(a==null||a===""){
        alert("需要输入年龄")
    }
    else if(a<18||a>55){
        alert('年龄不符规定')
    }
};

