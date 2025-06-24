// Regular Function
function addOne(age: number) {
    return age + 1;
}
const result = addOne(19);
console.log(result);


// Arrow Function
let multiply = (x: number, y: number) => {
    return x*y;
}
const product = multiply(9,8);
console.log(product);


// Default Parameters
function greet(person: string = "UnKnown") {
    return `Hello ${person}`
}
let p1 = greet();
console.log(p1);
let p2 = greet("Abhi");
console.log(p2);