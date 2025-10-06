
// Function that returns power of a number
const power = function (base, exponent) {

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
        
    }
    return result;

};

// Displaying the result of the power function
console.log(`2 the power of 4 is ${power(2, 4)}`);