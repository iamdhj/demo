"use strict";

function print(){}

var a = {f: print}, b = function(){
    this.f = print
}, c = new b();

console.log(a.f == c.f);

var d = 4;
while( d ){
    if(--d)
        console.log(d);
    else
        break;
}

if(d=996)
    console.log('print' + d);