'use strict';
var util = require('util');

// function func(x, y, z){
//     let args = [].slice.call( arguments, 0 ); //like array transition to array
//     let args2 = Array.from(arguments);
//     console.log(args, args2, arguments);
// }
// func(1,2,3);

// console.log(util.isArray([]), Array.isArray([]));

var x = [1,2,3], y = Object.create(x), z = Object.getPrototypeOf(y);
console.log(Array.isArray(y), Array.isArray(z), util.isArray(y), util.isArray(z));
x.forEach((a,b,c) =>{ console.log(a,b,c); });