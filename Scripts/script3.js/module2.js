/*
var moduleZ = require('./mainModule');
moduleZ.currentUrl = 'http://google.com';

console.log('Current Url ' + moduleZ.currentUrl);
*/

var mod = require('./mainModule');

var name = new mod();
name.name('Something', 'Something');
name.consoleLog();