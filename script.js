const Gameboard = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  const boardArea = document.querySelector(".gameboard");

  board.forEach(() => {
    const square = document.createElement("div");
    square.addEventListener("click", (e) => {
      if (e.currentTarget.textContent === "") {
        Gameplay.changePlayer(e);
      }
    });
    square.className = "square";
    boardArea.appendChild(square);
  });
})();

const newPlayer = (name, token) => {
  return { name, token };
};

const Gameplay = (() => {
  const playerOne = newPlayer("Player 1", "X");
  const playerTwo = newPlayer("Player 2", "O");

  let currentPlayerText = document.querySelector(".player-turn");
  let currentPlayerToken = document.querySelector(".player-token");

  let currentPlayer = playerOne;

  let changePlayer = (e) => {
    if (currentPlayer === playerOne) {
      e.currentTarget.textContent = currentPlayer.token;
      currentPlayer = playerTwo;
      console.log(`${currentPlayer.name}'s Turn`);
      currentPlayerText.textContent = `${currentPlayer.name}'s Turn`;
      currentPlayerToken.textContent = currentPlayer.token;
    } else if (currentPlayer === playerTwo) {
      e.currentTarget.textContent = currentPlayer.token;
      currentPlayer = playerOne;
      console.log(`${currentPlayer.name}'s Turn`);
      currentPlayerText.textContent = `${currentPlayer.name}'s Turn`;
      currentPlayerToken.textContent = currentPlayer.token;
    }
  };

  return {
    changePlayer,
  };
})();
