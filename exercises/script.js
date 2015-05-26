console.log('Hello world!');

//Print out in reverse order, every multiple of 3 between 1 and 200.
//TODO: Reverse order of print-out

for (var number = 1; number <= 200; number = number + 1) {
  if (number % 3 == 0) {
    console.log(number);
  }
}

//Print the numbers from 1 to 100.
//For multiples of three print "Fizz" instead of the number.
//For the multiples of five print "Buzz".
//For numbers which are multiples of both three and five print "FizzBuzz".

for (var i = 1; i <= 100; i++) {
	var isDividibleByThree = i % 3 === 0;
	var isDivisibleByFive = i % 5 === 0;

	if (isDividibleByThree && isDivisibleByFive) {
		console.log('FizzBuzz');
	}
	else if (isDividibleByThree) {
		console.log('Fizz');
	}
	else if (isDivisibleByFive) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}

/*var i = 1,
    f = 'Fizz',
    b = 'Buzz',
    out = '';

for (; i <= 100; i++) {
	out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;
	console.log(out);
}
*/
