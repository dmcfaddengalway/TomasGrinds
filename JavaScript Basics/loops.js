// There are 3 loops in JS
// 1: For loop
// (counter var; condition; incrementor) { }
// Used most often as its super legibile and easy
let names = ['Jack', 'Eoin', 'Aoife'];
for (let i = 0; i < 10; i++) {
  console.log(i + ': ' + names[i]); // 0: Jack, 1: Eoin, 2: Aoife
  // i is 0, is 0 < 10? Yes. Print i out. Increment
}

// 2: While loop & Do while
// Wont see too often tbh
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // Dont forget or its an infinite loop
}

// 3: Do while -- v similiar to above but will always execute once, as i could already be >= 10
// Wont see too often tbh
do {
  console.log(i);
  // will print i as is declared (0), then evaluate if i < 10, then do again (console.log()) if true
} while (i < 10)

// 4: Advanced for-loop
// Will see quite often, shorter form of 1.
let numbers = [1, 2, 3, 4, 5];
for(num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
  // Thing is you cant access i (the index) here, useful if you just need to liberally
  // apply some operation to all elements or print things out. In 1. you can access a single element (its value)
  // and the index that it is in (like in an array).
  // Line 7 is my reference. We can not print out the index of num here (like 0:, 1:, etc...)
}
