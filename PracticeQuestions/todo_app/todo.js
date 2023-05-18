let addTodo = document.getElementsByClassName("button")[0];
addTodo.addEventListener("click", function () {
  let inputValue = document.getElementsByClassName("item")[0].value;
  //   console.log(inputValue);
  let showResult = document.getElementsByClassName("list")[0];
  //   console.log(showResult);
  showResult.innerHTML = `<li>${inputValue}</li>`;
});
