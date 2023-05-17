// DOM : Document Object Model
// Dom is powerful concept for creating DOM dynamic web applications where user can perform interaction.

// Selectors : by ID , ClassName, TagName, querySelector , querySelectorAll
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// querySelector()
// querySelectorAll()

// document.createElement(p)-> create new element with given tag name
// element.appendChild(newElement)-> add new child element to existing element.

// element.addEventListener(eventType , function(){})->

// dom properties

// document.title -> to get title of current document
// element.innerHTML ->set or get the content of an html element
// element.innerText -> text like input

// Questions
//  take input from user as a string and calculate length of string using addEventListener method

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let stringName = document.getElementById("outPut").value;
  console.log(`The Length of the String is ${stringName.length} characters`);
  let res = document.getElementsByClass("result")[0];
  res.innerHTML = `The Length of the words is ${stringName.length}`;
});
