//creating a server that uses documents and saved files to run 

var http = require('http');
    fs = require('fs');

    function serverStaticFile(res, path, contentType, responseCode){
        if(!responseCode) responseCode = 200;
        fs.readFile(__dirname + path, function(err, data) {
            if(err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 - Internal server Error');
            } else {
                res.writeHead(responseCode, {'Content-Type': contentType});
                res.end(data);
            }
        });
    }

    http.createServer( function(req, res) {
        var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path) {
            case'': 
                serverStaticFile(res, '/public/home.html', 'text/plain');
                break;
            case '/about':
                serverStaticFile(res, '/public/about.html', 'text/plain');
                break;
            case '/img/logo.jpg':
                serverStaticFile(res, '/public/img/logo.jpg', 'img/jpeg');
                break;
            default:
                serverStaticFile(res, '/public/404.html', 'text/plain');
            break;
        }
    }).listen(3000);

console.log('server is runing on port 5000')
