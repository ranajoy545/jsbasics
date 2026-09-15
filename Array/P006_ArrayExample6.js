let testcases =["LoginTest","PaymentTest","SearchTest"];

//Create another copy of the same array 
let testcases_copy =[...testcases];
console.log(testcases_copy);

//Extract only the first 2 test cases
let[t1,t2] = testcases_copy;
console.log(t1);//LoginTest
console.log(t2);//PaymentTest

// Display test cases in reverse order 
let reverse_test_case = testcases_copy.reverse();
console.log(reverse_test_case);//[ 'SearchTest', 'PaymentTest', 'LoginTest' ]