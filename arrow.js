const sumFunction = (num1, num2) => num1 * num2; //simple arrow function declare
const result = sumFunction(5, 6);
console.log(result);

const add = (num1, num2 = 0) => num1 + num2; //arrow function declare with default value
const result1 = add(6);
console.log(result1);

const math = (num1, num2) => { //multiple work in arrow function, there must be a return value
    const sum = num1 + num2;
    const diff = num1 - num2;
    const output = sum * diff;
    return output;
};
const result2 = math(10, 6);
console.log(result2);