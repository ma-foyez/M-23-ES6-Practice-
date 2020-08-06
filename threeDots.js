//three dots work like concat method in js

const num1 = [23, 12, 43, 21, 54];
const num2 = [32, 21, 34, 12, 45];
const num3 = [22, 31, 43, 31, 43];
// const total = num1.concat(num2).concat([94]).concat(num3); 

//three dots use
const total = [...num1, 67, ...num2, ...num3]; // here add extra new element in new array
console.log(total);

//example of use three dots
const salary = [450, 650, 720, 270];
const maximum = Math.max(...salary);
console.log('Highest salary is :', maximum);