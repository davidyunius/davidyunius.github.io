function ubahKapital(kalimat) {
    // you can only write your code here!
    var hasil = [kalimat[0].toUpperCase()];
    for (var i = 1; i < kalimat.length; i++) {
        if (kalimat[i] === " ") {
            hasil.push(kalimat[i] + kalimat[i + 1].toUpperCase());
            i = i + 1;
        } else {
            hasil.push(kalimat[i]);
        }
    }
    return hasil.join("");
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun