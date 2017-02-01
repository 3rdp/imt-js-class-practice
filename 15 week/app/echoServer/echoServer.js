var server = require('http');

server.createServer(function(request, response) {
	console.log('Server is running')
	// response.end("<b>I am server!!</b>"); // по сути, вот этой строчки достаточно
	


	/**
	 * Вот есть такой роутинг, но:
	 * 1. Как вывести 500 ошибку?
	 * 2. Такой код неудобен, громоздок.
	 *
	 */
	var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
	case '':
		response
			.writeHead(200, {'Content-Type': 'text/html'})
		response
			.end('<h1>Homepage</h1>');
	break;
	case '/profile':
		response
			.writeHead(200, {'Content-Type': 'text/plain'})
		response
			.end('Profile page');
	break;
	default:
		response
			.writeHead(404, {'Content-Type': 'text/plain'})
		response
			.end('Не найдено.');
	}
}).listen(3000) // причем независимо от url будет выводить одно и то же, если без роутинга