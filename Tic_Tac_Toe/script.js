let buttons = document.querySelectorAll(".content");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let show_res = document.querySelector("#res-bar");
let res_conteiner = document.querySelector(".result");

let turn_X = true;
const restart = () => {
  turn_X = true;
  enableBtn();
  res_conteiner.classList.add("hide");
};

//Winning possiblity array.

let winning_possibility = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//Entering value in button function.

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("O");
    if (turn_X) {
      btn.innerText = "X";
      turn_X = false;
    } else {
      btn.innerText = "O";
      turn_X = true;
    }
    btn.disabled = true;
    matchingPattern();
  });
});

//After found winner button not clickable.

const disableBtn = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};

//All button again clickable.

const enableBtn = () => {
  for (let button of buttons) {
    button.disabled = false;
    button.innerText = "";
  }
};

//Show Reasult format.

const winner = (value) => {
  show_res.innerText = `Congratulations!!! Winner is ${value}.`;
  res_conteiner.classList.remove("hide");
  disableBtn();
};

//Matching pattern functon.

const matchingPattern = () => {
  for (let pattern of winning_possibility) {
    let btn1Val = buttons[pattern[0]].innerText;
    let btn2Val = buttons[pattern[1]].innerText;
    let btn3Val = buttons[pattern[2]].innerText;
    if (btn1Val != "" && btn2Val != "" && btn3Val != "") {
      if (btn1Val === btn2Val && btn2Val === btn3Val) {
        winner(btn1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", restart);
reset.addEventListener("click", restart);
