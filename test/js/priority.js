var a = ()=>{console.log('a'); return false},
    b = ()=>{console.log('b'); return true},
    c = ()=>{console.log('c'); return false};

console.log(a() || b() && c());

console.log( 0 && 2 ? 3 : 4 );