"use strict";

let key = Symbol('key');

//Ψһ������
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


//������ȡֵ
//Object.getOwnPropertySymbols(Symbol)��Reflect.ownKeys(all) --harmony_reflect
let symbol = Object.getOwnPropertySymbols(obj1)[0];
//console.log(obj1, obj1[symbol], Reflect && Reflect.ownKeys && Reflect.ownKeys(obj1));

//����ʹ��
let key1 = Symbol.for('key');
let key2 = Symbol.for('key');
console.log(key1 == key2, Symbol.keyFor(key1));

//����ֵ
console.log(Symbol);