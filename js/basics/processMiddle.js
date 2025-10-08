
// Accepts parameter and displays its relevant value
function process (status) {
    switch (status) {
        case 'front-End':
            console.log('I can achieve the goal!');
            break;
        case 'messy-Middle':
            console.log(`I'm not sure I have what it takes to finish.`);
            break;
        case 'finish-Line':
            console.log('I did it!\nI make it happen!');
            break;
        default:
            console.log('Success is only for lucky people!');
    }
}

process('messy-Middle');