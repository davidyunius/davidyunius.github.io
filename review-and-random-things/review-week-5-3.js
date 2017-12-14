//balik kata dengan rekrusif
// function balikKata(kata) {
//     if (kata.length === 1) {
//         return kata;
//     } else {
//         return kata[kata.length-1] + balkikKata(kata.slice(0, kata.length-1));
//     }
// }

//kasur rusak
function palindromeKata(kata) {
    var depan = kata[0];
    var belakang = kata[kata.length-1];
    if(kata.length<=1){
        return true;
    } else if (depan !== belakang) {
        return false;
    } else {
        var kataBaru = kata.slice(1, kata.length-1);
        return palindromeKata(kataBaru);
    }
}

console.log(palindromeKata('KASUR RUSAK'));