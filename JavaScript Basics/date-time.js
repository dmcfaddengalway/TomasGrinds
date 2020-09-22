// Functions for working with Date and Time in JS

// Referencing: https://www.w3schools.com/js/js_dates.asp
let date = new Date();
console.log(date); // Tue Sep 22 2020 21: 48: 22 GMT + 0100(Irish Standard Time)

// In line 5 above we made a variable named date, then we made an object.
// We know we made an object by the 'new' keyword. By instantiating this Date object we have
// several methods we can use then on it.

date.getFullYear(); // 2020
date.getDay(); // Today is Tuesday, returns 2 --> Sunday is 0, Monday is 1, etc...
// Arrays are 0 indexed. So they start from 0, not 1! Be careful of this.
date.getDate(); // Today is the 22nd so, 22.

// We can even create a new date object ourselves
date = new Date(2021, 12, 25); // Let's fast forward to next christmas :)

//new (year: number, month: number, date ?: number, hours ?: number, minutes ?: number, seconds ?: number, ms ?: number) => Date(+4 overloads)
// ^^ the arguments for the Date() object. First we give it year, then month and so on. Note that
// some have ?, these are optional, otherwise if no ? -- required.
// Overloads are when you create an object but with a different set of arguments.
// Example:
date = new Date(2022, 09, 25, 09, 30); // Sept. 25th 2022 9:30AM

// Little exercise I think it good practice with these methods and some logic
// Create a calendar using a table, and some input from the user.

