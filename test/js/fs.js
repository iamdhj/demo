var fs = require('fs');
fs.readdirSync('.')
    .filter(function(path){
        console.log('filter', path);
        return /jsdom/.test(path);
    })
    .forEach(function(path){
        console.log('foreach', path);
    });