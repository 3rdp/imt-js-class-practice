window.onload = function() {
	console.info('Hello, this is index.html');

	if(!window.sessionStorage.auth) {
		// window.location.assign('login.html');	
	}

	var clock,
		time; 

	clock = document.getElementById('app-clock');

	time = new Date();

	// clock.innerHTML = time;

	// Выбор элемента документа
		byId 		= document.getElementById('test-element'),
		byName 		= document.getElementsByName('test-name'),
		byTagName 	= document.getElementsByTagName('a'),
		byClassName = document.getElementsByClassName('ui inverted');

	// Универсальные методы для выбора через CSS-селекторы
		selector = '.ui.inverted.header, #test-element',
		oneElement   = document.querySelector(selector), // $(selector) в консоли
		manyElements = document.querySelectorAll(selector); // $$(selector) в консоли

	console.log('byId',byId);
	console.log('byId.className',byId.className);
	byId.classList.add('ourclass'); // DOM можно напрямую изменять как-то так
	byId.setAttribute('src', 'source'); // или так
	byId.id = 'change-id'; // а так вообще шик
	console.log('byId.className',byId.className);
	console.log('byId.lastElementChild',byId.lastElementChild);
	console.log('byId.firstElementChild',byId.firstElementChild);
	console.log('byId.nextElementSibling',byId.nextElementSibling);
	console.log('byId.previousElementSibling',byId.previousElementSibling);
	console.log('byId.previousElementSibling',byId.previousElementSibling);
	console.log('byId.parentElement',byId.parentElement);
	console.log('\nbyName',byName);
	console.log('\nbyTagName',byTagName);
	console.log('\nbyClassName',byClassName);
	console.log('\noneElement',oneElement);
	console.log('\nmanyElements',manyElements);


	console.log('___', '\n\nbyId.innerHTML',byId.innerHTML);
	byId.innerHTML = '<h3 class="ui inverted header">Some Text</h3>';
	console.log('changed byId.innerHTML',byId.innerHTML);
	console.log('byId.outerHTML',byId.outerHTML);
	console.log('byId.outerText',byId.outerText);

}