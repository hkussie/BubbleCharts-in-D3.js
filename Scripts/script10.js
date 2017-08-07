//Serving HTML Pages 
//Creating 

var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
	//Send the HTTP header
	//HTTP Status: 200 : OK 
	//Content Type: html

	res.writeHead(200, {'Content-Type': 'text/html'});
	var readStream = fs.createReadStream('trial.html', 'utf8');
	readStream.pipe(res);
}).listen(3000);

console.log("Server is running on http://127.0.0.1:3000/")