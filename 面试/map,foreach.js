//map和foreach都可完成对数组的遍历,参数相同,item index arr
//但map有返回值,返回每次循环调用函数的返回值的集合数组
//两者循环过程中均不能停止,除非程序报错

let arr = [1,2,3,4,5,6,7]
arr.forEach((item,index,arr)=>{
    if(arr[index] == item)
        console.log('['+index+']:'+item)
})
let m = arr.map((item,index,arr)=>{
    return ++item;
})
console.log(m)