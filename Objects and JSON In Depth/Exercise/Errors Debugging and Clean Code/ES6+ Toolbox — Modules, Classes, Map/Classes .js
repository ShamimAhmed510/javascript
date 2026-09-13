class student {
    constructor(name, cgpa) {
        this.name = name;
        this.cgpa = cgpa ;
    }

    isHonorse(){
        return this.cgpa >= 3.5;
    }
}

const s1 = new student("Shamim", 3.75);

console.log(s1.name); // Output: Shamim
console.log(s1.cgpa); // Output: 3.75
console.log(s1.isHonorse()); // Output: true