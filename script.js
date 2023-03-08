// IIFE that creates the board and links each index to a newly created square within the HTML
const Gameboard = (() => {
  let board = [];

  const getBoard = () => {
    return board;
  };

  const resetBoard = () => {
    board = [];
    populateBoard();
    // console.log("Gameboard " + board);
  };

  let populateBoard = () => {
    for (let i = 0; i < 9; i++) {
      board.push(i);
    }
  };
  populateBoard();

  const boardArea = document.querySelector(".gameboard");

  // First clears all squares currently in the boardArea and then adds new ones with eventListeners
  let setupBoard = () => {
    while (boardArea.firstChild) {
      boardArea.removeChild(boardArea.firstChild);
    }
    board.forEach((boardItem) => {
      const square = document.createElement("div");
      square.dataset.index = boardItem;
      square.addEventListener("click", (e) => {
        if (e.currentTarget.textContent === "") {
          boardItem = e.currentTarget.dataset.index;
          board[boardItem] = Gameplay.getCurrentPlayer().token;

          // console.log(board);
          Gameplay.changePlayer(e);
          Gameplay.checkForWins();
        }
      });
      square.className = "square";
      boardArea.appendChild(square);
    });
  };
  setupBoard();

  return {
    getBoard,
    resetBoard,
    populateBoard,
    setupBoard,
  };
})();

// factory function that creates players
const newPlayer = (name, token) => {
  return { name, token };
};

// IIFE that manages the gameplay and allows for a reset
const Gameplay = (() => {
  const playerOne = newPlayer("Player 1", "X");
  const playerTwo = newPlayer("Player 2", "O");

  let header = document.querySelector(".header");
  let titleText = document.querySelector(".title-or-winner");
  let currentPlayerText = document.querySelector(".player-turn");
  let currentPlayerToken = document.querySelector(".player-token");
  let resetButton = document.querySelector(".reset-button");

  let currentPlayer = playerOne;

  let getCurrentPlayer = () => {
    return currentPlayer;
  };

  let changePlayer = (e) => {
    if (currentPlayer === playerOne) {
      e.currentTarget.textContent = currentPlayer.token;
      currentPlayer = playerTwo;
      currentPlayerText.textContent = `${currentPlayer.name}'s Turn`;
      currentPlayerToken.textContent = currentPlayer.token;
    } else if (currentPlayer === playerTwo) {
      e.currentTarget.textContent = currentPlayer.token;
      currentPlayer = playerOne;
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
      if (
        Gameboard.getBoard()[winCon[0]] === Gameboard.getBoard()[winCon[1]] &&
        Gameboard.getBoard()[winCon[0]] === Gameboard.getBoard()[winCon[2]] &&
        titleText.textContent === "Tic-Tac-Toe"
      ) {
        // console.log("Winner");
        winner = getCurrentPlayer() === playerOne ? playerTwo : playerOne;
        titleText.textContent = winner.name + " Wins!";
        header.style.backgroundColor = "rgb(221, 174, 20)";
      }
    });
  };

  resetButton.addEventListener("click", () => {
    Gameboard.resetBoard();
    Gameboard.setupBoard();
    titleText.textContent = "Tic-Tac-Toe";
    header.style.backgroundColor = "rgb(17, 161, 36)";
    // console.log("Gameplay " + Gameboard.getBoard());
  });

  return {
    getCurrentPlayer,
    changePlayer,
    checkForWins,
  };
})();
