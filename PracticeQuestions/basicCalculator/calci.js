const add = () => {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  //   console.log(parseInt(num1) + parseInt(num2));
  let ans = parseInt(num1) + parseInt(num2);
  console.log(ans);
  let result = document.getElementsByClassName("showResult")[0];
  console.log(result);
  result.innerHTML = `<h1>The Addition of ${num1} and ${num2} is ${ans}</h1>`;
};
const sub = () => {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let ans = parseInt(num1) - parseInt(num2);
  console.log(ans);
  let result = document.getElementsByClassName("showResult")[0];
  result.innerHTML = `<h1>The Subtraction of ${num1} and ${num2} is ${ans}</h1>`;
};
const mul = () => {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let ans = parseInt(num1) * parseInt(num2);
  console.log(ans);
  let result = document.getElementsByClassName("showResult")[0];
  result.innerHTML = `<h1>The Multiplication of ${num1} and ${num2} is ${ans}</h1>`;
};
const div = () => {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let ans = parseInt(num1) / parseInt(num2);
  console.log(ans);
  let result = document.getElementsByClassName("showResult")[0];
  result.innerHTML = `<h1>The Division of ${num1} and ${num2} is ${ans}</h1>`;
};
