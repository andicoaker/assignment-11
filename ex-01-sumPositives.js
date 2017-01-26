
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/
// INPUT: array of numbers

var sumPositives = function(numArr){
  
  var onlyPosNumArray = [ ]

  for(var i = 0; i < numArr.length; i++){

     if( numArr[i].toLowerCase() !== 'x' ){
        newString = newString + str[i]
     }
  }
  return newString
  //OUTPUT: shorter string
}

// OUTPUT: array of only positive numbers - filtered set


console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
