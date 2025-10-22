function fizz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

function fizzBuzz() {
  for (let counter = 1; counter <= 100; counter++) {
    if (counter % 3 == 0 && counter % 5 == 0) console.log("FizzBuzz");
    else if (counter % 3 == 0) console.log("Fizz");
    else if (counter % 5 == 0) console.log("Buzz");
    else console.log(counter);
  }
}

fizzBuzz();
