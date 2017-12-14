// var boxes = [100000, 10000, 5000, 10, 1];
// var money = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//rekrusif
//jalanakan openBox
//saat isi kado habis, hentikan openBox
//kalau kado masih ada, ambil kadonya 1, dan ambil isinya,
//akumulasi,
//jalankan openBox

function openBox(boxes) {
    if (boxes.length === 0) {
        return true;
    } else { //recrusion
        // boxes.pop();
        console.log(boxes);
        boxes.pop();
    }
    return openBox(boxes);
    // console.log(boxes.length)
}
console.log(openBox([100, 10, 500, 50]));