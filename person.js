class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

//prints the directory name, and file name. two underscores for each
//console.log(__dirname, __filename);

module.exports = Person