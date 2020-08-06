class Parents {
    constructor() {
        this.FatherName = "Heymonthi";
    }
}
class Child extends Parents {
    constructor(name, age) {
        super();
        this.ChildName = name;
        this.Age = age;
    }
}
const family = new Child('Sikdar', 15);
console.log(family);