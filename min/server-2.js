var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("hey i am learning nodejs");
    response.end();
}).listen(3000);

