// There are 3 types of variables in JS
// 1: var
// Var can be reassigned (line 9), and redeclared (line 10) at any point. Its scope (aka availability to
// be referenced in you application) is determined by if it is in a function or not.
// Global vars are accessibl anywhere in a JS file, local/function are only able
// to be accessed in the function (as well as any nested functions) and nowhere else.
// You truly wont see var often, pretty much use let or const from now on.
var firstName; // Declaration
var lastName = "McFadden" // Declaration & Iitialisation
lastName = "O\'Dywer" // Reinitialisation
var firstName = "Tomás"

// 2: let
// Let has a scope of always being within a block (meaning between {}).
// Used more often then var. can be reassigned a value (unlike const).
function discountPrices(prices, discount) {
  let discounted = [];

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount); // discountedPrice is only accessible inside this for-loop
    discountedPrice = prices[i] * (2 - discount);
    let finalPrice = Math.round(discountedPrice * 100) / 100; // finalPrice is only accessible inside this for-loop
    discounted.push(finalPrice);
  }

  console.log(i); // Error!
  console.log(discountedPrice); // Error!
  console.log(finalPrice); // Error!
  console.log(discounted); // [] -- empty array

  return discounted;
}

// 3: Const
// Const is short for constant, block scoped like let
// Should not be reassigned, takes on one value and thats' it.
let name = 'Tyler'
const handle = 'tylermcginnis'

name = 'Tyler McGinnis' // A-ok
handle = '@tylermcginnis' // can not reassign a const value

// Slight exception with objects:
const person = {
  name: 'Kimmy Kardash'
}

person.name = "Khloe Kardashian" // Okay to reassign an object's property

person = {
  age: 24
} // Not okay -- here we change the object itself, not a property like above

// Bottom Line:
// Always use const unless you know the value is going to change
// Use lets as much as you can over var, youll likely not see var in industry

