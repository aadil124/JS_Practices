/*********************************** start example 1  *****************************************/
// 1) list of elements given
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
/*********************************** End example 1  *****************************************/

/*********************************** start example 2  *****************************************/
//2 )
//[8, 7, 6, 8, 3, 4, 8, 8, 8, 6, 9, 8, 2]
// count of number 8

// function countOfNumber(arr, numToSearch) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numToSearch) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [8, 7, 6, 8, 3, 4, 8, 8, 8, 6, 9, 8, 2];
// let numToSearch = 8;
// let result = countOfNumber(arr, numToSearch);
// console.log(`count of ${numToSearch} is ${result} times`);
/*********************************** End example 2  *****************************************/

/*********************************** start example 3  *****************************************/
//3)
// [8, 7, 6, 8, 3, 4, 8, 8, 8, 6, 9, 8, 2]
// print  index number of last 8

// function indexNumber(arr, numToSearch) {
//   let count = 0;
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numToSearch) {
//       count++;
//       if (count === 6) {
//         index = i;
//         break;
//       }
//     }
//   }
//   return index;
// }

// let arr = [8, 7, 6, 8, 3, 4, 8, 8, 8, 6, 9, 8, 2];
// let numToSearch = 8;
// let resultIndex = indexNumber(arr, numToSearch);
// console.log(`last index value of ${numToSearch} is ${resultIndex}`);
/*********************************** End example 3  *****************************************/

/*********************************** start example 4  *****************************************/
//3)
// 7,8,3,4,8
// print  index number of last 8

function indexNumber(arr, numToSearch) {
  let count = 0;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numToSearch) {
      count++;
      if (count === 6) {
        index = i;
        break;
      }
    }
  }
  return arr[index];
}

let arr = [8, 7, 6, 8, 3, 4, 8, 8, 8, 6, 9, 8, 2];
let numToSearch = 8;
let resultIndex = indexNumber(arr, numToSearch);
console.log(resultIndex);
/*********************************** End example 4  *****************************************/
