/*
  Logic Challenge - Pasangan Angka Terbesar
*/

/**
 * @param {number} num - a number with 2 digit or more
 */


function pasanganTerbesar(num) {
  num = (""+num);
  let biggestPair = 0;
  for (let i = 0; i < num.length-1; i++) {
    let pair = (num[i] + num[i+1]) - 0;
    if(pair > biggestPair) biggestPair = pair;
  }
  return biggestPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99