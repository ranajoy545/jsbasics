let songs =["Song1","Song2","Song3"];

//Display playlist in reverse order
let reverse_songs = songs.reverse();
console.log(reverse_songs);//[ 'Song3', 'Song2', 'Song1' ]
//Remove the last song 
let deleteditemfromLast = songs.pop();
console.log(deleteditemfromLast);//Song1
console.log(songs);//[ 'Song3', 'Song2' ]

//Add "NewSong" at the beginning
songs.unshift("NewSong");
console.log(songs);//[ 'NewSong', 'Song3', 'Song2' ]

//Convert playlist into a single string 
let single_song = songs.join(" ");
console.log(single_song);//NewSong Song3 Song2