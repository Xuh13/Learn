
##this

```
    //1. 定时器中this -> window
        
    setInterval(function(){
        this
    },10)
    

    //2. this -> oDiv 对当前对象的引用
    
    oDiv.onclick = function(){
        this
    }
    

    //3. 函数中  this指向window 
    function a(){
        console.log(this);
    }
    a();

    //4. this -> obj
    var obj = {
        name:'zs',
        age:20,
        say:function(){
            console.log(this.name +"hah")
        }
    }
    obj.say();

    //5. this-> new出来的实例化对象 
    function Person(){
        this.name = "zs";
    }
    var p1 = new Person();



    function fn(x,y){
        console.log(this);
    }

    var obj = {
        name:'zs'
    }

    // fn(1,2);
    // call 用来改变this指向 第一个参数 this指向，后边依次是参数
    // fn.call(obj,1,2);
    // fn.apply(obj,[1,2]);
    // bind 只改变this指向  需要手动调用
    // fn.bind(obj,1,2)();
    //bind 的使用
    // var aLi = document.getElementsByTagName('li');
    // for(var i=0; i<aLi.length; i++){
    //     aLi[i].onclick = function(){
    //         var that = this;
    //         setTimeout(function(){
    //             console.log(that.innerHTML);
    //         },1000)
    //     }
    // }
```
