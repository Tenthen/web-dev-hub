/*
Printing out the word 'Fizz' if the number is divisible by 3 but not by 5.
Printing out the word 'Buzz' if the number is divisible by 5 but not by 3.
Printing out 'FizzBuzz' if the number is divisible by both 3 and 5.

*/

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log('Fizz');
//         continue;
//     } else if (i % 5 == 0 && i % 3 != 0) {
//         console.log('Buzz');
//         continue;
//     } else if (i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz');
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let message = "";

for (let i = 1; i <= 100; i++) {

  if (i % 3 == 0) {

    if (i % 5 == 0)
        message = "FizzBuzz";
    else 
        console.log("Fizz");
    continue;

  } else if (i % 5 == 0) {

    console.log("Buzz");
    continue;

  } else {
    
    console.log(message || i);
    message = '';
  }
}
