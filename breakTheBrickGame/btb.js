const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const gridWidth = 560;
const gridHeight = 300;
let timerId;
let ballDiameter = 20;
let xDirection = -2;
let yDirection = 2;

const startUser = [230, 10];
let currentPosition = startUser;

const startBall = [270, 40];
let ballCurrentPosition = startBall;

const userScore = document.querySelector(".score");
const userResult = document.querySelector("#result");

//UserName

// document
//   .getElementsByClassName("user-name")
//   .addEventListener("DOMContentLoaded", userNameEventHandler);
// function userNameEventHandler(event) {
//   prompt("Enter your name: ");
// }

//create the blocks

// class - its a template or blueprint
// class inheritance - its a  like genetics
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 220),
  new Block(120, 220),
  new Block(230, 220),
  new Block(340, 220),
  new Block(450, 220),
  new Block(10, 170),
  new Block(120, 170),
  new Block(230, 170),
  new Block(340, 170),
  new Block(450, 170),
];
// new - create a new empty object
// what its takes - take the object and sets the value of this to be new empty object
// then its calls the constructor method inside the class

// Add blocks
function addBlocks() {
  for (let counter = 0; counter < blocks.length; counter++) {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.appendChild(block);
    // console.log(block);
    // console.log(block.style);
    // console.log(block.style.left);
    // block.style.left = "100px"; // left=5%
    // block.style.bottom = "50px"; // bottom=5%

    block.style.left = blocks[counter].bottomLeft[0] + "px";
    block.style.bottom = blocks[counter].bottomLeft[1] + "px";
    // console.log(blocks[counter].bottomLeft[0] + "px");
  }
}
addBlocks();

//add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

//draw ball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

//mover

function moveUser(u) {
  switch (u.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        //cp =cp -10 = 230-10 = 220
        console.log(currentPosition[0]);
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < gridWidth - blockWidth) {
        currentPosition[0] += 10;
        console.log(currentPosition[0]);
        drawUser();
      }
      break;

    default:
      break;
  }
}

//draw ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// document.addEventListener("keydown", moveUser);

// move ball

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkCollision();
}
timerId = setInterval(moveBall, 30);

// collision checker
function checkCollision() {

  
  // wall collision
  if (
    ballCurrentPosition[0] >= gridWidth - ballDiameter ||
    ballCurrentPosition[0] <= 0 ||
    ballCurrentPosition[1] >= gridHeight - ballDiameter
  ) {
    changeDirection();
  }

  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    userResult.innerHTML = "Better Luck Next Time";
    document.removeEventListener("keydown", moveBall);
  }
}

function changeDirection() {
  //top
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  //right
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
