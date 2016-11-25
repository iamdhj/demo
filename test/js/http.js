var http = require('http');
var qs = require('querystring');
var url = require('url');

http.createServer(function(req, res){
	console.log('in server');

    if(req.method == 'OPTIONS'){
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.end();
        return;
    }

    var content = '';
    
    if(req.method == 'GET'){
        content = url.parse(req.url,true).query;
    }
    req.on('data', function (chunk) {
        content += chunk;
    });

    req.on('end', function () {
        if(typeof(content) == 'string'){
            content = qs.parse(content)
        }
        console.log(content);
        res.writeHead(200, {
            "Content-Type": "text/plain", 
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Method": "POST",
            "Access-Control-Allow-Headers": "Authorization, timeout, x-requested-with"
        });
        res.write(`You've sent: ${JSON.stringify(content)}`);
        res.write(`\nYou've sent: OK!" ${new Date().getTime()}`);
        res.end();
    });
}).listen(8000);
console.log('listen 8000');
