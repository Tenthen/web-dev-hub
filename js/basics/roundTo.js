
function roundTo (n, steps = 1) {
    let reminder = n % steps;

    return n - reminder + (reminder < steps/2 ? 0 : steps);
}


console.log(roundTo(4.5));
