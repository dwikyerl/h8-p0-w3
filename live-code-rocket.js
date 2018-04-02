/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
tampilan:
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
  for (let i = 1; i <= row; i++) {
    let result = "";
    for (let j = 0; j < i; j++) {
      if (i % 2 === 0) {
        result += "o";
      } else {
        result += "x";
      }
    }
    console.log(result);
  }
}

drawLadder(6);
drawLadder(3);
