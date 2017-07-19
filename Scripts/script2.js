//http is a module within node 
var http = require('http');
var server = http.createServer(engine);



server.listen(1337, function() {
	console.log('Server was hit with a request');

});

function engine(request, response) {

	//console.log(response);

	response.writeHead(200, 'Content-Type: text/plain');
	response.end('Oh man, we out here!' + request.url); 

}


