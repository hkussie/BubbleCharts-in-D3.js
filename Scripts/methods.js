var methods = module.exports = {};

//var methods = {}; Also acceptable when using exports.data

//Alternative way of exporting data using modules in node: 
/*
module.exports = {
	updateServer = function() {
		console.log("Important function");
	}
}
*/
//methods.exports.updateServer also works when using var methods = {};

module.exports.updateServer = function() {
	console.log("Important function");
}

module.exports.checkCheck = function() {
	console.log("Lets check this out");
}

module.exports.data = methods;
//exports.data = methods; is also acceptable 
