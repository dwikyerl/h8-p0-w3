/*
  Mengakses Nilai Dalam Array
*/

/**
 * @param {string} str - an arbitrary string
 */

function balikString(str) {
  let result = "";
  for(let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
}

console.log(balikString("hello world!")); // output "!dlrow olleh"
console.log(balikString("hacktiv8")); // output : 8vitkcah
console.log(balikString("javascript")); //output : tpircsavaj