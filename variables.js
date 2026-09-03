"use strict";
let x = 10;
let y = 18;
console.log("the sum is :" + (x + y));
const z = 10;
console.log(z);
let d = "rana";
if (x == y) {
    console.log("hi i am ranajoy");
}
else {
    console.log("false");
}
function add(f, e) {
    console.log(f + e);
}
add(10, "ranajoy");
for (let i = 0; i < 10; i++) {
    console.log("the value of i:" + i);
}
console.log("_________________________________________________________________________");
while (x < 12) {
    x++;
    console.log("the value of x:" + x);
}
do {
    y++;
    console.log(y);
} while (y < 20);
while (y < 30) {
    ++y;
    console.log(y);
}
const fire = () => {
    console.log("hello");
};
fire();
let sum = (s, g) => {
    console.log(s + g);
};
sum(10, 30);
const arr = ["ranajoy", "binoy", "saikat"]; //declare an array
//console.log(arr[2]);
console.log(arr.length);
for (const a of arr) {
    console.log(a);
}
let greet = function () {
    console.log("hi i am an annonimus function");
};
greet();
let price = function (qty, price) {
    console.log(qty * price);
};
price(10, 20);
let arr1 = ["ranajoy", 120, "chandradeepa", 230];
for (const element of arr1) {
    console.log(element);
}
let prices = [100, 200, 300];
let finalprice = prices.map(price => price + price * 0.18);
console.log(finalprice);
let marks = [45, 67, 37, 89];
let eligible = marks.filter(marks => marks > 60);
console.log(eligible);
marks.push(92);
console.log(marks);
arr.push("henry", "hawkins");
console.log(arr);
console.log("the length of the Array:" + arr.length);
console.log(marks.length);
arr.pop();
arr.pop();
console.log(arr);
const chai = {
    name: "masala chai",
    price: 20,
    ishot: true
}; //object creation
console.log(chai); //prints the object
console.log(chai.name); // prints the object values
console.log(chai.price); //print the object values
let student = {
    name: "ranajoy",
    course: "Btech"
};
console.log(student);
console.log(student.name);
//default parameter and optional parameter
function discount(price, discount) {
    if (discount) {
        let finalpriceafterdiscount = price - discount;
        console.log(finalpriceafterdiscount);
    }
    else {
        console.log(price);
    }
}
discount(1000, 100);
discount(100);
//default parameter
function calculatebill(amount, discount = 100) {
    let finalamount = amount - discount;
    console.log(finalamount);
}
calculatebill(500);
calculatebill(500, 100);
let mycourse1 = {
    name: "Btech",
    coursefees: 1200,
    ispublished: true
};
let mycourse2 = {
    name: "Bcom",
    coursefees: 900,
    ispublished: false
};
console.log(mycourse2.name);
console.log(mycourse1.name);
console.log(mycourse1.coursefees);
console.log(mycourse1);
console.log(mycourse2);
let testdata1 = {
    username: "admin",
    password: "admin@123",
    user_type: "Admin"
};
let testdata2 = {
    username: "ranajoy",
    password: "user@123",
    user_type: "User"
};
let user1 = {
    username: "ranajoy27",
    password: "rana@1234"
};
let user2 = {
    username: "admin",
    password: "pass@1234"
};
console.log(user1.password);
console.log(user2.username);

console.log(1+"2"+3);
console.log(100-"50"/true);

