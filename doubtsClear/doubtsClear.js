const person = {
  fname: "John",
  age: 21,
};
for (let item in person) {
  console.log(item, person[item]);
}

const employee = [
  {
    fname: "John",
    age: 21,
  },
  {
    fname: "joe",
    age: 26,
  },
];
for (let key in employee) {
  console.log(key, employee[key]);
}
for (let value of employee) {
  console.log(value.age);
}
employee.forEach((e) => {
  console.log(e.age);
});

//functions
function getData(item, list) {
  return list.push(item); // will return length of array = 3
}

const data = getData("Delhi", ["Chennai", "Mumbai"]);
console.log(data); // 3

// Rest parameter-> ...  for infinte number of arguments
function getData2(...item) {
  return item;
}
const data2 = getData2("Delhi", "Chennai", "Mumbai");
console.log(data2); // ['Delhi', 'Chennai', 'Mumbai']

// if we want to skip first parameter then use as below
function getData3(item1, ...item) {
  return item;
}
const data3 = getData3("Delhi", "Chennai", "Mumbai");
console.log(data3); // ['Chennai', 'Mumbai']

// sir ka yaha se
// let data=[
//     {
//         name:"Jenny",
//         age:23,
//     },
//     {
//         name:"Joe",
//         age:25,
//     }
// ]

// for(const d of data){
//     console.log(d.name);
// }

// const set=new Set([10,10,20,30,30,40,40,50,50,50]);

// console.log(set);//10 20 30 40

//Array Destructuring
// const numbers=[5,8,2,,9,1];
// const [y,z]=numbers;

// console.log(y,z);//5

//spread operator=>
// const user={ name:"Abhijeet",age:28};
// const admin={admin:true,...user};

// console.log(admin);

// const data={
//     name:"Rajshekar",
//     loc:"Mumbai",
//     age:24,
//     password:"admin12345"
// };

// const stringifieddata=JSON.stringify(data,['name','password']);
// console.log(stringifieddata);

// console.log(Number(10)===Number(10));
// console.log(Boolean(true)===Boolean(true));
// console.log(Symbol('a')===Symbol('abc'));

//Rest parameter->... infinite number arguments
// Spread Operator->...

// function getData(item1,...item){
//    return item;
// }

// const data=getData('Delhi','Chennai',"Benagluru")
// console.log(data);

// let data=["India","Canada","Brazil","France","Germany"];
// let newcountries=["China","USA","Australia"];
//spread operator

//  data=newcountries;//copy by reference
//  console.log(data);
//  console.log(newcountries);
//  data.push("Japan");

//  console.log(data);
//  console.log(newcountries);

// let newdata=[...newcountries,"New Zealand","Switzerland",...data,"Japan"];
// console.log(newdata);

// // spread operator and Rest parameter->...
// function getData(fruitslist,remainingfruit,...items){
//     return [...fruitslist,...items,remainingfruit]

// }

// let result=getData(["Apple","Banana"],"Grapes","Mangoes")
// console.log(result);

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterone = new Counter();
counterone.increment(); //1
counterone.increment(); //2

// const countertwo=counterone;
const countertwo = new Counter();
countertwo.increment();

console.log(counterone.count); //2
console.log(countertwo.count); //1

// var a = 10;

// {
//   let a = 20;
//   //   var b = 20;
//   console.log(a);
// }

// console.log(a);
// console.log(b);
const rate = 10;
// console.log(rate);
function get() {
  console.log(rate);
  if (rate == undefined) {
    var rate = 6;
    return rate;
  } else {
    return rate;
  }
}
get();
// console.log(get());

// var rate = 10;
// console.log(rate);

// function fun() {
//   var rate;
//   console.log(rate);
// }

// console.log(rate);
// fun();
