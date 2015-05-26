//Print out in reverse order, every multiple of 3 between 1 and 200.

var multiplesOfThree = [];

for (var number = 1; number <= 200; number = number + 1) {
  if (number % 3 == 0) {
    multiplesOfThree.push(number);
  }
}

multiplesOfThree = multiplesOfThree.reverse();

for (var n = 0; n < multiplesOfThree.length; n = n + 1) {
  console.log(multiplesOfThree[n])
}
