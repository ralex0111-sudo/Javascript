/*1.What is the difference between var, let, and const?
var-Used to create a variable. It can be changed and declared again.
let-Used to create a variable whose value can be changed, but it cannot be declared again.
const- Used to create a variable whose value cannot be changed or declared again.
*/

/*2. Can you re-declare a variable with var? What about let and const?
var-You can redeclare the variable.
let-You cannot redeclare the variable in the same scope.
const-You cannot redeclare the variable in the same scope.
*/

/*Q3: What is the output of this code?
 It will throw an error because the const varaible have been redeclared.

Q4: What is the difference between declaring and initializing a variable?
Declaration-Create the variable
Initialization -Give the variable its first value
ex: let a; Initialization
let a =10; giving its values declaring*/


/*Q4.5What will be the output?
undefined because value is empty

Q6: What is hoisting? Give an example
Hoisting means JavaScript moves variable and function declarations to the top of their scope before executing the code.
ex : console.log(a);
     var a = 10;
     */
/*Q7: What is the difference between null and undefined?
 undefined-variable is declared, but no value has been given.
null-intentionally give the variable an empty value.
*/
/*Q8: What will be the output?
object
object
undefined
object

Q9: What is the difference between == and ===?
== LoosetypeEqual-Compares the values and can convert the data type if needed.
=== Stricttype Equal-Compares both the value and the data type. No type conversion.

Q10: What is the difference between ++i and i++?
++i-Pre-increment: First increase the value, then use it.
i++- Post-increment: First use the value, then increase it.

 Q11: What will be the output?
 15
 5
 50
 2

Logical operators are used to combine two or more conditions and give a result of true or false.
There are 3 main logical operators in JavaScript:
1. && — AND
Returns true when both conditions are true.
let age = 25;
console.log(age >= 18 && age <= 60); // true
Both conditions are true.
&& → Both must be true 

2. || — OR

Returns true when at least one condition is true.
let age = 15;
console.log(age >= 18 || age == 15); // true
The second condition is true, so the result is true.
|| → Any one can be true ✅

3. ! — NOT
It reverses the result.
let isStudent = true;
console.log(!isStudent); // false
true becomes false.
*/

/*Q13: What will be the output
true
true
false*/

/*Q14: What is the ternary operator? Give an example.
 similiar to if else 
Syntax:
 condition ? statement : statement;

Q15: What is the difference between implicit and explicit type casting?
Implicit Type Casting
JavaScript automatically changes the data type for you.
let a = 10;
let b = "5";
console.log(a + b);

Explicit Type Casting
We manually change the data type using functions like Number(), String(), or Boolean().
let a = "10";
let b = Number(a);
console.log(b);
*/

/* Q16: What will be the output?
123
NaN
1
0
false
true
*/

/*17: What is NaN? Give an example.
It appears when JavaScript tries to perform a mathematical operation but the result is not a valid number.
Ex
let a = "Hello";
console.log(Number(a));

Q18: What is the difference between if-else and switch?
if-else is used to check conditions.
switch is used to check one value against multiple possible values.

Ex:
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

if-else → Used for conditions
switch  → Used for multiple values

Q19: What will be the output?
let age = 20;

if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
20 >= 18 is true, so the if block executes.

Q20: What is nested if? Give an example.
Nested if means putting an if statement inside another if statement.

Ex:
let age = 20;
let hasID = true;
if (age >= 18) {

    if (hasID == true) {
        console.log("Allowed");
    }

}
Nested if → An if statement inside another if statement.

Q21: Write a program to check if a number is even or odd using ternary operator.
let number = 10;
let result = number % 2 == 0 ? "Even" : "Odd";
console.log(result);
*/

/*Q22: What is the difference between while and do-while?
while → First checks the condition, then executes the code.
do-while → First executes the code, then checks the condition.
Q.23 What is the Output?
1
2
3
4
5

Q24: What is the difference between for-of and for-in?
for-of → Used to get the values from an array or other iterable.
for-in → Used to get the keys/indexes.
ex;
let fruits = ["Apple", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

25: Write a program to find the sum of numbers from 1 to 100.
let add = 0;
for (let i = 1; i <= 100; i++) {
    add = add + i;
}
console.log(add);

Q26: What is the difference between slice and splice?
slice 
array inside if any value show to the user side we can use slice

splice 
 It is used to change the particular value in array
 */
/*Q27: What will be the output?
let arr = [1, 2, 3];
arr.push(4);->[1,2,3,4]
arr.pop();->[1,2,3]
arr.unshift(0);[0,1,2,3]
arr.shift();[1,2,3]
console.log(arr);

output [1,2,3]

Q28 What is the difference between function declaration and function expression?
Function Declaration →function is created using the function keyword with a function name.

Q29: What is an arrow function? Give an example.
An arrow function is a shorter and simpler way to write a function in JavaScript.
ex 
let add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));

Q30 What will be the output?
function greet() {
    return "Hello";
}
let message = greet();

console.log(message);
Output-
Hello
*/