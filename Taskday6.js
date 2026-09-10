/*var name="Alex";
var dept="MCA";
var mark1=prompt("Enter the 1st mark");
var mark2=prompt("Enter the 2nd mark");
var mark3=prompt("Enter the 3rd mark");
var mark4=prompt("Enter the 4th mark");
var mark5=prompt("Enter the 5th mark");
var total=(Number (mark1)+Number(mark2)+Number(mark3)+Number(mark4)+Number(mark5));
var avg=(Number (mark1)+Number(mark2)+Number(mark3)+Number(mark4)+Number(mark5))/5;
console.log("Name :",name);
console.log("deptartment :",dept);
console.log("total :",total);
console.log("Average :",avg);
if(avg>=90)
{
    console.log("A Grade");
}
else if (avg >= 75 &&  avg <= 89)
     {
    console.log("B Grade");
}
else if (avg >= 60 &&  avg <= 74)
     {
    console.log("C Grade");
}
else if (avg >= 50 &&  avg <= 59)
     {
    console.log("D Grade");
}
else{
    console.log("Fail");
}
    */

/*let employee=
{
name: "Arun",
role : "Developer",
salary : 45000,
experience : 2,
};
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee1) {

    let basicSalary = employee1.salary;
    let bonus = 0;

    if (employee1.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    }
    else if (employee1.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee1.name);
    console.log("Role:", employee1.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);
*/

/*Task 3 — Product Filter System
let products = [
 { name: "Laptop", price: 55000, category: "electronics" },
 { name: "Mouse", price: 800, category: "electronics" },
 { name: "Shirt", price: 1200, category: "fashion" },
 { name: "Shoes", price: 2500, category: "fashion" },
 { name: "Phone", price: 30000, category: "electronics" }
];

let pro=products.filter((c,i,t) => {
    return c.price>2000;
});
console.log(pro);

let pro1=products.filter((c,i,t) =>{

    return c.category==="electronics";
});
console.log(pro1);

let pro2=products.find((c,i,t)=>{
    return c.price < 1000;
});
console.log(pro2);

let total=products.reduce((acc,c,i,t)=>{
    return acc + c.price;
},0);
console.log(total);

let pro3=products.some((c,i,t)=>
{
    return c.price>50000;
});
console.log(pro3);
let pro4=products.every((c,i,t)=>
{
    return c.price>500;
});
console.log(pro4);
*/

/////////Task 4 — Employee Management
/*let employee=[
{id: 101,name: "Kavin", role: "Frontend Developer",salary: 40000},
{id: 102,name: "Alex", role: "Data Analyst",salary: 60000},
{id: 103,name: "Arun", role: "Software Developer",salary: 90000},    
{id: 104,name: "Priya", role: " desinger",salary: 55000},
{id: 105,name: "Raja", role: "Backend developer",salary: 70000},
{id: 106,name: "Jack", role: "Testing",salary: 100000},
];

let name=employee.map((c,i,t)=>{
    return c.name;

});
console.log(name);

let earnings=employee.filter((c,i,t)=>
{
    return c.salary>40000;
});
console.log(earnings);

let find=employee.find((c,i,t)=>{
    return c.id===103;
});
console.log(find);

let total=employee.reduce((acc,c,i,t)=>{
    return acc+c.salary;

},0);
console.log("total",total);

let high=employee.find((c,i,t)=>{
    return c.salary>90000;
});
console.log(high);

let salary1=employee.sort(function(a,b)
{
    return b.salary - a.salary;
});
console.log(salary1);

let newemployee = [
    {
        name: "Alex"
    },
    {
        name: "Raja"
    },
    {
        name: "Naveen"
    },
    {
        name: "Ramesh"
    }
];

console.log(newemployee);
*/


/*Task 5 — Shopping Cart
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

let total = cart.reduce((sum, c) => {
    return sum + (c.price * c.quantity);
}, 0);

let discount = 0;

if (total > 50000) {
discount = total * 10 / 100;
}

let finalAmount = total - discount;

    console.log("Total cart value:", total);
    console.log("Discount:", discount);
    console.log("Final payable amount:", finalAmount);
}
calculateCart(cart);
*/

/*Task 6 — Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let names = students.map((c) => {
    return c.name;
});
console.log("Student names:", names);

let mark1 = students.filter((c) => {
    return c.mark > 80;
});

console.log(mark1);

let findStudent = students.find((c) => {
    return c.name === "Priya";
});

console.log("Priya:", findStudent);

let total = students.reduce((sum, c) => {
    return sum + c.mark;
}, 0);

let average = total / students.length;

console.log("Average mark:", average);


// 5. Check whether anyone failed
let failed = students.some((c) => {
    return c.mark < 40;
});

console.log("Anyone failed:", failed);

let passed = students.every((c) => {
    return c.mark > 40;
});

console.log("Everyone above 40:", passed);

let sorted = students.sort((a, b) => {
    return b.mark - a.mark;
});

console.log("Sorted by marks:", sorted);
*/

/*Task 8 — String Analyzer

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
let multi = numbers.map((c) => {
    return c * 2;
});
console.log("multiple:", multi);

let even = numbers.filter((c) => {
    return c % 2 === 0;
});
console.log("Even numbers:", even);

let greater = numbers.filter((c) => {
    return c > 15;
});
console.log("Greater than 15:", greater);

let first = numbers.find((c) => {
    return c > 20;
});
console.log(first);

let total = numbers.reduce((sum, c) => {
    return sum + c;
}, 0);
console.log("Total:", total);

let any = numbers.some((c) => {
    return c > 40;
});
console.log("Any number greater than 40:", any);
let positive = numbers.every((c) => {
    return c > 0;
});
console.log("Every number is positive:", positive);

let sorted = numbers.sort((a, b) => {
    return b - a;
});
console.log("Highest to lowest:", sorted);
*/

/*🔥 Final Mini Project — Employee Dashboard

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
console.log("ALL EMPLOYEES:");
employees.forEach((c) => {
    console.log(c);
});

let search = employees.find((c) => {
    return c.name === "Priya";
});
console.log("SEARCH RESULT:", search);

let department = employees.filter((c) => {
    return c.department === "IT";
});
console.log("IT EMPLOYEES:", department);

let salaryFilter = employees.filter((c) => {
    return c.salary > 50000;
});
console.log("SALARY ABOVE 50000:", salaryFilter);

let totalSalary = employees.reduce((sum, c) => {
    return sum + c.salary;
}, 0);
console.log("TOTAL SALARY:", totalSalary);

let highest = employees.reduce((max, c) => {
    if (c.salary > max.salary) {
        return c;
    }
    else {
        return max;
    }
});

console.log("HIGHEST SALARY:", highest);

let experience = employees.filter((c) => {
    return c.experience > 3;
});

console.log("EXPERIENCE ABOVE 3 YEARS:", experience);

let lowToHigh = [...employees].sort((a, b) => {
    return a.salary - b.salary;
});
console.log("LOW TO HIGH:", lowToHigh);

let highToLow = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("HIGH TO LOW:", highToLow);


let totalEmployees = employees.length;
let averageSalary = totalSalary / totalEmployees;
console.log("STATISTICS:");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary:" + totalSalary);
console.log("Highest Salary:" + highest.salary);
console.log("Average Salary:" + Math.round(averageSalary));
*/