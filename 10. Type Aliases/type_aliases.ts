// let var_name: dataType_of_value = value
// Here we are providing 'dataType_of_value' -->> It is known as 'Annotation'
//Example 1
let n: number = 7;
// Here we are providing the dataType of variable n
// -->> So, the 'dataType' of the variable we are providing is known as "Annotation"
// Here In the above example --> number --> Is "Annotation"

// Example 2
let obj: { name: string; isStudent: boolean } = {
  name: "Abhijith",
  isStudent: true,
};
// Here In the above example --> {name: string; isStudent: boolean} --> This is "Annotation"

// Now for providing "our OWN name" to the "Annotation" --> We use 'Type Aliasing'

// Type Aliasing

type User = {
  name: string;
  age: number;
  location: string;
};

const userInfo: User = {
  name: "Abhijith",
  age: 19,
  location: "India",
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name} | Age: ${user.age} | Location: ${user.location}`;
};
const res = printUserInfo({ name: "Alex", age: 19, location: "USA" });
console.log(res);



// Method 1
// let num: number = 7;

// Method 2 - By using type Aliasing
type myOwnName = number;
let num: myOwnName = 11;

console.log(num);
