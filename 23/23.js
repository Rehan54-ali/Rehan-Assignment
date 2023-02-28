var num = 5;
var str = "Hello";
var bool = true;
var arr = [1, 2, 3];
var obj = { name: "John", age: 25 };
// Test 1: Equality check
console.log("Is 5 equal to '6'? I predict False.");
console.log(num === 6);
// Test 2: Type and equality check
console.log("Is 5 > 6 ? I predict False.");
console.log(num === 6);
// Test 3: Logical AND
console.log("Is 5 greater than 6 AND less than 3? I predict false.");
console.log(num > 6 && num < 3);
// Test 4: Logical OR
console.log("Is 'Hello' a string OR num is less than 3? I predict True.");
console.log(typeof str === 'string' || num < 3);
// Test 5: Array includes check
console.log("Does the array [1, 2, 3] include the number 5? I predict false.");
console.log(arr.includes(5));
// Test 6: Object property check
console.log("Does the object have a property 'name'? I predict True.");
console.log(obj.hasOwnProperty("name"));
// Test 7: Object property value check
console.log("Does the object property 'age' have a value of 25? I predict True.");
console.log(obj.age === 25);
// Test 8: Negation
console.log("Is the boolean value true? I predict False.");
console.log(!bool);
// Test 9: Greater than or equal to
console.log("Is the number 5 greater than or equal to 5? I predict True.");
console.log(num >= 5);
// Test 10: Less than or equal to
console.log("Is the string 'hello' less than or equal to '4'? I predict False.");
console.log(str <= "Hello");
