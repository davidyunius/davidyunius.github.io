function palindrome(kata) {
    // you can only write your code here!
    var a = (kata.length);
    var b = "";
    for (a; a >= 1; a--) {
        b = b + kata[a - 1];
    }
    if (b === kata) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

//nb: return menghentikan proses (proses dibawahnya tidak akan dijalankan)**