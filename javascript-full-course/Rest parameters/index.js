// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into a array.
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods) {
    console.log(foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

/* openFridge(food1, food2, food3, food4, food5); */

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

/* function sum(...numbers) {
    
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
} */

function getAverage(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(90, 35, 100, 70, 48);

console.log(`Your average is ${total}`);

function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);