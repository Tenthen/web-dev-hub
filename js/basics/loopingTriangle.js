
function loopingTriangle () {
    let pattern = '#';
    for (let counter = 0; counter < 7; counter++) {
        console.log(pattern);
        pattern += '#';
    }
}

function loopTriangle () {
    for(let pattern = '#'; pattern.length <=7; pattern += '#') 
        console.log(pattern);
}

loopTriangle();