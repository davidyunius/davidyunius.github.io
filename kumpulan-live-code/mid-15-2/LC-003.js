// Function akan mereturn hasil kalkulasi dari operasi tersebut.
// Jika tidak ada angka yang diberikan, function akan me-return 0.

// [CONTOH]
// input: [1, 2, 3, 4, 5]
// proses: 0 + 1 - 2 + 3 - 4 + 5
// output: 3

// input: [5, 4, 3, 2, 1, 2]
// proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
// output: 1

// input: [1, 1, 1, 1]
// proses: 0 + 1 - 1 + 1 - 1
// output: 0

// input: []
// proses: 0
// output: 0
// */

function plusMinusProcess(numbers) {
  var tampung = []
  var output = 0;
  var i = 0
  while (i < numbers.length) {
    if (i % 2 === 0) {
      output = output + numbers[i]
    } else {
      output = output - numbers[i]
    }
    tampung.push(output)
    i++
  }
  return output
}

// TEST CASES
console.log(plusMinusProcess([1, 2, 3, 4, 5])); // 3
console.log(plusMinusProcess([5, 4, 3, 2, 1, 2])); // 1
console.log(plusMinusProcess([1, 1, 1, 1])); // 0
console.log(plusMinusProcess([0, 10, 2, 5, 7])); // -6
console.log(plusMinusProcess([])); // 0