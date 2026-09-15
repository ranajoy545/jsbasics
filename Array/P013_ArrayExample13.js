let contact_name =["Ram","Shyam","Mohan"];

//Add "Sita" at the beginning  
contact_name.push("Sita");
console.log(contact_name);//[ 'Ram', 'Shyam', 'Mohan', 'Sita' ]

//Remove the last contact 
let deleteditemfromLast = contact_name.pop();
console.log(deleteditemfromLast);//Sita
console.log(contact_name);//[ 'Ram', 'Shyam', 'Mohan' ]


//Extract only the first 2 contacts 
let[c1,c2] = contact_name;
console.log(c1);//Ram
console.log(c2);//Shyam

