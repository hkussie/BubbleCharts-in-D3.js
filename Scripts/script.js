//Implemtation of the require function
//Allows for the seperation of javascript files, 
//while still being able to use methods defined 
//in other javascript files //
var response = require('./methods.js');

//Using console.log won't display the any particular data 
//will return the functions: updateServer, loveNode, and 
//saySomething
//console.log(response);

response.data.checkCheck();
