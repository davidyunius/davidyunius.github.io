class Building{
    //attribute /property
    constructor(nameParam, locationParam){ //parameter untuk mengisi variabel name, location, etc..
        this.name = nameParam;
        this.location = locationParam;
        this.isOpen = false;
    }
    doGrandLaunching(newIsOpen){
        this.isOpen = newIsOpen;
    }
}

    var aeonMall = new Building('aeon', 'bsd');
    var pim = new Building('pim','pondok indah');
    // aeonMall.doGrandLaunching(true)
    console.log(aeonMall);
    console.log(pim);
    /*
    name
    location
    isOpen
    */
    //method / function