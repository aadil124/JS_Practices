// Ecmascript-> React
// introduction to ES6 - Ecmascript 2015

// javascript -> brandon eich -> netscape-> mozilla browser->
// LiveScript -> 1995

// microsoft -> Jscript

// ECMA - European Computer Manufacturer Association ->

// ecmascript1-> 1997
// ecmascript5-> for each, array methods , map , filter, reduce

// ecmascript 6 -> Es6 or Ecmascript 2015
// new variable let const
// var vs let vs const
// array and object destructuring
// spread operator
// rest parameter
// loops-> for in vs for off
// Template literal
// Arrow function
// symbols
// classes
// Closures

//Babel is a JavaScript Compiler ->
// typescript
// coffescript

//converts your javascript code your of version into plane js code of older version

// console.log(num);  due to hoisting
// var num;

// Hoisting :->
// var -> it is traditional keyword in js which has scope of functional or global scope
// u can access the data throughout the function body

// Es 6
// let
// block Scope : let wont allow to access the variables before declaration.

// console.log(num);  // 6.js:44 Uncaught ReferenceError: Cannot access 'num' before initialization
// let num;

// examples
// 1)
// var num = 10;
// {
//   var num = 20;
//   console.log(num); // 20
// }
// console.log(num); //20

// 2)
// let num = 10;
// {
//   let num = 20;
//   console.log(num); // 20
// }
// console.log(num); //10

// 3)looping with var

// for (var i = 0; i <= 5; i++) {
//   console.log(i); // 0 1 2 3 4 5
// }
// console.log(i); // 6

// 4) loop with let
// for (let i = 0; i <= 5; i++) {
//   console.log(i); // 0 1 2 3 4 5
// }
// console.log(i); // caught ReferenceError: i is not defined

// 5)
// let course = "MERN";
// if (course === "MERN") {
//   var stream1 = "Front End Developer";
//   let stream2 = "Back End Developer"; // this is not accessible to outside loop
// }
// console.log(course); //MERN
// console.log(stream1); // Front End Developer
// console.log(stream2); //caught ReferenceError: stream2 is not defined

//6
// let course = "MERN";
// if (course != "MERN") {
//   var stream1 = "Front End Developer";
//   let stream2 = "Back End Developer";
// }
// console.log(course); //MERN
// console.log(stream1); // undefined
// console.log(stream2); //caught ReferenceError: stream2 is not defined

//7
// let getData = () => {
//   var name1 = "pradeep"; //var has fuctional scope
//   let name2 = "sameer";
// };
// getData();
// console.log(name1); // error message
// console.log(name2); // error message

/************************************************************************ */

// const - it is read only variable => once you assign const to any variable, u can not modify it
// const also a block scope
// examples
// 1)
// const num = 10;
// num = 11;
// console.log(num); //caught TypeError: Assignment to constant variable.

// 2)
// function myfun() {
//   var num1 = 1;
//   let num2 = 2;
//   const num3 = 3;
//   {
//     var num1 = 100;
//     let num2 = 200;
//     const num3 = 300;
//     console.log("inside block" + num1); //100
//     console.log("inside block" + num2); //200
//     console.log("inside block" + num3); //300
//   }
//   console.log("outside block" + num1); //100
//   console.log("outside block" + num2); //2
//   console.log("outside block" + num3); //3
// }
// myfun();
// console.log("outside Fun block" + num1); // error message
// console.log("outside Fun block" + num2);// error message
// console.log("outside Fun block" + num3);// error message


