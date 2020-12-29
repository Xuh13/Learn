function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}
function deepCopy(source, hash = new WeakMap()) {
    // 判断如果参数不是一个对象，返回改参数
    if (!isObject(source)) return source;
    if (hash.has(source)) return hash.get(source); // 如何拷贝过该对象，则直接返回该对象
    // 判断参数是对象还是数组来初始化返回值
    let res = Array.isArray(source) ? [] : {};
    hash.set(source, res); // 哈希表添加新对象
    // 循环参数对象的key
    for (let key in source) {
        // 如果该key属于参数对象本身
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            // 如果该key的value值是对象，递归调用深拷贝方法进行拷贝
            if (isObject(source[key])) {
                res[key] = deepCopy(source[key], hash);
            } else {
                // 如果该key的value值不是对象，则把参数对象key的value值赋给返回值的key
                res[key] = source[key];
            }
        }
    }
    // 返回返回值
    return res;
};
let obj1 = {
    name: 'obj.name',
    un: undefined,
    nu: null,
    sy: Symbol(123),
    say: function () {
        console.log(this.name);
    },
    reg: /\d{6}/g,
    date: new Date(),
    child: {
        name: 'child.name'
    }
}
let obj2 = deepCopy(obj1);
console.log(obj1);
console.log(obj2);
console.log(obj2.sy === obj1.sy)
obj2.name = 'obj2.name';
obj2.say();