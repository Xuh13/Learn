//基本数据类型之间均为深拷贝 两者之间无联系
let a = 111
let b = a;
b++;
console.log(a)
console.log(b)
// 111 112

//引用数据类型之间为浅拷贝 两者指向同一地址
let a = {
    test: 12
}
let b = a;
b.test++;
console.log(a.test)
//13

//当数组拷贝时 也为浅拷贝 但若重新赋值数组 则创建新array空间
let a = [1, 2, 3, 4, 5]
let b = a
b.pop()
console.log(a)
//[1,2,3,4]
b = [2, 3, 4, 5]
//这一行就如同 b = new Array(2,3,4,5) 创建了新的array对象空间
console.log(a)
console.log(b)
//[1,2,3,4]  [2,3,4,5]


//浅拷贝方法(Object.assign)
var obj1 = {
    a: 1,
    b: 2
};
var obj2 = Object.assign({}, obj1);
obj2.a = obj2.a * 2;
console.log(obj2)
//深拷贝(JSON.parse(JSON.stringfy()))
obj2 = JSON.parse(JSON.stringfy(obj1));


var isValid = function (s) {
    var len = s.length / 2;
    for (var i = 0; i < len; i++) {
        s = s.replace("[]", '');
        s = s.replace("()", '');
        s = s.replace("{}", '');
    }
    return s.length > 0 ? false : true;
};
let str = "[{}]"
str = str.replace("[]", "");
console.log(str)
console.log(isValid("{(])}"))

function is_leagl_brackets(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        var item = string[i];
        if (item === "(" || item === "{" || item === "[") {
            array.push(item);
        } else if (item === ")" || item === "}" || item === "]") {
            if (array.length === 0) {
                return false;
            } else {
                var now = array.pop()
                switch (now){
                    case '(':{
                        if(item!=')')
                            return false
                    }
                    case '[':{
                        if(item!=']')
                            return false
                    }
                    case '{':{
                        if(item!='}')
                            return false
                    }
                }
            }
        } else {
            continue;
        }
    };
    return array.length === 0;
};
console.log(is_leagl_brackets("(12[3{4})"))
const log = console.log
log('start')//同步
new Promise((resolve,reject)=>{
    log('in promise start')
    setTimeout(()=>{
        log('in setTImeout start')
    },0)
    resolve(true)
})
setTimeout(()=>{
    log('in setTImeout end')
})
new Promise((resolve,reject)=>{
    log('in promise end')
})
log('byebye')