const xhr = new XMLHttpRequest(),
	ajax = ajaxService(),
	path = './articles.json';

let	ajaxPromise;


ajaxPromise = new Promise((resolve, reject) => 
  	ajax.getJSONasync(path, res => {
	  	resolve(res);
  	})
);

ajaxPromise.then(
	result => 
		showJSON(result)
	, error => 
		console.log(error)
)

function showJSON(arr) {
	let html = ``;

	arr.forEach(v => {
		html += `
			<br><b>Title: </b>${v.title}
			<br><b>Content: </b>${v.content}<br>
		`;
	})

	document.write(html);
}