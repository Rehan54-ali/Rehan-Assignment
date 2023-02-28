var animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Print a final statement about the common characteristic
console.log("Any of these animals would make a great pet!");
