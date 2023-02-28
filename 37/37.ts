function make_shirt(size = "large", message = "I love TypeScript"): void {
    console.log(`Your shirt size is ${size}, and the message is "${message}".`);
  }
  
  make_shirt(); // creates a large shirt with the default message

  make_shirt("medium"); // creates a medium shirt with the default message

  make_shirt("small", "TypeScript is awesome!"); // creates a small shirt with a custom message
