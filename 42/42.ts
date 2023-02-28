// Define an array of magicians
const magicians: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];

// Define a function to show the list of magicians
function show_magicians(magicians: string[]): void {
  console.log("List of magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Define a function to make magicians great
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

// Call show_magicians() to see the initial list of magicians
show_magicians(magicians);

// Call make_great() to modify the list of magicians
make_great(magicians);

// Call show_magicians() again to see the modified list of magicians
show_magicians(magicians);
