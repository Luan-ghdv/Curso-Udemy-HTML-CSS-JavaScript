// string methods = allow you to manipulate and work with text (strings)

let userName = "mat he";

console.log(userName.charAt(4));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

/* let result = userName.startsWith(" ");
if(result) {
    console.log("Your username can't begin with ' ' ");
} 
else {
    console.log(userName);
} */

/* let result = userName.endsWith(" ");
if(result) {
    console.log("Your username can't begin with ' ' ");
} 
else {
    console.log(userName);
} */

let result = userName.includes(" ");
if(result) {
    console.log("Your username can't include ' '");
} 
else {
    console.log(userName);
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
//phoneNumber = phoneNumber.padStart(17, "0");
//phoneNumber = phoneNumber.padEnd(17, "0");
console.log(phoneNumber);
