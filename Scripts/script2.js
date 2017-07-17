var methods = {};

var output = "Testing Baby";

methods.updateServer = function() {
	console.log("Important function");
};

methods.addNumber= function(a, b) { 
	return a + b;
}

methods.circleCircumference = function(radius) {
	return 2 + Math.PI * radius;
}

exports.data = methods;
exports.output = output;