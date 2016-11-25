var through2 = require('through2'),
    path = require('path'),
    Vinyl = require('vinyl');


var manifestFile = new Vinyl({
    base: __dirname,
    cwd: process.cwd(),
    path: path.join(__dirname, 'manifest.json'),
    contents: new Buffer('hello world!')
});

console.log(manifestFile);