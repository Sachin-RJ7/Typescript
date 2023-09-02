console.log("Hey, I am starting leaning typescript")
let myName:string = "Sachin"
myName = "Rohit"

function sum(num1:number, num2:number):number {
    return num1 + num2;
}

console.log(sum(1, 3));

// How to write Arrays in typescript
    // using square brackets
    const numbers:number[] = [1, 2, 3, 4, 5, 6]

    // using Array constructor
    const num:number[] = new Array(1, 2, 3, 4, 5, 6);

    // map method 
    const doubleData:number[] = numbers.map((num:number) => num * 2)
    console.log(doubleData);
    // same as in filter and reduce method

// how to write Objects in typescript
    // when we have one object, then we can do type casting like this:
    const person:{
        userName: string;
        age: number;
        address:{
            city: string;
            state: string;
        }
    } = {
        userName: "Rohit",
        age: 27,
        address: {
            city: "Baddi",
            state: "HP"
        }
    }

    // but if we have more than one, we can use 'alias' of Typescript, which makes code more readable, follow the DRY principle...
    type PersonType = {
        userName: string;
        age: number;
        address:{
            city: string;
            state: string;
        }
    }

    const person2:PersonType = {
        userName: "Mohit",
        age: 27,
        address: {
            city: "Baddi",
            state: "HP"
        }
    }

    const person3:PersonType = {
        userName: "Purohit",
        age: 27,
        address: {
            city: "Baddi",
            state: "HP"
        }
    }
