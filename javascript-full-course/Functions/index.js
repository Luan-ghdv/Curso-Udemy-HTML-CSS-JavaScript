// function = A section of reusable code. Declare code oncem use it whenever you want. Call the function to execute that code.

/* function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("BroCode", 25);
happyBirthday("Spongebob", 30); */

function add(x, y) {
    /* let result = x + y; 
    return result; */
    return x + y;
} 
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function isEven(number) {
    return number % 2 === 0 ? true : false;
    /* if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    } */
}
console.log(isEven(11));

function isValidEmail(email) {
    
    if(email.includes("@")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isValidEmail("Brofake.com"));

/* let answer = add(2, 3);
console.log(answer); */

/* console.log(divide(2, 3)); */
