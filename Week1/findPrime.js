// find if input is a prime number

const prompt = require("prompt-sync")();

let number = +prompt("Enter a number: ");

if (isNaN(number) || number < 1) {
    console.log("Invalid input. Please  enter  a valid  number.");
} else {
    let isPrime = true;

    //   check for prime number
    if (number === 1) {
        isPrime = false; // 1 is not a prime number
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) { // if a number is divisible by 2; set not prime
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`The number ${number} is a prime number.`);
    } else {
        console.log(`The number ${number} is not a prime number.`);
    }
}
