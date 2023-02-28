function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  const city1 = cityCountry("Lahore", "Pakistan");
  console.log(city1);  // prints "Lahore, Pakistan"
  
  const city2 = cityCountry("London", "United Kingdom");
  console.log(city2);  // prints "London, United Kingdom"
  
  const city3 = cityCountry("New York", "United States");
  console.log(city3);  // prints "New York, United States"
    