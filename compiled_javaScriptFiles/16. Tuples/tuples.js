"use strict";
// We can store the elements of different dataTypes in the tuples with some Restrictions
let myTuple;
// myTuple should have only 2 elements & 
// the dataType of 1st element should be number & 
// the dataType of 2nd element should be string
myTuple = [11, "Hello World"]; // Valid
// myTuple = ["Hello World", 11];  -->> Invalid
// Type 'string' is not assignable to type 'number'.
// Type 'number' is not assignable to type 'string'.
// myTuple = [11, "hii", 7, "hello"];  -->> Invalid
// Type '[number, string, number, string]' is not assignable to type '[number, string]'.
// Source has 4 element(s) but target allows only 2.
let gamesTuple;
// gamesTuple should have only 3 elements & 
// the dataType of 1st element should be string & 
// the dataType of 2nd element should be number &
// the dataType of 3rd element should be boolean
gamesTuple = ["Game 1", 4, true];
// For Storing Elements of different dataTypes in the Arrays 
// -->> We use Logical OR (|)
let Arr = ["Hello", 11, 18, 45, "Hello world", "The END"];
let Arr1 = ["Hii", "Good Mrng", 11, 7, 45, 18];
