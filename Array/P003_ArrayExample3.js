let tabs =["Google","Youtube","Chatgpt"];

//Close the last opened tab 

let lastclosedTab = tabs.pop();
console.log(lastclosedTab);//Chatgpt

//Add "GitHub" as the first tab  

tabs.unshift("GitHub");
console.log(tabs);//[ 'GitHub', 'Google', 'Youtube' ]
//Display tabs in reverse order
console.log(tabs.reverse());//[ 'Youtube', 'Google', 'GitHub' ]