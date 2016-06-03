'use strict';
// function async(){
//     return new Promise(function(resolve, reject){
//         reject('error');
//        setTimeout(function(){
//            resolve('async run');
//        }, 100);
//     });
// }
//
// async().then(function(val){
//     console.log('then', val);
// }, function(err){
//     console.log('err', err);
// }).catch(function(err){
//    console.log('catch', err);
// });

// Promise.resolve(42).then(function(res){console.log(res);});

function one(num){
    return num * 2;
}
function two(num){
    return num + 1;
}
function error(err){
    console.log(err);
}
function final(num){
    console.log('final', num);
}
let promise = Promise.resolve(1);
promise
    .then(one)
    .then(two)
    .catch(error)
    .then(final);