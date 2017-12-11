function cariMedian(arr) {
    // you can only write your code here!
    // arr.sort(function(a,b){return a>b});
    var med = Math.floor(arr.length / 2);
    if (arr.length % 2 == 1) {
        return arr[med];
    } else {
        return (arr[med - 1] + arr[med]) / 2;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5