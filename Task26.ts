//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

let alien_color = ["green","yellow","red"];
console.log(alien_color);

let alienColor1 = 'green';
console.log(`Alien color is ${alienColor1}`);

if (alienColor1 == 'green') {
    console.log("The player just earned 5 points.");
} else if (alienColor1 != 'green') {
    console.log("player just earned 10 points.");
}

let alienColor2 = 'red';
console.log(`Alien color is ${alienColor2}`);

if (alienColor2 == 'green') {
    console.log("The player just earned 5 points.");
} else if (alienColor2 != 'green') {
    console.log("player just earned 10 points.");
}