/*
==================================
Array Mastery: Love Me Not
==================================

Nama:________

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
*/

function loveMeNot(decisions) {
  // Code here
  var nilaiTrue = 0;
  var nilaiFalse = 0;
  // var panjangInput = String(decisions);
  for (var i = 0; i < decisions.length; i++) {
    if (decisions[i] == true) {
      nilaiTrue++
    } else {
      nilaiFalse++
    }
  }
  if (nilaiTrue > nilaiFalse) {
    return 'he love me';
  } else if (nilaiTrue < nilaiFalse) {
    return 'he doesnt love me'
  } else {
    return 'galau'
  }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("