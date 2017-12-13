class Car {
    constructor(merek, harga, warna, bensin, jumlahroda) {
        this.merek = merek;
        this.harga = harga;
        this.warna = warna;
        this.bensin = bensin;
        this.jumlahroda = jumlahroda;
        // this.hargajual = this.harga*0.8;
    }
    getJual() {
        let jual = this.harga * 0.8;
        return jual;
    }
}

var Mobil = new Car("Hando", 300000000, "merah", "solar", 4);


console.log("Mobil saya bermerek " + Mobil.merek, "dengan harga " + Mobil.harga + " rupiah,", "berwarna " + Mobil.warna + ",", "bensinnya " + Mobil.bensin + ", dan beroda " + Mobil.jumlahroda + ".");
console.log("jual mobil: " + Mobil.getJual());
// console.log("jual mobil: " + Mobil.hargajual);