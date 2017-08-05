//Events and eventEmitter 
var events = require('events');
var eventEmitter = new events.eventEmitter();

eventEmitter.on('customEvent', function(arg1, arg2) {
	console.log(arg1 * arg2);
});

setTimeout(function() {
	eventEmitter.emit('customEvent');
}, 2000)
