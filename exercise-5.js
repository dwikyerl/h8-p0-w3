/*
  Logic Challenge - Palindrome
*/

/**
 * @param {string} kata - an arbitrary string
 */

function palindrome(kata) {
  kata = kata.toLowerCase();
  let reverse = "";
  for(let char of kata) {
    reverse = char + reverse;
  }
  
  return kata === reverse;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false