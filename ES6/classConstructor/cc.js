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
class vehicle {
  // create constructor
  constructor(brand, model, color, price) {
    // set the values of object properties using this keyword
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  // create a method to get data
  getSpecification() {
    let data = `Brand: ${this.brand}
    Model : ${this.model}
    Color : ${this.color}
    Price : ${this.price}
    `;

    return data;
  }
}
//lets create an object
let obj = new vehicle("maruti", "alt-100", "black", 400000);

// call method to access the data and print

console.log(obj.getSpecification());

/************************************End classes and objects *********************************/
