function showMagicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`Great ${magicians[i]}`);
    }
    return greatMagicians;
  }
  const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

const greatMagicians: string[] = makeGreat(magicians.slice());
console.log("Original magicians:");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
