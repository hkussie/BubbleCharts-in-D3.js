/*
module.exports = {
	currentUrl: 'http://youtube.com'
}
*/

function create_func() {
	var holdName;
	return {
		
		name: function(fName, lName) {
			holdName = fName + ' ' + lName;
		},
		
		consoleLog: function() {
			console.log(holdName);
		}
	}
}

module.exports = create_func;