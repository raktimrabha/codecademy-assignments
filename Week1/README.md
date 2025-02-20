# 📌 Week 1 JavaScript Assignments  

## 🔹 Assignment Overview  

This repository contains **Week 1 JavaScript Assignments**, focusing on **conditional statements, loops, user input handling, and mathematical operations**. Each assignment is implemented in **Node.js** with `prompt-sync` for user input.

---

## 📂 Assignments  

### 📝 1. findDay.js – Day Finder  
🔹 A **console-based JavaScript program** that determines the day of the week based on a user-input number (1-7).  

#### 📌 Features:  
- Uses a **`switch-case`** statement to map numbers to corresponding days.  
- Displays an **error message** for invalid inputs (out of range or non-numeric).  

--

### 📝 2. areaCalculator.js – Area Calculator  
🔹 A **console-based calculator** that computes the area of different shapes.  

#### 📌 Features:  
- Supports **Circle, Rectangle, Triangle, and Square**.  
- Asks the user to choose a shape and enter dimensions.  
- Displays the **calculated area** or an **error message** for invalid inputs.  

--

### 📝 3. findPrime.js – Prime Number Checker  
🔹 A **JavaScript program** that checks whether a given number is **prime**.  

#### 📌 Features:  
- Ensures the input is a **valid positive integer** before processing.  
- Displays messages indicating whether the number is **prime** or **not prime**.  
- Includes error handling for invalid inputs.  

--

### 📝 4. numberInput.js – Continuous Input Handler  
🔹 A **Node.js console program** that takes continuous user input until the user enters `0`.  

#### 📌 Features:  
- Uses `prompt-sync` for **synchronous user input**.  
- Handles **invalid inputs** gracefully.  
- Displays `"End"` and **terminates** when `0` is entered.  

--

### 📝 5. findTriangle.js – Triangle Type Detector  
🔹 A **JavaScript program** that determines the type of a triangle based on user-input side lengths.  
--
#### 📌 Features:  
- Uses a **`switch-case`** statement to classify triangles as **Equilateral, Isosceles, or Scalene**.  
- Validates if the given sides **form a triangle** before classification.  
- Displays an **error message** if the input is invalid.  

---

## 🛠 Requirements  
- **Node.js** installed on your system.  
- The **`prompt-sync`** package for user input.  

---

## 🚀 How to Run  

1. Navigate to the project folder:  
   ```bash
   cd Week1
2. Install dependencies:
   ```bash
   npm install prompt-sync
   ```
3. Run the script using Node.js:
   ```bash
   node findDay.js
   ```

## 📁 File Structure
```
Week1/
│── findDay.js
│── areaCalculator.js
│── findPrime.js
│── numberInput.js
│── findTriangle.js
│── README.md
```