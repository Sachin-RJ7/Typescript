// Array
let stringArr = ["Rohit", "karn", "Arjun"]
let guitars = ["start", "les paul", 550];
let mixedData = ["Mohit", 24, true]

stringArr[0] = "Ashish";
stringArr.push("hey");

guitars[0] = 'bye';
guitars.unshift('jim')

let test = []
let bands:string[] = []  // Array of strings values
bands.push('ha ha ha');

// Tuple
    let myTuple:[string, number, boolean] = ["Tarun", 27, true]

    let mixed = ["johng", 21, false];

    mixed = myTuple;  // both are equal

 // myTuple = mixed;   // not equal


// enum

enum Grade {
    A = 1, 
    B, 
    C, 
    D, 
    E 
}

// type
type XYZ = {
    name: string;
    roll_no: number;
    isActive: boolean;
}

const myObj1: XYZ ={
    name: "Ajay",
    roll_no: 1,
    isActive: false,
}

const myObj2: XYZ ={
    name: "Rahul",
    roll_no: 2,
    isActive: true,
}