
// Displays the values of score array
function printScores (score) {
    for (property in score) 
        console.log(`Bubble solution #${property} score: ${score[property]}`);

}

// Returns highscore of the array
function getHighScore (score) {
    let highScore = 0;
    for (property in score) {
        if (score[property > highScore])
            highScore = score[property];
    }

    return highScore;
}

// Returns the lowestcost from the given array
function getLowCost (cost) {
    let lowCost = 0;
    for (property in cost) {
        if (cost[property] < lowCost)
            lowCost = cost[property];
    }

    return lowCost;
}

// Returns the index of the highscore if it's lowest in cost too
function getCostEffective(score, cost, highScore) {
    let lowCost = 100;
    let index = null;

    for (property in score) {
        if (score[property] == highScore){
            if (cost[property] < lowCost) {
                lowCost = cost[property];
                index = property;
            }
        }
    }

    return index;
}

function compeleteBubbleSolution() {
    let score =  [60, 50, 60, 58, 54, 54,
        58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51,
        69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18,
        41, 53, 55, 61, 51, 44];

    let costs = [.25, .27, .25, .25, .25, .25,
        .33, .31, .25, .29, .27, .22,
        .31, .25, .25, .33, .21, .25,
        .25, .25, .28, .25, .24, .22,
        .20, .25, .30, .25, .24, .25,
        .25, .25, .27, .25, .26, .29];
    
    let highscore = getHighScore(score);
    let lowCost = getLowCost(costs);
    let costEffective = getCostEffective(score, costs, highscore);

    printScores(score);

    console.log(`Highest bubble score: ${highscore}`);
    console.log(`Lowest cost solution: ${lowCost}`);
    console.log(`Most cost effective solution: ${costEffective}`);
}

compeleteBubbleSolution();