/*
  Logic Challenge - Number Palindrome
*/

/**
 * @param {number} num - some number
 */

function angkaPalindrome(num) {
  while (true) {
    num++;
    let reverse = (""+num).split("").reverse().join("");
    if((""+num) === reverse) {
      break;
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
