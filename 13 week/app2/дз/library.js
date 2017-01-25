"use strict"
;(function(){

	function getUserInfo(form, callback){
		var userInfo = {};
		$(form).on("submit", function(e){
			e.preventDefault();	
			$(this).find('[type="text"]').each(function(){
				userInfo[$(this).attr('name')] = $(this).val();
			});
			callback(userInfo);
		})
	}
	var export_my = {
		"getUserInfo" : getUserInfo,
	}
	window._ = export_my;
})()