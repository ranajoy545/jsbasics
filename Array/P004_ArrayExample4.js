let orders=["Pizza","Burger","Pasta"];


//Add "Sandwich" to the orders 
orders.push("sandwich");
console.log(orders);//[ 'Pizza', 'Burger', 'Pasta', 'sandwich' ]
console.log(orders.length);

//Remove the first order 
orders.shift();
console.log(orders);//[ 'Burger', 'Pasta', 'sandwich' ]
let commonorders = orders.join(",");
console.log(commonorders);//Burger,Pasta,sandwich


