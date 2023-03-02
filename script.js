const Gameboard = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(i);
  }

  const boardArea = document.querySelector(".gameboard");

  board.forEach((boardItem) => {
    const square = document.createElement("div");
    square.dataset.index = boardItem;
    square.addEventListener("click", (e) => {
      if (e.currentTarget.textContent === "") {
        boardItem = e.currentTarget.dataset.index;
        board[boardItem] = Gameplay.currentPlayer.token;

        console.log(Gameplay.currentPlayer);
        console.log(board[boardItem]);
        console.log(board);
        Gameplay.changePlayer(e);
        // Gameplay.checkForWins();
      }
    });
    square.className = "square";
    boardArea.appendChild(square);
  });

  return {
    board,
  };
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
      //   console.log(currentPlayer);
      currentPlayer = playerTwo;
      console.log(`${currentPlayer.name}'s Turn`);
      currentPlayerText.textContent = `${currentPlayer.name}'s Turn`;
      currentPlayerToken.textContent = currentPlayer.token;
    } else if (currentPlayer === playerTwo) {
      e.currentTarget.textContent = currentPlayer.token;
      //   console.log(currentPlayer);
      currentPlayer = playerOne;
      console.log(`${currentPlayer.name}'s Turn`);
      currentPlayerText.textContent = `${currentPlayer.name}'s Turn`;
      currentPlayerToken.textContent = currentPlayer.token;
    }
  };

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let checkForWins = () => {
    winConditions.forEach((winCon) => {
      //   for (let i = 0; i < winCon.length; i++) {
      //     console.log(Gameboard.board[winCon[i]].textContent);
      //   }
      //   winCon.forEach((index) => {
      //     board[index].textContent
      //   });
    });
  };

  return {
    currentPlayer,
    changePlayer,
    checkForWins,
  };
})();
