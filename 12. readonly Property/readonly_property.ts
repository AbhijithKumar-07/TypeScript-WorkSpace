// readonly Property
// NOTE - We canNot change the value of a readonly property

type Admin = {
    name: string;
    age: number;
    readonly country: string;
}

let h1: Admin = {
    name: "Abhijith",
    age: 19,
    country: "India"  // ReadOnly Property
}

// In the above example 'country' is a 'readonly' property
// So we cannot change the value of the country property

h1.name = "Mano";  // Here we can change the value of the 'name' property & 'age' property
                   // But we 'cannot' change the value of 'country' property 


// h1.country = "updatedCountry"   -->> ERROR -->> Cannot assign to 'country' because it is a read-only property.
                