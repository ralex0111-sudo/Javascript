/*Create variables using var, let, and const.
var name="Alex";
let age =27;
var city="Tirunelveli";
const college="Francis Xaviers";
name="ramesh";
age=55;
college="Anna university";
var name="suresh";
var city="chennai";*/

/*Task 2 — Printing Statements
console.log("Hello Naveen iam Alex hope ur doing good");
alert("Thanks for ur time and support");
confirm("we will meet soon");
prompt("Please enter your name");
document.writeln("Thanks for your input!");
*/

/*Task 3 — User Details
var Name=prompt("Please enter your name:");
var age=prompt("Enter your age:");
var city=prompt("Enter your city:");
var qualification=prompt("Enter your qualification:");
console.log(Name);
console.log(age);
console.log(city);
console.log(qualification);
*/
/*Task 4 — Find Data Types
var a="javascript";
let b=100;
let c=99.5;
var d=true;
var e
var f=0;
console.log(typeof("a"));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
*/ 

/*Task 5 — Student Array
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);
*/

/*Task 6 — Employee Object
var emp={
    Employeename:"Alex",
    Age:27,
    Role:"fullstack developer",
    Firstskill:["html","css","js","python"],
    Lastqualification:["B.Tech","M.Tech","MCA"],
    Workingstatus:true
}
console.log(emp.Employeename);
console.log(emp.Age);
console.log(emp.Role);
console.log(emp.Firstskill[0]);
console.log(emp.Lastqualification[emp.Lastqualification.length - 1]);
console.log(emp.Workingstatus);
*/
/*Task 7 — Calculator
let a = 20;
let b = 5;
console.log(Number(a) + Number(b));
console.log(Number(a) - Number(b));
console.log(Number(a) * Number(b));
console.log(Number(a) / Number(b));
console.log(Number(a) % Number(b));
console.log(Number(a) ** Number(b));
*/

/*Task 8 — Shopping Bill
var Shirt = 999
var Pant = 1499
var Shoes = 1999
var Bag = 799
var Total = Shirt + Pant + Shoes + Bag
console.log("Total amount is: " + Total);
*/

/*let a = 10;
let b = a++;
console.log(a);--->11
console.log(b);--->10
*/
/*
let a = 10;
let b = ++a;
console.log(a);--->11
console.log(b);---->11
*/
/*
let a = 10;
let b = a--;
console.log(a);--->9
console.log(b);--->10
*/
/*
let a = 10;
let b = --a;
console.log(a);--->9
console.log(b);--->9
*/
/*
let num = 10;
num+=5;
console.log(num);

let num1=10;
num1-=3;
console.log(num1);

let num2=10;
num2*= 2;
console.log(num2);

let num3=10;
num3/= 4;
console.log(num3);

let num4=10;
num4%= 3;
console.log(num4);

let num5=10;
num5**= 2;
console.log(num5);
*/

/*Comparison Operator Tasks
True
False
True
true
false
false
true
*/
/*

AND
true
false
false
false*/
/*

OR
/*true
true
true
false*/

/*NOT
false
true
true
false
*/

/*Task 15 — Combination
console.log(5 == "5" && !(5 === 5) || 6 > 7);
            true && false || false
            false || false
            false
console.log(10 > 5 && 8 < 12 || 4 === "4");
            true && true || false
            true || false
            true
console.log(7 === 7 && 10 != "10" || 5 >= 5);
            true && false || true
            false || true
            true
console.log(15 < 10 || 20 > 15 && 5 == "5");
            false || true && true
            false || true
            true    
*/
/*Task 16 — Voting
let age =20;
age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");
let age1 = 10;
age1 < 18 ? console.log("You are not eligible to vote") : console.log("You are eligible to vote");
*/
/*
let password=true;
password ? console.log("Login successful") : console.log("wrong password");
let password1=false;
password1 ? console.log("Login successful") : console.log("wrong password");
*/
/* Concatenation & Template String
let name = "Naveen";
let age = 25;
let city = "Trichy";
console.log("My name is " + name +".Iam " + age + " years old.I live in" + city + ".");
console.log(`My name is ${name}.Iam ${age} years old.I live in ${city}.`);
*/
/*
Task 19 — String Conversion
console.log(typeof(String(100)));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof([1, 2]));
*/
/*Task 20 — Number Conversion
0
0
123
NaN
1
0
NaN
0
*/

/*Task 22 — Voting Eligibility
let a = prompt("Enter your age:");
if(a>=18)
    {
console.log("You are eligible to vote");
}
else
{
console.log("You are not eligible to vote");
}
*/
/*Task 23 — Positive or Negative Number

let a = prompt("Enter The Number");
if(a>=0)
{
  console.log("The number is Positive");
}
else if(a<=0)
{
   console.log("The number is Negative");
}
else
{
   console.log("Zero");
}
   */

/*Task 24 — Grade System
let a = prompt("Enter the marks");
if(a>=90 && a<=100)
{
    console.log("Grade A");
}
else if(a>=80 && a<89)
{
    console.log("Grade B");
}
else if(a>=70 && a<79)
{
    console.log("Grade C");
}
else if(a>=60 && a<=69)
{
    console.log("Grade D");
}
else
{
    console.log("Fail");
}
*/

/*let age = 15;
let height = 190;
let weight = 75;

if (age >= 18) {
if (height >= 160) {
 if (weight >= 60) {
         alert("You are selected");
        }
        else {
            alert("Your weight is not eligible");
        }
    }
    else {
        alert("Your height is not eligible");
    }
}
else {
    alert("Your age is not eligible");
}
    */

/*let signal = "green";
switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;
}
*/
/*Task 27 — Day
let day=Number(prompt("Enter the number"));
switch(day)
{
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("sunday");
    break;
default :
    console.log("Invalid day");
}
*/

/*
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");
let tamil = Number(prompt("Enter Tamil mark:"));
let english = Number(prompt("Enter English mark:"));
let maths = Number(prompt("Enter Maths mark:"));
let total = tamil + english + maths;
let average = total / 3;

let grade;

if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else if (average >= 60) {
    grade = "D";
}
else {
    grade = "Fail";
}
let voting;

if (age >= 18) {
    voting= "Eligible";
}
else {
    voting = "Not Eligible";
}
console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average}
Grade: ${grade}
Voting: ${voting}
`);
*/