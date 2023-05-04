// what is OOPS
// oops basically meant for dealing with object oriented programming concepts
// basically deals with classes and objects

//constructor -> it is the concept which comes right after the object creation.

// what is class?
// it a logical representation or blue print of structure of any design.
// class does not exit in real.

// what is objects?
// it is physical representation of particular entities or design.
// objects do exit in real world.

// way to create objects
//creation of class ans object with constructor, methods
// features of OOPs:
//inheritance.
// creation of constructor
// Methods
// polymorphism

/************************************Start classes and objects *********************************/

//ES-5 Standard
// function vehicle(brand, model, color, price) {
//   this.brand = brand;
//   this.model = model;
//   this.color = color;
//   this.price = price;
//   this.keyStart = function () {
//     console.log(this.model + " Starting");
//   };
// }
// let maruti = new vehicle("maruti", "alt-100", "black", 400000);
// maruti.keyStart();
// let tata = new vehicle("tata", "tata nexon", "white", 1200000);
// tata.keyStart();

// ES6 Standard
// class vehicle {
//   // create constructor
//   constructor(brand, model, color, price) {
//     // set the values of object properties using this keyword
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.price = price;
//   }

//   // create a method to get data
//   getSpecification() {
//     let data = `
//     Brand: ${this.brand}
//     Model : ${this.model}
//     Color : ${this.color}
//     Price : ${this.price}
//     `;

//     return data;
//   }
// }
// //lets create an object
// let obj = new vehicle("maruti", "alt-100", "black", 400000);
// let objtata = new vehicle("Tata", "Tata-Nexon", "White", 1200000);

// call method to access the data and print

// console.log(obj.getSpecification());
// console.log(objtata.getSpecification());

/************************************End classes and objects *********************************/

//Inheritance: code reusability ********************************
// //parent class
// class Man {
//   constructor(name) {
//     console.log("parent constructor");
//     this.name = name;
//   }
// }

// //child class
// class employee extends Man {
//   constructor(name, position) {
//     console.log("child constructor");
//     super(name);
//     this.position = position;
//   }
// }

// // class peon extends Man {}

// let parentobj = new Man("srinivas");
// let employeeobj = new employee("sameer", "developer");

// console.log(employeeobj.name);
// console.log(parentobj.name);
// console.log(employeeobj.position);

// examples

//************************************ Start example 1 **************************************/
// class Person {
//   static companyName = "Amazon"; // static member
//   constructor(name, age, designation, salary) {
//     // set the value
//     this.name = name;
//     this.age = age;
//     this.designation = designation;
//     this.salary = salary;
//   }

//   // instance method
//   getData() {
//     let personData = `
//   Name: ${this.name}
//   Age: ${this.age}
//   Designation: ${this.designation}
//   Salary: ${this.salary}
//   `;

//     console.log(personData);
//     // return data;
//   }

//   // static methods -> Class Name se call hoga
//   static getCompanyName() {
//     console.log(Person.companyName);
//     // return Person.companyName;
//   }
// }

// let person1 = new Person("Aadil", 28, "Web Developer", 25000);

// person1.getData();
// console.log(person1.getData());

// person1.getCompanyName();
// console.log(person1.getCompanyName()); //caught TypeError: person1.getCompanyName is not a function
// static funtion ko direct call nahi ker sakte hai.....us ko call kerne ke liye class ka use kerna hoga...
// Person.getCompanyName();
// console.log(Person.getCompanyName()); // aur agar return kare ge to yaha print hoga

// class employee extends Person {
//   static companyName = "Google";
//   constructor(name, age, designation, salary, location, country) {
//     super(name, age, designation, salary);
//     this.location = location;
//     this.country = country;
//   }
//   // instance methods
//   getData() {
//     let employeeData = ` Name: ${this.name}
//       Age: ${this.age}
//       Designation: ${this.designation}
//       Salary: ${this.salary}
//       Location: ${this.location}
//       Country: ${this.country}
//     `;
//     console.log(employeeData);
//   }

//   // static method
//   static getCompanyName() {
//     console.log(employee.companyName);
//   }
// }

// let employee1 = new employee(
//   "sameer",
//   25,
//   "Data Analyst",
//   50000,
//   "Mumbai",
//   "India"
// );
// employee1.getData();
// // employee1.getCompanyName(); //caught TypeError: employee1.getCompanyName is not a function

// employee.getCompanyName();
//************************************ End example 1 **************************************/

//************************************ Start example 2 **************************************/
// calculate area , perimeters of rectangle using oops concept

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  //logic to find area
  getArea() {
    return this.breadth * this.length;
  }
}

let rectArea = new Rectangle(10, 20);
console.log(` Area of Rectangle is ${rectArea.getArea()}`);

class Perimeters extends Rectangle {

}

let 

//************************************ End example 2 **************************************/
