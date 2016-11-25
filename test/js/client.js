var http = require('http'),
    qs = require('querystring'),
    data = qs.stringify({b: 'b+c'}),
    options = {
        port: 8000,
        hostname: '127.0.0.1',
        method: 'GET',
        path: '/?' + qs.stringify({a: 'a+b'}),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    },
    options2 = {
        port: 8000,
        hostname: '127.0.0.1',
        method: 'POST',
        path: '/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }, 
    resFunc = (res) => {
        var content = '';
        res.on('data', (chunk) => {
            content += chunk;
        });
        res.on('end', ()=>{
            console.log(content);
        });
    };

http.get(options, resFunc);

var req = http.request(options2, resFunc);
req.on('error', (e) => {console.log(`error: ${e.message}`)});
req.write(data);
req.end();