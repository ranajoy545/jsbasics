let num =15;

let isprime = true;

for(let i = 2;i<=num;i++){
   if(num ===i){
    break;
   }

   if(num % i === 0){
     isprime = false;
     console.log("Number is not Prime:"+num);
     break;
   }
}
   
if(isprime === true){
    console.log("the number is prime:"+num);
}
