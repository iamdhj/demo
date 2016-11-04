//object
var objStr = Object.prototype.toString;
console.log(objStr === ({}).toString, objStr === new Object().toString);
//function
var funcStr = Function.toString;
console.log(funcStr === Object.toString, funcStr === Number.toString, funcStr === Boolean.toString, funcStr === String.toString);
//Primitive
var num = 1, bool = true, str = 'test';
console.log(
    num.toString === new Number(1).toString,
    bool.toString === new Boolean(0).toString,
    str.toString === new String(0).toString
);


function test(){var name = 123;}

console.log(funcStr.call(test), objStr.call(test));

// String.prototype.returnMe = function(){return this;};
// var a = 'test', b = a.returnMe();
// console.log(a, typeof a, b, typeof b);


// Number.prototype.toString = function(){return typeof this;};
// console.log((123).toString());