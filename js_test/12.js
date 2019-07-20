var num=0;
for(var i=1;i<1000;i++){
    if(i%3==0&&i%5==0&&i%7==0){
        document.write(i+"&nbsp");
        num++;
    }
    if(num==6){
        document.write("</br>");
        num=0;
    }
}