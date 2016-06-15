function* genFn() {
    var x = yield 2;
    yield x;
    return "done";
}

var gen = genFn();
console.log(gen.next());  // {value: 2, done: false}
console.log(gen.next(1)); // {value: 1, done: false}
console.log(gen.next());  // {value: "done", done: true}

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
