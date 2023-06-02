"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        // this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
let John = new Employee(1, "john", "Whitefeild");
console.log(John.getNameWithAddress());
console.log(John);
