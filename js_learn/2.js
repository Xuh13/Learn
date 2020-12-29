function aaa(name,age,num){
    var o =new Object();

    o.sayname=function(){
        console.log(name);
    };
    return o;
}

// var qwe=aaa("name",13,2019);
// qwe.sayname();

function ax(){
    return new Promise((resolve,reject)=>{
        let num = Math.random();
        if(num>0.5){
            console.log(num)
            setTimeout( resolve(num+1),100);
        }else{
            setTimeout( reject(),100);
            
        }
    })
}

function b(num){
    return new Promise((resolve)=>{
        console.log(num)
        setTimeout( resolve(num+1),100);
    })
}

function c(num){
    return new Promise((resolve)=>{
        console.log(num)
        setTimeout( resolve(num-1),100);
    })
}

async function test(){
    let a = await ax();
    let bbb = await b(a);
    let ccc = await c(bbb);
    console.log(ccc)
}

// function test(){
//     ax().then(data=>{
        
//         return b(data)
//     }).then(data=>{
//         console.log( c(data))
//     })
// }

test()

