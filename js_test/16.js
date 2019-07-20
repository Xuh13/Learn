function aaa(x){
    var a=1,b=1;
    var c=2,d;
    for(var i=3;i<=x;i++){
        d=c;
        c=a+b;
        a=b;
        b=d;
    }
    console.log(c);
}
aaa(5);