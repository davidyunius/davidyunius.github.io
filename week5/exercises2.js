function totalDigitRekursif(angka) {
    // you can only write your code here!
    var arr = angka.toString();
    // console.log(arr);
    if (arr.length === 1) {
        return Number(angka);
    }
    //  else {
    //     var angkaDepan = Number(arr[0]);
    //     arr = arr.slice(1);
    //     return angkaDepan + totalDigitRekursif(Number(arr));
    // }
    return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
    // console.log(angkaDepan)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5