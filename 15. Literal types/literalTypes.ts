let Color: "red" | "green" | "blue";
Color = "red";

// Color= "yellow"  -->> ERROR -->> Beacuse we can assign only either "red" or "green" or "blue" to the Color variable. We cannot assign any other values to the Color variable

let isStudent: true | false;
isStudent = false;
// isStudent = "someOther Value"  -->> ERROR

let X: 1 | 2 | 3;
X = 1; // Valid
X = 2; // Valid
X = 3; // Valid

// X = 11  -->> Invalid  -->> We can assign only either 1 or 2 or 3 to the variable X


let passWord: "secretpassword" = "secretpassword";

// passWord = "something else";  -->> Invalid  -->> Type '"something else"' is not assignable to type '"secretpassword"'.
