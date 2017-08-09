//Using GET and POST methods in express
var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();
app.use('/cssFiles', express.static(__dirname + '/Styles'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(sessions({
	secret: 'afsdafdswegr@#%$^%$#asd', 
	resave: false, 
	saveUninitialized: false 
}))

app.get('/login', function(req, resp) {
	session = req.session;
	if(session.uniqueID) {
		resp.redirect('/trial.html');
	}
})

app.get('/logout', function(req, resp) {
	req.session.destroy();
	resp.redirect('/login');
});

app.get('/redirects', function(req, resp) {
	session = req.ression;
	if (session.uniqueID == 'admin') {
		console.log(session.uniqueID);
		resp.redirect('/admin');
	}
	else {
		resp.end('Who do you think you are? <a href="/logout">Kill Session</a>');
	}
});

app.listen(1337, function() {
	console.log('Listening at port 1337');
});


