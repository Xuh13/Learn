Function.prototype.myApply = function (context, args) {
    var context = new Object(context) || window;
    context.fn = this;
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
test.fn.myApply(a,[1,2,3])
