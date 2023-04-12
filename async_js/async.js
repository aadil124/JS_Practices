// Async Examples

// console.log("Statement 1");
// setTimeout(() => {
//   console.log("Statement 2");
// }, 2000);
// console.log("Statement 3");
// console.log("Statement 4");

//creation of request object

const getTodos = () => {
  const request = new XMLHttpRequest();
  // console.log(request);

  //setting up request
  // console.log("Setting up request", request.readyState);

  // attached to event listener to object

  // readystatechange is a event which fires every time a state is changed (there are five states like 0,1,2,3,4)

  request.addEventListener("readystatechange", () => {
    //   console.log("Setting up request", request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      console.log("Setting up request", request.response);
    }
  });

  //initailization of request
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  // console.log("Setting up request", request.readyState);

  //send request to server
  request.send();
  // console.log("Setting up request", request.readyState);
};

getTodos();
getTodos();
getTodos();
