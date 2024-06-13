"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Anamta Barkat";
//lower case
console.log("lower case:", personName.toLowerCase());
//upper case
console.log("Upper case:", personName.toUpperCase());
//title case
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName
    .slice(1).toLowerCase());
