// Arrays
// Full list of methods: https://www.w3schools.com/jsref/jsref_obj_array.asp

// Arrays hold multiple values in one variable
// 0 indexed [0, 1, 2, 3]
// Can declare two ways (first is preferred for brevity)
const dogs = ['Henry', 'Poochy', 'Lady', 'Bugsy'];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const smallerNumbers = [0.1, 0.2, 0.3, 0.4, 0.5];
const booleanValues = [true, false];
const cats = new Array('Rude', 'Mean', 'Minerva', 'Evil'); // very rarely will see this

// To access a specific index, we use the variable of our array, then in [], place index
console.log(cats[0]); // 'Rude'
console.log(dogs[1]); // 'Pooch'

// We can loop through an array
let dogsLength = dogs.length; // 4, built in property to array object
for(let i = 0; i < dogsLength; i++) {
  console.log(dogs[i]);
}

dogs.forEach(doggy => {
  console.log('Dogs Name: ' + doggy + ' is a good doggy');
});

// There are 3 super powerful methods that are used very often both in JS and other languages

// Filter
// Returns a new array object that meet a criteria as specified
// (here if length of each element [kitty] is 4 characters)
let shortCats = cats.filter(kitty => kitty.length === 4);
console.log(shortCats);

// Map
// Performs some operation on each elements of the array
let goodDogs = dogs.map(doggy => doggy.replace('y', 'ie'));
console.log(goodDogs);

// Reduce
// Reduce gives us a value back, without modifying an original value
// Performs an operation with elements in the array (not on!)
const initialValue = 0;
const numbers = [5, 10, 15];

// reducer method that takes in the accumulator and next item
const reducer = (accumulator, item) => {
  console.log('Accumulator is: ' + accumulator + ' . Item is: ' + item);
  return accumulator + item;
};

// we give the reduce method our reducer function and our initial value
const total = numbers.reduce(reducer, initialValue);
console.log(total); // 30
// Pass 1: 0 + 5 (5)
// Pass 2: 5 + 10 (15)
// Pass 3: 15 + 15 (30)

// Really good medium article that helped me with the above methods:
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// On line 15, I noted how length is a property. Not a method. Methods have (), properties are referenced
// using the dot notation. a.b.c give us the child of a named b, and the child of b named c's value.
// JSON
a: {
  b: {
    c: 'some value'
  }
}
