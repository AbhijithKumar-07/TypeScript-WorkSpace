function printNumber(item: number, defaultValue: number): number[] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): string[] {
  return [item, defaultValue];
}

function printBoolean(item: boolean, defaultValue: boolean): boolean[] {
  return [item, defaultValue];
}

const number = printNumber(7, 18);
const Str = printString("hello", "world");
const bool = printBoolean(true, false);

// console.log(number);
// console.log(Str);
// console.log(bool);

function Print(item: any, defaultValue: any): any[] {
  return [item, defaultValue];
}

// -------------------------------------------------------------
// Generic Functions in typeScript

// Example 1
function GenericFun<T>(item: T, defaultValue: T): T[] {
  return [item, defaultValue];
}

const Num = GenericFun<number>(10, 20);
const STR = GenericFun<string>("hello", "world");
const Bool = GenericFun<boolean>(true, false);

// console.log(Num);
// console.log(STR);
// console.log(Bool);

interface Dog {
  name: string;
  breed: string;
}

const dog1 = GenericFun<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

// console.log(dog1);

// Example 2
function getRandomKeyValuePair<T>(obj: { [dynamicValue: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "bananna", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
// console.log(randomStringPair);

const numberObject = { one: 1, two: 2, three: 3 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
// console.log(randomNumberPair);

// Example 3

function filterArray<T>(arr: T[], conditionFun: (ele: T) => boolean): T[] {
  return arr.filter((ele, index) => conditionFun(ele));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (ele) => ele % 2 == 0);
console.log(evenNumbers);