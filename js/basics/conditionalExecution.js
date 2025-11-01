// let theNumber = Number(prompt("Pick a number!"));

// if (!Number.isNaN(theNumber))
//   console.log(`Your number is the square root of ${theNumber * theNumber}`);
// else console.log(`Hey, Why didn't you give me a number?`);

let count = 0;

// Displaying even numbers that are under 12
while (count <= 12) {
    if (count % 2 == 0)
        console.log(count);
    count += 1;
}
let result = 1;
count = 0;

while (count < 10) {
    result *= 2;
    count += 1;
}
let user = 'Tenthen';
do {
    console.log(`Welcome!`);
}while(!user);

console.log(result);
console.log(`2 the power of 10: ${2 ** 10}`);
