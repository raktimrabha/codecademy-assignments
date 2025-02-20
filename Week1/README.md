# Week 1 :  

## Assignment Overview  

### **Week 1 Assignments**  

1. **findDay.js**  
   - A console-based JavaScript program that determines the day of the week based on a user-input number (1-7).  
   - Uses a `switch-case` statement to map numbers to corresponding days.  
   - Displays an error message for invalid inputs (out of range or non-numeric).  

2. **areaCalculator.js**  
   - A console-based Area Calculator that computes the area of various shapes (Circle, Rectangle, Triangle, Square).  
   - Prompts the user to choose a shape and enter the necessary dimensions.  
   - Displays the calculated area or an error message for invalid inputs.  

3. **findPrime.js**  
   - A JavaScript program that checks whether a given number is a prime number.  
   - Ensures input is a valid positive integer before processing.  
   - Displays appropriate messages for prime and non-prime numbers, as well as error handling for invalid inputs.  

4. **numberInput.js**  
   - A Node.js console program that continuously takes user input until the user enters `0`.  
   - Uses `prompt-sync` for user input and handles invalid inputs gracefully.  
   - Displays "End" when `0` is entered, terminating the program.  

5. **findTriangle.js**  
   - A JavaScript program that determines the type of a triangle based on user-input side lengths.  
   - Uses a `switch-case` statement to classify triangles as Equilateral, Isosceles, or Scalene.  
   - Checks whether the given sides form a valid triangle before classification.  
   - Displays an appropriate message for invalid triangles.
## Requirements
- Node.js installed on your system.
- The `prompt-sync` package for user input.

## Usage

1. Navigate to the project folder:
   ```bash
   cd Week1/findDay-01
   ```
2. Install dependencies:
   ```bash
   npm install prompt-sync
   ```
3. Run the script using Node.js:
   ```bash
   node findDay.js
   ```
4. Enter a number between 1 and 7 to get the corresponding day of the week.

## File Structure
- `findDay.js` - Main script for determining the day.
- `README.md` - Documentation and instructions.