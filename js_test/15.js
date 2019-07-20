function aaa(x){
    for(var i=0;i<x;i++){
        for(var q=x-1-i;q>0;q--){
            document.write("&nbsp");
        }
        for(var j=i+1;j>0;j--){
            document.write("* ");
        }
        document.write("</br>");
    }
}
aaa(6);