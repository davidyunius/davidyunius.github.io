function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var arr = angka.toString();
    // console.log(arr);
    if (arr.length === 1) {
        return Number(angka);
    } else {
        var angkaDepan = Number(arr[0]);
        arr = arr.slice(1);
        var hasil = angkaDepan * kaliTerusRekursif(Number(arr));
        // return hasil;
    }
    // console.log(angkaDepan)
    return kaliTerusRekursif(hasil);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6