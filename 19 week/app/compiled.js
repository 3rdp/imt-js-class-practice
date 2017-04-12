var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Task = (function () {
    function Task() {
    }
    Task.prototype.construct = function () {
    };
    Task.prototype.getter = function () {
    };
    return Task;
}());
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
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
        this.prot_id = id;
        this.balance = id;
    }
    User.prototype.getInfo = function () {
        return this.name;
    };
    return User;
}());
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
var SuperUser = (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SuperUser;
}(User));
var super1 = new SuperUser();
