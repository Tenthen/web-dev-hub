
/*
const square = function (num) {
    return num * num;
}
*/

// Square function using Arrow function
const square = num => num * num;

/*
const power = function (base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;

    }
    return result;
}
*/

// Power function using Arrow function
const power = (base, exponent) => {
    let reuslt = 1;
    for (let i = 0; i < exponent; i++) {
        reuslt *= base;

    }
    return reuslt;
};

console.log(`Square of 77 is: ${square(77)}`);
console.log(`2 the power of 10 is: ${power(2, 10)}`);
