// print X pattern
// print hollow rectangle
// print 1234 triangles

/************************************** Start Example 1 ***************************************/

// function xPattern(n, string) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i == j || i + j === n + 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// }
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j === n + 1) {
      row += "X";
    } else {
      row += " ";
    }
  }
  // string += "\n";
  console.log(row);
}

// let res = xPattern(5, string);
// console.log(string);
/************************************** End Example 1   ***************************************/

/************************************** Start Example 2 ***************************************/
// let row = "";
// let N = 5;
// for (let i = 1; i <= N; i++) {
//   for (let j = 1; j <= N; j++) {
//     if (i === 1 || j === 1 || i === N || j === N) {
//       row += "X";
//     } else {
//       row += " ";
//     }
//   }
//   row += "\n";
//   // console.log(row);
// }
// console.log(row);

/************************************** End Example 2   ***************************************/

/************************************** Start Example 3 ***************************************/
let row = "";
let N = 5;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === N - 2 || j === N - 2) {
      row += "X ";
    } else {
      row += "  ";
    }
  }
  row += "\n";
}
console.log(row);
/************************************** End Example 3   ***************************************/
