// function bandingkanAngka(angka1, angka2) {
//     // you can only write your code here!
//     if(angka1 === angka2){
//         return -1;
//     }else if(angka2>angka1) {
//         return true;
//     }else{
//         return false;
//     }
// }

// // TEST CASES
// console.log(bandingkanAngka(5, 8)); // true
// console.log(bandingkanAngka(5, 3)); // false
// console.log(bandingkanAngka(4, 4)); // -1
// console.log(bandingkanAngka(3, 3)); // -1
// console.log(bandingkanAngka(17, 2)); // false

// function balikKata(kata) {
//     // you can only write your code here!
//     var output = "";
//     for(var i = kata.length; i>= 1; i--){
//         output += kata[i-1];
//     }
//     return output;
// }

// // TEST CASES
// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS

// function konversiMenit(menit) {
//     // you can only write your code here!
//     var jam = 0;
//     if(menit >= 60){
//         jam = jam + Math.floor(menit/60);
//         if((menit%60)<10){
//             return jam +":0"+(menit%60);
//         }
//         return jam +":"+(menit %60);
//     }else if(menit <60){
//         return jam +":"+(menit%60);
//     }
// }

// // TEST CASES
// console.log(konversiMenit(63)); // 1:03
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00

// function xo(str) {
//     // you can only write your code here!
//     var x=0;
//     var o=0;
//     for(var i = 0; i<str.length; i++){
//         if(str[i] === 'x'){
//             x = x+1;
//         }else{
//             o = o+1;
//         }
//     }
//     if(x===o){
//         return true;
//     }else{
//         return false;
//     }
// }

// // TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true

// function perpangkatanDua(str) {
//     // you can only write your code here!
//     var pangkatDua = 2;
//     for(var n=0;n<str;n++){
//         if(pangkatDua ** n === str){
//             return n;
//         }
//     }
//     return -1;
    
// }

// // TEST CASES
// console.log(perpangkatanDua(64)); // 6
// console.log(perpangkatanDua(22)); // -1
// console.log(perpangkatanDua(16)); // 4
// console.log(perpangkatanDua(222)); // -1
// console.log(perpangkatanDua(1)); // 0

// function palindrome(kata) {
//     // you can only write your code here!
//     var depan = kata[0];
//     var belakang = kata[kata.length-1];
//     if(kata.length <= 1){
//         return true;
//     }else if(depan !== belakang) {
//         return false;
//     }else {
//         var kataBaru = kata.slice(1, kata.length - 1);
//         return palindrome(kataBaru);
//     }
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    // return kalimat.split(" ").length;
    var hasil = '';
    var output = [];
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === " ") {
            output.push(hasil)
            hasil = ''
        }
        hasil = hasil + kalimat[i]
    }
    if (hasil == '') {
        return output
    }
    output.push(hasil)
    return output
}

// split kalimat menjadi 4 index
// hitung jumlah index dalam variable kalimat
// tampilkan jumlah index dalam kalimat

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5