// const submitData = document.querySelector("#submitData");
// submitData.addEventListener("click", () => {
//   showData();
//   //   console.log("clicked");
// });

// const showData = () => {
//   const fname = document.querySelector("#first_Name").value;
//   console.log(fname);
//   const lname = document.querySelector("#last_Name").value;
//   console.log(lname);
//   const email = document.querySelector("#email").value;
//   console.log(email);
//   const age = document.querySelector("#age").value;
//   console.log(age);

//   const tbodyData = "";
//   const tbody = document.querySelector(".tbody");
//   tbody.innerHTML = `
//   <tr>
//   <td>${fname}</td>
//   <td>${lname}</td>
//   <td>${email}</td>
//   <td>${age}</td>
//   </tr>
//   `;
// };

// ********************************* Another Method Start ***********************************

let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let n = 1;
let x = 1;
function getData() {
  let addrown = document.getElementById("show");

  let newrow = addrown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("age").value;

  let cell1 = newrow.insertCell(0);
  let cell2 = newrow.insertCell(1);
  let cell3 = newrow.insertCell(2);
  let cell4 = newrow.insertCell(3);

  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

// ********************************* Another Method End ***********************************
