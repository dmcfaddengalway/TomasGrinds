# Data Types

## Strings

Strings are characters of text, like a paragraph. Anything from a simple single character (ex: a) to the whole entire Bible (ex: Lorem ipsum...and so on forever until that book ends).

Strings are noted by surrounding ' or ". It does not matter which ones you use, just be consistent within the whole project to only use one type. Just good practice to keep them matching.

**Note:** If you require a string to have an apostrophe in it (ex: "O'Dwyer"). You need to somehow 'escape' the apostraphe to let JavaScript know this is not the end of the string, but rather a aprt of the string. We do this by placing a \ in front of the character we want to 'escape'.

```
O'Dwyer -> "O\'Dwyer"
```

Above, it is important that we use the backslash before our apostraphe to let JavaScript know that this is part of the string.

## Booleans

Booleans are truthy/falsy values. There is only true or false. True can correspond to 1. False can correspond to 0. Either can be used if you are checking a boolean condition.

You can negate booleans by placing a ! operator in front.

Ex:
let momSaidYes = true;

--> momSaidYes = true;
--> !momSaidYes = false

## Numbers

Numbers can be whole, decimal, positive or negative.

Ex: 42, 0.0000000000001, -543885493, 438957894543

## Undefined

Undefined is when a variable does not have a value. The variable is declared, but its value is not set.

let name;

console.log(name);

The above will print out undefined as we did not say what the value of the name variable was.

## Null

Null is when there is nothing declared. Different to undefined, as null is when there is no variable name, undefined is when we have a variable, but no value for that variable.

Ex:
let firstName;

console.log(name);

Above 'name' does not exist, only firstName does. Will printout null;
