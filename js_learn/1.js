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
    var c= location.host;
    console.log(c);
}
// var qqq=[1,2,3,4,5];
// var www=[1,1,1];

// console.log(qqq.splice(1,2,'22','33'));
// console.log(qqq);

function person1(firstname,lastname,age,year){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.year=year;
}
a= new person1('a','b',13,2019);
console.log(a);