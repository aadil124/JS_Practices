const maxCount = 100;
const textMsg = () => {
  const textMessage = document.querySelector("#textMessage").value.length;
  console.log(textMessage);
  const showChar = document.querySelector("#showchars");
  let remainingCount = maxCount - textMessage;
  showChar.innerHTML = remainingCount;
};

// for password change

const changePassword = () => {
  const checkBox = document.querySelector("#check_box");
  const passBox = document.querySelector("#pass_box");
  const attributeType = passBox.getAttribute("type");
  console.log(attributeType);
  if (attributeType === "password") {
    passBox.setAttribute("type", "text");
  } else {
    passBox.setAttribute("type", "password");
  }
};

// for select tag
const selectBox = document.querySelector("#selecttag");

console.log(selectBox.value);
selectBox.addEventListener("change", () => {
  let selectedOption = selectBox.value;
  const spanTag = document.querySelector("#span1");
  spanTag.innerHTML = selectedOption;
});
