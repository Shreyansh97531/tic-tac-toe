
let boxes = document.querySelectorAll(".boxes");
let newgame = document.querySelector(".newgame");
let headtxt = document.querySelector(".head-txt");
let wintext = document.querySelector(".wintext");
let container = document.querySelector(".container");
container.classList.add("newcon")
newgame.classList.add("after");
let after = document.querySelector(".after");
let turn = true;
let winpatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]
for (let box of boxes) {
   box.addEventListener("click", (e) => {
      if (turn) {
         box.innerText = "o"
         turn = false;
      } else {
         box.innerText = "x"
         turn = true;
      }
      box.disabled = true;
      winchecker();
   })
}
let winchecker = () => {
   for (let win of winpatterns) {
      let pos1 = boxes[win[0]].innerText;
      let pos2 = boxes[win[1]].innerText;
      let pos3 = boxes[win[2]].innerText;
      if (pos1 != "" && pos2 != "" && pos3 != "" && pos1 === pos2 && pos2 === pos3) {
         wintext.innerText = `Congratulations ${pos1} has won !!`
         wintext.style.display = "block"
         container.disabled = true;
         after.style.top = "92%";
         newgame.style.display = "block"
      }
   }
};
newgame.addEventListener("click", () => {
   location.reload();
});






