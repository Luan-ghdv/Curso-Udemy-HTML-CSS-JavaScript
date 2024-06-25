// spread operator = ... allow an iterable such as an array or string to be expanded into seperate elements (unpacks the lements)

/* let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum); */

/* let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters); */

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

