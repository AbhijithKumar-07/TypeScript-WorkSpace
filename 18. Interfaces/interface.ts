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


// IMPORTANT -->> NOTE -->> We Can Also Provide 'Methods' In an 'Interface'

// An Object Can Contain Properties & Methods
// Methods -->> Methods are nothing but functions
// But we do not use 'function' Keyword to create a method in an object

//   interface interfaceName {
//       propName: dataTypeOf_Value,
//       methodName() : dataTypeOf_ReturnValue
//   }

//   let objName: interfaceName = {
//       propName: value,
//       methodName() {

//       },
//   }

// Example - 1
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello() : void;
}


const john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
        console.log("Hi There");
    },
}

console.log(`WhatsUp ${john.firstName} ${john.lastName}`);
john.sayHello();


// Example - 2
interface Students {
    name: string;
    regNo: number;
    cgpa: number;
    gradeCard(): void;
}

let student1: Students = {
    name: "Abhijith Kumar",
    regNo: 1073,
    cgpa: 8.32,
    gradeCard() {
        console.log(`${student1.name}'s Cgpa is ${student1.cgpa}`);
    },
}

function studentResults(student: Students): void {
    student.gradeCard()
}

studentResults(student1);


// Example-3
interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

let song1: Song = {
    songName: "Natural",
    singerName: "Drigon",
    printSongInfo(songName, singerName) {
        return `Song: ${songName}, Singer: ${singerName}`
    },
}

console.log( song1.printSongInfo(song1.songName, song1.singerName) );


// Example-4
interface Game {
    gameName: string;
    mobileGame: boolean;
    letsPlay() : void;
}

const FF: Game = {
    gameName: "Free Fire",
    mobileGame: true,
    letsPlay: () => {
        console.log(`Lets Play ${FF.gameName}`);
    }
}

FF.letsPlay();


