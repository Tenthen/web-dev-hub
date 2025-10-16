
function getAvature (points) {
    let level = points/pointsPerLevel;
    if (level == 0)
        return 'Teddy bear';
    else if (level == 1)
        return 'Cat';
    else if (level >= 2) 
        return 'Gorilla';
}

function updatePoints (bonus, newPoints) {
    let i = 0;
    while (i < bonus) {
        newPoints += skill * bonus;
        i += 1;
    }
    return newPoints + userPoints;
}


let avatar = 'Generic';
let skill = 1.0;
let userPoints = 2008;
let pointsPerLevel = 1000;

userPoints = updatePoints(2, 1000);
avatar = getAvature(2112);
console.log(`User points for the students is: ${userPoints}.`);
console.log(`The appropriate avatar for this event is: ${avatar}.`);
