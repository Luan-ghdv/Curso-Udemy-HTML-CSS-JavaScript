// Method Chaining = Calling one method after another in one continuous line of code.

let username = window.prompt("Enter your username: ");


// ----- NO METHOD CHAINING -----

/* username = username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username); */

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
