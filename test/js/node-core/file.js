var path = require('path'),
    fs = require('fs');

// console.log(path.join(process.cwd(), 'file.js'));

// fs.stat('path.js', (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// });

// fs.readFile('path.js', (err, data) => {
//    if (err) throw err;
//     console.log(data);
// });
// console.log(fs.readFileSync('path.js'));

// fs.stat('../test.js', (err, stats) => {
//     fs.open('../test.js', 'r+', (err, fd) => {
//         var readBuffer = new Buffer(stats.size);
//         fs.read(fd, readBuffer, 0, stats.size, 0, (err, bytesRead, buffer) => {
//             console.log(buffer.toString());
//         });
//         fs.close(fd, () => {console.log('close file');});
//     });
// });

// try{
//     var stats = fs.statSync('path.js');
//     console.log(stats);
// }catch(err){
//     console.log(err);
// }


fs.createReadStream('events.js').pipe(fs.createWriteStream('events2.js'));

