/*************************************** Start Example 1 ************************************* */
// [0,1,0,1,1,0,0]
// segregate all 0's left side and all 1's right side
// ans: [0,0,0,0,1,1,1]

// function segregateNumber(arr) {
//   let newArray = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === 0) {
//       newArray.unshift(arr[i]);
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// let arr = [0, 1, 0, 1, 1, 0, 0];
// let res = segregateNumber(arr);
// console.log(`New Array: ${res}`);

/*************************************** End Example 1 ************************************* */

/*************************************** Start Example 2 ************************************* */
// [0,1,0,1,1,0,0]
// segregate all 0's left side and all 1's right side
// ans: [0,0,0,0,1,1,1]

function segregateNumber(arr) {
  let newArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      newArray.unshift(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let arr = [0, 1, 0, 1, 1, 0, 0];
let res = segregateNumber(arr);
console.log(`New Array: ${res}`);

/*************************************** End Example 2 ************************************* */
