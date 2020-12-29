var arr = [4, 2, 100, 4444, 535, 221]
//冒泡
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}


//快排
function quickSort(arr) {
    if (arr.length == 0)
        return [];
    var left = []
    var right = [];
    let pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

//插入排序 从下标1开始每增1项排序一次，越往后遍历次数越多
function insertSort(data) {
    var len = data.length;
    for (var i = 0; i < len; i++) {
        var key = data[i];
        var j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[i];
            j--;
        }
        data[j + 1] = key;
    }
    return data;
}

//归并排序
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2)
        return arr
    let middle = len / 2;
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}

//选择排序
function chooseSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        let min = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}

//希尔排序
function shellSort(arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
}

