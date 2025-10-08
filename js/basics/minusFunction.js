
// Function that computes the subtraction
function minus (num1, num2) {
    if (num1 === undefined) 
        return -num1;
    else 
        return num1 - num2;
}

let result = minus(127, 77);
console.log(`The subtration result is: ${result}`)