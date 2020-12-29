//基本数据类型:undefined、null、string、number、boolean、symbol(唯一标识符)
//引用类型:Object、Array、RegExp、Date、Function
//特殊的基本包装类型:String、Number、Boolean
//单体内置对象:Global、Math
//区分object和array
[] instanceof Array;
// {} instanceof Object;
var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];

function fn(arr) {
    let arr1 = []
    arr.forEach((val) => {
        if (val instanceof Array) {
            arr1 = arr1.concat(fn(val))
        } else {
            arr1.push(val)
        }
    })
    return arr1
}
var arr2 = fn(arr)
console.log(arr2)
var a = 'hello'
var b = new String('hello')
console.log(typeof(b))

var arr = [1,2,3,4,5]
function chunk(arr,n){
    let arr1 = []
    let arr2 = []
    arr.forEach((val) => {
        if(arr2.length<n){
            arr2.push(val)
        }
        if(arr2.length==n){
            arr1.push(arr2);
            arr2 = []
        }
    })
    if(arr2.length!=0){
        arr1.push(arr2)
    }
    return arr1
}
console.log(chunk([1,2,3,4,5,6],3))