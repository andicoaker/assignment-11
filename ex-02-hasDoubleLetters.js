
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument and returns true if the string has double letters next to eachother, or returns false
 *
**/

// INPUT: string
// OUTPUT: boolean (reduce) - if string has double letters next to each other
// LOGIC:  convert string toLowerCase, then iterate over each index position to see if it equals the next index position

var hasDoubleLetters = function (inputStr){
  var dblLetters = false

  for (var i = 0; i < inputStr.length; i++) {
    inputStr = inputStr.toLowerCase()
      // console.log(inputStr.toLowerCase());

    if(inputStr[i] === inputStr[i + 1]){
      dblLetters = true;
      // console.log(inputStr[i]);
    }
  }
  return dblLetters
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
