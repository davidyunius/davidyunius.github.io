// Competencies: Mathematical Operation and Conditionals
/*
==================
Tax Administration
==================

Instruksi
=========
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.
3. citizenship: kewarganegaraan pendaftar.

Program akan melakukan tahap-tahap berikut:
Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
Step 3. program akan mengenerate Tax ID dengan format:
  WKWK-<TAHUN> => untuk pendaftar yang warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.
  ABCD-<TAHUN> => untuk pendaftar yang bukan warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.

  Contoh:
  Untuk yang citizenship = 'wkwkland' dengan age = 17,
  maka ubah taxID menjadi 'WKWK-2000'.

  Untuk yang citizenship = 'Indonesia' dengan age = 20,
  maka ubah taxID menjadi 'ABCD-1997'.

Ketentuan
=========
Diberikan variable name, age, citizenship, dan taxID.
Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual, dan gantilah taxId sesuai dengan ketentuan program.

*/

// SKELETON CODE (Code Sample)

var nama = "David"; // silakan berikan nilai bebas
var age = 25; // silakan berikan nilai bebas
var citizenship = "wkwkland"; // silakan berikan nilai bebas
var taxId; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!

// Buat code disini

// var input = prompt("Nama?");

if(nama === ""){
  console.log("NAMA ANDA KOSONG! TIDAK BISA DAFTAR!");
}else if (age < 17){
  console.log("BELUM CUKUP UMUR!");
}else if(citizenship === 'wkwkland' && age === 17){
  console.log("wkwk- "+ (2017-age));
}else if(citizenship === 'Indonesia' && age === 20) {
  console.log("abcd- "+ (2017-age));
}

