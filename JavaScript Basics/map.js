let numbers = [4, 9, 16, 25];
let x = numbers.map(number => {
  return Math.sqrt(number);
});

// 4 --> map() --> number = 4 --> Math.sqrt(4) --> 2
// 9 --> map() --> number = 9 --> Math.sqrt(9) --> 3
// 16 --> map() --> number = 16 --> Math.sqrt(16) --> 4
// 25 --> map() --> number = 25 --> Math.sqrt(25) --> 5

console.log(x);

// https://dev.to/sarah_chima/the-javascript-array-map-method-44m0


// If we want to be super succint, we can short Lines 2 - 4 to:
var y = numbers.map(Math.sqrt);
// This is because we know our inputs are each element of array (gets rid of the number on line 2)
// we dont need '{}' as out function is only one line
// we dont need the return as well (its implied that we will return since out function is only one line in length)
// we also dont need to pass Math.sqrt(number) as we know map always goes over elements in array one at a a time

// More on arrow functions here:
// https://dev.to/sarah_chima/arrow-functions-in-es6-24
