let movies =["Inception","Avatar","Titanic"];

//Add "Interstellar" to the movie list
movies.push("Interstellar");
console.log(movies);//[ 'Inception', 'Avatar', 'Titanic', 'Interstellar' ]

//Replace "Titanic" with "Jawan"
let index = movies.indexOf("Titanic");
movies[index] = "Jawan";

console.log(movies);//[ 'Inception', 'Avatar', 'Jawan', 'Interstellar' ]

//Convert all movie names into a single string separated by "-"
let movie_single_string = movies.join("-");
console.log(movie_single_string);//Inception-Avatar-Jawan-Interstellar
