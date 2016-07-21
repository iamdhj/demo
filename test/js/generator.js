function* genFn(x) {
    var y = yield x + 2;
    return y;
}

var gen = genFn(1);
console.log(gen.next());  // {value: 2, done: false}
console.log(gen.next(2)); // {value: 1, done: false}
// console.log(gen.next());  // {value: "done", done: true}

console.log('#################');

function* f() {
    for(var i=0; true; i++) {
        var reset = yield i;
        if(reset) { i = -1; }
    }
}

var g = f();

console.log(g.next()); // { value: 0, done: false }
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next(true)); // { value: 0, done: false }
