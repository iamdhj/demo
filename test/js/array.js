'use strict';

function func(x, y, z){
    //like array transition to array
    let args = [].slice.call( arguments, 0 );
    let args2 = Array.from(arguments);
    console.log(args, args2, arguments);
}
func(1,2,3);