let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");


function handleClick(index) {
    if (board[index] !== "") {
        return;
    }

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    // to switch the players constantly 
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    // checking for winner after every move 
    checkWinner();
}

function checkWinner() {
    const winningNumbers = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winningNumbers.length; i++) {
        const[a,b,c] = winningNumbers[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            printWinner(board[a]);
            return board[a];
        }
    }
}