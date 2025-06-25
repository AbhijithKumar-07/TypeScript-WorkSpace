// Note
// While providing 'Annotation' for an Object - We Should Use SemiColon ;
// Ie... Each property of an object should be seperated by semiColon ; In the Objects Annotation

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 19,
};
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

let obj_name: { p1: string; p2: number } = {
  p1: "Object",
  p2: 7,
};

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Abhi",
    age: 19,
    location: "India",
  };
}

console.log( printUser() );
