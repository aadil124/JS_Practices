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

//practice array of object

const employees = [
  {
    id: 101,
    name: "Pradeep",
    position: "Jr. Developer",
    salary: 50000,
    skills: ["C", "C++", "Java", "Javascript"],
  },
  {
    id: 102,
    name: "Shivam",
    position: "Sr. Developer",
    salary: 80000,
    skills: ["React", "Vue.js", "Next.js", "Redux"],
  },
  {
    id: 103,
    name: "Sohan",
    position: "Sr. Manager",
    salary: 100000,
    skills: ["Leadership", "Communication", "Team managnent"],
  },
  {
    id: 104,
    name: "Jenny",
    position: "Designer",
    salary: 60000,
    skills: ["Graphic Designer", "UI/UX Designer", "Adobe Creative Suite"],
  },
];

// using for each
employees.forEach((employee) => {
  console.log(`
Employee ID: ${employee.id}
Employee name: ${employee.name}
Employee position: ${employee.position}
Employee salary: ${employee.salary}
Employee skills: ${employee.skills}
`);

  //   for (let key in val) {
  //     console.log(val[key]);

  //     // val[key].skills.forEach((skill) => {
  //     //   console.log(skill);
  //     // });
  //     // for (let i = 0; i <= val[key].length; i++) {
  //     //   console.log(val[key][i]);
  //     // }
  //   }
});

// using for of

// for (let data of employees) {
//   console.log(data);

//   for (let key in data) {
//     console.log(data[key]);
//   }
// }
