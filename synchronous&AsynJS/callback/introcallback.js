// function callbackfunctin(){
//     console.log("Callback function called");
// }

// function myfun(){
//     console.log("My function called");
//     callbackfunctin();

// }

// myfun(callbackfunctin);

// function getDataFromServer(){
//     setTimeout(() => {
//         const data={message:'Hello Buddy!'};
//         processData(data);

//     }, 4000);
// }
// function processData(data){
// console.log(data.message);
// }

// getDataFromServer(processData);

// const compute=(num1,num2,callback)=>callback(num1,num2);
// const add=(num1,num2)=>num1+num2;
// const sub=(num1,num2)=>num1-num2;
// const multiply=(num1,num2)=>num1*num2;
// const div=(num1,num2)=>num1/num2;

// console.log(compute(10,20,add));//add function is callback function
// console.log(compute(10,20,sub));//sub function is callback function
// console.log(compute(10,20,multiply));//mul function is callback function
// console.log(compute(10,20,div));//divide function is callback function

// const array=["Apple","Mangoes","Banana","Oranges"];
// array.map(function(item){
//     console.log(item);
// })

// map->internally uses callback

// function myfun1(){
//     console.log("I am first function");
//     //create a set Timeout function
//     setTimeout(() => {
//         console.log("I am functione executing after 1 second")
//     }, 1000);
// }

// function myfun2(){
//     console.log("I am second function");

//     setTimeout(() => {
//         console.log("I am functione executing after 3 second")
//     }, 3000);
// }

// myfun2();
// myfun1();
// Setimeout->it is one of web api that executes once delay in time is over

// What if we create multiple callback function ? dependent function
// Prepare a pizza
// 1.Raise a dough
// 2.rolldough
// 3.poursauce
// 4.Add toppings
// 5.Bakepizza
// 6.DeliverPizza
// Pizza is deleivered successfully

const time = 1000;
function raiseDough(callback) {
  console.log("Waiting for Dough...");
  setTimeout(() => {
    console.log("Dough is ready");
    callback();
  }, 4 * time);
}

function rollDough(callback) {
  console.log("Rolling a dough...");
  setTimeout(() => {
    console.log("Dough is rolled");
    callback();
  }, 3 * time);
}

function pourSauce(callback) {
  console.log("Waiting for pouring sauce...");
  setTimeout(() => {
    console.log("Sauce is poured...");
    callback();
  }, 2 * time);
}

function addToppings(callback) {
  console.log("Adding toppings...");
  setTimeout(() => {
    console.log("Toppings are added...");
    callback();
  }, 3 * time);
}

function bakePizza(callback) {
  console.log("Baking the pizza...");
  setTimeout(() => {
    console.log("Pizza is baked...");
    callback();
  }, 8 * time);
}

function deleivePizza(callback) {
  console.log("Deleivering the pizza...");
  setTimeout(() => {
    console.log("Pizza is deleivered...");
    callback();
  }, 5 * time);
}

// Try to call one function inside function
// callback hell ->
// When we use callback with multiple function that too with dependent event->
// it leads problem callbackhell
raiseDough(() => {
  rollDough(() => {
    pourSauce(() => {
      addToppings(() => {
        bakePizza(() => {
          deleivePizza(() => {
            console.log("Pizza is successfully deleivered to client!");
          });
        });
      });
    });
  });
});

// callback->asynchronour approach
// callback=>s
// 1.less readable in case if function number are more
// 2.difficult to debug in case if there in any of function

// What is callback?
// what is callstack?
// what is event loop?
// what is Callback limitation?->Callback hell

// callback=promises->async and await

// advance ->200% interview
