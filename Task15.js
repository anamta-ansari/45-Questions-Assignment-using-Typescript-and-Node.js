// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guest_list = ["Fatima", "Javeria", "Harmain"];
var not_presentGuest = guest_list[1];
console.log("\n".concat(not_presentGuest, ", will not coming on dinner tomorrow"));
var new_guest = "Ayesha";
guest_list[1] = new_guest;
console.log("\nDear ".concat(guest_list[0], " You are cordially invited to a dinner party at my place"));
console.log("Dear ".concat(guest_list[1], " You are cordially invited to a dinner party at my place"));
console.log("Dear ".concat(guest_list[2], " You are cordially invited to a dinner party at my place"));
