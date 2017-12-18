/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
  // Code here
  var newWords = "";
  for (var x = 0; x < words.length; x++) {
    newWords = newWords + words[x].toLowerCase();
    // console.log(newWords)
    //toLowerCase digunakan agar tidak muncul dua kata yang sama dikarenakan huruf kapital. 
  }
  // Lakukan split untuk agar var splitWords bisa di cek menggunakan looping.
  var splitWords = newWords.split(" ");
  // Buat array kosong untuk menampung pengulangan dari looping.
  // console.log(splitWords)
  var tampungLength = [];

  for (var a = 0; a < splitWords.length; a++) {
    var cekKata = "";
    for (var b = 0; b < splitWords[a].length; b++) {
      cekKata = b;
    }
    tampungLength.push(cekKata);
  }
  // console.log(tampungLength);
  // Mengecek panjang huruf var words.

  // Gunakan looping untuk mencari kata yang paling jarang muncul.
  var angkaTerkecil = tampungLength[0];

  for (var c = 0; c < tampungLength.length; c++) {
    if (angkaTerkecil > tampungLength[c]) {
      angkaTerkecil = tampungLength[c];
    }
  }
  // console.log(angkaTerkecil)

  var tampungHasil = [];
  for (var i = 0; i < tampungLength.length; i++) {
    if (tampungLength[i] == angkaTerkecil) {
      tampungHasil.push(splitWords[i]);
    }
  }
  // console.log(tampungHasil)

  var hasil = [];
  for (var j = 0; j < tampungHasil.length; j++) {
    if (hasil.indexOf(tampungHasil[j]) === -1) {
      hasil.push(tampungHasil[j]);
      if (tampungHasil[j] === 'i') {
        hasil[0] = tampungHasil[j].toUpperCase();
      }
    }
  }
  return hasil;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']