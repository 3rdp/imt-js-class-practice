window.onload = function() {
	console.info('Script login started');

	var btn = document.getElementById('login-btn');
	console.log(btn);

	btn.onclick = function() {
		console.info('Сработал клик!');
		var login,
			pass,
			appStore = window.localStorage;

		login = document.getElementById('login').value;
		pass = document.getElementById('login-pass').value;

		if (login == appStore.login && pass == appStore.pass) {

			window.sessionStorage.setItem('auth', true);
			window.location.replace('index.html');
			
		} else {

			document.getElementById('login-error').innerHTML = 'Неверные данные!';

			setTimeout(function(){
				document.getElementById('login-error').innerHTML = ''
			}, 3000);
		}

		// var intervalID = setInterval(function(){
		// 	console.info('Сработал таймер!')
		// }, 3000);

		// setTimeout(function(){
		// 	window.clearInterval(intervalID)
		// 	console.info('Таймер отменен!')
		// }, 9000);	
	}

	// window.location.replace('http://ya.ru');
}