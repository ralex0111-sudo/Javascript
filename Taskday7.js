/* Task 1
let apilink = "https://fakestoreapi.com/productS";
fetch(apilink).then((data) => {
    return data.json();
})
.then((jsData) => {
console.log(jsData);

let title = jsData.map((c, i, t) => {
    return c.title;
});
console.log("Title", title);

let price = jsData.map((c, i, t) => {
    return c.price;
});
console.log("Price", price);


let category = jsData.map((c, i, t) => {
    return c.category;
});
console.log("category", category);

let newarray = jsData.map((c, i, t) => {
    return {
    category: c.category,
    title: c.title,
    price: c.price
    };
});

console.log(newarray);


let filter=newarray.filter((c,i,t)=>{
    return c.price>100;
});
console.log(filter);

let electro=newarray.find((c,i,t)=>{
    return c.category==="electronics";
});
console.log(electro);

let reduce=newarray.reduce((acc,c,i,t)=>{
    return acc+c.price;
},0);
console.log("TOTAL:",reduce);

let sort=newarray.sort((a,b)=>{
    return b.price-a.price;
});
console.log(sort);
})
.catch((error)=>{
console.warn(error.message);
})
.finally(()=>{
    console.log("SUCCESSFULLY COMPLETED")
});
*/



/*Task 2 — Product Category Dashboard

let apilink="https://fakestoreapi.com/products"
fetch(apilink).then((data)=>{
    return data.json();
})
.then((jsData)=>{
    console.log(jsData);
console.log("===== Product Details =====");
let products = jsData.length;
console.log("Total products:",products);

let electro=jsData.filter((c,i,t)=>{
    return c.category==="electronics";
});
    console.log("Electronics:", electro.length);

let jewel=jsData.filter((c,i,t)=>{
    return c.category==="jewelery"
});
console.log("Jewelery :",jewel.length);

let mens=jsData.filter((c,i,t)=>{
    return c.category==="men's clothing";
});
console.log("Men's Clothing :",mens.length);

let womens=jsData.filter((c,i,t)=>{
    return c.category==="women's clothing";
});
console.log("Women's Clothing :",womens.length);

let price=jsData.filter((c,i,t)=>{
    return c.price>695
});
console.log("Highest Price :",price[0].price);

let lowprice=jsData.filter((c,i,t)=>{
    return c.price<8
});
console.log("Lowest Price :",lowprice[0].price);
});
*/

/*Task 3 — User & Post API
let apilink="https://jsonplaceholder.typicode.com/users"
fetch(apilink).then((data)=>{
    return data.json();
})
.then((jsData)=>{
    console.log(jsData);
let user=jsData.map((c,i,t)=>{
    return c.username
})
console.log(user);

let user1=jsData.map((c,i,t)=>{
return `username: '${c.username}', email: '${c.email}'`;
});
console.log(user1);

let find=jsData.find((c,i,t)=>{
    return c.id===5;
});
console.log(find);

let city=jsData.filter((c,i,t)=>{
    return c.address.city==="Gwenborough";

});
console.log(city);
});


let apilink2="https://jsonplaceholder.typicode.com/posts"
fetch(apilink2).then((data)=>{
    return data.json()
})
.then((jsData)=>{
    console.log(jsData);
let post=jsData.filter((c,i,t)=>{
    return c.userId===1;
})
console.log(post);

let post1 = jsData.filter((c, i, t) => {
    return c.userId===1;
});
console.log("Number of Post :",post1.length);


let post2=jsData.find((c,t,i)=>{
    return c.title.length>50
})
console.log(post2);
});
*/

/*Task 4 — API + Search

let api="https://fakestoreapi.com/products"
fetch(api).then((data)=>{
 return data.json() 
})
.then((jsData)=>{
    console.log(jsData);

let a = prompt("Enter The Product");
let b = Number(prompt("Enter the maximum price"));

let total= jsData.filter((c, i, t) => {
    return c.category === a && c.price <= b;
});

console.log(total);
});
*/

/*Task 5 — API Shopping Cart
let apilink = "https://fakestoreapi.com/products";

fetch(apilink)
.then((data) => {
    return data.json();
})
.then((jsData) => {
    jsData.forEach((c) => {
        console.log(c.id, c.title, c.price);
    });
let one = Number(prompt("Enter 1st ID"));
let two = Number(prompt("Enter 2nd ID"));

let add = [];

let product1 = jsData.find((c) => c.id === one);
let product2 = jsData.find((c) => c.id === two);

    add.push(product1);
    add.push(product2);

    console.log("Cart:", add);

let total = add.reduce((acc, c,i,t) => {
        return acc + c.price;
    }, 0);

    console.log("Total:", total);
let discount = 0;

    if (total > 200) {
        discount = total * 20 / 100;
    }
    else if (total > 100) {
        discount = total * 10 / 100;
    }
let finalAmount = total - discount;

    console.log("Discount:", discount);
    console.log("Final Amount:", finalAmount);
});
*/

/*Task 6 — FakeStore Product Report
let apilink="https://fakestoreapi.com/products"
fetch(apilink).then((data)=>{
    return data.json()
})
.then((jsData)=>{
    console.log(jsData);

let title=jsData.forEach((c,i,t)=>{
 console.log("Title:", c.title);
});
let productNames = jsData.map((c, i, t) => {
        return c.title;
    });

    console.log("Product Names:", productNames);
let price=jsData.filter((c,i,t)=>{
    return c.price>100
})
console.log("Price above 100 :",price);

let total=jsData.reduce((acc,c,i,t)=>{
    return acc+c.price
},0)
console.log("Total Price :",total);

let some=jsData.some((c,i,t)=>{
    return c.price>100
})
console.log("price above 100",some);

let every=jsData.some((c,i,t)=>{
    return c.price<100
})
console.log("price less than 100",every);

let sort=jsData.sort((a,b)=>{
    return b.price-a.price;
});
console.log(sort);
})
.catch((error)=>{
console.warn(error.message);
})
.finally(()=>{
    console.log("SUCCESSFULLY COMPLETED")
});
*/   
