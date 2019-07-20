var num=0;
function sushu(x){
    if(x%2==0){
        return false;
    }
    else{
        for(var i=3;i<=Math.sqrt(x);i+=2){
            if(x%i==0){
                return false;
            }
        }
    }
    return true;
}
for(var i=1;i<1000;i++){
    if(sushu(i)){
        document.write(i+"&nbsp");
        num++;
    }
    if(num==6){
        document.write("</br>");
        num=0;
    }
}