function bubbleMaker () {
    let score = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

    console.log(`Making Bubbles`);
    for (index in score) {
        let number = Number(index) + 1;
        console.log(`Solution ${number }:\t ${score[index]}`);
    }
}

function bubbleModifier () {
    let score = [60, 50, 60, 58, 54, 54,
        58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51,
        69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18,
        41, 53, 55, 61, 51, 44];
    let maxScore = null;
    let indexStore = [];

    for (property in score) {
        console.log(`Bubble solution #${property} score: ${score[property]}`);

        if (score[property] > maxScore)
            maxScore = score[property];

    }
    for (property in score) {
        if (maxScore == score[property])
            indexStore.push(property);
    }

    console.log(`Bubble tests: ${score.length}`);
    console.log(`Highest bubble score: ${maxScore}`);
    console.log(`Solutions with highest score: #${indexStore}`);
}

bubbleMaker();
bubbleModifier();