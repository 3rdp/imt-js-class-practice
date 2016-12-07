// SOURCE 5 week/app/login.js
window.onload = function() {
	console.info('Script login started');

	var btn = document.getElementById('login-btn');

	btn.onclick = function() {
		console.info('Сработал клик!');
		var login,
			pass,
			ajaxServiceObj = ajaxService(),
			// arrUsers = ajaxServiceObj.getJSON('./auth.json').users;
			arrUsers = ajaxServiceObj.getJSONasync('./auth.json', function(res) {
				return res.users;
			});
			arrUsers,
			arrUsersPromise = new Promise(function(resolve, reject) {
				return ajaxServiceObj.getJSONasync('./auth.json', function(res) {
					resolve(res.users);
				});
			})
			
		arrUsersPromise.then(result => {
			arrUsers = result;

			login = document.getElementById('login').value;
			pass = document.getElementById('login-pass').value;

			var check;
			arrUsers.forEach(function(v) {
				if (login == v.name && pass == v.age) {
					alert('Успешная авторизация');
					window.sessionStorage.setItem('auth', true);
					window.location.replace('index.html');
					check = true;
				}
			})
			
			if (!check) {
				document.getElementById('login-error').innerHTML = 'Неверные данные!';

				setTimeout(function(){
					document.getElementById('login-error').innerHTML = ''
				}, 3000);
				
			}
		})

		login = document.getElementById('login').value;
		pass = document.getElementById('login-pass').value;

		var check;
		arrUsers.forEach(function(v) {
			if (login == v.name && pass == v.age) {
				alert('Успешная авторизация');
				window.sessionStorage.setItem('auth', true);
				window.location.replace('index.html');
				check = true;
			}
		})
		
		if (!check) {
			document.getElementById('login-error').innerHTML = 'Неверные данные!';

			setTimeout(function(){
				document.getElementById('login-error').innerHTML = ''
			}, 3000);
			
		}
	}
}