var pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the name of each pizza
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Print a sentence about each pizza
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
// Print a final statement about how much you like pizza
console.log("I really love pizza!");
