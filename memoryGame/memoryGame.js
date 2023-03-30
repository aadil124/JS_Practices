const cardArray = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

// console.log(cardArray);
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector("#grid");
const results = document.querySelector("#results");
// console.log(grid);

let cardsChosen = [];
let cardsChosenId = [];

function createBoard() {
  for (let counter = 0; counter < cardArray.length; counter++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", counter);
    // console.log(card);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  // console.log(cardArray)
  let cardId = this.getAttribute("data-id");
  //   console.log("clikded", cardId);
  cardsChosen.push(cardArray[cardId].name);
  // console.log("cardsChosen", cardsChosen)
  cardsChosenId.push(cardId);
  //   console.log("cardsChosenId", cardsChosenId)
  // console.log(this)
  this.setAttribute("src", cardArray[cardId].img);
}

function checkTheMatch() {
  const cards = document.querySelector("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    alert("You have found the match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
     cards[optionOneId].removeEventListener("click", flipCard);
     cards[optionTwoId].removeEventListener("click", flipCard);
  }
}
createBoard();
