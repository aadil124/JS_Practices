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

// Fate arrow functions End**********************