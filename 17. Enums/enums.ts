// Enums in typeScript
// Enums are similar to Objects. 
// But for Objects we need to specify the 'Annotation'.
// For Enums -->> No need to provide the 'Annotation' 
// SYNTAX -->> While creating an 'Enum' -->> No need to provide '=' ( Equals to )

// enumSyntax -->>  
  enum enum_Name {
       prop = "value1",
       prop2 = 7,
  } 

// enum_Name.prop  -->> Returns the value

// Conclusion
// While creating an enum -->> 
// Do not use 'Annotations' 
// & Do not Use Equals To '='


enum weatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = 'snowy',
}

const currentWeather = weatherConditions.Rainy;
console.log(`The current weather is ${currentWeather}`);

