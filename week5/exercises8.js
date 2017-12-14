var profile = {
    nama: "",
    age: "",
    dob: "",
    gender: "",
    id: "",
    hobbies: [],
    experience: [],

    setName: function (newName) {
        this.nama = newName;
    },

    setHobby: function (newHobby) {
        this.hobbies.push(newHobby)
    },

    setAge: function (newAge) {
        this.age = newAge;
    },

    setDOB: function (newDOB) {
        this.dob = newDOB;
    },

    setGender: function (newGender) {
        if (newGender === "male" || newGender === "female") {
            return this.gender = newGender;
        } else {
            alert("gender salah!")
        }
    },

    setExperience: function (newExperience) {
        this.experience.push(newExperience)
    },

    setId: function (newId) {
        this.id = newId
    },

    removeHobby: function (delHobby) {
        let indexDel = this.hobbies.indexOf(delHobby);
        return this.hobbies.splice(indexDel, 1);
    },

    getData() {
        return "Nama: " + this.nama + " " + "Age: " + this.age + " " + "DOB: " + this.dob + " " + "ID: " + this.id + " " + "Gender: " + this.gender + " " + "Hobbies: " + this.hobbies + " " + "Experience: " + this.experience
    }

}

profile.setName("David")
profile.setHobby("Coding")
profile.setHobby("Running")
profile.setHobby("Swimming")
profile.setAge("25")
profile.setGender("male")
profile.setDOB("07/08/1992")
profile.setId("HACK2131241")
profile.setExperience("Sysbit")
profile.removeHobby("Running")

console.log(profile.getData())