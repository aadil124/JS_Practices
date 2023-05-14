/********************************************* Start MAP ************************************* */
// What is MRF ?
// why we need MRF ?
// this method  internally refer the concept of callback
// MAP-> map function that iterates over all elements of an array and objects based on index value.

let employees = [
  {
    id: 101,
    name: "pardeep",
    designation: "Jr Developer",
    yearOfExp: 2,
    salary: 30000,
  },
  {
    id: 102,
    name: "Abhishek",
    designation: "Sr Developer",
    yearOfExp: 5,
    salary: 80000,
  },
  {
    id: 103,
    name: "Suman",
    designation: "Dot Net Developer",
    yearOfExp: 12,
    salary: 100000,
  },
  {
    id: 104,
    name: "john",
    designation: "Administrator",
    yearOfExp: 7,
    salary: 50000,
  },
  {
    id: 105,
    name: "Sumit",
    designation: "React Developer",
    yearOfExp: 4,
    salary: 70000,
  },
];

// for each

// create empty array
// let employeeName = [];

// employees.forEach((emp) => {
//   return employeeName.push(emp.name);
// });
// console.log(employeeName);

// using MAP

let employeeNamesUsingMap = employees.map((emp) => {
  return emp.name;
});
console.log(employeeNamesUsingMap);

let empDesignation = employees.map((emp) => emp.designation);
console.log(empDesignation);

/********************************************* End MAP *************************************** */
/**************************************** Start Reduce *************************************** */
// Reduce -> it uses callback mechanism internally and reduced your array element or object data into a single unit.

// get salary of the all employees

let totalSalary = employees.reduce((prev, curr) => {
  return prev + curr.salary;
}, 0);
console.log(totalSalary);

// Highest year of experience with reduce

let highestYearOfExperience = employees.reduce((prev, curr) => {
  // if (prev.yearOfExp > curr.yearOfExp) {
  //   return prev;
  // } else {
  //   return curr;
  // }

  return prev.yearOfExp > curr.yearOfExp ? prev : curr; // using ternary operator
}, 0);

console.log(highestYearOfExperience);

/****************************************** End Reduce *************************************** */
