// function foo(a:number, b:number): string{
// 	let result:string = "<table>";

// 	for(let i = 0; i < a; ++i) { // а с let на var?
// 		result += "<tr>";

// 		for (let i = 0; i < b; ++i) { // а с let на var?
// 			result += "<td>" + i + "</td>";
// 		}

// 		result += "</tr>";
// 	}

// 	result += "</table>";
// 	return result;
// }
// foo(5,7);
// console.log(foo(5,7));

// задачка
// for (var i = 0; i < length; ++i) {
// 	setTimeout(function() {
// 		console.log(i) // как сделать чтоб выводилось 1-10 и с таймаутом?
// 		}, 1000);
// }

// let видим только в пределах фигурных скобок.
// function foo(input:boolean): string {
// 	if (input){
// 		let bar:string = "test";
// 		return bar;
// 	}
// 	// return bar; // не сработает
// }
// alert(foo(true));


// function foo(bar){
// 	let bar = "string"; // так не скомпилится
// 	alert(bar);
// }
// foo('test');

// объект с постоянной структурой
// const DB = {
// 	host : "localhost",
// 	name : "blackjack"
// }
// DB.host = "foo"; // можно
// // DB.rand = 123; // нельзя
// console.log(DB.host);

// это как list в плюсах
// let input = [1, 2];
// let [first, second] = input;
// console.log(first, second);

// жестко
// function foo([firs, sec]: [num, num]){
// 	console(first, second);
// }
// let input: [number, number] = [1 ,2];
// foo(input);

// 3-5 пойдет в rest
// let [first, second, ...rest] = [1,2,3,4,5];

// пропускаем первый элемент, 4-5 пойдет в rest
// let [,first, second, ...rest] = [1,2,3,4,5];

/* 
перебрать массив машин, спрашивать параметры через промпт
id 
gov_number 
id_driver 
volume_engine 
color 
fuel_consump 
*/ 
/*
можно сделать через interface. надо погуглить
и тоже самое для es6
*/
const cars_props = {
	id: number,
	gov_number: string,
	id_driver: number,
	volume_engine: number,
	color: string,
	fuel_consum: number
};
let cars = [ 
	{ 
		id: 123, 
		id_driver: 546, 
		color: "red", 
	}, 
	{ 
		id: 1234, 
		gov_number: "АН1756", 
		volume_engine: 3.8, 
		fuel_consump: 5, 
	}, 
	{ 
		id:125, 

		volume_engine:2, 
		color:"black", 
		fuel_consump: 8, 
	}, 
	{ 
		id:126, 
		fuel_consump: 6.2,
	}, 
];

cars.forEach(function(el, index) {
	let props = Object.keys(cars_props);
	for(let i = 0; i < props.length; ++i) {
		let prop = props[i];
		if (!el[prop]) {
			let prompt_msg:string = 'id: ' + el.id + ', ' + prop + ':';
			console.log('propmpt', prop);
			el[prop] = prompt(prompt_msg);
		}
	}
})

console.log(cars);