// Make Grid

let flexContainer = document.querySelector("#flexContainer");

function grid(num) {
  for (x = 0; x < num; x++) {
    let row = document.createElement("div");
    row.className = "row";
    for (y = 0; y < num; y++) {
      let box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }
    flexContainer.appendChild(row);
  }
}

grid(3);

// User & Computer

let user = "";

let comp = "";

// X & O Buttons

let X = document.querySelector("#X");
let O = document.querySelector("#O");

X.addEventListener("click", function() {
  user = this.value;
  comp = O.value;
  O.disabled = true;
  console.log(`user: ${user}, comp: ${comp}`);
});

O.addEventListener("click", function() {
  user = this.value;
  comp = X.value;
  X.disabled = true;
  console.log(`user: ${user}, comp: ${comp}`);
});

// Grid Buttons

let box = document.querySelectorAll(".box");
box.value = "";
let one = box[0],
  two = box[1],
  three = box[2],
  four = box[3],
  five = box[4],
  six = box[5],
  seven = box[6],
  eight = box[7],
  nine = box[8];

let arrBox = Array.from(box);

let playerWin = false;
let compWin = false;

box.forEach(function(e) {
  e.addEventListener("click", function() {
    if (user === "") {
      alert("Please select a suite");
      return;
    } else if (this.value === comp) {
      return;
    } else {
      this.innerHTML = user;
      this.value = user;
      for (i = 0; i < arrBox.length; i++) {
        if (arrBox[i] === this) {
          arrBox.splice(i, 1);
        }
      }
    }

    checkWin();

    return;
  });
});

// Simulate computer functions
function compTurn() {
  let compBox = arrBox[Math.floor(Math.random() * arrBox.length)];

  for (i = 0; i < arrBox.length; i++) {
    compBox.innerHTML = comp;
    compBox.value = comp;
    if (arrBox[i] === compBox) {
      arrBox.splice(i, 1);
    }
  }
  compWins();
  return;
}

// Modal
let message = document.querySelector("#modalContainer");

let winner = document.querySelector("#modalMessage");

let playAgain = document.querySelector("#playAgain");

playAgain.addEventListener("click", function() {
  window.location.reload();
});

// Winning Case

function checkWin() {
  userWins();

  if (playerWin === true) {
    return;
  } else {
    setTimeout(() => {
      compTurn();
    }, 1500);
  }

  isDraw();
}
