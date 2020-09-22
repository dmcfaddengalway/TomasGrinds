// To evaluate an expression
x = 5;
y = 10;
if(x < y) {
  console.log('X is smaller than Y');
} else if (y === x) {
  console.log('X is the same as Y');
  // Can have as many else if you want
} else {
  console.log('Y is smaller than X');
  // default fallback if the if or else if's are not true
}

// You might see conditionals written like this:
if(x < y) {
  console.log('X is smaller than Y'); // only shown if true
}
console.log('Y is smaller than X'); // shown if above is false, just exclude the else for brevity

// Ternary Operator
// Lets evaluate if something is true or not and based on boolean logic, set a value
let canGoIceSkating = (momSaysYes && dadSaysYes) ? true : false;
// If both mom and dad say yes, set canGoIceSkating to true, if one of them says no,
// set canGoIceSkating to false
// Shorthand form, really only used with quick evaluations

// Switch:
let date = new Date().getDay();
switch (date) {
  case x:
    // doSomething
    break; // needed so it stops evaluating, otherwise it will see if date == y, z, a and so on
  case y:
    // doSomething
    break;
  case z:
  case a:
    // both z & a doSameThing here
  default:
  // doSomething
}
