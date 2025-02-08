// find if input is a prime number

const prompt = require("prompt-sync")();

let number = +prompt("Enter a number: ");

if (isNaN(number)) {
    console.log("Invalid input. Please  enter  a valid  number.")
} else {

    let isPrime = true;
    if (number < 0) {
        false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(`The number ${number} is a prime number.`)
    } else {
        console.log(`The number ${number} is not a prime number.`)
    }
}