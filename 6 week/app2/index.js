window.onload = function() {
	var templateContainer = window.document.getElementById('template-home'),
		linkContainer = window.document.getElementById('link-container'),
		user = {
			name: "Sasha Dav",
			age: 20
		};

	var ajax = new XMLHttpRequest(); // создаем новый XMLHttpRequest
	ajax.open("GET", "./templates/template.html", false); // настраиваем запрос
	ajax.send(); // отправляем запрос и получаем ответ
	console.log("Ajax", ajax);

	linkContainer.onclick = function(e) {
		e.preventDefault();
		if (e.target.className.indexOf('item') > -1) { // проверяем что target это .item,  а не сам элемент меню
			console.log(e.target.attributes['href']);
			eventGlobal = e;
			loadTemplates(e.target.attributes['href'].nodeValue, 'template-home', user);
		}

	}

	window.onscroll = function() {
		console.log('Величина прокрутки X', window.pageXOffset);
		console.log('Величина прокрутки Y', window.pageYOffset);
	}

	var scrollHeight = Math.max( // неудачная попытка определить высоту документа
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	alert('Высота с учетом прокрутки ' + scrollHeight);

	// if (ajax.status == 404)
	// 	throw new Error('Ошибка, шаблона нет!');

	try {
		console.log("Начало блока try");
		if (ajax.status == 404)
			throw new Error('Ошибка, шаблона нет!');
		consol.log(); // это ошибка
		console.log("Конец блока try"); // если ошибка, это не выведется, так как сразу перейдет всё в блок catch
	} catch (e) {
		console.log("Начало блока catch");
		console.log(e.name, e.message, e.stack, e);
		console.log("Конец блока catch");
	} finally {
		console.log("Начало блока finally");
	}

	templateContainer.outerHTML = eval(`\`${ajax.responseText}\``); // выводим шаблон в ES6 стиле

	scrollHeight = Math.max( // неудачная попытка определить высоту документа
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	alert('Высота с учетом прокрутки ' + scrollHeight);
	scrollTo(0,20); // прокручиваем страницу
}

function loadTemplates(templateUrl, elemId, user) {
	var ajax = new XMLHttpRequest(); // создаем новый XMLHttpRequest
	ajax.open("GET", templateUrl, false); // настраиваем запрос
	try {
		ajax.send(); // отправляем запрос и получаем ответ
		if (ajax.status == 404)
			throw new Error('Ошибка, шаблона нет!');
		console.log("Ajax", ajax);
		window.document.getElementById(elemId).outerHTML = eval(`\`${ajax.responseText}\``); // выводим шаблон в ES6 стиле
	} catch(e) {
		console.log(e);
	}
}