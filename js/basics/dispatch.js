
let weather = 'cloudy';

switch (weather) {
    case 'rainy':
        console.log(`Don't forget to bring an umbrella.`);
        break;
    case 'sunny':
        console.log(`Dress lightly!`);
        break;
    case 'cloudy':
        console.log(`Go outside!`);
        break;
    default:
        console.log(`Unknown weather type!`);
        break;
}