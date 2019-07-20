function Merge(s1,s2){
    var ans="";
    for(var i=0;;i++){
        if(i==s1.length){
            ans+=s2.slice(s1.length);
            break;
        }
        else if(i==s2.length){
            ans+=s1.slice(s2.length);
            break;
        }
        ans+=s1[i];
        ans+=s2[i];
        
    }
    console.log(ans);
}
Merge("123","abcef");