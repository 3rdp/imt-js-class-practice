var debug = 0;
$('.ui.accordion').accordion();


/**
* Калькулятор через String.split()
* */

$('#calc0_button').click(main);

// document.getElementById('calc0_button');
// event('click',main)

function main() {
	var userInput,
		operator,
		result;

	userInput = prompt('Введите массив чисел через запятую');
	do {
		operator = prompt('Введите требуемую операцию: + - / *');
		// alert('+-/*'.indexOf(operator))
	} while ('+-/*'.indexOf(operator) < 0)

	if (debug) console.log(operator, userInput);

	userInput = userInput.split(',');
	result = calculate(userInput, operator);
	alert('Результат: ' + result);
}
function calculate(arr, oper) {
	switch(oper) {
	case '+':
		return sum(arr);
	case '-':
		return diff(arr);
	case '*':
		return product(arr);
	case '/':
		return divide(arr);
	default:
		return 'Ошибка';
	}
}
function sum(arr) {
	var sum = 0;

	for(var i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}
	return sum;
}
function diff(arr) {
	var sum = arr[0];

	arr.shift();
	for(var i = 0; i < arr.length; i++) {
		sum -= +arr[i];
	}
	return sum;
}
function product(arr) {
	var sum = arr[0];

	arr.shift();
	for(var i = 0; i < arr.length; i++) {
		sum = sum * +arr[i];
	}
	return sum;
}
function divide(arr) {
	var sum = arr[0];

	arr.shift();
	for(var i = 0; i < arr.length; i++) {
		sum = sum / +arr[i];
	}
	return sum;
}


/**
* Калькулятор через String.split() через DOM
* */

$('#calc1_button').click(function() {
	var userInput = $('#input_calc1_userInput').val(),
		operator = $('#input_calc1_operator').val(),
		result;

	console.log('here')
	if (!userInput) return $('#input_calc1_userInput').parent().addClass('error');
	if (!operator) return $('#input_calc1_operator').parent().addClass('error');
	if (debug) console.log(operator, userInput);
	$('#input_calc1_userInput,#input_calc1_operator').removeClass('error')
	userInput = userInput.split(',');
	result = calculate(userInput, operator);
	$('#calc_result').html(result);
})