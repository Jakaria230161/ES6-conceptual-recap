
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((previous, current) => {
    return previous + current;
}, 0)

console.log(sum);

const num = [2, 3];

const result = num.reduce((previous, current) => {
    return previous * current;
},1)

console.log(result);