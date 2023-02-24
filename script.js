const Gameboard = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  const boardArea = document.querySelector(".gameboard");

  board.forEach((square) => {});
})();

const newPlayer = (name, marker) => {
  return { name, marker };
};

const boardStyle = getComputedStyle(boardArea);
const stringBoardSize = boardStyle.height;
const boardSize = stringBoardSize.replace("px", "");
const boardSectionSize = boardSize / 3;
console.log(boardSectionSize);

let boardSection = document.createElement("div");
boardSection.style.height = boardSectionSize;
boardSection.style.width = boardSectionSize;
