function ajaxService(argument) { 
	return { // сам сервис
		getJSON: _getJSON, // Синхронно получаем объект из JSON файла
		postJSON: _postJSON,
		getJSONasync: _getJSONasync
	}

	function _getJSON(url) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url, false);
		xhr.send(null);
		return JSON.parse(xhr.response);
	}

	function _postJSON(url) {
		return null;
	}

	function _getJSONasync(url, callback) {
		var xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function XHRonReady(res) {
			if (xhr.readyState === 4 && xhr.status == 200) {
				console.info('DONE');
				try {
					var result = JSON.parse(xhr.response);
					callback(result);
				} catch(e) {
					console.log("Структура ответа не JSON", e);
				}
			}
		}
		xhr.open('GET', url, true);
		xhr.send(null);
	}
}

