var http = require('http');

http.createServer(function(req, res){

  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
  switch(path) {
      case'':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Homepage');
            break;
      case '/about':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('/About');
            break;
      default: 
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
            break;
  }
}).listen(3000);

console.log('server is fucking running on port: 3000; press ctrl + c to terminate');




var express = require('express');

var app = express();

app.set(port, process.env.PORT  || 3000);

//custom 404 page (error page not found)
app.use( function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page Not found');
})

//custom 500 page (Internal server error)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type(500);
    res.send('500 - internal server error');
})

app.listen(app.get(port), function(){
    console.log('Express started on http://localhost' + 
    app.get('port') + 'press ctrl - c to terminate');
});




















































