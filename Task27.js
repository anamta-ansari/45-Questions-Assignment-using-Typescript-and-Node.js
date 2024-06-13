//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = ["green", "yellow", "red"];
console.log(alien_color);
var alienColor1 = 'green';
console.log("Alien color is ".concat(alienColor1));
if (alienColor1 == 'green') {
    console.log("The player just earned 5 points.");
}
else if (alienColor1 == 'yellow') {
    console.log("player just earned 10 points.");
}
else if (alienColor1 == "red") {
    console.log("player earned 15 points");
}
var alienColor2 = "yellow";
console.log("Alien color is ".concat(alienColor2));
if (alienColor2 == 'green') {
    console.log("The player just earned 5 points.");
}
else if (alienColor2 == 'yellow') {
    console.log("player just earned 10 points.");
}
else if (alienColor2 == "red") {
    console.log("player earned 15 points");
}
var alienColor3 = 'red';
console.log("Alien color is ".concat(alienColor3));
if (alienColor3 == 'green') {
    console.log("The player just earned 5 points.");
}
else if (alienColor3 == 'yellow') {
    console.log("player just earned 10 points.");
}
else if (alienColor3 == "red") {
    console.log("player earned 15 points");
}
