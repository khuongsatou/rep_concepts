let age: number = 25;
let userName: string = "John";
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Alice", 30];
enum Color { Red, Green, Blue };
let selectedColor: Color = Color.Red;
let anyValue: any = "Hello";
function sayHello(): void {
  console.log("Hello!");
}
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let someObject: object = { key: "value" };
let mixedType: string | number = "text";
if (typeof age === 'number') {
    // Validation passed
}

if (typeof userName === 'string') {
    // Validation passed
}

if (typeof isStudent === 'boolean') {
    // Validation passed
}

if (Array.isArray(numbers)) {
    // Validation passed
}

if (Array.isArray(person) && person.length === 2) {
    // Validation passed
}

let myColor: Color = Color.Red;
if (myColor in Color) {
    // Validation passed
}

let myAny: any = "Hello";

function myFunction(): void {
    // No return value
}

let myNull: null = null;
let myUndefined: undefined = undefined;

// No additional validation needed for null or undefined


if (typeof someObject === 'object' && someObject !== null) {
    // Validation passed
}


if (typeof mixedType === 'string' || typeof mixedType === 'number') {
    // Validation passed
}