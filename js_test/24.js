function aaa(arr){
    var ans=0;
    for(var i=0;i<arr.length;i++){
        ans+=arr[i];
    }
    document.write(ans+"&nbsp");
    document.write(ans/arr.length+"&nbsp");
    for(var i=0;i<arr.length;i++){
        if(arr[i]<60){
            document.write(arr[i]+"&nbsp");
        }
    }
}
var arr=[90,40,20,60,77,88,99];
aaa(arr);