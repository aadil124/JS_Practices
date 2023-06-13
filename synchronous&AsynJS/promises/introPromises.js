const countdown = document.querySelector(".countdown");
let timer = 10;

countdown.innerText = timer--;
setTimeout(() => {
  countdown.innerText = timer--;
  setTimeout(() => {
    countdown.innerText = timer--;
    setTimeout(() => {
      countdown.innerText = timer--;
      setTimeout(() => {
        countdown.innerText = timer--;
        setTimeout(() => {
          countdown.innerText = timer--;
          setTimeout(() => {
            countdown.innerText = timer--;
            setTimeout(() => {
              countdown.innerText = timer--;
              setTimeout(() => {
                countdown.innerText = timer--;
                setTimeout(() => {
                  countdown.innerText = timer--;
                  setTimeout(() => {
                    countdown.innerText = "Welcome to Callback Hell!!";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

const promiseobj = new Promise((resolve, reject) => {
  //Business logics
  setTimeout(() => {
    const data = ["Apple", "Oranges", "Mangoes", "Grapes", "Pianapple"];
    console.log(data.length); //5
    if (data.length === 0) {
      resolve(data);
    } else {
      reject("Something is not good...");
    }
  }, 3000);
});

console.log(promiseobj);
//then->to print the result coming from fullfilled state  of promises-
// catch =>it to print the error message coming from rejected state of promise object
promiseobj
  .then((result) => {
    //any logic looping
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Guess the number =>1 to 10->

// const value=5;
// //create a promise constructor
// const promise=new Promise((resolve,reject)=>{
//     //Generate a random number
//     const randomNumber=Math.floor(Math.random()*10);
//     console.log(randomNumber);

//     //check if the random is equals to guessed values
//     if(randomNumber===value){
//         resolve("Hurray!You have guessed a number correctly!");
//     }else{
//         reject("Oops!You Guessed a wrong number.Plz Try again!");
//     }
// })

// console.log(promise)

// const promiseobj=new Promise((resolve, reject) => {
//     const randomNumber=Math.floor(Math.random()*10)+1;
//     if(randomNumber%2==0){
//         resolve("Here is your promised Burger");
//     }else{
//         reject("Reject->Your promised burger is rejected");
//     }
// })
// console.log(promiseobj)
// promiseobj.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let data=10;
//         resolve(data);
//     }, 2000);
// })

// promise.then((result)=>{
//     console.log(result);//10
//     return result*2;//20
// }).then((result)=>{
//     console.log(result);//20
//     return result*2;//40
// }).then((result)=>{
//     console.log(result);//40
//     return result*2;//80
// }).then((result)=>{
//     console.log(result);//80
//     return result*2;//160
// }).then((result)=>{
//     console.log(result);//160
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("FInally executed successfully")
// })

//Promise Chaining with dependent events->
// 1.project round->
// 2.Technical Round
// 3.Hr Round
// Finally ->You will be getting offer

// 1.Project Round
let doProject = new Promise((resolve, reject) => {
  //Doing the project
  let isProjectDone = true;
  if (isProjectDone) {
    resolve("Project is Done");
  } else {
    reject("Project is Not done");
  }
});

//2.Technical Round->create a promise
let attendTechnical = new Promise((resolve, reject) => {
  let isAttendingTechround = false;
  if (isAttendingTechround) {
    resolve("Technical ROund is completed successfully");
  } else {
    reject("Technical ROund is Not completed ");
  }
});

//3rd promise->
let attendHrRound = new Promise((resolve, reject) => {
  //Attending Hr round
  let isAttendingHrround = true;
  if (isAttendingHrround) {
    resolve("HR Round is completed successfully");
  } else {
    reject("HR Round is not completed successfully");
  }
});
//Call the promise and chained this promised one inside other

doProject.then((msg) => {
  let themsg = `${msg}`;
  attendTechnical.then((msg) => {
    themsg += `${msg}`;
    attendHrRound
      .then((msg) => {
        themsg += `${msg}`;
        console.log(
          `${themsg} . Finally You have completed all ROunds.Please wait for results...`
        );
      })
      .catch((msg) => {
        console.log(`${msg}`);
      })
      .catch((msg) => {
        console.log(`${msg}`);
      })
      .catch((msg) => {
        console.log(`${msg}`);
      });
  });
});

// Promise->Chaining->100's promises

// Promise Methods-

// 1st questions
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
// Create 3 promises
// 1.roomclean->5000
// 2.removeGarbage->3000
// 3.getPrize->2000

// use promise chaining on same

const roomClean = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isRoomCleaned = true;
    if (isRoomCleaned) {
      resolve("Room is cleaning up");
    } else {
      reject("Room is not cleaned up");
    }
  }, 5000);
});

const removeGarbage = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isGarbageRemove = true;
    if (isGarbageRemove) {
      resolve("removing garbage");
    } else {
      reject("garbage not removed yet");
    }
  }, 3000);
});

const getPrize = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isPrizeGot = true;
    if (isPrizeGot) {
      resolve("getting Prize for cleanup");
    } else {
      reject("Not getting Prizes for cleanup");
    }
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


  //28April 2023
  //Guess the number =>1 to 10->

// const value=5;
// //create a promise constructor 
// const promise=new Promise((resolve,reject)=>{
//     //Generate a random number
//     const randomNumber=Math.floor(Math.random()*10);
//     console.log(randomNumber);

//     //check if the random is equals to guessed values
//     if(randomNumber===value){
//         resolve("Hurray!You have guessed a number correctly!");
//     }else{
//         reject("Oops!You Guessed a wrong number.Plz Try again!");
//     }
// })


// console.log(promise)


// const promiseobj=new Promise((resolve, reject) => {
//     const randomNumber=Math.floor(Math.random()*10)+1;
//     if(randomNumber%2==0){
//         resolve("Here is your promised Burger");
//     }else{
//         reject("Reject->Your promised burger is rejected");
//     }
// })
// console.log(promiseobj)
// promiseobj.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let data=10;
//         resolve(data);
//     }, 2000);
// })

// promise.then((result)=>{
//     console.log(result);//10
//     return result*2;//20
// }).then((result)=>{
//     console.log(result);//20
//     return result*2;//40
// }).then((result)=>{
//     console.log(result);//40
//     return result*2;//80
// }).then((result)=>{
//     console.log(result);//80
//     return result*2;//160
// }).then((result)=>{
//     console.log(result);//160
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("FInally executed successfully")
// })



//Promise Chaining with dependent events->
// 1.project round->
// 2.Technical Round
// 3.Hr Round 
// Finally ->You will be getting offer 


// 1.Project Round
// let doProject=new Promise((resolve, reject) =>{

//     setTimeout(() => {
//           //Doing the project 
//     let isProjectDone=true;
//     if(isProjectDone){
//         resolve("Project is Done")
//     }else{
//         reject("Project is Not done")
//     }
//     }, 1000);
  
// });

//2.Technical Round->create a promise 
// let attendTechnical=new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         let isAttendingTechround=false;
//         if(isAttendingTechround){
//             resolve("Technical ROund is completed successfully")
//         }else{
//             reject("Technical ROund is Not completed ")
//         }
//     }, 2000);
   
// })


//3rd promise->
// let attendHrRound=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          //Attending Hr round
//    let isAttendingHrround=false;
//    if(isAttendingHrround){
//     resolve("HR Round is completed successfully")
//    }else{
//     reject("HR Round is not completed successfully")
//    }
//     }, 3000);
  
// })
//Call the promise and chained this promised one inside other
 
// doProject.then((msg)=>{
//     let themsg=`${msg}`;
//     attendTechnical.then((msg)=>{
//         themsg+=`${msg}`;
//         attendHrRound.then((msg)=>{
//             themsg+=`${msg}`;
//             console.log(`${themsg} . Finally You have completed all ROunds.Please wait for results...`)   
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
        
//     });
// });



// const promisecollection=Promise.all([doProject,attendTechnical,attendHrRound])
// console.log(promisecollection)





//Api->
const jsonData=[
        {
            "id":101,
            "name":"John Smith",
            "email":"john@gmail.com",
        },
        {
            "id":102,
            "name":"Joe",
            "email":"joe@gmail.com",
        },
        {
            "id":103,
            "name":"Sohan",
            "email":"sohan@gmail.com",
        },
        {
            "id":104,
            "name":"Mohan",
            "email":"mohan@gmail.com",
        },
        {
            "id":105,
            "name":"Kohan",
            "email":"kohan@gmail.com",
        }
]

// console.log(jsonData)
//created a promise
function getUsers(jsonData){
    return new Promise((resolve,reject)=>{
        //simulation of getting the data from server
        setTimeout(() => {
            try {
                //process or get the data
              
                // console.log(jsonData);
                resolve(jsonData)
            } catch (error) {
                //error handling
                reject(error)
            }
            
        }, 2000);
    })
}


getUsers(jsonData);
function getUserPosts(user){
    return new Promise((resolve,reject)=>{
        //get the user data from an apis
        const posts=[
            {
                id:101,
                title:"Post-1",
                body:"Lorem Ipsum.."
            },
            {
                id:102,
                title:"Post-2",
                body:"Lorem Ipsum Content.."
            }
        ]
        //simulate delay in apis
        setTimeout(() => {
            if(user.id===109){
                resolve(posts[0])
            }else{
                reject("User has no post for " + user.id)
            }
        }, 2000);

    })
}

//get all the users,then we will get their posts
getUsers(jsonData).
    then(users=>{
        console.log(users);
        return getUserPosts(users[0])
    })
    .then((post=>{
        console.log(post);
    })) 
    .catch(err=>{
        console.log(err);
    })
    
// Prepare a mix fruit juice->
// 1.buyFruits 
// 2.cutandpeelFruits
// 3.addFruitsinJuicer

function buyFruits(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          
            resolve(console.log("Buy Pinapple,Oranges and Apple from the Market"))
        }, 3000);
    }) 
}


function cutandpeelFruits(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Cut and Peel Pineapple,Oranges and Apple"))
        }, 1000);
    })
}


function addFruitsinJuicer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Adding peeled pieces of Fruits in Juicer and Prepare it"));
        }, 1000);
    })
}

//In->async->Asyncrhonous programming->should be used before function inorder to
// acheive pure asynchronous in javascript
// Async->it built on the top of promises
async function executeProcess(){
  await  buyFruits();
  await  cutandpeelFruits();
  await addFruitsinJuicer();
}

executeProcess();

// async->return promise->
// Promise needs to be handled ->await->
// // wait untill promise from async is return to function successfully

// 4Sessions->
// // async await,try,catch,then,API,Fetch API, With DOm integration