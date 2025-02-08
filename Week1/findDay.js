/* 
 program that determines the name of the day in a week,
 based on a number input from the user. 
 Using a switch-case statement to implement the logic.
*/

const prompt = require("prompt-sync")();

// display title
console.log("\n- - - Find name of the day - - -\n");

// takes user input in string; converts it to number (+)
let userInput = +prompt("Enter number between 1 and 7: ");

// checks input and returns log
switch (userInput) {
    case 1:
        console.log(` ${userInput} : The day is Monday\n`);
        break;
    case 2:
        console.log(`${userInput} : The day is Tuesday\n`)
        break;
    case 3:
        console.log(`${userInput} : The day is Wednesday\n`)
        break;
    case 4:
        console.log(`${userInput} : The day is Thursday\n`)
        break;
    case 5:
        console.log(`${userInput} : The day is Friday\n`)
        break
    case 6:
        console.log(`${userInput} : The day is Saturday\n`)
        break;
    case 7:
        console.log(`${userInput} : The day is Sunday\n`)
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7.\n")
        break;
}