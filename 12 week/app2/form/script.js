// var obj = {
// 	login: '',
// 	pass:'',

// }
$(document).ready(function() {
	_.getUser("#getUser", function(obj) {
		console.log(obj);
		var $cont = $(".container");
		for (key in obj) {
			// console.log(obj[key]);
			$cont.append(`<h2>${obj[key]}</h2>`); // немного es6
		}
	});
})