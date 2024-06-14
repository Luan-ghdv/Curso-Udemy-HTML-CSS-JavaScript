// ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition:
// condition ? conIfTrue : codeIfFalse;

/* let age = 11;
let message = age >= 18 ? "You' re an adult" : "You're a minor";

console.log(message); */

/* let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon";

console.log(greeting); */

/* let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message); */

let purchaseAmount = 102;
let discount = purchaseAmount >= 100 ? 10: 0;
console.log(`You total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);