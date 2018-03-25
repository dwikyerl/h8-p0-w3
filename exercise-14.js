/*
  Logic Challenge - Mengelompokkan Angka
*/

/**
 * @param {Object[]} arr - an array that contains some numbers
 */

function mengelompokkanAngka(arr) {
  const resultArr = [[],[],[]];
  for (let num of arr) {
    if(num % 3 === 0) resultArr[2].push(num);
    else if(num % 2 === 0) resultArr[0].push(num);
    else resultArr[1].push(num);
  }

  return resultArr;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]