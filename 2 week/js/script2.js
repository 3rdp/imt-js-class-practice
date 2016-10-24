var counter = 0,
	sum = 0;

//while (true) { // вечный цикл
while (counter < 4) {
	sum += counter;
	counter++;
}

console.log('Сумма while:', sum) // 6


do { // выполнится 1 раз по-любому
	sum += counter;
	counter++;
} while (counter < 4);

console.log('После do while:', sum, '\n\n') // 10


var arr = [1,2,3,4,5,6,7,8,9,10];

sum = 0;
// for (var i = 0; i < arr.length; sum +=  arr[i++])
for (var i = 0; i < arr.length; sum += arr[i++]) {
	sum += arr[i++];
}
console.log('Кол-во элементов массива:',arr.length);
console.log('Сумма элементов:',sum);
sum = 0;
// for (var i = 0; i < arr.length; sum +=  arr[i += 2]); // выдаст NaN, ведь последняя итерация добавит undefined
// for (var i = 0; i < arr.length; sum +=  arr[i += 2] || 0); // выдаст 24, ведь первый индекс у нас сразу 2, а не 0
for (var i = 0; i < arr.length; i += 2) {
	sum += arr[i];
}
console.log('Сумма нечетных элементов:',sum, '\n\n');


var arr = [1,-12,-13,3,5,6,10,12,13,16,17,34,12,13]; // последние два игнорируются, ведь

sum = 0;
console.log('Нечетные числа массива меньше 20');
for (var i = 0; i < arr.length && arr[i] < 20; i++) {
	var number = arr[i];
	if (number % 2 && arr[i] > 0) {
		console.log(number);
	}
}
console.log('Конец цикла\n','Четные числа массива меньше 20');
for (var i = 0; i < arr.length; i++) {
	if (arr[i] >= 20) break; // лучше такой вариант, если надо раньше прекратить цикл
	var number = arr[i];
	if (number % 2 == 0 && arr[i] > 0) {
		console.log(number);
	}
}
console.log('Конец цикла\n\n');


// почему лучше не делать проверки прямо в for 
console.time(); sum = 0;
for (var i = 0; i < 100000000; i ++) {
	sum += i;
}
console.timeEnd();
console.time(); sum = 0;
for (var i = 0; i < 100000000 && 2 < 3 && i > -1; i ++) { // чуть дольше, если код не кеширован
	sum += i;
}
console.timeEnd(); console.log('\n');


console.log('Используем continue');
for (var i = 0; i < 20; i++) {
	if (i >= 2 && i < 17) {
		continue; // переход к след итерации
	}
	console.log(i);
}
console.log('Конец цикла\n\n');


var i, j;

console.log('Двумерный цикл с метками и continue')
loop1:
for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
      if (j == i) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}
console.log('Конец цикла\n\n');


var i, j;

console.log('Двумерный цикл с метками и break')
loop1:
for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
      if (j == 1) {
         break loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}
console.log('Конец цикла\n\n');


while(true) {
	var input = prompt('Login');
	if (!input) 
		continue; // спрашиваем логин пока не введет нормально
}