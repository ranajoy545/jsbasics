let players = ["Virat","Rohit","Gill"];

console.log(players);//[ 'Virat', 'Rohit', 'Gill' ]

//Add "Hardik" to the team 
players.push("Hardik");

//Replace "Gill" with "KL Rahul" 

let index = players.indexOf("Gill");

players[index] = "KL Rahul";

console.log(players);//[ 'Virat', 'Rohit', 'KL Rahul', 'Hardik' ]

//Display players in reverse order
let reverse_players_order = players.reverse();
console.log(reverse_players_order);//[ 'Hardik', 'KL Rahul', 'Rohit', 'Virat' ]
