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