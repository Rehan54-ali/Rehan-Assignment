interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary keys of any type
  }
  
  function store_car_info(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    for (const option of options) {
      const key = Object.keys(option)[0];
      car[key] = option[key];
    }
  
    return car;
  }
  
  // Call the function to store car information
  const car = store_car_info("Toyota", "Corolla", { color: "red" }, { year: 2022 });
  
  // Print the object to make sure all the information was stored correctly
  console.log(car);

  {
    manufacturer: 'Toyota'
    model: 'Corolla'
    color: 'red'
    year: 2022
  }
  
  