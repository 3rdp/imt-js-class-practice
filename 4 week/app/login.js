'use strict'

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

			window.location.replace('index.html');
		} else {

			document.getElementById('login-error').innerHTML = 'Неверные данные!';
		
			setTimeout(function(){
			window.clearInterval(document.getElementById('login-error').innerHTML = '')
		}, 2000);
		}

		// window.localStorage.name = 'Petya' //виртуальное хранилище
		// console.log(window.localStorage.name);

		// var userInterval = setInterval(function(){ //Таймер
		// console.info('Сработал таймер!')

		// }, 3000);

		// setTimeout(function(){
		// 	window.clearInterval(userInterval)
		// 	console.info('Таймер отменён!')
		// }, 9000);
	}

	

	// window.location.replace('http://ya.ru'); замена документа
	// window.location.assign('http://ya.ru'); переход

}