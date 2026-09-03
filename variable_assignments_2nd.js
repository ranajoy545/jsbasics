console.log("--------assignment part 2 --------------------")


console.log("-------Question 1 ---------")

var x=10;
{
   var x=20;

}
console.log(x);//20

console.log("-------Question 2 ---------")

let x1 =10;
{

    let x1 =20;

}
console.log(x1);//10


console.log("-------Question 3 ---------")

const x2=10;

{

    const x2=20;


}
console.log(x2);//10

console.log("-------Question 4 ---------")

let age=25;

{
    let age=30;
    console.log(age);//30
}
   console.log(age);//25

   console.log("-------Question 5 ---------")

   var x3=10;
   {
    var x3=20;
    console.log(x3);//20
   }
 console.log(x3);//20



 console.log("-------Question 6 ---------")
//  console.log(age_1);//ReferenceError: Cannot access 'age_1' before initialization
  let age_1 =25;
  console.log(age_1);

  console.log("-------Question 7 ---------")

  console.log(age_2);//undefined

  var age_2=25;


  console.log("--------Question 8-------------");

  var x4=10;
  {
    let x4=20;
    console.log(x4);//20
  }
  console.log(x4);//10


  console.log("--------Question 9-------------");
 let x5=10;

 {
   //var x5=20;//SyntaxError: Identifier 'x5' has already been declared var is not block scoped
 }
 console.log(x5);

 console.log("--------Question 10-------------");

 const x6 =10;
 {
   // var x6 =20;//SyntaxError: Identifier 'x5' has already been declared var is not block scoped
 }
 console.log(x6);



 



