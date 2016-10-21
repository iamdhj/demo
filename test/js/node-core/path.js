var path = require('path');

console.log(path.resolve(process.cwd()));
console.log(path.resolve(process.cwd(), 'src/less/**'));

