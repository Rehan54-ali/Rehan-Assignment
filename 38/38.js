function describeCity(city, country) {
    if (country === void 0) { country = "United States"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Karachi", "Pakistan"); // prints "Karachi is in Pakistan."
describeCity("New York"); // prints "New York is in United States."
describeCity("Sydney", "Australia"); // prints "Sydney is in Australia."
