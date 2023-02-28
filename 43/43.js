function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
var greatMagicians = makeGreat(magicians.slice());
console.log("Original magicians:");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
