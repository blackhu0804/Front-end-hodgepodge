class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('汪汪汪');
    }
}

/** 等同于 */

function Dog(name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.eat = function () {
    console.log('汪汪汪');
}