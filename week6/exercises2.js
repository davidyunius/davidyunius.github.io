var transformArrToLowerCase = arr => {
    // Ubah setiap element array menjadi lowercase!

    // let newArray = arr.map((arr) => {return arr.toLowerCase();});
    // return newArray;
    return arr.map((arr) => { return arr.toLowerCase(); });
    // return arr.map(function(isiArray){return isiArray.toLowerCase();})
};
console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

/*=======================================================================================*/

var filterArrUnder10 = arr => {
    // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
    return arr.filter((arr) => { return arr > 10 });
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

/*=======================================================================================*/

var reduceFindMaximum = arr => {
    // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
    // var max = arr.reduce(function(a, b) {
    //   return Math.max(a, b);
    // });
    // // console.log(max);
    // return max;
    return arr.reduce(function (a, b) { return Math.max(a, b) })
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9