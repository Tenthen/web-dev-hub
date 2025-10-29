
function wrapValues (number) {
    let local = number;
    return () => local;
}
let square = x => x * x;

function dispatch (weather) {
    switch (weather) {
        case 'sunny':
            console.log(`Dress lightly.`);
            break;
        case 'rainy':
            console.log(`Remember to bring an umbrella.`);
            break;
        case 'cloudy':
            console.log(`Go outside.`);
            break;   
        default:
            console.log('Unknown weather condition.');
            break;
    }
    console.log(weather);
}

let wrap1 = wrapValues(1);
let wrap2 = wrapValues(2);

// console.log(wrap1);
// console.log(wrap2());
// console.log(dispatch('sunny'));
console.log(dispatch);