// 1.Write a logic to reverse string of your name  John Doe  eoD nhoJ

// let names = "John Doe";

// // let newname = names.split();  // ['John Doe']
// let newname = names.split(""); // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']
// // let newname = names.split(" "); // ['John', 'Doe']
// // console.log(newname);

// let reversename = newname.reverse();
// // console.log(reversename);

// // let joinName = reversename.join(); // e,o,D, ,n,h,o,J
// let joinName = reversename.join(""); // eoD nhoJ
// console.log(joinName);

/*******************************Reverse Name without in-build function********************** */
//input : Hello, World!
//output: !dlroW ,olleH

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
let str = "Hello, World!";
let names = "John Doe";

let result = reverseString(str);
let resultName = reverseString(names);
console.log(result);
console.log(resultName);

/*******************************Reverse Name without in-build function********************** */
