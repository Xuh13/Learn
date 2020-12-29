Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        return;
    }
    var args = [...arguments].slice(1);
    var bindRes = {}
    var self = this
    bindRes = function(){
        var _this = this instanceof self ? this : context;
        return self.apply(_this,args)
    }
    bindRes.prototype = this.prototype;
    return bindRes
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
let x =test.fn.myBind(a,1,2,3)
x();