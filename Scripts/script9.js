//Testing express by creating server 
//on local host. 
var express = require('express');
var app = express();

//Create url, using the helloOutThere, to establish 
//connection with the localhost server.
//Send Response to confirm connection secured. 

app.get('/helloOutThere', function(requested, response) {
	response.send("Hello, from the local machine");
});

app.listen(1337, function() {
	console.log('Listening at port 1337.');
});