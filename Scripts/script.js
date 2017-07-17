//Implemtation of the require function
//Allows for the seperation of javascript files, 
//while still being able to use methods defined 
//in other javascript files //
var methods = {};

method.message = function() {
	console.log("Hello there");
}

method.favorite = function() {
	console.log("Node is my favorite!");
}

method.node = function() {
	console.log("I Love Node!");
}

//Exports certain types of data to controller1.js 
//file. 

exports.data = methods; 