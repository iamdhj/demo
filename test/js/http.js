var http = require('http');
var qs = require('querystring');

http.createServer(function(req, res){
	console.log('input');

    var content = "";

    req.on('data', function (chunk) {
        content += chunk;
    });

    req.on('end', function () {
        res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
        res.write("You've sent: " + JSON.stringify(qs.parse(content)));
        res.end();
    });
}).listen(8888);

console.log('listener8888');
