function perpangkatanDua(str) {
    // you can only write your code here!
    // a = b pangkat c
    // jika a = 64 dan b = 2 maka berapa nilai c?
    var a, b, c;
    a = str;
    b = 2;
    for (var c = 0; c < a; c++) {
        if (Math.pow(b, c) === a) {
            return c;
        }
    }
    return -1;
}

// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0