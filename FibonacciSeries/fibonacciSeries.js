// console.log("helooo111111");

var a = 0;
var b = 1;
var c;

const num = prompt("Please enter a limit for series");
//  document.getElementById("fbseries").innerHTML = a;
console.log("series: ");

for (let i = 1; i <= num; i++) {
  console.log(a);
  document.getElementById("fbseries").innerHTML = a;
  c = a + b;
  a = b;
  b = c;
}


// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

