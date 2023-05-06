// list of elements given
// find given number is exits or not

// let array1 = [5, 4, 6, 9, 8];

// function SearchNumber(array1, num) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === num) {
//       console.log(`${num} is exits in Array`);
//       return;
//     }
//   }
//   console.log(`${num} is not present in Array`);
// }
// SearchNumber(array1, 7);

//2 )
// 7,8,3,4,8
// count of number 8

function countOfNumber(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 8) {
      count++;
    }
  }
  return count;
}

let arr = [7, 8, 3, 4, 8,6,9,8,2];
let result = countOfNumber(arr);
console.log(`count of 8 is ${result} times`);
