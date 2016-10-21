var fs = require('fs'),
    path = require('path'),
    through2 = require('through2'),
    moment = require('moment'),
    Vinyl = require('vinyl'),
    caches = {};

module.exports = {
    revision: function () {
        return through2.obj(function (file, enc, cb) {
            try{
                var stats = fs.statSync(file.path),
                    base = path.join(process.cwd(), '/'),
                    relative = file.path.replace(base, '').replace(/\\/g, '/');
                
                caches[relative] = moment(stats.mtime).format('YYMMDDHHmmss');
            }catch(err){
                console.log(err);
            }
            cb();
        }, function(cb){
            var manifestFile = new Vinyl({
                base: __dirname,
                cwd: process.cwd(),
                path: path.join(__dirname, 'test.json'),
                contents: new Buffer(JSON.stringify(caches, null, 2))
            });
            this.push(manifestFile);
            cb();
        });
    },
    write: function (dest, base){
        return through2.obj(function(file, enc, cb){
            var manifest = JSON.parse(file.contents), relative, contents;
            fs.readFile(dest, function(err, file){
                contents = file.toString();
                contents = contents.replace(/url\(([^)]+)(\?=[^)]+)?\)/g, function(match, url){
                    relative = path.join(base, url).replace(/\\/g, '/');
                    if(manifest[relative]){
                        return 'url(' + url + '?=' + manifest[relative] + ')';
                    }else{
                        return 'url(' + url + ')';
                    }
                });

                fs.writeFile(dest, contents, function(err){if(err)throw err;});
            });
            cb();
        }, function(cb){
            cb();
        });
    }
};