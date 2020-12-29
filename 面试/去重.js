var array = ['1', '2', 1, '1', '4', '4', '1'];
//set
function unique(array) {
    return Array.from(new Map(array));
}
//map
function unique2(arr) {
    const map = new Map()
    return arr.filter(item => !map.has(item) && map.set(item, 1))
}
//普通两层去重

function unique(array) {
    var res = [];
    for (var i = 0, arraylen = array.length; i < array.length; i++) {
        for (var j = 0, reslen = array.length; j < array.length; j++) {
            if (array[i] == res[j])
                break;
        }
        if (j === reslen) {
            res.push(array[i])
        }
    }
    return res;
}
//普通去重,用indexOf
var array = ['1', '2', 1, '1', '4', '4', '1'];
console.log(unique(array))

function unique(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
}



 