//闭包简单案例
function a(){
    let i = 0;
    return function(){
        console.log(i)
    }
}

function a(){
    var r = new Array();
    for(var i = 0;i<10;i++){
        r[i] = (function(j){
            return function(){
                return j;
            }
        }(i))
    }
    return r;
}
const fns = a()
console.log(fns[1]())
console.log(fns[2]())
function a(){
    var n = 0;
    this.inc = function () {
      n++; 
      console.log(n);
    };
  }
  var c = new a();
  c.inc();  //控制台输出1
  c.inc();  //控制台输出2
