
function arrayChecker (array) {
    let arrayLength = array.length;
    let maxValue = 0;
    let indexOfMaxValues = [];

    for (property in array) {
        console.log(`Bubble solution #${property} score: ${array[property]}`);
        if (array[property] > maxValue)
            maxValue = array[property];
    }
    for (property in array) {
        if (array[property] == maxValue)
            indexOfMaxValues.push(property);
    }

    return [arrayLength, maxValue, indexOfMaxValues];
}

function beginBubble () {
    let score = [60, 50, 60, 58, 54, 54,
        58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51,
        69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18,
        41, 53, 55, 61, 51, 44];

    let arraySolution = arrayChecker(score);

    console.log(`Bubble tests: ${arraySolution[0]}`);
    console.log(`Highest bubble score: ${arraySolution[1]}`);
    console.log(`Solutions with highest score: ${arraySolution[2]}`);

}

beginBubble();