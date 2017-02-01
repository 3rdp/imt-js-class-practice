// запускать это всё дело можно supervisor server
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res
		.type('text/html')
		.send('<h1>Main page</h1>');
})

app.get('/about', function(req, res) {
	res
		// .type('text/html') // так тоже работает вроде
		.send('<h1>About</h1>');
})

app.get('/profile', function(req, res) {
	res
		.type('text/html')
		.send('<h1>Profile</h1>');
})

app.get('/game', function(req, res) {
	res
		.type('text/html')
		.send('<h1>Game</h1>');
})

// 404
app.use(function(req, res) {
	res
		.type('text/html')
		.status(404)
		.send('<h1>Not Found</h1>');
})

// 505
app.use(function(err, req, res, next) {
	res.type('text/html');
	res.status(500);
	res.send('<h1>500 - Server error</h1>');
})

app.listen(3000, function() {
	console.log('listening on localhost:3000')
})