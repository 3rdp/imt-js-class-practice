window.onload = function () {
	(function(){
		var inputElems = document.getElementsByTagName('input');

		for (var i = inputElems.length - 1; i >= 0; i--) {
			var elem = inputElems[i];

			if(elem.type != 'text' || !elem.getAttribute('data-allowed-chars')) continue;

			elem.addEventListener('keypress', filter, false);
		}

		function filter(event) {
			var target = event.target,
				key = event.key,
				allowed = target.getAttribute('data-allowed-chars'),
				messageId = target.getAttribute('data-messageid');

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