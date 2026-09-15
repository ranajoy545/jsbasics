let courses =["JavaScript","Playwright","Cypress"];

//Remove the first course
let deletedfirstitem = courses.shift();
console.log(deletedfirstitem);//JavaScript
console.log(courses);//[ 'Playwright', 'Cypress' ]

//Add "TypeScript" at the beginning  
courses.unshift("TypeScript");
console.log(courses);//[ 'TypeScript', 'Playwright', 'Cypress' ]

//Extract only the last 2 courses 
let[c1,c2,c3] = courses;
console.log(c2);//Playwright
console.log(c3);//Cypress


