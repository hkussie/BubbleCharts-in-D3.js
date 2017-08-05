var fs = require('fs');

console.log('Executed Before File Reading.');

// Writing files using synchronous functions:
/*
var data = fs.writeFile('./Files/File', 'Hello There, whats going on?', 'utf8', function(error) {
	if(error) throw error;
	console.log('File Written');
});
*/

// Writing files using Asynchronous methods: 

var data = fs.writeFileSync('./Files/File1', 'Oh, we out here baby.', 'utf8');
console.log('File was written');
console.log('Executed After File Reading!');