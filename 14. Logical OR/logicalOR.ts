// logical OR (|) in TypeScript

let password: string | number = 11;

type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  email: string;
  password: string | number;
};

let U1: userInfo | accountDetails = {
  email: "abhi@gmail.com",
  password: 123,
};

let U2: userInfo | accountDetails = {
  first: "Abhijith",
  last: "Kumar",
  age: 19,
};

let U3: userInfo | accountDetails = {
  first: "Abhijith",
  last: "Kumar",
  age: 19,
  email: "abhi@gmail.com",
};


let a: number[] = [1, 2, 3];

const Items: (number | string)[] = [1, 2, 3, "Virat", "Dhoni"];

const combo: Array<string | number> = [4, 5, 6, "hello"];

const combined: (string | number | boolean)[] = [7, true, "helloo", 45];
