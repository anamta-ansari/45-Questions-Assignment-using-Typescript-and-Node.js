// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list : string[] = ["Fatima", "Javeria", "Harmain"]; 

console.log(`\nI have found bigger dinning table, so now more space is available`);

//Add one new guest to the beginning of your array.
guest_list.unshift( "Beenish" );


//Add one new guest to the middle of your array.
guest_list.splice(2, 0, 'Alisha'); 
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guest_list.push("Zainab");


console.log(`\nDear ${guest_list[0]} You are cordially invited to a dinner party at my place`);
console.log(`Dear ${guest_list[1]} You are cordially invited to a dinner party at my place`);
console.log(`Dear ${guest_list[2]} You are cordially invited to a dinner party at my place`);
console.log(`Dear ${guest_list[3]} You are cordially invited to a dinner party at my place`);
console.log(`Dear ${guest_list[4]} You are cordially invited to a dinner party at my place`);
console.log(`Dear ${guest_list[5]} You are cordially invited to a dinner party at my place`);