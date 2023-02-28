// Define an array of magicians
var magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
// Define a function to show the list of magicians
function show_magicians(magicians) {
    console.log("List of magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function to make magicians great
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Call show_magicians() to see the initial list of magicians
show_magicians(magicians);
// Call make_great() to modify the list of magicians
make_great(magicians);
// Call show_magicians() again to see the modified list of magicians
show_magicians(magicians);
