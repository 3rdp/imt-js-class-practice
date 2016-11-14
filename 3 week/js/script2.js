/**
* Степень
*/

function pow(x,n) {
	var res = x;
	for (var i = 0; i < n -1; i++) {
		res *= x;
	}
	return res;
}

/**
* Степень с рекурсией
*/

function powR(x,n) {
	if(n>1)return x * powR(x, n -1);
	return x;
}

/**
* Вывод индексов и значений объекта
*/

function forinArguments() {
	for (key in arguments) {
		console.log('Element:', key, ', Value:',arguments[key])
	}
}

console.log('2^1 =',powR(2,1));
console.log('2^3 =',pow(2,3))
forinArguments('misha', 2,5);

/**
* Реверсировать массив без (!) reverse()
*/

function arrayReverse(arr) {
	var newArr = [];
	// for (key in arr) { // [3,2]
	// for (var i = 0; i < arr.length; i++) { // [3,2] 
	for (var i = 0; arr.length !== 0;) { // ахахах что я курил, i можно было не объявлять да и вообще сделать через while
		newArr.push(arr.pop());
	}
	return newArr;
}

console.log("arrayReverse([1,2,3]) === ",arrayReverse([1,2,3]))

/**
* Принимаем год, выдаем високосный/нет
*/

function isBissextile(year) {
	if (!(year % 4) && year % 100 || !(year % 400) )
		return true;
	return false;
}

console.log("1600 високосный?", isBissextile(1600));
console.log("2100 високосный?", isBissextile(2100));
console.log("1648 високосный?", isBissextile(1648))

/**
* Функция, которая выдает сумму своих аргументов
*/

function sumArgs() {
	return Array.prototype.reduce.call(arguments, function(a,b) { return a + b; })
}

console.log("sumArgs(4,5) ===", sumArgs(4,5));
console.log("sumArgs(4,19,20,100) ===", sumArgs(4,19,20,100));