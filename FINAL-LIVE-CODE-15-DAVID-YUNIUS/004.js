/*

================
Initial Grouping
================

Name : _________________

[INSTRUCTION]

Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ 'Budi', 'Badu' ],
[ 'Joni', 'Jono' ],
]

Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:

[
[ 'B', 'Budi', 'Badu' ],
[ 'J', 'Joni', 'Jono' ],
]

Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

// 1. Buat variable initial untuk menampung setiap alphabet yang akan muncul.
// 2. Lakukan pengulangan untuk memeriksa angka depan dari setiap index kata di array studentsArr.
// 3. Buat variable cek berupa string kosong untuk menampung apabila huruf depan pada step 2 sesuai dengan kondisi yang diberikan maka akan ditampung ke variable cek tersebut.
// 4. Setelah pengecekan selesai, push hasilnya ke variable initial.
// 5. Kemudian buat variable inisial menampung semua hasil dari initial(poin 1) per alphabet.
// 6. Kemudian buat var hasil berupa array kosong dan lakukan pengulangan terhadap variable inisial (poin 5), apabila variable inisial indexnya lebih dari 1 push isinya ke variable hasil.

function initialGrouping(studentsArr) {

  // Only Code Here
  var initialB = ["B"];
  var initialJ = ["J"];
  var initialM = ["M"];
  var initialY = ["Y"];
  var initialD = ["D"];
  var initialA = ["A"];
  var initialG = ["G"];
  var initialR = ["R"];
  var initialS = ["S"];

  for (var i = 0; i < studentsArr.length; i++) {
    var cekB = "";
    var cekJ = "";
    var cekM = "";
    var cekY = "";
    var cekD = "";
    var cekA = "";
    var cekG = "";
    var cekR = "";
    var cekS = "";

    for (var j = 0; j < studentsArr[i].length; j++) {
      if (studentsArr[i][j] == "B") {
        cekB = cekB + studentsArr[i];
        initialB.push(cekB);
      } else if (studentsArr[i][j] == "J") {
        cekJ = cekJ + studentsArr[i];
        initialJ.push(cekJ);
      } else if (studentsArr[i][j] == "M") {
        cekM = cekM + studentsArr[i];
        initialM.push(cekM);
      } else if (studentsArr[i][j] == "Y") {
        cekY = cekY + studentsArr[i];
        initialY.push(cekY);
      } else if (studentsArr[i][j] == "D") {
        cekD = cekD + studentsArr[i];
        initialD.push(cekD);
      } else if (studentsArr[i][j] == "A") {
        cekA = cekA + studentsArr[i];
        initialA.push(cekA);
      } else if (studentsArr[i][j] == "G") {
        cekG = cekG + studentsArr[i];
        initialG.push(cekG);
      } else if (studentsArr[i][j] == "R") {
        cekR = cekR + studentsArr[i];
        initialR.push(cekR);
      } else if (studentsArr[i][j] == "S") {
        cekS = cekS + studentsArr[i];
        initialS.push(cekS);
      }
    }
  }
  var inisial = [];
  inisial.push(initialB);
  inisial.push(initialJ);
  inisial.push(initialM);
  inisial.push(initialY);
  inisial.push(initialD);
  inisial.push(initialA);
  inisial.push(initialR);
  inisial.push(initialS);
  // console.log(inisial);

  var hasil = [];
  for (var a = 0; a < inisial.length; a++) {
    if (inisial[a].length > 1) {
      hasil.push(inisial[a]);
    }
  }
  return hasil;
}
console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/