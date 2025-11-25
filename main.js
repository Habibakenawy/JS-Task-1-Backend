//Coding Questions
//1
console.log(Number(123) + 7);

//2
let variable = 0;
if (!variable) {
  console.log("Invalid");
}

//3
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

//4
let arr = [1, 2, 3, 4, 5];
console.log(arr.filter((num) => num % 2 == 0));

//5
let arr_1 = [1, 2, 3];
let arr_2 = [4, 5, 6];
let mergedArr = [...arr_1, ...arr_2];
console.log(mergedArr);

//6
let day_number = 2;
let day = "";

switch (day_number) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid day";
    break;
}

console.log(day);

//7
let strings = ["a", "ab", "abc"];
console.log(strings.map((el) => el.length));

//8
function checkDivisibleByFiveoOrThree(data = {}) {
  let { num } = data;
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by both");
  } else if (num % 3 == 0) {
    console.log("Divisible by 3");
  } else if (num % 5 == 0) {
    console.log("Divisible by 5");
  } else {
    console.log("Not divisible by 5 or 3");
  }
}

checkDivisibleByFiveoOrThree({ num: 15 });

//9
let square = (num) => num ** 2;
console.log(square(5));

//10

function extraction(data = {}) {
  let { name, age } = data;
  console.log(`${name} is ${age} years old`);
}

extraction({ name: "John", age: 25 });

//11

function summation(...data) {
  return data.reduce((sum, el) => sum + el, 0);
}

console.log(summation(1, 2, 3, 4, 5));

//12

function message() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

message().then((m) => console.log(m));

//13

function largestElemnet(data) {
  let result = data.reduce((maxi, el) => {
    return el > maxi ? el : maxi;
  }, arr[0]);
  console.log(result);
}
largestElemnet([1, 3, 7, 2, 4]);

//14
function objectKeys(data) {
  return Object.keys(data);
}
console.log(objectKeys({ name: "John", age: 30 }));

//15
function splitting(str) {
  return str.split(" ");
}
console.log(splitting("The quick brown fox"));

//Essay Questions

//1
//forEach is a builtin array function that takes a call back function.It loops on all the array element . It does not return an array.
// for ... of works on any iterable element ex: array strings etc
// use forEach for arrays and looping without breaking.
//use for ... of over any iterable and if I want to break or continue or return.

//2
//Hoisting is the moving of the declaration [function or variables] to the top of the scope
// example
//  sayHello();
// function sayHello() {
//     console.log("Hello!");
// }

// console.log(x); // undefined
// var x = 5;

// TDZ is the number of lines between the hoisted declaration of variable using let or const and  the definition of the variable

// {
//     console.log(a); // ReferenceError

//     let a = 10;     // TDZ ends here
// }

//3
// == is equality in value only
//=== is equality in value and data type

//4
//The try part holds the code that might break (throw an error).
//The catch part holds the code that runs only if something breaks inside the try.
//By wrapping the await call inside try, you can treat that asynchronous failure just like a regular, immediate error.
//The catch then captures the failure.

//5
//Type Conversion (Explicit)
//Type conversion is when you manually convert a value from one type to another using functions.
// let str = "123";
// let num = Number(str);
// console.log(num);
// console.log(typeof num);

//Type Coercion (Implicit)
//Type coercion is when JavaScript automatically converts a value from one type to another
// Number + String → String
// let result = 5 + "5";
// console.log(result);       // "55"
// console.log(typeof result); // "string"
