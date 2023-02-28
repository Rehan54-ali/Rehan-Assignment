function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = Object.keys(option)[0];
        car[key] = option[key];
    }
    return car;
}
// Call the function to store car information
var car = store_car_info("Toyota", "Corolla", { color: "red" }, { year: 2022 });
// Print the object to make sure all the information was stored correctly
console.log(car);
{
    manufacturer: 'Toyota';
    model: 'Corolla';
    color: 'red';
    year: 2022;
}
