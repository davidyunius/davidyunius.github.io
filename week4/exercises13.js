function hitungHuruf(kata) {
    var kataSplit = kata.split(" ");
    // console.log(kataSplit);
    var unique = [];
    var freq = [];

    for (var i = 0; i < kataSplit.length; i++) {
        var unique2 = [];
        var freq2 = [];
        for (var j = 0; j < kataSplit[i].length; j++) {
            if (unique2.indexOf(kataSplit[i][j]) == -1) {
                unique2.push(kataSplit[i][j])
                freq2.push(1)
            } else {
                freq2[unique2.indexOf(kataSplit[i][j])]++;
            }
        }
        unique.push(unique2);
        freq.push(freq2)

    }
    // console.log(unique)
    // console.log(freq)

    var total = 0;
    var tampungTotal = [];
    for (var k = 0; k < freq.length; k++) {
        for (var l = 0; l < freq[k].length; l++) {
            if (freq[k][l] > 1) {
                total = total + freq[k][l];
                // tampungTotal.push(total);
            }
        }
        tampungTotal.push(total);
        total = 0;
        // console.log(tampungTotal);
    }

    var output = 0;
    for (var m = 0; m < tampungTotal.length; m++) {
        if (tampungTotal[m] > output) {
            output = tampungTotal[m];
        }
    }
    // console.log(output);
    var indexPosition = tampungTotal.indexOf(output);

    // console.log(indexPosition)
    // console.log(n)//

    return (kataSplit[indexPosition])
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau