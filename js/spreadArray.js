
const numbers = [0, 1, 3, 5, 6, 7, 8, 9];

 console.log(numbers);  // get a array
 console.log(...numbers);  // get a numbers list
 console.log(Math.min(...numbers));    // this is a power of spread (...)

const number = [23, 45, 56, 77, 99];
const newArray = [...numbers, ...number];  // here two array connected
const newArray1 = [100, ...numbers, ...number, 200];  // here two array converted in array format.

// Destructuring functions
const [a, b, ...rest] = numbers;

console.log(a, b);
console.log(rest);
console.log(a, b,...rest);   // a, b chara baki sob gula chole asbe.
console.log(newArray);
console.log(newArray1);

// spread array
const m = [1, 2, 4, 5, 6];
// const n = m;   //here just m array reference or nothing else
const n = [...m];  // here is m[]all array copied

// for (let item of m) {
//     m.push(item);
// }

m.push(100);
n.push(200);

console.log(m);
console.log(n);