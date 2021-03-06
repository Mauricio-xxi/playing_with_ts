console.log("HELLO WORLD");

export {};

// types

var myString: string = "Hello wold";
var myNumber: number = 2;
var myBool: boolean = true;
var myVar: any = "accepts any variable";

// Arrays

var stringArray: string[] = ["one", "two", "three"];

var numberArray: number[] = [1, 2, 3, 4];

var anyArray: any[] = [1, "two", true];

var booleanArray: boolean[] = [true, false, true];

// tuple

var strTuple: [string, number];
strTuple = ["one", 1];

// void, undefined, null

let myVoid: void = undefined;

let myNull: null = null;

let myUndefined: undefined = undefined;

// functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let otherSum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// the interrogation symbol is to inform that the parameter is optional

function getName(firstName: string, lastName?: string): string {
  if (!lastName) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

function myVoidFunction(): void {
  return;
}

//  interfaces

interface ITodo {
  title: string;
  text: string;
}

const myTodo: ITodo = { title: "lorem title", text: " lorem text" };

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

// clases

class User {
  name: string;
  public email: string;
  protected age: number;
  private sex: string;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(`${this.name} is registered`);
  }

  public showMeAge(): string {
    console.log(`${this.age} years old`);
    return `${this.age} years old`;
  }

  payInvoice() {
    console.log(`${this.name} has paid`);
  }
}

class Member extends User {
  id: number;

  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

let alvaro = new User("alvaro", "alvaro@alvaro.com", 28);
let manolo = new Member(1, "Manolo", "manolo@a.com", 25);
