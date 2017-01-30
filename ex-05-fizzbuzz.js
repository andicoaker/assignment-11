/**
 * Ex-05 : fizzbuzz()
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */

 // INPUT: number
 // OUTPUT: string - transform
 // LOGIC: take number and transform into a string of numbers (1 thru that number), then loop through the string of numbers and apply series of if/if else statements.

var fizzbuzz = function(num){
  var fizzStr = '';
    console.log(fizzStr);

    for (var i = 1; i <= num; i++) {
      console.log(num[i]);

      if ( (i % 3 === 0) && (i % 5 !== 0) ) {
        fizzStr = fizzStr + 'fizz';
        console.log(fizzStr);
      }
      else if ( (i % 5 === 0) && (i % 3 !== 0) ) {
        fizzStr = fizzStr + 'buzz';
        console.log(fizzStr);
      }
      else if ( (i % 3 === 0) && (i % 5 === 0) ) {
        fizzStr = fizzStr + 'FizZBuzZ';
        console.log(fizzStr);
      }
      else {
          fizzStr = fizzStr + '.';
          console.log(fizzStr);
      }
  }
  return fizzStr;
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
