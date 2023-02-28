// Tests for equality and inequality with strings

console.log("apple" == "apple"); // true
console.log("Apple" === "Apple"); // false
console.log("pear" != "pear"); // false

//• Tests using the lower case function

console.log("HELLO".toLowerCase() == "hello"); // true
console.log("WoRLD".toLowerCase() == "world"); // true
console.log("UPPER".toLowerCase() == "lower"); // false
console.log("CamelCase".toLowerCase() == "camelcase"); // true

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(5 == 5); // true
console.log(10 > 5); // true
console.log(3 < 2); // false
console.log(7 >= 7); // true
console.log(4 <= 3); // false

//• Tests using "and" and "or" operators

console.log(true && true); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(false || false); // false


//• Test whether an item is in a array

const fruits = ['apple', 'banana', 'orange', 'pear'];

console.log(fruits.indexOf('banana') !== -1); // true
console.log(fruits.indexOf('orange') !== -1); // false


//• Test whether an item is not in a array

const fruits1 = ['apple', 'banana', 'orange', 'pear'];

console.log(fruits1.indexOf('mango') !== -1); // true
console.log(fruits1.indexOf('grape') !== -1); // false

