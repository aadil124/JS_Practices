/************************************Using For Loop Start*********************************/

// declaration of the variables
// var n1 = 0,
//   n2 = 1,
//   next_num,
//   i;
// var num = parseInt(prompt(" Enter the limit for Fibonacci Series "));

// for (i = 1; i <= num; i++) {
//   // document.getElementById("fb").innerHTML = " <br> " + n1;
//   document.write(" <br> " + n1); // print the n1
//   next_num = n1 + n2; // sum of n1 and n2 into the next_num
//   n1 = n2; // assign the n2 value into n2
//   n2 = next_num; // assign the next_num into n2
// }

/************************************Using For Loop End*********************************/

/************************************Using while loop Start*********************************/

// declaration of the variables
// var n1 = 0,
//   n2 = 1,
//   next_num,
//   i = 1;
// var num = parseInt(prompt(" Enter the limit for Fibonacci Series "));

// while (i <= num) {
//   document.write(" <br> " + n1); // print the n1
//   next_num = n1 + n2; // sum of n1 and n2 into the next_num
//   n1 = n2; // assign the n2 value into n2
//   n2 = next_num; // assign the next_num into n2
//   i++;
// }

/************************************Using while loop End*********************************/

/************************************Using do while Loop Start*********************************/

// declaration of the variables
var n1 = 0,
  n2 = 1,
  next_num,
  i = 1;
var num = parseInt(prompt(" Enter the limit for Fibonacci Series "));

do {
  document.write(" <br> " + n1); // print the n1
  next_num = n1 + n2; // sum of n1 and n2 into the next_num
  n1 = n2; // assign the n2 value into n2
  n2 = next_num; // assign the next_num into n2
  i++;
} while (i <= num);

/************************************Using do while Loop End*********************************/
