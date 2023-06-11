//Normal FUnction
// function myFun(){
//     //set of statment or logic
//     console.log("This is a simple function")
// }

//call or invoke the function
// myFun();
t;

//With parameter or arguments to a function with return keyword
// function getSum(num1,num2){
//     //logic
//     let result=num1+num2;//10+20=>30
//     return result;
//     //You can not use return for twice.

// }
// let num1=10;
// let num2=20;
// console.log(getSum(num1,num2));//caller function

//Function creation
// function calculateData(num1,num2){
//     //create a simple object
//     let calculateResult={
//         sum:num1+num2,
//         sub:num1-num2,
//         mul:num1*num2,
//         div:num1/num2,
//     }

//     return calculateResult; //return result
// }
// let result=calculateData(10,20);//caller function
// console.log(`The Addition of number is ${result.sum}`);
// console.log(`The Multipication of number is ${result.mul}`);
// console.log(`The Subtraction of number is ${result.sub}`);
// console.log(`The Division of number is ${result.div}`);

//Supply an array of numbers to function .
// function arraySum(...array){
//     //Logic
//     let sum=0;
//     //Iterate through the loop
//     for(let i=0;i<array.length;i++){
//         sum=sum+array[i];
//     }

//     return sum;//27
// }

// const numbers=[5,3,8,9,2];
// const result=arraySum(numbers);
// const result1=arraySum(5,3,8,9,7,1,);
// console.log(result);//22
// console.log(result1);

//Using Object with functions
// let student={
//     name:"Sohan",
//     semester:"7th Semester",
//     address:"Delhi",
//     email:"sohan@gmail.com",
//     phone:"91-123474837",
//     stream:"Computer Science"
// }

// //supply this object data to functions as arguments
// function getStudentData(obj){
//     console.log(`
//         Name: ${obj.name}
//         Sem:${obj.semester}
//         Address: ${obj.address}
//         EMail:${obj.email}
//         Phone:${obj.phone}
//         Stream:${obj.stream}
//     `)

// }
// getStudentData(student);

//Es-6->Default Argument functions ->
// in case, if function doesn't contain any value ,then it will use default value supplied
// to  function
// function calculateSum(num1=10,num2=20){
//     let sum=num1+num2;//300
//     console.log(sum);
// }
// calculateSum();
// calculateSum(100);//120
// calculateSum(100,200);

//Anonymous function
// const sum=function(num1,num2){
//      return num1+num2;
// }

// const result=sum(10,20);
// console.log(result);

//Anonymous function->single user function
// const array=[1,2,3,4,5];
// const sum=function(num1,num2){
//     return num1+num2;
// }

// const total=array.reduce(sum);//i am using a caller as an variable
// console.log(total);

//IIFE->

//IIFE->self invoked function with immediate execution.
// Applications->
// (function(num){
//     // let num=10;
//     console.log(num);//preventing the pollution of avoiding global & local conflicts
// })(10);

// console.log(num);

//IIFE functions.
const result = (function (num1, num2) {
  return num1 + num2;
})(10, 20);
console.log(result);

//Callback functions->

// Write below program using Named function,Anonymous function and IIFE function.
// 1.Write a program to reverse the all the name of string.
// Pankaj->jaknaP
// 2.Write a program to check if a number is palindrome or not.

// 1221->left or right to left
// NayaN=>
// 3.Write a program to sort the below data without using inbuilt function.

// 7,2,8,9,1

// 1,2,7,8,9->O/p

// 4.Write a program to check if a number is Armstrong Number  or not

// 5.Write a program to rotate an array element by k times.
// [1,2,3,4,5]
// o/p->[3,4,5,1,2]
