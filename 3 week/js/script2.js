function pow(x,n) {
	var res = x;
	for (var i = 0; i < n -1; i++) {
		res *= x;
	}
	return res;
}
function powR(x,n) {
	if(n>1)return x * powR(x, n -1);
	return x;
}
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
	for (var i = 0; arr.length !== 0;) {
		newArr.push(arr.pop());
	}
	return newArr;
}

console.log(arrayReverse([1,2,3]))