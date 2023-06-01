const submitData = document.querySelector("#submitData");
submitData.addEventListener("click", () => {
  showData();
  //   console.log("clicked");
});

const showData = () => {
  const fname = document.querySelector("#first_Name").value;
  console.log(fname);
  const lname = document.querySelector("#last_Name").value;
  console.log(lname);
  const email = document.querySelector("#email").value;
  console.log(email);
  const age = document.querySelector("#age").value;
  console.log(age);

  const tbodyData = "";
  const tbody = document.querySelector(".tbody");
  tbody.innerHTML = `
  <tr>
  <td>${fname}</td>
  <td>${lname}</td>
  <td>${email}</td>
  <td>${age}</td>
  </tr>
  `;
};
