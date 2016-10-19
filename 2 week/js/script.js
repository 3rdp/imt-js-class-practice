var userStatus,
	userName,
	debug = true;

userStatus = confirm('Хотите зайти?');

if(debug) {
	console.log('userStatus:',userStatus);
}

if(userStatus) {
	userName = prompt('Введите свое имя');
	if(!userName) {
		userName = prompt('Пожалуйста ВВЕДИТЕ имя');

		if (userName) alert('Добро пожаловать, '+ userName +'!');

	} else {
		alert('Добро пожаловать, '+ userName +'!');
	}
} else {
	alert('Скатертью дорога!');
}