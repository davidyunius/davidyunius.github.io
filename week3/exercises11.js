function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisih = arr[1] - arr[0]
    var awal = arr[0] - selisih
    var tampung = []
    for (var a = 0; a < arr.length; a++) {
        // tampung = awal + selisih
        awal = awal + selisih
        tampung.push(awal)
        // console.log(tampung)
    }
    return tampung.join(",") === arr.join(",")
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
