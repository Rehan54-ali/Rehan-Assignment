function describeCity(city: string, country = "United States"): void {
    console.log(`${city} is in ${country}.`);
  }
  describeCity("Karachi", "Pakistan");  // prints "Karachi is in Pakistan."
  describeCity("New York");             // prints "New York is in United States."
  describeCity("Sydney", "Australia");  // prints "Sydney is in Australia."
    