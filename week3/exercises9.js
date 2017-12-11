function pasanganTerbesar(num) {
    // you can only write your code here!

    var numString = num.toString();
    var numArray = [];

    for (var a = 0; a < numString.length - 1; a++) {
        var pasangan = numString[a] + numString[a + 1]
        numArray.push(pasangan)
        numArray.sort(function (value1, value2) { return (value1 < value2) })
    }
    return Number(numArray[0])
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99