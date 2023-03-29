// simple functions

// function greet() {
//   console.log("Hello World!");
// }
// greet();

// functions expressions start*********************************

// const greeting = function greet(name) {
//   console.log(`Hello ${name}`);
//   console.log("Hellooo " + name);
// };

// greeting("aadil");

// functions expressions End*********************************

// greeting2("aabid");  //Uncaught ReferenceError: Cannot access 'greeting2' before initialization
// const greeting2 = function greet(name) {
//   console.log(`Hello ${name}`);
//   console.log("Hellooo " + name);
// };

// Fate arrow functions start**********************

const greetings = () => {
  console.log("Hello arrow functions");
};
greetings();

const greetings2 = () => console.log("Hello arrow functions2");
greetings2();

const classes = (value) => {
  console.log(`Hello ${value} classes`);
};
classes("progressive");

const calAreaOfCircle = (rad) => {
  console.log(`Area of Circle is ${3.14 * rad ** 2}`);
};
calAreaOfCircle(5);

// Return functions value
const areaOfSquare = (l, b) => {
  return l * b;
};
let result = areaOfSquare(4, 5);
console.log(`Area of Square is ${result}`);

const greets = () => {
  return "Welcome to JS Classroom";
};
let message = greets();
console.log(`${message}`);

// tax invoice

const taxInvoice = (products, tax) => {
  let total = 0;
  for (let counter = 0; counter < products.length; counter++) {
    total = total + products[counter] + products[counter] * tax;
  }
  return total;
};

let taxAmount = taxInvoice([10, 30, 45, 60], 0.35);
console.log(`The Total Tax Amount is ${taxAmount}`);

// Fate arrow functions End**********************
