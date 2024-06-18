// string sliciing = creating a substring from a portion of another string, string.slice(start, end)

/* const fullName = "Matheus Luan do Amaral Souza";

let firstName = fullName.slice(0, 8);
let lastName = fullName.slice(22);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);  

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); */

const email = "matheusluan.as@hotmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);