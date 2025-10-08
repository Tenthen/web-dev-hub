
// The extra arguments are optional
let square = function (num1) {
    return num1 * num1;
};

console.log(`Square of 21 is: ${square(21)}`);

// The second argument is optional any can't acceptted by the function
console.log(`Square of 21 is ${square(21, 'Special number')}`);