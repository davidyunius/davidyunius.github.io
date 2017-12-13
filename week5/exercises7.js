class Student {
    constructor(name, age, dob, gender, studentID, hobbies) {
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.studentID = "STUID 24128421783";
        this.hobbies = [];
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    setDOB(newDOB) {
        this.dob = newDOB;
    }
    setGender(newGender) {
        if (newGender === "male" || newGender === "female") {
            this.gender = newGender
        } else {
            alert("gender salah!");
        }
    }
    addHobby(newHobby) {
        this.hobbies.push(newHobby);
    }
    getHobbies() {
        return this.hobbies;
    }
    removeHobby(delHobby) {
        let indexDel = this.hobbies.indexOf(delHobby);
        return this.hobbies.splice(indexDel, 1);
    }
    getData() {
        return this.name + " " + this.age + " " + this.dob + " " + this.gender + " " + this.studentID + " " + this.hobbies;
    }
}

let output = new Student();

// output.addHobby("coding");
// output.addHobby("running");
// output.addHobby("training");
// console.log(output.getHobbies());
// output.removeHobby("running");
// console.log(output.getHobbies());
output.setName("Michael");
// console.log(output.getName());
output.setAge(25);
output.setDOB("07-08-1992");
output.setGender("female");
console.log(output.getData());