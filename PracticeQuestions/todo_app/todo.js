// let addTodo = document.getElementsByClassName("button")[0];
let addTodo = document.querySelector(".button");
addTodo.addEventListener("click", function () {
  //   let inputValue = document.getElementsByClassName("item")[0].value;
  let inputValue = document.querySelector(".item").value;
  //   console.log(inputValue);
  //   let showResult = document.getElementsByClassName("list")[0];
  let showResult = document.querySelector(".list");
  //   console.log(showResult);

  //create element
  let li = document.createElement("li");
  li.innerText = inputValue;
  //   showResult.appendChild(li);
  document.querySelector(".list").appendChild(li);
  //   document.getElementsByClassName("item")[0].value = "";
  document.querySelector(".item").value = "";
});
