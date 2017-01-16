;(function() {
	var foo = 3;
	function showNameGood() {
		var $foo = "no entry";
		console.log("Петя");
	}

	showNameGood.$ = "Свойство функции";
	showNameGood.$func = function(){
		console.log(foo); // тут классно ставить брейкпоинт и смотреть стек
	};

	$(".spoilerHead").next().css("color", "red"); // не прокатит, ещё нету в DOM такого
	function initSpoiler(headSpoiler) {
		$(headSpoiler).on("click", function() {
			$(this).next().slideToggle();
		})
	}

	function showNameGood2() {
		console.log("Petya");
	}
	
	var _ = {
		"show" : showNameGood,
		"show2" : showNameGood2,
		"count" : foo,
		"initSpoiler" : initSpoiler
	}

	window._ = _;
})()