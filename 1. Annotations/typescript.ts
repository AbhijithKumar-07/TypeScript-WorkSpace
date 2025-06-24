
let age = 19;
// Here in the above we donot provide the annotation (dataType) to the age variable 
// ie. -->> let age: number = 19
// So the dataType of the age variable is considered according to its value
// Here 19 is an integer value --> so the 'dataType' of the age variable is considered as 'number' by typescript
// Now dataType of 'age' is a 'number' 
// So we can assign "only" 'number' values -->> Integer values -->> to the age variable
// We can not assign a string or boolean or any values other than 'number' dataType 
// For Example --> age = "Not Found" --> Is Not Possible -->> ERROR -->> Because here 'dataType' of 'age' is a 'number' 

// age = "Can not assign str value";
// console.log(age);

// CONCLUSION
// If we donot provide the annotation (dataType) of a variable 
// Then Typescript automatically considers the dataType of the variable according to its value

// Here -->> let age = 19
// In the above we donot provide the annotation (dataType) of age variable 
// Typescript automatically considers the dataType according its value
// here 19 is an integer value
// So Typescript automatically considers -->>
// -->> let age = 19 -->> considers as -->> let age: number = 19   
