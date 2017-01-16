"use sctrict"
;(function() {
	function getUserInfo(form,cb) {
		$(form).on("submit", function(e) {
			e.preventDefault();
			var user = {};
			$(this).find('[type="text"]').each(function() {
				console.log($(this).val()); // большая разница :D
				user[$(this).attr("name")] = $(this).val();
			})
			cb(user);
		})
	}

	window._ = {
		getUser: getUserInfo
	};
})()