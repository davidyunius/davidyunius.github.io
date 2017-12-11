function targetTerdekat(arr) {
    // you can only write your code here!
    var oPosition = arr.indexOf("o")
    // return oPosition
    var xPosition = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            xPosition.push(i)
        }
    }
    var distances = [];
    for (var j = 0; j < xPosition.length; j++) {
        var diff = Math.abs(xPosition[j] - oPosition)
        distances.push(diff)
    }
    if (distances.length === 0) {
        return 0
    } else {
        var distancesSort = distances.sort(function (value1, value2) { return value1 > value2 })

        return distancesSort[0]
    }
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2