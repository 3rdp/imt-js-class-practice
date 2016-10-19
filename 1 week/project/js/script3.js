var number1 = -23,
	number2 = Infinity,
	number3,
	string = 'Misha';

// console.log('Результат:', 'number1/string')


number3 = string = number2 = number1; // цепочка присвоения, присваиваем всем крайнее правое значение

console.log(number1, number2, number3, string);


string = 'Строчка';

console.log(typeof string, typeof +string, +'NaN'); // по-быстрому преобразуем string в number


number1 = 23.7;

console.log('Округление верх:',Math.ceil(number1),"\nОкругление обычное:", Math.round(number1),"\nОкругление вниз:", Math.floor(number1),"\nЧисло ПИ:", Math.PI); // Math


var counter = 0,
	res;

res = counter++; console.log("++Счетчик:",counter, "\nРезультат:", res);
res = counter++; console.log("++Счетчик:",counter, "\nРезультат:", res);
res = ++counter; console.log("Счетчик++:",counter, "\nРезультат:", res);
res = ++counter; console.log("Счетчик++:",counter, "\nРезультат:", res);


var name = 'Sasha',
	surname = 'Davydenko';

document.write(name + ' ' + surname);

/*
* Немного веселья с преобразованием null
*/
console.log('!!8 => ',!!8)
console.log('null == 0 =>',null == 0);
console.log('null > 0 =>',null > 0);
console.log('null >= 0 =>',null >= 0);
console.log('+null == 0 =>',+null == 0);


/**
Немного повторения

1. Если < < <= >= == (а также -, *, /) то неявно преобразуется всё в число
2. Если + строка, то плюс работает как конкатенациия и всё преобразуется в строку.
3. null == undefined;
4. NaN != NaN; NaN выдается когда парсим строку без числа ИЛИ при неявном преобразовании в арифметических операциях 5 / "будет NaN"

*/

var a = 0 || false || 2 || 1; // ИЛИ возвращает первое TRUE значение слева-направо, а не булевый результат. выведет 2
a = 1 && true && ''; // И выводит первое FALSE значение слева-направо. выведет ''
a = 0 || true && ''; // И имеет приоритет выше. то есть выполнится И после чего 0 || '' выведет пустую строку (ведь оно проверяет всё слева-направо, поэтому и выводит последнее)

var boolFalse = null || undefined || -0 || 0 || '' || NaN; // NaN