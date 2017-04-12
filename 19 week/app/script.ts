// es5 "класс"
// function User() {
// 	this.id;
// 	this.name;
// }
// User.prototype.getInfo = function() {
// 	alert this.name;
// }
// var user = new User(1, "John");

// es6 нормальный класс
class User {
	public id: number;
	name: string;
	protected prot_id: number;
	private balance: number; // не унаследуется в SuperUser

	getInfo():string {
		return this.name;
	}

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
		this.prot_id = id;
		this.balance = id;
	}
}
var user = new User(1, "John");

/*
	Модификаторы:
	public
	protected
	private
	***
	readonly
*/

user.id = 43; // public свойство можно менять и читать откуда угодно
// а это можно читать и изменять только внутри класса. строка выдаст ошибку
// user.prot_id = 23; 

class SuperUser extends User{
	protected role: number;
}
var super1 = new SuperUser();