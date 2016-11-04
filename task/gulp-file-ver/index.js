var fs = require('fs'),
    path = require('path'),
    util = require('util'),
    through2 = require('through2'),
    moment = require('moment'),
    Vinyl = require('vinyl'),
    caches = {};


function recordHandle(stats){
    return moment(stats.mtime).format('YYMMDDHHmmss');
}

function revisionHandle(manifest, base, contents){
    return contents.replace(/url\(([\w\./]+)(\?=[^)]+)?\)/g, function(match, url){
        var path = path.join(base, url).replace(/\\/g, '/');

        if(manifest[path]){
            return 'url(' + url + '?=' + manifest[path] + ')';
        }else{
            return 'url(' + url + ')';
        }
    });
}

module.exports = {
    record: function () {
        return through2.obj(function (file, enc, cb) {
            try{
                var stats = fs.statSync(file.path),
                    path = file.path.replace(/\\/g, '/');
                
                caches[path] = recordHandle(stats);
            }catch(err){
                console.log(err);
            }
            cb();
        }, function(cb){
            var manifestFile = new Vinyl({
                base: __dirname,
                cwd: process.cwd(),
                path: path.join(__dirname, 'manifest.json'),
                contents: new Buffer(JSON.stringify(caches, null, 2))
            });

            this.push(manifestFile);
            cb();
        });
    },

    revision: function (dest, cfg){
        return through2.obj(function(file, enc, cb){
            var base,   //main base
                manifest = JSON.parse(file.contents),
                main = util.isArray(dest) ? dest : [dest],
                cfg = cfg || {},
                func = cfg['revisionHandle'] || revisionHandle,
                handle = func.bind(null, manifest);

            try{
                main.forEach(function(src){
                    base = cfg['base'] || path.resolve(path.dirname(src));
                    fs.writeFileSync(src, handle(base, fs.readFileSync(src).toString()));
                });
            }catch(err){
                throw err;
            }

            cb();
        });
    }
};