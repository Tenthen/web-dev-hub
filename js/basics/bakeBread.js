
function bake (temperature) {
    let message;
    if (temperature > 5000) 
        message = `I'm not a nuclear reactor!`;
    else if (temperature < 100) 
        message = `I'm not a refrigerator!`;
    else 
        message = `That is a very comfortable temperature for me!`;

    return message;
}
let bread = bake(6200);
console.log(`The baking mode of this machine is ${bread}`);

function doIt (parameter) {
    parameter = 2;

}
let test = 1;
doIt(test);
console.log(test);