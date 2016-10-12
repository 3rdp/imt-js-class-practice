/*
Много
строчный
*/
// alert('Привет, мир!'); // ОДнострочный


// var name = 'Саша\n',
// 	NaMe = 'Name2\n',
// 	AGE = 16, // константы капсом
// 	surname = 'Давыденко'; // пропускаем строку после объявления - хороший тон

// // document.write(name + NaMe + '<br>');
// document.write(name + surname + '<br>');
// document.write('Мне ' + AGE + ' лет<br>');

// name = 'Андрей\n';
// surname = 'Карпенко\n';

// document.write(name + surname + '<br>');


var userName = prompt('Введите Ваше имя:', 'Саша'),
	userSurname = prompt('Введите Ваше имя:', 'Давыденко'),
	userAge = prompt('Введите Ваш возраст:', '19');

document.write('Добрый день, ' + userName + ' ' + userSurname + '!<br>')
document.write('Ваш возраст: ' + userAge + '<br />');