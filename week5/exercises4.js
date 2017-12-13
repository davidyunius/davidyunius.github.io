function hapusSimbol(str) {
    // you can only write your code here!
    // return str.match(/[\w\d]+/gi).join("");
    // return str.match(/[a-z\d]+/gi).join("");
    // return str.replace(/[^\w\d]+/gi, "");
    return str.replace(/[^a-z\d]+/gi, "");
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100