/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


// Define an array of magician names
let magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Function to print the array of magicians
function show_magicians(magicians: string[]): void {
    console.log(magicians);
}

// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Create a new array with "the Great" added to each name
let greatMagicians: string[] = make_great(magicians);

// Show original magicians array
console.log("Original magicians array:");
show_magicians(magicians);

// Show the new array of great magicians
console.log("\nGreat magicians array:");
show_magicians(greatMagicians);




