// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message, bold) {
    if (bold === void 0) { bold = "\x1b[1m"; }
    console.log("You  have ordered a ".concat(size, " size shirt with a message of ").concat(bold).concat(message));
}
make_shirt("small", "All power is within you , you can do anything and everything!");
