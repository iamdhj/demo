var path = require('path');

console.log(path.join('a/b/c', '../d.js'));
console.log(path.join('', 'src/less/**'));
console.log(path.join(process.cwd(), 'src/less/**'));

console.log(path.resolve(process.cwd()));
console.log(path.resolve(process.cwd(), 'src/less/**'));

