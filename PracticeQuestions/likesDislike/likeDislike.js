let likeBtn = document.querySelector(".like");
let dislikeBtn = document.querySelector(".dislike");
let count = 0;

likeBtn.addEventListener("click", () => {
  count++;
  let showCount = document.querySelector(".showCount");
  showCount.innerHTML = count;
});
dislikeBtn.addEventListener("click", () => {
  count++;
  let showCount = document.querySelector(".showCount");
  showCount.innerHTML = count;
});
