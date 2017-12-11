function digitPerkalianMinimum(angka) {
    //you can only write your code here!
    var hasil = [];

    for (var i = 1; i <= angka; i++) {
        for (var j = 1; j <= angka; j++)
            if (i * j == angka) {
                hasil.push((i + "" + j));
            }
    }
    var digitPerkalian = hasil[0].length;

    for (var k = 0; k < hasil.length; k++) {
        if (hasil[k].length < digitPerkalian) {
            digitPerkalian = hasil[k].length;
        }
    }

    return digitPerkalian;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2