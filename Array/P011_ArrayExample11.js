let bugs =["Bug101","Bug102","Bug103"];

//Add "Bug104"
bugs.push("Bug104");
console.log(bugs);//[ 'Bug101', 'Bug102', 'Bug103', 'Bug104' ]
console.log(bugs.length);

//Remove "Bug102" 

let deleteditem = bugs.splice(1,1);
console.log(deleteditem);//[ 'Bug102' ]
console.log(bugs);//[ 'Bug101', 'Bug103', 'Bug104' ]

//Create a copy of the bug list 

let bugs_copy =[...bugs];
console.log(bugs_copy);//[ 'Bug101', 'Bug103', 'Bug104' ]
