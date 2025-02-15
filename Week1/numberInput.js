// Display number input
const prompt = require("prompt-sync")();

while (true) {
  // take input and convert to number
  let testInput = +prompt("Enter a number (type 0 to exit): ");
  // check if input not a number
  if (isNaN(testInput)) {
    console.log("Invalid input. Please enter a number");
  } else {
    if (testInput === 0) {
      console.log("End");
      break;
    } else {
      console.log("You entered: " + testInput);
    }
  }
}
