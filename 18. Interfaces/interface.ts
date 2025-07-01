// Interfaces in Typescript -->> IMPORTANT TOPIC

// Interfaces for Objects
//Example 1

interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

let HP: Computer = {
  name: "i7",
  ram: 8,
  hdd: 100,
};

console.log(HP.name);
console.log(HP.ram);
console.log(HP.hdd);

// Interfaces for Objects
// Example 2

interface Movie {
  readonly name: string;
  ratings: number;
  genra?: string;
}

const movie1: Movie = {
  name: "Star Wars",
  ratings: 8.9,
  genra: "Action",
};

// Interfaces for Functions
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => {
    return a + b;
}

console.log(add(2, 3));

// Creating subtract function without using Interface
function subtract(a: number, b: number): number {
    return a - b;
}


// subtract function using Interface
const Subtract: MathOperation = (a, b) => {
    return a - b;
}

console.log(Subtract(30, 5));