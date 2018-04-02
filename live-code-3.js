/*
Instruksi
=========
Buatlah beberapa function berikut:
1. remainder, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan mendapatkan sisa bagi num1 dengan num2 dan mereturn sisa bagi-nya. Note. sisa bagi berbeda dengan hasil bagi!
  contoh
  ------
  input: remainder(7, 3)
  output: 1

2. concats, yang menerima tiga parameter berupa str1, str2, dan str3. Function tersebut akan menggabungkan ketiga string tersebut dengan simbol '-' sebagai pemisah.
  RULES: TIDAK BOLEH menggunakan sintaks .join!
  contoh
  ------
  input: concats('i', 'am', 'developer')
  output: 'i-am-developer'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   RULES: TIDAK BOLEH menggunakan sintaks .slice, .splice, .substring!
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'

*/

function remainder (num1, num2) {
  return num1 % num2;
}

function concats(str1, str2, str3) {
  return str1 + "-" + str2 + "-" + str3;
}

function cutString (str) {
  let output = ""
  for (let i = 0; i < 6; i++) output += str[i];
  return output;
}

console.log(remainder(7, 3)); // 1
console.log(concats('i', 'am', 'developer')); // "i-am-developer"
console.log(cutString('Kazuya Mishima')); // "Kazuya"