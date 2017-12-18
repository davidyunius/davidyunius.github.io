/*
==================================
Array Mastery: Group Odd Evens
==================================

Nama:________

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:

"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"

aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!

[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
*/

function groupOddEven(numbers) {
  // Code here
  var odds = '';
  var evens = '';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens += numbers[i] + ', ';
    } else {
      odds += numbers[i] + ', ';
    }
  }
  evens = evens.slice(0, evens.length - 1);
  odds = odds.slice(0, evens.length - 1);

  return 'ODDS: ' + odds + ' EVENS: ' + evens;

  // var odds = [];
  // var evens = [];

  // for(var i=0; i< numbers.length; i++){
  //   if(numbers[i]%2 === 0){
  //     evens.push(numbers[i]);
  //   } else {
  //     odds.push(numbers[i]);
  //   }
  // }
  // var strOdds = '';
  // var strEvens = '';

  // if(odds.length > 0){
  //   strOdds = 'ODDS: ' + odds.join(', ');
  // } else {
  //   strEvens = 'EVENS: ' + evens.join(', ');
  // }
  // return strOdds + strEvens;
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""