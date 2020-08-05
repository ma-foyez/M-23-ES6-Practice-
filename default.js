function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
const total = add(14, 16);
console.log(total);


// default value set in parameter
function add(num1, num2 = 0) {
    // here default of a parameter set many way, 
    // here use if condition to use set default value
    // if (num2 == undefined) { 
    //     num2 = 0
    // }
    // num2 = num2 || 0; //this method use to set default value
    sum = num1 + num2;
    return sum;
}
const total1 = add(14, 5);
console.log(total1);