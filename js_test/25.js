function aaa(x){
    var a=1,b=1;
    var c=2,d;
    for(var i=3;i<=x;i++){
        d=c;
        c=a+b;
        a=b;
        b=d;
    }
    return c;
}

var arr=new Array(40);
arr[0]=1;
arr[1]=1;
for(var i=2;i<40;i++){
    arr[i]=aaa(i);
}
var num=0;
for(var i=39;i>=0;i--){
    document.write(arr[i]+"&nbsp");
    num++;
    if(num==6){
        num=0;
        document.write("</br>");
    }
}