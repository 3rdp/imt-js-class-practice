window.onload = function () {
	(function(){
		var globalTest = '123'; // без var глобальная переменная переписалась бы
		console.log('globalTest', globalTest);
		
		var inputElems = document.getElementsByTagName('input');

		for (var i = inputElems.length - 1; i >= 0; i--) {
			var elem = inputElems[i];

			if(elem.type != 'text' || !elem.getAttribute('data-allowed-chars')) continue;

			elem.addEventListener('keypress', filter, false);
		}

		function filter(event) {
			var target = event.target,
				key,
				code,
				allowed = target.getAttribute('data-allowed-chars'),
				messageId = target.getAttribute('data-messageid');

			// if (event.type.toLowerCase() === 'textinput' ) {
			// 	key = event.data;
			// } else {
				// для firefox
				code = event.charCode || event.keyCode;

				if (code < 32 || event.ctrlKey || event.altKey) {
					return;
				}

				key = String.fromCharCode(code);
			// }

			if (messageId) 
				var messageElem = document.getElementById(messageId);

			if (allowed.indexOf(key) == -1) {
				if (messageId)
					messageElem.style.display = 'block';
				event.preventDefault();
			} else {
				messageElem.style.display = 'none';
			}
		}

	})();
}