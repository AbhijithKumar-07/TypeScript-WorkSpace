// Regular Function
function double(x: number): number {
    return x*x;
}
const d = double(7);
console.log(d);

// Arrow Function
const double1 = (x: number): number => {
    return x*x;
}
console.log( double1(11) );


// Example
const isEven = (x: number): boolean => {
    if(x%2 == 0) return true;
    else return false;
}
console.log( isEven(5) );
