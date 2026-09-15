let attendenceList = ["Ankit","Riya","Karan"];

//Add "Neha" at the beginning 
attendenceList.unshift("Neha");
console.log(attendenceList);//[ 'Neha', 'Ankit', 'Riya', 'Karan' ]

//Remove the last student from the list 
let deleteditemfromLast=attendenceList.pop();

console.log(deleteditemfromLast);//Karan
console.log(attendenceList);//[ 'Neha', 'Ankit', 'Riya' ]

//Create a separate copy of the attendance list 
let attendenceList_copy = [...attendenceList];
console.log(attendenceList_copy);//[ 'Neha', 'Ankit', 'Riya' ]