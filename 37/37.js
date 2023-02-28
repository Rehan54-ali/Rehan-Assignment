function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Your shirt size is ".concat(size, ", and the message is \"").concat(message, "\"."));
}
make_shirt(); // creates a large shirt with the default message
make_shirt("medium"); // creates a medium shirt with the default message
make_shirt("small", "TypeScript is awesome!"); // creates a small shirt with a custom message
