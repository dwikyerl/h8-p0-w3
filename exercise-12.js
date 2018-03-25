/*
  Logic Challenge - Tentukan Deret Geometri
*/

/**
 * @param {Object[]} arr - an array that contains a series of numbers
 */

function tentukanDeretGeometri(arr) {
  const pattern = arr[1] / arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i+1] / arr[i] !== pattern) return false;
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false