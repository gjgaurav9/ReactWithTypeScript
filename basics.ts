// primitive types : number , string , boolean
// complex types : arrays, object
// Function type : parameters

// primitive types

let myNum: number;

myNum = 10.3;

let myString: string;

myString = "hello";

let myBool: boolean;

myBool = false;

// Complex Types

let myStrArr: string[];

myStrArr = ["name", "hell"];

let myPersonObj: {
  name: string;
  age: number;
};

myPersonObj = {
  name: "Gaurav",
  age: 4,
};

let myObjectArr: {
  name: string;
  age: number;
}[];

myObjectArr = [
  {
    name: "Gaurav",
    age: 4,
  },
];

// Type inference 
let myInferredString = 'Hello there! I am am inferred String by default, no need the type';


// to define 2 or more types we use union types '|'.
let myUnionType: string | number = 'Hello there! I am am inferred String by default, no need the type';

myUnionType = 6;