function fpb(angka1, angka2) {
    // you can only write your code here!
    var fpb = angka1 % angka2;
    while (fpb !== 0) {
        angka1 = angka2;
        angka2 = fpb;
        fpb = angka1 % angka2;
    }
    return angka2;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1