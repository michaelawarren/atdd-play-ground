var http = require('http');

 http.createServer(function (request, response) {
     response.writeHead(200, {'Content-Type': 'application/json'});
     response.end(JSON.stringify({'message': 'Hello World!'}));
     console.log('end hit')
 }).listen(8080);

 console.log('Server started');