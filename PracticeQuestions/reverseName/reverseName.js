// 1.Write a logic to reverse string of your name  John Doe  eoD nhoJ

let names = "John Doe";

// let newname = names.split();  // ['John Doe']
let newname = names.split(""); // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']
// let newname = names.split(" "); // ['John', 'Doe']
// console.log(newname);

let reversename = newname.reverse();
// console.log(reversename);

// let joinName = reversename.join(); // e,o,D, ,n,h,o,J
let joinName = reversename.join(""); // eoD nhoJ
console.log(joinName);
