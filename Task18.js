//Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["Turkey", "Europe", "paris", "Finland", "Dubai"];
//Print your array in its original order
console.log("\norignal = " + places);
//Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order =" + places.slice().sort());
// Show that your array is still in its original order by printing it.
console.log("orignal = " + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse = " + places.slice().reverse());
//Show that your array is still in its original order by printing it again.
console.log("orignal = " + places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse = " + places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("Again reverse = " + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("\nSorted = " + places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nAgain sorted = " + places.sort());
