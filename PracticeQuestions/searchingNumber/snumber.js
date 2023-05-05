// list of elements given
// find given number is exits or not

let array1 = [5, 4, 6, 9, 8];

function SearchNumber(array1, num) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === num) {
      console.log(`${num} is exits in Array`);
      return;
    }
  }
  console.log(`${num} is not present in Array`);
}
SearchNumber(array1, 7);
