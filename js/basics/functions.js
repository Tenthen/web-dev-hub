
const square = function(x) {
    return x * x;
};

const makeNoise = function() {
    console.log('Pling!');
};

const power = function (base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base; 
    }
    return result;
};

console.log(`Cube of 3 is ${power(3, 3)}`);
makeNoise();

console.log(`The future says: ${future()}`);

//function declaration
function future() {
    return `You'll never have flying cars.`;
}

// Arrow function
const powerArrow = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

// More simplified arrow function
const squareArrow = x => x * x;

const squareDetail = function (x) {
    return x * x;
}