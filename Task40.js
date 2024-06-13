/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call */
// type Album = {
//     artist: string;
//     title: string;
//     tracks?: number;
// };
// Define the make_album function with an optional tracks parameter
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album objects
var album1 = make_album('Taylor Swift', '1989');
var album2 = make_album('Adele', '25');
var album3 = make_album('The Beatles', 'Abbey Road', 17);
// Print each album object to show that the objects store the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
