//解决回调地狱问题,回调地狱由于多层叠加,代码阅读性差,在层数过多时,this的指向也会出现问题,所以使用promise进行解决

//手写的axios
function ax(){
    return new Promise((resolve,reject)=>{
        let num = Math.random();
        if(num>0.5){
            setTimeout( resolve(num+1),100);
        }else{
            setTimeout( reject(),100);
            
        }
    })
}

function b(num){
    return new Promise((resolve)=>{
        setTimeout( resolve(num+1),100);
    })
}

function c(num){
    return new Promise((resolve)=>{
        setTimeout( resolve(num-1),100);
    })
}

//用promise .then方法解决 每个.then都是上一个.then返回的promise的then 所以参数data可以接到上一次请求接口的数据
//虽然有功效,但当请求过多的时候还是不够明确,所以使用async+await解决
//也可以使用ES6中的Generator

//Promise.then解决
function test(){
    ax().then(data=>{
        return b(data)
    }).then(data=>{
        console.log( c(data))
    })
}

//用async+await解决 等到resolve后才进行继续执行代码
async function test1(){
    let a = await ax();
    let bbb = await b(a);
    let ccc = await c(bbb);
    console.log(ccc)
}
//用ES6中的Generator解决
function *axio(data){
    let aData = yield ax();
}

function *bbb(bData){
    let data = yield b(bData);
}

function *ccc(cData){
    let data = yield c(cData);
}

function test2(){
    var a = axio();
    a.next().value.then(aData=>{
        console.log(aData)
        var b = bbb(aData)
        return b.next().value
    }).then(bData=>{
        console.log(bData)
        var c = ccc(bData)
        return c.next().value
    }).then(cData=>{
        console.log(cData)
    });
}
test2()


//Promise 共有三种状态pendding resolve reject
//resolve调用时进入.then  reject调用时进入.catch
//Promise.all([promise1,promise2...]) 参数是对象数组 等到所有promise状态为resolve时完成 若有一个promise状态为reject 则失败
//Promise.race([promise1,promise2...]) 参数是对象数组 等到有一个promise状态从pendding更改时完成 完成状态与第一个完成的promise状态相同
