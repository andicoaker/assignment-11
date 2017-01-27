
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/
// INPUT: array of numbers
// OUTPUT: array of only positive numbers - filtered set
// if num is positve, then add to


var sumPositives = function(numArr){

  var PosNum = [ ]

  for(var i = 0; i < numArr.length; i++){
    console.log(numArr[i]);

    if (numArr[i] > 0) {
       PosNum.push(numArr[i]);
       console.log(PosNum);
     }
  // }
  // var sumOfPosNum = 0
  // for(var i = 0; i<posNum.length; i++){
  //    total += posNum[i];
  //    console.log(posNum [i]);
  }

  // return sumOfPosNum
}



console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
