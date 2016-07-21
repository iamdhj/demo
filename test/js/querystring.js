var q = require('qs'),
    qs = require('querystring');

//正常情况
var string = qs.stringify({a:1, b:2});
console.log(string, qs.parse('a=1&b=2'));

string = qs.stringify({a:1,b:[1,2]});
console.log(string, qs.parse(string));

//不能解析
string = qs.stringify({list: [1, [2,3], [4,5,6] ]});
console.log(string, qs.parse(string));

string = qs.stringify({list: [{a:1,b:2}, {a:3,b:4}]});
console.log(string, qs.parse(string));

//qs模块
string = q.stringify({list: [1, [2,3], [4,5,6] ]});
console.log(string, q.parse(string));
