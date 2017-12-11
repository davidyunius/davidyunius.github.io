function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var selisih = arr[1] / arr[0]
    var awal = arr[0] / selisih
    var tampung = []
    for (var a = 0; a < arr.length; a++) {
        awal = awal * selisih
        tampung.push(awal)
    }
    return tampung.join(",") === arr.join(",")
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false