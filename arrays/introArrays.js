//there are 3 ways to create arrays

//Array literals
// let cities = ["Mumbai", "Bengaluru", "Chennai", "Kolkata", "Delhi"]; //traditionally
// console.log(cities);

// Array instance -> new keyword
// let cities = new Array();
// cities[0] = "Mumbai";
// cities[1] = "Bengaluru";
// cities[2] = "Chennai";
// cities[3] = "Kolkata";
// cities[4] = "Delhi";
// console.log(cities);
// for (let index = 0; index < cities.length; index++) {
//   console.log(cities[index]);
// }

/// create an array using array constructor -> passing as argument
let cities = new Array("Mumbai", "Bengaluru", "Chennai", "Kolkata", "Delhi");
console.log(cities);