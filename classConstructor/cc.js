class FoodItems {
  constructor(foodname, foodcolor) {
    this.foodName = foodname;
    this.foodColor = foodcolor;
  }

  purchased() {
    console.log("You have successfully purchased", this.foodName);
  }
  sell() {
    console.log("You have successfully sold", this.foodName);
  }
}

var food1 = new FoodItems("Banana", "yellow");
// food1.purchased(); //calling purchase method 
// food1.sell(); //calling sell method 


//Method chaining
food1.purchased().sell();    //cc.js:21 Uncaught TypeError: Cannot read properties of undefined (reading 'sell')



console.log(food1);
var food2 = new FoodItems("Orange", "orange");
console.log(food2);
var food3 = new FoodItems("Apple", "red");
console.log(food3);
var food4 = new FoodItems("Chiku", "Brown");
console.log(food4);
