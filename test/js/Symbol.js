"use strict";

let key = Symbol('key');

//唯一属性名
//one
let obj1 = {};
obj1['key'] = 'value';
obj1[key] = 'Symbol1';
//two
let obj2 = {
    [key]: 'Symbol2'
};
//three
let obj3 = {};
Object.defineProperty(obj3, key, {value: 'Symbol3'});
console.log(obj1[key], obj2[key], obj3[key]);


//属性名取值
//Object.getOwnPropertySymbols(Symbol)、Reflect.ownKeys(all) --harmony_reflect
let symbol = Object.getOwnPropertySymbols(obj1)[0];
//console.log(obj1, obj1[symbol], Reflect && Reflect.ownKeys && Reflect.ownKeys(obj1));

//重新使用
let key1 = Symbol.for('key');
let key2 = Symbol.for('key');
console.log(key1 == key2, Symbol.keyFor(key1));

//内置值
console.log(Symbol);