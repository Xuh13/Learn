var add = (function () {
    var num = 0;
    return function () {
        return num += 1;
    }
})();

function change() {
    document.getElementById("add2").innerHTML = add();
}

function aaa() {
    var parent = document.getElementById('aaa');
    var child = document.getElementById('aaa-a');
    parent.removeChild(child);
}