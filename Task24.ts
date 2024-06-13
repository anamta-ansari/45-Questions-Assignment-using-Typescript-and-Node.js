// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let names = "Anamta";
let Age = 25;
let Numbers = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is name equal to 'Anamta'? I predict True.");
console.log(names == "Anamta");

console.log("Is name not equal to 'Anamta'? I predict False.");
console.log(names != "Anamta");

// Tests using the lower case function
console.log("Is name in lowercase equal to 'anamta'? I predict True.");
console.log(names.toLowerCase() == "anamta");

// Numerical tests
console.log("Is age equal to 20? I predict False.");
console.log(Age == 20);

console.log("Is age not equal to 30? I predict True.");
console.log(Age != 30);

console.log("Is age greater than 30? I predict False.");
console.log(Age > 30);

console.log("Is age less than or equal to 25? I predict True.");
console.log(Age <= 25);

// Tests using "and" and "or" operators
console.log("Is age greater than 30 or less than 20? I predict False.");
console.log(Age > 30 || Age < 20);

console.log("Is age greater than 20 and less than 30? I predict True.");
console.log(Age > 20 && Age < 30);

// Test whether an item is in an array
console.log("Is 6 in the numbers array? I predict False.");
console.log(Numbers.includes(6));

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!Numbers.includes(6));