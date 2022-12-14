class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log("こんにちは、私は" + this.name + "です。")
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    hello() {
        super.hello()
        console.log("学生で" + this.major + "を専攻してます。")
    }
}

const person = new Person("田中")
const student = new Student("田中", "数学")

person.hello()
student.hello()