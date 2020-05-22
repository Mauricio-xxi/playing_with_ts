"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
console.log("HELLO WORLD");
// types
var myString = "Hello wold";
var myNumber = 2;
var myBool = true;
var myVar = "accepts any variable";
// Arrays
var stringArray = ["one", "two", "three"];
var numberArray = [1, 2, 3, 4];
var anyArray = [1, "two", true];
var booleanArray = [true, false, true];
// tuple
var strTuple;
strTuple = ["one", 1];
// void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// functions
function getSum(num1, num2) {
    return num1 + num2;
}
var otherSum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// the interrogation symbol is to inform that the parameter is optional
function getName(firstName, lastName) {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function myVoidFunction() {
    return;
}
var myTodo = { title: "lorem title", text: " lorem text" };
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
// clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        console.log(this.age + " years old");
        return this.age + " years old";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " has paid");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var alvaro = new User("alvaro", "alvaro@alvaro.com", 28);
var manolo = new Member(1, "Manolo", "manolo@a.com", 25);
