
//const boxes = document.getElementsByClassName('box')
//const display = document.getElementsByClassName('display')

// let player_1 = 'x',
// let player_2 = 'o',
// let currentPlayer = ''

// let x = 'X'; 
// let o = 'O'; 

// boxes.forEach(box => {
//     box.addEventListener('click', function() {
//         if (box.textContent === '') {
//             box.textContent = x;
//             console.log("player_1 has clicked");
//         }
//     });

//     box.addEventListener('dblclick', function() {
//         if (box.textContent === '') {
//             box.textContent = o;
//             console.log("player_2 has clicked");
//         }
//     });
// });



// Select all the box elements (the cells of the Tic-Tac-Toe grid) and the display element
const boxes = document.querySelectorAll('.box')
const display = document.querySelector('.display')

// Variables to keep track of the current player, the click count, and whether the game is over
let currentPlayer = 'A'  // Player 'A' starts (Player 1)
let clickCount = 0   // Keeps track of the number of moves made
let gameOver = false   // Boolean flag to check if the game is over



boxes.forEach(box => {
      
        box.addEventListener('click', function(){
           // Check if the box is empty and if the game is not over
        if(box.textContent === '' && !gameOver) {
            // Assign either 'X' or 'O' depending on the current player
            box.textContent = currentPlayer === 'A' ? 'X' : 'O';
            clickCount++; // Increment the move counter
            
            // Check if there is a winner after the move
            if (checkingWinner()) {
               // Display the winner's message and stop the game
                display.textContent = `${currentPlayer === 'A' ? 'Player 1 (X)' : 'Player 2 (O)'} Wins!`
                gameOver = true; // Game is over
            } else {
                 // Switch players after each turn
                currentPlayer = (clickCount % 2 === 0) ? 'A' : 'B'
                display.textContent = `Player ${currentPlayer === 'A' ? '1' : '2'} Turn`
            }
        }
    });
});


function checkingWinner() {
    // Array of winning combinations (the indexes of the boxes that must match)
    const Combinations = [[0, 1, 2],  // Row 1
                          [3, 4, 5],  // Row 2
                          [6, 7, 8],  // Row 3
                          [0, 3, 6],   // Column 1
                          [1, 4, 7],   // Column 2
                          [2, 5, 8],    // Column 3
                          [0, 4, 8],     // Diagonal 1
                          [2, 4, 6]  ]    // Diagonal 2

    // Loop through all possible winning combinations
    for (let combination of Combinations) {
        let [a, b, c] = combination;   // Destructure the combination array into 3 indexes
        // Check if the three boxes at these indexes have the same textContent and are not empty
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            return true;   // A winner has been found
        }
    }
    return false;   // No winner
}
