$(document).ready(function() {
	_.initSpoiler(".spoilerHead"); // Сделали дополнение jQuery, очень грубо
	_.initSpoiler(".spoilerHead2");
})

/**
 * 
 * Полноценный модуль по мотивам lodash
 * 
 */

function showName() {
	console.log("Вася");
}

showName(); // что выведет и как вызвать Петю?
showNameGood(); // а вот и он...
_.show2();

console.log("Приватные свойства");
console.log(_.foo);
console.log(_.count); // только так
console.log(_.show.$); // или так :/
console.log(_.show.$foo); // 
console.log(_.show.$func()); // 


/**
 *
 * Будет Uncaught ReferenceError: b is not defined
 * Выведет тело функции.
 *
 */ 
function a() {
	var foo = 1;
	function b() {
		console.log(foo);
		foo++;
	}
	return b;
}

a();
// b(); // что будет тут?

alert(a()); // что выведет?

console.log("*** Замыкание")
var func = a();
func(); // 1
func(); // 2
func(); // 3
func(); // 4

var func2 = a();
func2(); // 1
func2(); // 2
console.log("***")


/**
 *
 * Что выведет алерт ?
 * Что если закомментить var foo = 5; ?
 * Что если убрать там var ?
 * Если поменять строки в t местами ?
 *
 */
// LexicalEnvironment = {foo:undefined, window}
var foo = 3;

function t() {
	alert(foo);
	var foo = 5;
// LexicalEnvironment = {foo:5, [[scope]]}
}

t()


/**
 *
 * А с var бы такого не было!
 *
 */
// alert(foo); // выдаст Uncaught ReferenceError: foo is not defined at script.js:1 
// window.foo = 3;


/**
 *
 * На какой строке включить алерт чтоб работало? ;P
 *
 */
function t() {
	window.test = "hi";
}

// alert(test);
t();
alert(test);


/**
 *
 * Переписывает жквери полностью :D
 *
 */
// function $(){
// 	alert('no jQuery');
// }


