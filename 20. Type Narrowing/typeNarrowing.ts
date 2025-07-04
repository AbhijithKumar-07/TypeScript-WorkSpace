
// --------------------------------------------------------------------------
// typeof - keyWord
// To know the dataType of a variable --> we use 'typeof' - Keyword
// typeof variable_name  -->> returns the dataType of the variable_name
// --------------------------------------------------------------------------


type MyType = string | number;

function exampleFunction(value: MyType): void {
    if (typeof value == 'string') {
        console.log(value.toUpperCase());
    } else {
        value = value * 2;
        console.log(`Doubled Value: ${value}`);
    }
}

exampleFunction("hello");  // HELLO
exampleFunction(11);       // 22



// ----------------------------------------------------------------
// Bitwise AND - '&' - In TypeScript
// We Use Bitwise AND - '&' - Ambressent Symbol in typeScript for Combining two types
// -----------------------------------------------------------------

type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string;
    role: string;
}

type MangerWithEmployeeInfo = Employee & Manager;

const manager: MangerWithEmployeeInfo = {
    id: 1073,
    name: "Alex Merson",
    department: "Engineering",
    role: "Team Lead",
}

// console.log(manager.id);
// console.log(manager.name);
// console.log(manager.department);
// console.log(manager.role);

