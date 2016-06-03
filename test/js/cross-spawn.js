var spawn = require('cross-spawn');

// spawn('npm', ['list', '-g', '-depth', '0'], {stdio: 'inherit'})
//     .on('close', function(code){
//         console.log(code);
//     });
spawn('dir', [], {stdio: 'inherit'}).on('close', function(code){
   console.log(code);
});