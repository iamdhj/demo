/*
var Func = function(){};
var obj = new Func();

console.log(Func.toString === Function.prototype.toString, obj.toString === Object.prototype.toString);

console.log(typeof obj, obj.toString === Object.prototype.toString, Object.prototype.toString.call({}));

console.log(typeof Object, Object.toString === Function.prototype.toString, Function.prototype.toString.call(Func));

console.log(Object instanceof Function);
*/

var a = {name: 'mr_a'}, b = {name: 'mr_b'};

function check(args, args1){
    console.log(this.name, args, args1);
}
check(1);
check.bind(a)(1);
check.bind(a, null)(1);
check.bind(b, 2)(1);