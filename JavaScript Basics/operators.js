// Operators

// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// ** : Power
// == : equality
// != : inequality
// === : deep (in)equality, is value the same and type the same
  // 4 === 4 --> 4 (left) and 4 (right) both numbers? Yes. Are 4 and 4 same number? Yes. True
  // 4 !== '4' --> 4 (left, number) and 4 (right, string) both same type? No. False

// OR ||
// AND &&
let dadSaidYes = true;
let momSaidYes = false;
console.log(momSaidYes || dadSaidYes); // true
console.log(dadSaidYes || momSaidYes); // true
console.log(dadSaidYes && momSaidYes); // false
console.log(momSaidYes && dadSaidYes); // false

// More common in JS is to use Boolean()
// Its just a syntax change to make it clear what will be returned
let answer = Boolean(momSaidYes || dadSaidYes); // true
console.log(typeof(answer)); // boolean

// Something to think about with boolean logic and conditionals in regards to performance
// Lets say we have a random number generator 0 - 100. And it more than not, rolls over 75.
// And we want to do something for 0 - 25, 26 - 50, 51 - 74, and 75 - 100
// To improve performance we should evaluate the condition first it is most likely to be
// This way it doesnt evaluate the possible answers (0 - 74) and then evaluate if 75 or over
const x = Math.round(Math.random() * 100);
if (x >= 75) {
  // do something
} else if (x >= 51 && x < 75) {
  // do something else
} else {
  // do action on least likely case to be reached here
}

// It is insignificant in small projects. Dont expect to notice a difference, but in big projects its
// worthwhile to consider. 