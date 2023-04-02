const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

//create the blocks

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = (xAxis, yAxis);
    this.bottomRight = (xAxis + blockWidth, yAxis);
    this.topLeft = (xAxis, yAxis + blockHeight);
    this.topRight = (xAxis + blockWidth, yAxis + blockHeight);
  }
}
const blocks = [
  new Block(10, 270),
  new Block(15, 280),
  new Block(20, 300),
  new Block(25, 350),
];
// Add blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.appendChild(block);
    // console.log(block);
    // console.log(block.style);
    // console.log(block.style.left);
    block.style.left = "100px"; // left=5%
    block.style.bottom = "50px"; // bottom=5%
  }
}
addBlocks();