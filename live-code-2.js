/*
===============
Cafe Visitation
===============
Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki
variable name, age, dan money. Ia masuk ke bar untuk memesan minuman, namun bar
memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console
"Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.

Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh
memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan anggur.

Step 3. Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000.

  Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar
  sesuai harga minuman. Jika money / uang yang ia miliki tidak mencukupi,
  maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".

  Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: xxx"
  Gantilah xxx dengan sisa uang yang dimiliki oleh customer setelah membeli minuman

Ketentuan
=========
Diberikan variable name, age, dan money.
Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok
Namun dilarang mengganti nama variable.

*/

var name = "Budi";
var age = 17;
var money = 4000000;

const prices = {
  juice: 50000,
  anggur: 300000
};

if (!name || name === "") {
  console.log("Anda tidak boleh masuk.");
  return;
}

let order = "";

if (age < 17) order = "juice";
else order = "anggur";

if (money >= prices[order]) {
  const change = money - prices[order];
  console.log(`Anda bisa pesan minum. Sisa uang anda: ${change}`);
} else {
  console.log("Uang tidak cukup. Anda harus pulang.");
}
