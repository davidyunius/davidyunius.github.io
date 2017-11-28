//WEEKLY PROJECT - Simple JavaScript App

// PSEUDOCODE AREA
/*
TAMPILKAN notifikasi mulainya game, SIMPAN nama, SIMPAN kondisi pertama, WHILE nama tidak diisi, maka lakukan perulangan berupa TAMPILKAN "Masukkan nama anda!", ELSE perulangan selesai, dan TAMPILKAN welcome words disertai nama sesuai inputan pemain.
SIMPAN tumpukan peran, SIMPAN peran yang dipilih, SIMPAN kondisi kedua, WHILE peran tidak dipilih, maka lakukan perulangan berupa TAMPILKAN "Pilih peran anda!", ELSE perulangan selesai, dan TAMPILKAN peran pemain disertai inputan peran yang dipilih.
SIMPAN equip, buat sebuah FUNCTION untuk menampung equip yang akan diberikan sesuai dengan parameter peran yang dipilih, TAMPILKAN equip yang didapatkan pemain berdasarkan peran yang dipilih.
*/

//CODE HERE
var nama = "";
var peran = ['Novice', 'Warrior', 'Mage', 'Archer'];
var kondisi = true;
var equip;
var pperan;
var kondisi2 = true;

alert("Hi, This is a simple game that need your input. Enjoy!");

nama = prompt("Masukkan nama anda: ");

while (kondisi) {
    if (nama === "") {
        alert("Masukkan nama anda!");
        nama = prompt("Masukkan nama anda!");
    } else {
        kondisi = false;
    }
}

console.log("Welcome to AdventureGame, " + nama + "!");

pperan = prompt("Pilih peran anda: [0 = Novice, 1 = Warrior, 2 = Mage, 3 = Archer]");

while (kondisi2) {
    if (pperan === "") {
        alert("Pilih peran anda!");
        pperan = prompt("Pilih peran anda: [0 = Novice, 1 = Warrior, 2 = Mage, 3 = Archer]");
    } else {
        kondisi2 = false;
    }
}
console.log("Your job is : " + peran[pperan]);

equip(pperan);

function equip(pperan) {
    if (pperan == 0) {
        console.log("Selamat!, " + peran[pperan] + " " + nama + " mendapat equip awal: Dagger dan Potion!");
    } else if (pperan == 1) {
        console.log("Selamat!, " + peran[pperan] + " " + nama + " mendapat equip awal: Sword dan Shield!");
    } else if (pperan == 2) {
        console.log("Selamat!, " + peran[pperan] + " " + nama + " mendapat equip awal: Staff dan Book!");
    } else if (pperan == 3) {
        console.log("Selamat!, " + peran[pperan] + " " + nama + " mendapat equip awal: Bow dan Quiver!");
    } else {
        console.log("Peran hanya 0-3, nantikan peran 4 di patch berikutnya! X3");
    }
}
