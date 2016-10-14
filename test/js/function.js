/*
var Func = function(){};
var obj = new Func();

console.log(Func.toString === Function.prototype.toString, obj.toString === Object.prototype.toString);

console.log(typeof obj, obj.toString === Object.prototype.toString, Object.prototype.toString.call({}));

console.log(typeof Object, Object.toString === Function.prototype.toString, Function.prototype.toString.call(Func));

console.log(Object instanceof Function);
*/

var a = {name: 'mr a'}, b = {name: 'mr b'};

function check(){
    console.log(this.name);
}
check();
check.bind(a)();
check.bind(b)();