function userWins() {
  if (one.value === user && two.value === user && three.value === user) {
    one.style.background = "aquamarine";
    two.style.background = "aquamarine";
    three.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (four.value === user && five.value === user && six.value === user) {
    four.style.background = "aquamarine";
    five.style.background = "aquamarine";
    six.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (seven.value === user && eight.value === user && nine.value === user) {
    seven.style.background = "aquamarine";
    eight.style.background = "aquamarine";
    nine.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (one.value === user && four.value === user && seven.value === user) {
    one.style.background = "aquamarine";
    four.style.background = "aquamarine";
    seven.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (two.value === user && five.value === user && eight.value === user) {
    two.style.background = "aquamarine";
    five.style.background = "aquamarine";
    eight.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (three.value === user && six.value === user && nine.value === user) {
    three.style.background = "aquamarine";
    six.style.background = "aquamarine";
    nine.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (one.value === user && five.value === user && nine.value === user) {
    one.style.background = "aquamarine";
    five.style.background = "aquamarine";
    nine.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }

  if (three.value === user && five.value === user && seven.value === user) {
    three.style.background = "aquamarine";
    five.style.background = "aquamarine";
    seven.style.background = "aquamarine";
    message.style.display = "flex";
    winner.innerHTML = "You Win!";
    playerWin = true;
    return;
  }
  return;
}

function compWins() {
  if (one.value === comp && two.value === comp && three.value === comp) {
    one.style.background = "FireBrick";
    two.style.background = "FireBrick";
    three.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (four.value === comp && five.value === comp && six.value === comp) {
    four.style.background = "FireBrick";
    five.style.background = "FireBrick";
    six.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (seven.value === comp && eight.value === comp && nine.value === comp) {
    seven.style.background = "FireBrick";
    eight.style.background = "FireBrick";
    nine.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (one.value === comp && four.value === comp && seven.value === comp) {
    one.style.background = "FireBrick";
    four.style.background = "FireBrick";
    seven.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (two.value === comp && five.value === comp && eight.value === comp) {
    two.style.background = "FireBrick";
    five.style.background = "FireBrick";
    eight.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (three.value === comp && six.value === comp && nine.value === comp) {
    three.style.background = "FireBrick";
    six.style.background = "FireBrick";
    nine.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (one.value === comp && five.value === comp && nine.value === comp) {
    one.style.background = "FireBrick";
    five.style.background = "FireBrick";
    nine.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }

  if (three.value === comp && five.value === comp && seven.value === comp) {
    three.style.background = "FireBrick";
    five.style.background = "FireBrick";
    seven.style.background = "FireBrick";
    message.style.display = "flex";
    winner.innerHTML = "You Lose!";
    compWin = true;
    return;
  }
  return;
}

function isDraw() {
  if (playerWin === false && compWin === false && arrBox.length === 0) {
    for (i = 0; i < box.length; i++) {
      box[i].style.background = "yellow";
    }
    message.style.display = "flex";
    winner.innerHTML = "Draw!";
  }
  return;
}
