type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

// For Combining 2 types - We use BitWise AND Symbol- '&' - Ambressant 
// type type_name = type_1 & type_2

type user = UserInfo & AccountDetails;

let user1: user = {
    first: "HuXn",
    last: "WebDEv",
    age: 20,
    email: "huxn@gmail.com",
    password: "huxn@123"
}

