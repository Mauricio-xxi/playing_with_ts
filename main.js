"use strict";
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
