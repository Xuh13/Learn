// ... => let const Global
//es10加入BigInt 

//let声明的变量仅在块级作用域中有效 与var相比 let无法变量提升(var在声明前调用为undefined,let在声明前调用则会报错)
while(1){
    let i = 10;
    break;
}
console.log(i)
//i is not defined 块级作用域中有效

console.log(a)
let a = 0;
// Cannot access 'a' before initialization  let无法变量提升
console.log(b)
var b = 0;
//undefined  var可以变量提升

//let和const会导致暂时性死区,即在块级作用域中该变量与外界无关。暂时性死区中let与const无变量提升
var test = "aaa";
if(1){
    console.log(test)
    let test = "bbb"
}

//const声明只读常量,必须赋初值,不能修改,且也只在块级作用域中有效

//let与const均不能重复声明
var message = "Hello!";
let age = 25;
let message = "Goodbye!";
const age = 30;
//Identifier 'message' has already been declared  不能重复声明

//交换变量值
[a,b] = [b,a];

//=>箭头函数
let func = res => res;
let func = function(res){
    return res;
};
//=>区别
//1.箭头函数没有this,箭头函数指向的是定义时所在的this
//2.没有arguments对象(没搞懂呢)如果要用 可以使用rest参数代替
//3.不能用new调用(因为没自己的this),所以不能作为构造函数

//...拓展运算符
let s = [];
s.push([1,2,3])
console.log(s)
s.push(...[3,4,5])
console.log(s);
// [ [ 1, 2, 3 ] ]
// [ [ 1, 2, 3 ], 3, 4, 5 ]
//将数组铺开


//深拷贝
let obj = {
    name:'xuhang'
}
let obj2 = JSON.parse(JSON.stringify(obj))
let obj3 = Object.assign({},obj)//利用对象合并的返回值完成深拷贝
let obj4 = {...obj}
console.log(obj.name)



