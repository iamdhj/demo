var path = require('path'),
    through2 = require('through2'),
    accord = require('accord'),
    less = accord.load('less'),
    cleanCss = require('clean-css'),
    Minimize = require('minimize'),
    minimize = new Minimize(),
    uglifyJs = require('uglify-js'),
    Vinyl = require('vinyl'),
    caches = {};

function parseCache(name, files){
    var temp, contents = '', fileName = name.replace(/.\w+$/, '').replace(/-([a-z])/g, function(a, b){ return b.toUpperCase(); });

    if(files['css']){
        temp = files['css'].replace(/\"/g, '\\"');
        contents = '<style>' + temp + '</style>';
    }
    if(files['html']){
        contents += files['html'].replace(/\"/g, '\\"');
    }

    if(contents){
        contents = 'void 0===window.pageTemplate&&(window.pageTemplate={}),window.pageTemplate.' + fileName + '="' + contents + '";';
    }
    contents += files['js'] || '';
    return new Buffer(contents);
}

module.exports = function(){
    return through2.obj(function(file, enc, cb){

        var extname = path.extname(file.path),
            name = path.basename(file.path, extname),
            contents = file.contents.toString();

        //init cache
        caches[name] = caches[name] || {};

        if(extname == '.less'){
            less.render(contents, {}).then(function(data) {
                caches[name]['css'] = new cleanCss().minify(data.result).styles;
                cb();
            });
        }else if(extname == '.html'){
            caches[name]['html'] = minimize.parse(contents);
            cb();
        }else if(extname == '.js'){
            caches[name]['js'] = uglifyJs.minify(contents, {fromString: true}).code;
            cb();
        }

    }, function(cb){
        var file;
        for(var name in caches){
            if(!caches.hasOwnProperty(name)){continue;}
            file = new Vinyl({
                base: __dirname,
                cwd: process.cwd(),
                path: path.join(__dirname, name + '.js'),
                contents: parseCache(name, caches[name])
            });

            this.push(file);
        }
        cb();
    });
};