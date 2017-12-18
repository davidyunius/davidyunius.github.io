/*
==================
PASSWORD GENERATOR
==================

Name :_____________

[INSTRUCTIONS]

passGen adalah sebuah function yang menerima tiga parameter berupa firstName, email, dan age.
Function akan mengambil bagian-bagian dari ketiga parameter menjadi satu kesatuan string baru,
dengan ketentuan:

output: [3 huruf pertama dari firstName][Semua huruf sebelum simbol @ di email][age]

Jika firstName dibawah 3 huruf, hentikan function dan kembalikan string berupa 'NAME IS INVALID!'

[CONSTRAINTS]
Dilarang menggunakan sintaks .split(), .slice(), .splice(), .join(), .push(), dan .concat().
Soal ini hanya membutuhkan operasi string (mengakses index dari string tentunya diperbolehkan)!
Dilarang menggunakan segala bentuk regex (match, test, dan lain-lain)


[EXAMPLE]
passGen('john', 'hello@john.com', 25)

proses:

- 3 huruf pertama dari firstName: 'joh'
- semua huruf sebelum simbol @ di email: 'hello'
- age: 25

output: 'johhello25'

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*


*/

function passGen(firstName, email, age) {
  // only code here!
}

console.log(passGen('john', 'hello@gmail.com', 15)); // 'johhello15' 
console.log(passGen('mickey', 'mike@gmail.com', 1)); // 'micmike1'
console.log(passGen('a', 'hello@gmail.com', 15)); // 'NAME IS INVALID!'
console.log(passGen('rudy', 'rud@rudy.co.id', 22)); // 'rudrud22'
console.log(passGen('bejo', 'zetta@bejo.gov', 50)); // 'bejzetta50'