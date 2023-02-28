function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with ".concat(ingredients.join(", "), "."));
}
makeSandwich("ham", "cheese", "lettuce");
makeSandwich("turkey", "bacon", "tomato", "mayo");
makeSandwich("peanut butter", "jelly");
