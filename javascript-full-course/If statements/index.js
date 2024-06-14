// IF STATEMENTS = if condition is true, execute some code. If not, do something else.

/* let age = 13;

if(age >= 18) {
    console.log("You are old enough to enter this site.");
}
else {
    console.log("You must be 18+ to enter this site.")
} */

/* let isStudent = false;

if(isStudent) {
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
} */

//let age = 0;
/* let hasLicense = false;

if(age >= 16) {
    console.log("You are old enough to drive");

    if(hasLicense) {
        console.log("You have your license!")
    }
    else {
        console.log("You do not have your license yet!");
    }
}
else {
    console.log("You must be 16+ to have a license");
} */

/* if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else if(age == 0) {
    console.log("You can't enter. You were just born.")
}
else if(age < 0) {
    console.log("You age can't be below 0");
}
else if(age >= 100) {
    console.log("You are TO OLD to enter this site");
}
else {
    console.log("You must be 18+ to enter this site");
}
 */

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = `You are TO OLD to enter this site`;
    }
    else if(age >= 18) {
        resultElement.textContent = `You are old enough to enter this site.`;
    }
    else if(age == 0) {
        console.log("")
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(age < 0) {
        resultElement.textContent = `You age can't be below 0.`;
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
    
}

