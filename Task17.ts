// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list : string[] = ["Fatima", "Javeria", "Harmain" , "Aisha","Alisha"]; 
console.log(`\nI have found  that new dinner table won’t arrive in time for the dinner, so now I am inviting only two people for dinner.`);


//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log(`Sorry, ${guest_list.pop()} , due to some reason I can,t invite you for dinner`);
console.log(`Sorry, ${guest_list.pop()} , due to some reason I can,t invite you for dinner`);
console.log(`Sorry, ${guest_list.pop()} , due to some reason I can,t invite you for dinner`);


//• Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`\nDear ${guest_list[0]} You are still invited to a dinner party at my place`);
console.log(`Dear ${guest_list[1]} You are still invited to a dinner party at my place`);


//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.splice(0,2,);

console.log(guest_list);