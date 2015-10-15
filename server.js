var http = require('http'),
fs = require('fs'),
server = http.createServer().listen(3000);

server.on('request', function(request, response) {
	fs.readFile('index.html',function (err, data){
		response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
		response.write(data);
		response.end();
	});
});