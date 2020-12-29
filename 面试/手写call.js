Function.prototype.myCall = function (context) {
    var context = new Object(context) || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    let res = ''
    res = context.fn(...args)
    return res;
}
var test = {
    name: 'test',
    fn: function (a,b,c) {
        console.log(this.name)
        console.log(a+b+c);
    }
}

var a = {
    name: 'aaaa'
}
test.fn.myCall(a,1,2,3)



//http://xxx.com/yyy?a=1&b=2&c=3  返回 {a:1,b:2,c:3}
var u = 'http://xxx.com/yyy?aaa=你好&bcd=23&c=3'
var x = u.split('?')[1].split('&');
var res = {}
x.forEach((val)=>{
    var y = val.split('=')
    res[y[0]] = y[1];
})
console.log(res)

// 输入aaa{{xxx}}bbb{{yyy}}ccc，{xxx:1,yyy:2}，返回aaa1bbb2ccc
var str = 'aaa{{xxx}}bbb{{yyy}}ccc'
var f = {
    xxx:1,
    yyy:2
}
function test(str,f){
    var a = str.split('{{');
    var res ='';
    a.forEach((val)=>{
        var b = val;
        var c = []
        if(val.indexOf('}')==-1 ){
            c.push(b)
            res+=b;
        }else{
            c = val.split('}}')
            if(f[c[0]]){
                res+=f[c[0]]
            }
            res+=c[1]
        }
    })
    return res;
}
console.log(test(str,f))
