
const numbers = [12, 34, 56, 67, 78, 89];

const names = ["Jakaria", "Imran", "Hridoy", "Jui"];

// forEach - when did't need any return or u want to just access value then u have to use forEach, here u didn't get back any array of values, u can access that value or nothing.

numbers.forEach(number => console.log(number));

//map - when u need return value then you have to use map , after that u get array of values what u need to return. map a condition deowa jay na.
numbers.map(number => console.log(number));

console.log(numbers);
console.log(...numbers);

console.log(names);
console.log(...names);

const marks = [12, 23, 44, 56, 67];

// find = condition prothom tar sathe match korar por e return korbe.
const result = marks.find(marks => marks > 20);
console.log(result);

// filter = return array in number and condition full korar por baki sob return korbe. i explore filter with multiple conditions. filter a condition deowa jay.
const bigNumbers = marks.filter(mark => mark > 20 && mark % 2 === 0);
console.log(bigNumbers);
