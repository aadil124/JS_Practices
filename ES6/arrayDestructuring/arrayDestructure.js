/*************************** start Array Destructuring****************************************/
// It is a breaking process of an array element into a single variable is the concept of array Destructuring
// examples
//1)
// let numbers = [10, 20, 30, 40, 50];
// let num1, num2, num3;

// [num1, num2, num3] = numbers;
// console.log(num1, num2, num3);

/*************************** End Array Destructuring****************************************/

/*************************** Start Object Destructuring****************************************/
// Object Destructuring : Extract required amount of data as per your need
// examples
// 1)
// let employee = {
//   name1: "aadil",
//   age: 28,
//   designation: "Full Stack Developer",
//   address: {
//     city: "Bhivandi",
//     state: "Maharashtra",
//     country: "India",
//   },
// };

// let { name1, age, designation } = employee; // object destructure

// console.log(
//   `Name: ${name1}
// Age: ${age}
// Designation: ${designation}`
// );

// let { city, state, country } = employee.address;

// console.log(
//   `city: ${city}
// state: ${state}
// country: ${country}`
// );

//2) Destructuring of function through object

// const getData = ({ fname, lname, age }) => {
//   console.log(`Name: ${fname} ${lname}
//   Age: ${age}`);
// };

// const person = {
//   fname: "John",
//   lname: "smith",
//   age: 22,
// };
// getData(person);

// 3)
// const getData = ({ fname, lname, age }) => {
//   return `Name: ${fname} ${lname}
//   Age: ${age}`;
// };

// const person = {
//   fname: "John",
//   lname: "smith",
//   age: 22,
// };
// console.log(getData(person));

/*************************** End Object Destructuring****************************************/

/*************************** Start Template literal****************************************/
// Template literal : it is a concept in which we can create customized string.
// backticks -> ` `
// variables -> ${variableNames}
/*************************** End Template literal****************************************/

/*************************** Start Spread operators****************************************/
// Spread operators: Spread operators is one of the way in which we spread out the elements of an array or an object

// syntax-> ...

// Examples
// 1)
// let numbers = [45, 67, 32, 83, 90, 24, 78];
// let min = Math.min(...numbers);
// console.log(min);

// IF YOU WANT TO COMBINE THE ELEMENTS OF ONE ARRAY INTO ANOTHER ARRAY AND PRINT THE RESULT TO WHOLE.
// 1)
// let array1 = [10, 20, 30, 40, 50];
// let array2 = [...array1, 60, 70, 80];
// console.log(array2);
// console.log(array1);
// 2)
// let data = ["a", "b", "c", "d", "e"];
// let newData = ["z", "x", "y", ...data, "k", "l", "m"]
// console.log(newData);
// 3)
// let android = ["xiaomi", "realme", "onePlus", "samsung", "oppo", "vivo"];
// let iphones = ["iphone 6", "iphone 7", "iphone 8", "iphone9", "iphone10"];
// let allphones = [...android, ...iphones, "Nokia"];
// console.log(allphones);

// 4)
// const user1 = {
//   name: "John",
//   loc: "Mumbai",
// };
// const user2 = {
//   name: "dom",
//   loc: "Bengaluru",
// };

// let merged = { ...user1, ...user2 };
// console.log(merged);
/*************************** End Spread operators****************************************/

/*************************** Start  Rest Parameter****************************************/
// Rest Parameter : rest parameter also uses the same syntax as spread operator
// ...
// rest parameter should also be used with function
// Rest parameter should be last formal argument in function .
// u can not take any arguments after rest parameter

// examples
//1)
// function getSum(...arrays) {
//   let sum = 0;
//   for (let i = 0; i < arrays.length; i++) {
//     sum += arrays[i];
//   }
//   return sum;
// }
// console.log(getSum(10, 20, 30)); //60
// console.log(getSum(10, 20, 30, 40, 50)); //150

//2) rest parameter ke baad koi argument nahi lega error dega...rest parameter se pahele argument le ga but wo skip ker ke last parameter ko hi lega.
// function getSum(...arrays,num1) { //caught SyntaxError: Rest parameter must be last formal parameter (
//   let sum = 0;
//   for (let i = 0; i < arrays.length; i++) {
//     sum += arrays[i];
//   }
//   return sum;
// }
// console.log(getSum(10, 20, 30));
// console.log(getSum(10, 20, 30, 40, 50));

//3)
function getSum(num1, num2, ...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    sum += arrays[i];
  }
  return sum;
}
console.log(getSum(10, 20, 30)); //30 -> yaha 10 aur 20 ko skip ker dega Q ke wo last formal argument ko hi consider kerta hai
console.log(getSum(10, 20, 30, 40, 50)); //120

// IF YOU WANT TO SKIP FEW ELEMENTS THEN USE REST PARAMETERS ELEMENT, REST PARAMETERS CAN BE USED.

/*************************** End  Rest Parameter****************************************/

/*************************** Start Practice Questions****************************************/
//Practice Questions
// Create a data of an array and object
// fname ,lname , age , degree, position,salary
// use array and object destructuring to print template literals

const personData = {
  fname: "Prince",
  lname: "Khan",
  age: 28,
  degree: "BE in Mechanical",
  position: "Web Developer",
  salary: "3 LPA",
};

let { fname, lname, age, degree, position, salary } = personData;
console.log(`
Name: ${fname} ${lname}
Age: ${age}
Degree: ${degree}
position: ${position}
Salary: ${salary}
`);
/*************************** End Practice Questionsr****************************************/
