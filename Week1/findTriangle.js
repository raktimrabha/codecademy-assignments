// find what type of triangle from he sides

/* 
    Conditions to check:
●	If all three sides are equal → Equilateral Triangle
●	If exactly two sides are equal → Isosceles Triangle
●	If all sides are different → Scalene Triangle
●	If the given sides do not form a valid triangle, print "Invalid Triangle"

 */

const prompt = require("prompt-sync")();

let side1 = +prompt("Enter side 1: ");
let side2 = +prompt("Enter side 2: ");
let side3 = +prompt("Enter side 3: ");

let triType;

if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    console.log("Invalid input. Enter Number")
}
else if (
  side1 + side2 <= side3 ||
  side1 + side3 <= side2 ||
  side2 + side3 <= side1
) {
  console.log("Invalid Triangle");
} else {
  if (side1 === side2 && side2 === side3) {
    triType = "equal";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    triType = "iso";
  } else {
    triType = "scal";
  }

  switch (triType) {
    case "equal":
      console.log("Equilateral Triangle");
      break;
    case "iso":
      console.log("Isosceles Triangle");
      break;
    case "scal":
      console.log("Scalene Triangle");
      break;
  }
}
