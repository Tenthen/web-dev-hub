function icecreamDay() {
  let scoop = 5;
  while (scoop > 0) {
    console.log(`Get another Ice-Cream!`);
    scoop -= 1;
  }
  console.log(`Life without Ice-Cream isn't the same!`);

  scoop = 5;
  if (scoop == 5) console.log(`I'm done eating.`);
  else if (scoop >= 3) console.log(`Eat faster the Ice-Cream is gonna melt.`);
  else if (scoop < 3) console.log(`Ice-Cream is running low!`);
  else console.log(`Go to sleep.`);
}

icecreamDay();
