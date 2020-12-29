//防抖:非立即执行
function debounce(func, wait) {
    let timeout;
    return function(){
        let that = this;
        let arg = arguments;
        if(timeout)
            clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(that,arg)
        },wait)
    }
}
//防抖:立即执行
function debounce(func, wait) {
    let timeout;
    return function(){
        let that = this;
        let arg = arguments;
        let callNow = !timeout
        if(timeout)
            clearTimeout(timeout)
        if(callNow)
            func.apply(that,arg)
        timeout = setTimeout(()=>{
            timeout = null;
        },wait)
    }
}

//节流:时间戳
function throttle(func,wait){
    let previous = 0;
    return function(){
        let that = this;
        let arg = arguments;
        let now = Date.now();
        if(now - previous > wait){
            func.apply(that,arg);
            previous = now
        }
    }
}
//节流:定时器
function throttle(func,wait){
    let timeout;
    return function(){
        let that = this;
        let arg = arguments;
        if(!timeout){
            setTimeout(()=>{
                func.apply(that,arg)
                timeout = null
            },wait)
        }
    }
}