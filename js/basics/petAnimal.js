
function bark (name, weight) {
    if (weight > 20) console.log(`${name} says Woof Woof!`);
    else console.log(`${name} says Beep Beep!`);
}

function whatShallWear (temperature) {
    if (temperature < 60) console.log(`Wear a Jacket!`);
    else if (temperature < 70) console.log(`Wear a sweater!`);
    else console.log(`Wear a T-Shirt!`);
}

bark('Rover', 20);
bark('Spike', 53);
bark('Lady', 13);

whatShallWear(50);
whatShallWear(80);
whatShallWear(60);
