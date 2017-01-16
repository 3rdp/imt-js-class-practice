$(document).ready(function(){
	// $("#spoilerHead").click(function(){
	// 	$(this).next().fadeToggle(1000);
	// })
	var elems = $("#bar");
	// elems.click(function(){
	elems.on('click', '>li', function(){ // только так будет работать на динамически добавленных элементах
		$(this).toggleClass("highlight");
	})

	$('#add').on('click', function(){
		// insertBefore
		// insertAfter
		// before
		// after
		// appendTo
		// prependTo
		// append
		// prepend
		var liLength = $('#bar li').length;
		$('#bar').append('<li>Пункт '+ ++liLength +'</li>');
	})
})