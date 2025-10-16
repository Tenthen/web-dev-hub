
function factorial (number) {
    if (number == 1 || number == 0)
        return 1;
    else 
        return number * factorial(number - 1);
}

let factorialResult = factorial(7);
console.log(`Factorial of 7 is: ${factorialResult}`);
