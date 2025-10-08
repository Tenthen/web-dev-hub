
// Displays goos with 
function birthday (name, amount) {
    console.log(`Happy birthday to dear ${name}!`);

    while (amount > 0) {
        console.log(`Happy Birthday to you!`);
        amount -= 1;
    }
}

// Calling the birthday function with arguments
birthday('Cathrina', 3);