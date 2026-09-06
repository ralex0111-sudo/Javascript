/*for(let i = 1; i <= 10; i++) 
    {
    console.log(i);
}*/

/*for (let a=10 ; a >= 1 ; a--)
{
    console.log(a);
}*/


/*for(let b=2 ; b<=20 ; b+=2)
{
    console.log(b);
}*/

/*Task 4 — Odd Numbers
for (c=1 ; c<20 ; c+=2)
{
    console.log(c)
}
*/

/* Task 5 — Multiplication Table
let num = 5;
for (let i = 1; i <= 10; i++) 
    {
console.log(num + " * " + i + " = " + (num * i));
}
*/

/*Task 6 — Countdown
let a=10
while(a>=1)
{
    console.log(a);
    a--
}
*/
/*Task 7 — Sum of Numbers
let i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log(sum);
*/
/* do

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);

/*Task 9 — Do While Understanding
10
do will executes first then it execute the condition*/

/* For...of
let name="javascript";
for(let a of name)
{
    console.log(a);
}*/

/*let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let a of fruits){
    console.log(a);
}*/

/*Task 12 — Student Names
let stud=["Alex","Naveen","praveen","priya","jack"]
for(let b of stud)
{
    console.log(b);
}*/

/*Task 13 — Employee Object
let employee = {
name: "Arun",
age: 25,
role: "Developer",
city: "Chennai"
};

for(let c in employee)
{
    console.log(c,employee[c]);
}
    */

/*Task 14 — Product Object
let product={
productName :"laptop",
price : 25000,
brand : "dell",
category : "intel",
stock : 2026,
};
for(let c in product)
{
    console.log(product[c]);
}
    */
/*
function welcome()
{
    let a="WELCOME TO JAVASCRIPT";
    console.log(a)
}
welcome()
welcome()
welcome()
*/
/*
function greet(Naveen,Arun,priya){
console.log("hello naveen");
console.log("hello Arun");
console.log("hello Priya");
}
greet()
*/
/*Task 17 — Multiple Parameters
function student(name, age, department) {
    console.log(name);
    console.log(age);
    console.log(department);
}

student("ALEX", 25, "MCA");
*/

/*Task 18 — Addition Function
function add(a, b)
{
return(a+b)
}
add(10,20);
let result = add(10,20);
console.log(result);
*/

/*Task 19 — Salary
function salary(amount) {
return amount;
}
salary(5000);
let a = salary(5000);
console.log(a);
*/

/*Task 20 — Bonus Calculator
function bonus(salary, bonusAmount) {
return (salary + bonusAmount)
}
let total = bonus(50000, 5000);
console.log(total);
*/
/* Default Parameter
function employee(name, role = "Developer") 
{
console.log(name);
console.log(role);
}
employee("Arun");
employee("Priya", "Designer");
*/

/*function square(number) 
{
return number * number;
}
console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(7));
console.log(square(12));
*/

/*
let calculate = function(a, b) {
return a + b;
};
console.log(calculate(10, 20));
*/

/*
let multiply = (a, b) => 
{
return a * b;
};
console.log(multiply(5, 5));
*/

/*
10
20
30
10
var-function scoped so it can be accessed throughout the test() function.
let-block-scoped so it exists only inside the { } of the if.
const-also block-scoped so it exists only inside the if.
*/
/*Task 26 — Predict
undefined because the value is hoisted Before

Task 27
let scope do not work in before hoisting

cannot access c

var is global scope
let is block scope
const is block scope
*/
/*(function() 
{
console.log("Welcome to JavaScript");})();
(function(product, discount) {
    console.log(product + " has a " + discount + "% discount");
})("Laptop", 20);
*/
/*
function welcome() 
{
console.log("Welcome");
}
function execute(callback) {
callback();
}
execute(welcome);
*/

/*function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let result = cashback();
for (let value of result) {
    console.log(value);
}
*/

/*
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
]
console.log("All Employees");
for (let employee of employees) {
    console.log(employee);
}

console.log("Keys and Values");

for (let employee of employees) {
for (let key in employee) {
        console.log(key, employee[key]);
    }

}

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

console.log(" Employee Information");
displayEmployee("Arun", 25, "IT", "Developer", 40000);

function getSalary(employee) {
    return employee.salary;
}
let salary = getSalary(employees[0]);

console.log("Salary:", salary);
if (salary >= 40000) {
    console.log("Salary is 40000 or above");
} else {
    console.log("Salary is below 40000");
}

let annualSalary = (salary) => {
    return salary * 12;
};
console.log("Annual Salary:", annualSalary(40000));
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("Employee Benefits");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}
    */