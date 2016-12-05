// SOURCE 5 week/app/login.js
window.onload = function() {
	var ajaxServiceObj = ajaxService();
		objUsers = ajaxServiceObj.getJSON('./auth.json');

	console.info('Script login started');
	console.log(objUsers);

	var btn = document.getElementById('login-btn');
}