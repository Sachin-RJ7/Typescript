console.log("Hey, I am starting leaning typescript");
var myName = "Sachin";
myName = "Rohit";
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 3));
// How to write Arrays in typescript
// using square brackets
var numbers = [1, 2, 3, 4, 5, 6];
// using Array constructor
var num = new Array(1, 2, 3, 4, 5, 6);
// map method 
var doubleData = numbers.map(function (num) { return num * 2; });
console.log(doubleData);
// same as in filter and reduce method
// how to write Objects in typescript
// when we have one object, then we can do type casting like this:
var person = {
    userName: "Rohit",
    age: 27,
    address: {
        city: "Baddi",
        state: "HP"
    }
};
var person2 = {
    userName: "Mohit",
    age: 27,
    address: {
        city: "Baddi",
        state: "HP"
    }
};
var person3 = {
    userName: "Purohit",
    age: 27,
    address: {
        city: "Baddi",
        state: "HP"
    }
};
