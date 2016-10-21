var path = require('path'),
    fs = require('fs');

// console.log(path.join(process.cwd(), 'file.js'));

// fs.readFile('path.js', (err, data) => {
//    if (err) throw err;
//     console.log(data);
// });

// fs.stat('path.js', (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// });

fs.open('../test.js', 'r+', (err, fd) => {
   var contents = fs.read(fd, (err, bytesRead, buffer) => {
       console.log(buffer);
   });
});

// try{
//     var stats = fs.statSync('paths.js');
//     console.log(stats);
// }catch(err){
//     console.log(err);
// }

