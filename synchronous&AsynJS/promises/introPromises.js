const getPromiseBurger = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber % 2 === 0) {
    resolve("You will get Burger");
  } else {
    reject("You wont get Burger");
  }
});
console.log(getPromiseBurger);

getPromiseBurger
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// 2nd Question

const roomClean = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Room is cleaning up");
  }, 5000);
});

const removeGarbage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("removing garbage");
  }, 3000);
});

const getPrize = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("getting Prize for cleanup");
  }, 2000);
});

roomClean
  .then((room) => {
    console.log(room);
    removeGarbage
      .then((garbage) => {
        console.log(garbage);
        getPrize
          .then((prize) => {
            console.log(prize);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
