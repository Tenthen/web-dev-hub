

// Computation on special numbers & Displaying them
function specialNumbers (num1, num2) {
    let result1 = num1 - 4;
    let result2 = num2/num2;
    let result3 = num1 - num1;
    let result4 = 2/num1;
    let result5 = 2000000000000000/num2;

    console.log(`Ifinity - Infinity is ${result3}`);
    console.log(`Zero devided by zero is: ${result2}`);
    console.log(`Substracting any whole number from Infinity is: ${result1}`);
    console.log(`Any whole number divided by Infinity is: ${result4}`);
    console.log(`Any whole number divided by zero is: ${result5}`);
    console.log(`Infinity devide by Infinty is ${num1/num1}`);
    console.log(`Infinity times Infinity ${num1 * num1}`);
    console.log(`NaN devide by NaN is ${(result3 * result3)}`);
    console.log(`Zero times Ifinity is: ${num1 * num2}`);

}

specialNumbers(Infinity, 0);
