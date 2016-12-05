function ajaxService(argument) {
	return {
		getJSON: _getJSON, // Получаем объект из JSON файла
		postJSON: _postJSON
	}
}

function _getJSON(url) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function XHRonReady(res) {
		if (xhr.readyState === 4 && xhr.status == 200) {
			console.info('DONE');
			try {
				var result = JSON.parse(xhr.response);
				console.log('result', result);
				return result;
			} catch(e) {
				console.log("Структура ответа не JSON", e);
			}
		}
	}
	xhr.open('GET', url, true);
	xhr.send(null);
}

function _postJSON(url) {
	return null;
}