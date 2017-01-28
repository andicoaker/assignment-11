
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

// INPUT: array of numbers
// OUTPUT: highest number
// LOGIC: if index position is greater than next index position, return that index

var maxOfArray = function (arrOfNum){
  var highestNum = 0

  for (var i = 0; i < arrOfNum.length; i++) {
    console.log(arrOfNum[i]);

    if (arrOfNum[i] > arrOfNum[i + 1] ) {
      console.log( arrOfNum[i] > arrOfNum[i + 1] );

      highestNum = arrOfNum[i + 1];
    }

  }
  return highestNum
}


console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
