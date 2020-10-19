// Something you will definitely come across in documentation and github
// are arrow functions.

// Arrow functions are very simple just shorthand form of writing functions. Nothing else.

// Old way
function foo(x) {
  console.log('bar ' + x);
  console.log('pub ' + x);
}

// Arrow function
//func name in variable = (arguments) => {
  // body of function
// }
let baz = (x) => {
  console.log('buzz ' + x);
  console.log('kill ' + x);
}

// Even faster use of arrow functions -- if we just perform one line, we can do this:
let biff = (x) => console.log('burr ' + x);
// We could drop the () for the parentheses around the 'x' [our arguments] if we only have one
// biff = x => console.log('burr ' + x);

foo(1);
baz(2);
biff(3);
