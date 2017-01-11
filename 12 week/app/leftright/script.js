$(document).ready(function(){
	$("#right").on("click", 'li',function(){
		// $("#left").append($(this));

		// animate
		$(this).fadeOut(1000, function(){
			$(this).appendTo("#left").fadeIn(500, function(){
				$(this).animate({
					"background" : "#f00",
					"width" : "+50px",
					"border-radius" : "50%"
				}, 1500);
			});
		})

		// $(this).fadeOut(250);
		// $(this).appendTo("#left").fadeIn(500);
		


		// alert($(this).data('pos'));
		// проблемы data
		// $(this).data("pos", 15);
		// alert($(this).data('pos'));
		// решение
		// $(this).attr("data-pos", 15);
	})
	$("#left").on("click", 'li',function(){
		var elem = $(this),
			pos = Number(elem.attr("data-pos"));
		$("#right").children("span").eq(pos).append(elem);
	})

})