/*
  Logic Challenge - Target Terdekat
*/

/**
 * @param {Object[]} arr - an array that contains some 'o's , 'x's, or spaces
 */

function targetTerdekat(arr) {
  let oPoints = [];
  let xPoints = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') oPoints.push(i)
    else if (arr[i] === 'x') xPoints.push(i)
  }

  if(oPoints.length === 0 || xPoints.length === 0) return 0;
  
  let minDistance = Math.abs(oPoints[0] - xPoints[0]);
  for (let i = 0; i < oPoints.length; i++) {
    for (let j = 0; j < xPoints.length; j++) {
      let distance = Math.abs(oPoints[i] - xPoints[j]);
      if (distance < minDistance) minDistance = distance; 
    }
  }

  return minDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2