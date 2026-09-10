
//problem 1
console.log()
let price = "500";
price = Number(price);

let quantity = "3";

quantity = Number(quantity);

let total_price= price * quantity;//500 * 3 =1500;

console.log(total_price);

console.log(typeof total_price);

//problem 2

console.log("---------problem 2--------------------");

let item_price = "1000";

let item_tax="200";

let final_price = Number(item_price) + Number(item_tax);

console.log(final_price);//1200

//problem 3 

console.log("---------problem 3--------------------");

let actual ="100";

let exp = 20;

console.log(actual + exp);//10020

//problem 4 

console.log("----------problem 4---------------")


let Actual_value ="100";

let Expected_value = 20;

console.log(Actual_value - Expected_value);//80


console.log("----------problem 5---------------")

let actualprice ="100";

let expectedprice = 100;

console.log(actualprice == expectedprice);//true

console.log(actualprice === expectedprice);//false

console.log("---------problem 6------------");

let act_item_price = "500";
act_item_price = Number(act_item_price);

let exp_item_price =500;

console.log(act_item_price === exp_item_price);//true

console.log("---------problem 7 --------------")

let timeout = "30000";
console.log(typeof timeout);

timeout = Number(timeout);

console.log(timeout);

console.log(typeof timeout);

console.log("---------problem 8 --------------");

let order_id =12345;

order_id = String(order_id);

console.log("ORDER-"+order_id);


console.log("---------problem 9 --------------");

let status = "true";
console.log(typeof status);//string


status = Boolean(status);

console.log(typeof status);//boolean


console.log(status);//true

console.log("---------problem 10 --------------");

 let quantity1 = "5";

 let quantity2 = Number(quantity1);

 console.log("Expected Quantity is:"+quantity2);//5
 console.log(typeof quantity2);//number


 console.log("---------problem 11 --------------");


 let item_price1 ="799";

 let item_qty1="2";

 let item_discount = "100";

 let final_item_price = (item_price1 * item_qty1) -item_discount;//799 *2 -100 =1498

 console.log(final_item_price);
 console.log(typeof final_item_price);