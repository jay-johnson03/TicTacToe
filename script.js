let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");


function handleClick(index) {
    if (board[index] !== "") {
        return;
    }

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    // checking for a winner winner after every move
    checkWinner();

    // to switch the players constantly 
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function printWinner(player) {
    alert(player + " wins!");
    //debug
    console.log(player + " wins!");
}

function checkWinner() {
    // combinations for winning the game (aka the indexes of the array)
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
        } else if (!board.includes("")) {
            alert("It's a tie!");
            //debug
            console.log("It's a tie!");
            return "tie";
        }
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    //making sure all cells are empty again
    cells.forEach(cell => cell.textContent = "");
    //debug
    console.log("Game reset!");
}

function printGame() {
    print(board);
    console.log("printing in progress...");
}