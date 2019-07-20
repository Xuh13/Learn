function aaa(n){
    var a=1;
    var PI=0;
    for(var i=1;i<=n;i++){
        PI+=1/(2*i-1)*a;
        a*=-1;
    }
    console.log(PI*4);
}
aaa(100);
aaa(500);
aaa(1000);
aaa(10000);