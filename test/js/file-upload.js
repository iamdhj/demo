var http = require('http'),
    formidable = require('formidable'),
    util = require('util');

http.createServer(function(req, res){
    // parse a file upload
    if(req.method == 'OPTIONS'){
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "POST",
            "Access-Control-Allow-Headers": "Authorization, timeout, x-requested-with"
        });
        res.end();
        return;
    }

    if (req.url == '/upload'){
        var form = new formidable.IncomingForm();
        form.uploadDir = '.';
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {
                "Content-Type": "text/plain",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "POST",
                "Access-Control-Allow-Headers": "Authorization, timeout, x-requested-with"
            });
            res.write('{}');
            res.end();
            // res.end(util.inspect({fields: fields, files: files}));
        });
        return
    }

    // show a file upload form
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end(
    //     '<form action="/upload" enctype="multipart/form-data" method="post">'+
    //     '<input type="text" name="title"><br><br>'+
    //     '<input type="file" name="upload" multiple="multiple"><br><br>'+
    //     '<input type="submit" value="Upload">'+
    //     '</form>'
    // );
}).listen(8000);
console.log('listen 8000');