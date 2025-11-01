
// Factorial using loops
function factorial (num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

// Factorial using recursive
function factorialRec (num) {
    if (num == 1)
        return 1;
    else 
        return num * factorialRec(num - 1);
}



// Triangle pattern
function triangle (size) {
    for (let pattern = '#'; pattern.length <= size; pattern += '#' ) {
        console.log(pattern);
    }
}

let pattern = '';
// Triangle pattern using a recursive function
function triangleRec (size) {
    pattern += '#';
    if (size == 0)
        return '';
    else {
        return  pattern + '\n' + triangleRec(size - 1);
    }
}

// Chessboard pattern using for loop
function chessBoard (size) {
    let pattern = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 == 0)
                pattern += '#';
            else
                pattern += ' ';
        }
        pattern += '\n';
    }
    return pattern;
}


let cell = 0;
let count = 0;
// Chessboard pattern using recursive function
function board (size) {
    
    let pat = '';
    size > cell ? cell = size : cell;

    if (size == 0)
        return '';
    else {
        line(cell)
        function line (cell) {
            
            if (cell == 0)
                return '';
            else {
                (cell + count) % 2 == 0 ? pat += '#' : pat += ' ';
                return pat + line(cell - 1);
            }
        }
        count ++;
        return `${pat}\n${board(size - 1)}`;
    }
}


// triangle(7);
console.log(triangleRec(7));
// console.log(chessBoard(8));
console.log(board(8));
