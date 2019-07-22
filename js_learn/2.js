function aaa(name,age,num){
    var o =new Object();

    o.sayname=function(){
        console.log(name);
    };
    return o;
}

var qwe=aaa("name",13,2019);
qwe.sayname();