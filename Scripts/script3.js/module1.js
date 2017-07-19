/*
var moduleZ = require('./mainModule');
console.log('Current Url ' + moduleZ.currentUrl); 
*/

var mod = require('./mainModule');

var name = new mod();
name.name('Harrison', 'Kussie');
name.consoleLog();
