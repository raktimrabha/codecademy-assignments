/*
    find  area calculator for circle, rectangle, triangle, square etc.

 */

const prompt = require("prompt-sync")();

console.log(`
Choose the Shape to find area:
1.	Circle
2.	Rectangle
3.	Triangle
4.	Square\n`)

let userInput = +prompt("Enter a number to select: ");

switch (userInput) {
    case 1:
        // Circle Area: π × r × r 
        let radius = +prompt("Enter a radius: ");
        let circleArea = Math.PI * radius * radius;
        console.log(`The area of the Circle is: ${circleArea.toFixed(2)}`);
        break;

    case 2:
        // Rectangle Area:  length×width.
        let length = +prompt("Enter length: ");
        let width = +prompt("Enter width: ")
        let rectangleArea = length * width;
        console.log(`The area of rectangle is: ${rectangleArea.toFixed(2)}`);
        break;

    case 3:
        // Triangle Area: 0.5 × base × height
        let height = +prompt("Enter height: ");
        let base = +prompt("Enter base: ")
        let triangleArea = 0.5 * base * height;
        console.log(`The area of triangle is: ${triangleArea.toFixed(2)}`);
        break;


    case 4:
        // Square Area: side × side.
        let side = +prompt("Enter side: ");
        let squareArea = side * side;
        console.log(`The area of the square is: ${squareArea.toFixed(2)}`);
        break;


    // invalid errors   
    default:
        console.log("Invalid option. Select the correct option.");
        break;
}

