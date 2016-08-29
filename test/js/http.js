var http = require('http');
var qs = require('querystring');

http.createServer(function(req, res){
	console.log('input');
    if(req.method == 'OPTIONS'){
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.end();
        return;
    }
    var content = "";
    req.on('data', function (chunk) {
        content += chunk;
    });

    req.on('end', function () {
        res.writeHead(200, {
            "Content-Type": "text/plain", 
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Method": "POST",
            "Access-Control-Allow-Headers": "Authorization, timeout, x-requested-with"
        });
        // res.write("You've sent: " + JSON.stringify(qs.parse(content)));
        res.write("You've sent: OK!" + new Date().getTime());
        res.end();
    });
}).listen(8000);
console.log('listen 8000');
