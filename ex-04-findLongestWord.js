/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

// INPUT: string of words
// OUTPUT: longest word (string) - filtered set
// LOGIC: split into array of individual strings then compare length of strings in the array, then output the name of the longest string.
// ROADBLOCK: need to remove the " ' " so it isn't counted as a charcter.  use 2nd for loop or helper-function?


var findLongestWord = function (strOfWords){
  var lengthOfWord = 0;
  var longestWord = ' ';
  strOfWords = strOfWords.split(' ');

  for (var i = 0; i < strOfWords.length; i++) {
    // console.log(strOfWords[i]);
    //   console.log(strOfWords[i].length);

    // for (var j = 0; j < strOfWords.length; i++) {
    //
    //   if strOfWords[j] !== " ' "{
    //
    //   }
    //
    // }

    if (strOfWords[i].length > lengthOfWord) {
      lengthOfWord = strOfWords[i].length;
      longestWord = strOfWords[i];
    }

  }
  return longestWord
}


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
