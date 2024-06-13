// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country1(city, country) {
    return "".concat(city, ", ").concat(country);
}
var address1 = city_country1("Istanbul", "Turkey");
var address2 = city_country1("New York", "USA");
var address3 = city_country1("Paris", "France");
console.log(address1);
console.log(address2);
console.log(address3);
