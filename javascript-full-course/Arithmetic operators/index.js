// arthmetic operators = operands (values, variables, etc.)
//      operators (+ - * /)
//      ex: 11 = x + 5;

let students = 30;

/* students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 3;
students = students % 2; */

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 3;
students %= 2;

students++; // soma mais 1
students--; // diminui menos 1

console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = (1 + 2) * 3 + 4 ** 2;
console.log(result);
