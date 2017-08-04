//Filesystem: Reading Files 
//Read, write, and revise files on a server
//How to read files 

var fs = require('fs');

console.log('Executed Before The File Was Read.');

/*
fs.readFile('./script6/File1', 'utf8', function(error, data) {
	console.log(data);
});
*/

//Read files synchronously


var data = fs.readFileSync('./script6/File1', 'utf8');

console.log(data);

console.log('Executed After The File Was Read, Hopefully.');