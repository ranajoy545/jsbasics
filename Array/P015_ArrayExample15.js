let failed_tests =["LoginFail","CheckoutFail","SearchFail"];

//Add "ProfileFail" 
failed_tests.push("ProfileFail");

console.log(failed_tests);

//Remove the first failed test 
let deleteditemfromFirst = failed_tests.shift();

console.log(deleteditemfromFirst);//LoginFail
console.log(failed_tests);//[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

//Create another copy of the failed tests array

let failedtests_copy = [...failed_tests];
console.log(failedtests_copy);//[ 'CheckoutFail', 'SearchFail', 'ProfileFail' ]

//Extract only the first 2 failed tests

let [t1,t2] = failed_tests;
console.log(t1);//CheckoutFail
console.log(t2);//SearchFail

//Replace "CheckoutFail" with "PaymentFail"

let index = failed_tests.indexOf("CheckoutFail");

failed_tests[index] = "PaymentFail";

console.log(failed_tests);//[ 'PaymentFail', 'SearchFail', 'ProfileFail' ]

//Convert all failures into a single comma-separated string

let failed_tests_single = failed_tests.join(",");

console.log(failed_tests_single);//PaymentFail,SearchFail,ProfileFail




