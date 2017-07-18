//http is a module within node 
var server = require('http');

server.createServer(engine).listen(1337);

function engine(request, response) {

	response.writeHead(200, 'Content-Type: text/plain');
	response.end('Oh man, we out here!');

}


