// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: (string | number)[];
}

type Guitarist2 = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray; // type aliase
}

type userId1 = string | number
type userId2 = stringOrNumber;   // type aliase


// Literal types
let myName: "Sachin";

let userName: 'Sachin' | "Tarun" | "Ashish"

userName = "Tarun"  // this will work
// userName = "Rohit"  // this will not work

// functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters
const addAll = (a:number, b:number, c?:number): number => {
    if(typeof c !== "undefined"){
        return a + b + c;
    }
    return a + b;
}

// default parameters;
const sumAll = (a:number = 10, b:number, c:number = 2): number => {
    return a + b + c;
}

logMsg(addAll(3, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3))

// Rest parameter
const total = (a:number, ...nums:number[]): number => {
    return a + nums.reduce((prev, cur) => prev + cur);
}

console.log(logMsg(total(20, 2, 3)))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}