let products =["Mobile","Laptop","Mouse"];

//Add "Keyboard" to the cart  
products.push("Keyboard");
console.log(products);//[ 'Mobile', 'Laptop', 'Mouse', 'Keyboard' ]
console.log(products.reverse());//[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]
//Convert all cart items into a single string separated by " | "
let cartitems = products.join(" | ");
console.log(typeof cartitems);
console.log(cartitems);


