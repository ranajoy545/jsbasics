let inventory = ["Mobile","Laptop","Tablet","Camera"];

//Remove "Tablet" from inventory 
let deleteditem3 = inventory.splice(2,1);
console.log(deleteditem3);//[ 'Tablet' ]
console.log(inventory);//[ 'Mobile', 'Laptop', 'Camera' ]
//Add "Smart Watch" after "Laptop"  
inventory.splice(2,0,"Smart Watch");
console.log(inventory);//[ 'Mobile', 'Laptop', 'Smart Watch', 'Camera' ]

//Create a duplicate copy of updated inventory  
let inventory_copy = [...inventory];
console.log(inventory_copy);//[ 'Mobile', 'Laptop', 'Smart Watch', 'Camera' ]

