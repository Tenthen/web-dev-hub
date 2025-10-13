
function steal (balance, amount) {
    cameraOn = false;
    if (amount < balance)
        balance -= amount;

    return amount;

}

let balance = 10500;
let cameraOn = true;

let amount = steal(balance, 1250);
console.log(`Criminal stole: ${amount}`);