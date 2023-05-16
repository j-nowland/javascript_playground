
// TODO - write a function that returns the largest even number in an array
// NOTE - evenLargestNumber([1,10,17]) -> 10
// NOTE - evenLargestNumber([1,3,5,7, 9]) -> 
// print a message saying "No even number"

function evenLargestNumber(arr) {
    // make a benchmark which can change
    let benchmark = -1
    // loop through the array and find the largest number
    for (let i = 0; i < arr.length; i++) {
        // if the number is even and larger than the current largest number
        if (arr[i] % 2 === 0 {
            if arr[i] > benchmark) {
            benchmark = arr[i]
            }
        }
    }
    return benchmark
}

console.log(benchmark(3,8,4))



//TODO - Make a function that sorts an array and deletes any duplicates

// NOTE - duplicatesArray([1,2,3,3,4,5]) -> [1,2,3,4,5]

//when going through all the cells of the minesweeper and filtering 
// to see which 
// boxes have been clicked on and revealed
//those that have not been revealed are the region of interest


function duplicatesArray(arr) {
    const newArray = []
// don't want to hardcode currentArray
    let currentArray = arr[0]

    newArray.push(currentArray)
    
    // The for statement creates a loop that consists of 
    // three optional expressions, enclosed in parentheses and 
    // separated by semicolons, followed by a statement 
    // (usually a block statement) to be executed in the loop.

for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== currentArray) {
        currentArray = arr[i]
        // The push() method adds the specified elements to the end of an array and returns the new length of the array.

        newArray.push(currentArray)
    }
}
    return newArray
}   

console.log(


// //logic
// // define statuses of tiles
// const tile_statuses = {
//     Hidden: "hidden",
//     Flagged: "flagged",
//     Revealed: "revealed"
//     Mine: "mine"

// }


// //function to create the board
// function createBoard(boardSize, numberOfMines) {
//     const board = [];
//     for let x = 0; x < boardSize; x++) {
//         const row = [];
//         for let x = 0; x < boardSize; x++) {
//             const tile = {
//                 x,
//                 y
//             }
//             row.push(tile)
// }
// board.push(row);
//     }

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

(async () => {
    let input = await rl.question("What would you like to do?\n");
    rl.close();
    console.log(input);

})();

// function main() {

// }
// main();



    
//TODO - develop a function that counts number [0]/s in 2D array
//NOTE - twoArrays([[0,0],[0,1]]) -> 3

// name and define the function and parameters
// that will be passed through
function twoArrays(arr) {
    let count = 0 // define the variable that will be used to 
    // count the number of zeros
 
    for(let i = 0; i < arr.length; i++) { // loop through the array
     for(let j = 0; j < arr[i].length; j++) { // create a nested array and loop through this array
         if(arr[i][j] === 0) { // if it's indexed position in the array is equal to zero
             count++ // add one to the count
         }
     }
 }
     return count // return the count
 }
 
 console.log(twoArrays([[0,0],[0,1]])) // log the function with the array as the argument.