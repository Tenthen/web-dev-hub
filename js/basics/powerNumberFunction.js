
const power = function (base, exponent) {

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
        
    }
    return result
}
console.log(`2 the power of 4 is ${power(2, 4)}`);