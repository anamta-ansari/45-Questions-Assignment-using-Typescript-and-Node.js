// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to accept an array of items for a sandwich
function make_sandwich(...items: string[]): void {
    console.log(`Sandwich with the following items: ${items.join(', ')}`);
}

// Call the function three times with different numbers of arguments
make_sandwich('kabab', 'Cheese', 'Lettuce');
make_sandwich('kabab', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');