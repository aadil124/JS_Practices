// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
/*************************************************************************************** */
// sum of all even number thats comes in range of 1 to 50
// var sum = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(`sum of all even number is ${sum}`);
/*************************************************************************************** */

/*************************************************************************************** */
// break and continue keywords: which can be used to change the behavior of loops
// stop or continue

// break -> it is a keyword used to take exit out of the loop. it will terminate the execution of running loops

// let i = 1;
// while (i <= 10) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// continue -> it is a keyword used to skip a part of an iteration.

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  if (i != 5) {
    continue;
  }
  console.log(i);
}

/*************************************************************************************** */
