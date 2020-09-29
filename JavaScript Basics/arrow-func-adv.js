// So to understand why an arrow function is faster to write and advantageous to us developers
// Here is a small example of using an arrow function
// NOTE: a) Lines 22 - 26 is an arrow fucntion. It is a specific block of code that performs
// an operation (here an addition and returns that addition result). We have 2 paramters between our
// parentheses. These are our inputs to the function. They are passed into to be used on line 19.
// Now we can call this function by just referencing what we named it as a variable (the first part of
// line 22 --> calculateMark).

// You may think, wait how are we supplying a function as an argument to another function?
// You can do this in JS. Yes supply a function to a function. You can supply a function to a function,
// to a function to a function -- we call this callback hell and avoid it though.
// Let me say that again, we are supplying a function (Line 22 - 26 -- calculateMark) as an argument,
// to another function, in this case the calculateMark function, is being supplied on Line 21
// as an argument to the reduce function.

// We can see on Line 41 - 44, we just supplied the same logic in our calculateMark function directly
// into our argument for the reduce function. See below for my explanation there.
let sum = 0;
let marksOfTests = [54, 89, 64, 90, 52];

let calculateMark = (totalMarks, examGrade) => {
  console.log("Total Mark: " + totalMarks + " Exam Grade: " + examGrade);
  let updatedMark = totalMarks + examGrade;
  return updatedMark;
}

let mark = marksOfTests.reduce(calculateMark, sum);
console.log(mark);

// OLD WAY BELOW
// On line 40, we see we are calling the reduce function on our array of marks. As our
// first function We need to pass it a function for how we want to operate on our values in the array
// --> Here we are adding them.
// We write our fucntion with the function keyword, its paramters inside parentheses, then brakcets
// and the logic inside. Then after our function we still need to supply our sum variable.

// Compared to the above way with arrow functions, this is a bit easier to read and less congested.
// Having our logic separated and being able to assign it a variable and be located elsewhere
// is much cleaner and makes it faster to read.

let newMark = marksOfTests.reduce(function(totalMarks, examGrade) {
  console.log("Total Mark: " + totalMarks + " Exam Grade: " + examGrade);
  let updatedMark = totalMarks + examGrade;
  return updatedMark;
}, sum);
console.log(newMark);

// We get the same result if we were to run this. Run > Start Debugging > Node.js (preview)

// Resource: https://javascript.info/arrow-functions-basics
