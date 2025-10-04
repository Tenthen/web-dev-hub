
/* 
    Displays a message when the function is called
    Have nothing to return
*/ 
const makeNoise = function(){
    console.log(`Woof Woof!`);
}

// This binding doesn't have any effect on the function
// It only grasps the string
let dogName = 'Rover';

makeNoise();