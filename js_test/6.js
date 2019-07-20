var ans=0;
var num=1;
for(var i=1;i<11;i++){
    for(var j=1;j<i+1;j++){
        num*=j;
    }
    ans+=num;
    num=1;
}
console.log(ans);