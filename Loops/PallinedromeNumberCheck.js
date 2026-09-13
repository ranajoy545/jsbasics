let num=121;
let original = num;
let rev = 0;
let rem = 0;
while(num>0){
    rem = num % 10;
    num = Math.floor(num /10);
    rev = rev*10 + rem;

}
console.log(rev);

if(original === rev){
    console.log("Number is Pallinedrome");
}
else{
     console.log("Number is not Pallinedrome");
}