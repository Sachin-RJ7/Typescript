"use strict";
// Array
let stringArr = ["Rohit", "karn", "Arjun"];
let guitars = ["start", "les paul", 550];
let mixedData = ["Mohit", 24, true];
stringArr[0] = "Ashish";
stringArr.push("hey");
guitars[0] = 'bye';
guitars.unshift('jim');
let test = [];
let bands = []; // Array of strings values
bands.push('ha ha ha');
// Tuple
let myTuple = ["Tarun", 27, true];
let mixed = ["johng", 21, false];
mixed = myTuple; // both are equal
// myTuple = mixed;   // not equal
// enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
})(Grade || (Grade = {}));
const myObj1 = {
    name: "Ajay",
    roll_no: 1,
    isActive: false,
};
const myObj2 = {
    name: "Rahul",
    roll_no: 2,
    isActive: true,
};
