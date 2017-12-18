/*
================
Class Mastery
================

Name Here :_______

Buatlah sebuah class Tower yang menerima parameter awal di constructor berupa name (string) dan numberOfFloor (number).
Fox memiliki property/atrribute yaitu name, numberOfFloors, dan companies, yang merupakan array kosong yang nantinya akan
diisi string yang merupakan nama-nama perusahaan yang menyewa di tower tersebut.

Setiap tower memiliki beberapa method/function sebagai berikut:

getTowerSummary(): function yang me-return string berikut: 'Name: <NAME> | Number of Floors: <numberOfFloors> | Companies: <Company>, <Company>, <Company>'.
Tampilkan 'empty' jika tidak ada office sama sekali.
setTowerName(newTowerName): function yang menerima parameter berupa string. Function ini akan mengubah attribute name menjadi sesuai dengan parameter.
registerOffice(officeName): function yang menerima parameter berupa string. Function ini akan menambahkan satu officeName ke dalam array companies.

*/
class Tower {
  constructor(name, numberOfFloors) {
    // Code here
    this.name = name;
    this.numberOfFloors = numberOfFloors;
    this.companies = [];
  }

  // and here
  setTowerName(newName) {
    this.name = newName;
  }

  registerOffice(nameCompanies) {
    this.companies.push(nameCompanies);
  }

  getTowerSummary() {
    if (this.companies.length === 0) {
      this.companies.push("Empty");
    }
    return "Name: " + this.name + " | " + "Number of Floors: " + this.numberOfFloors + " | " + "Companies: " + this.companies
  }
}

var pondokIndahOfficeTower = new Tower('Pondok Indah Office Tower', 50);
var grandCityBuilding = new Tower('Grand City Building', 35);

console.log(pondokIndahOfficeTower.getTowerSummary());
// 'Name: Pondok Indah Office Tower | Number of Floors: 50 | Companies: empty

pondokIndahOfficeTower.registerOffice('PT. Keren Banget');
pondokIndahOfficeTower.registerOffice('PT. OKE Jaya');

console.log(pondokIndahOfficeTower.getTowerSummary());
// 'Name: Pondok Indah Office Tower | Number of Floors: 50 | Companies: PT. Keren Banget, PT. OKE Jaya

pondokIndahOfficeTower.setTowerName('Pondok Indah NEW Tower');
// 'Name: Pondok Indah NEW Tower | Number of Floors: 50 | Companies: PT. Keren Banget, PT. OKE Jaya
// console.log(pondokIndahOfficeTower.getTowerSummary());