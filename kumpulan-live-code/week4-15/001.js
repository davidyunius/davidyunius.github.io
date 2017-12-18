/*
=============
UNIQUE FINDER
=============

Name :_____________

[INSTRUCTIONS]

uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.

Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*
  //1. pisahkan kalimat inputan berdasarkan spasi untuk pembanding.
  //2. tampung hasil split kedalam sebuah variabel (untuk kasus ini diberi nama variabel hasil).
  //3. lakukan pengulangan untuk membadingkan kata yang sedang dicek dengan pembanding di no.1.
  //4. apabila kata yang ingin dibandingkan kosong, maka return 'NO WORDS'.
  //5. apabila kalimat yang dibandingkan dengan pembanding ada, push ke array hasil.
*/

function uniqueFinder(sentence) {
  // only code here!
  var splitSentence = sentence.split(" ");
  var hasil = [];
  for (var i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i] === "") {
      return '\'NO WORDS\''
    } else if (hasil.indexOf(splitSentence[i].toLowerCase()) == -1) {
      hasil.push(splitSentence[i]);
    }
  }
  return hasil;
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'