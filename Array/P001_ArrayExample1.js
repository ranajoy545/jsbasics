let arr =["Rahul","Priya","Amit"];

//Add "Sneha" to the employee list  

arr.push("Sneha");
console.log(arr);//[ 'Rahul', 'Priya', 'Amit', 'Sneha' ]
//Remove the last Employee from the list
let deleteditem1 = arr.pop();
console.log(deleteditem1);
console.log(arr);//[ 'Rahul', 'Priya', 'Amit' ]
//Add "Manager" at the beginning of the list  
arr.unshift("Manager");
console.log(arr);//[ 'Manager', 'Rahul', 'Priya', 'Amit' ]

//Remove the first employee from the list 
let deletedfirstitem = arr.shift();
console.log(deletedfirstitem);

