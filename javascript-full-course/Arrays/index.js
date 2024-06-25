// array = a variable like structure that can hold more than 1 value

let fruits = ['apple', 'orange', 'banana', 'coconut'];
/* fruits.sort(); Em ordem alfabetica */
/* fruits.sort().reverse() Em ordem alfabetica reversa */

/* fruits[1] = 'coconut'; visualizar a variavel */
/* fruits.push('coconut'); adicionar uma variavel na ultima posição */
/* fruits.pop(); deletar uma variavel na ultima posição */
/* fruits.unshift('mango'); adicionar uma variavel na primeira posição */
/* fruits.shift(); deleta a primeira variavel na array */

/* let numOfFruits = fruits.length;
let index = fruits.indexOf("apple"); */
/* let index = fruits.indexOf("mango"); como n'ao tem no array vai retornar -1 */

/* console.log(numOfFruits);
console.log(index); */

/* for(let i = 0; i < fruits.length; i = i + 1) {
    console.log(fruits[i]);
} */

/* for(let i = fruits.length - 1; i >= 0; i = i - 1) {
    console.log(fruits[i]);
} */

for(let fruit of fruits) {
    console.log(fruit);
}
