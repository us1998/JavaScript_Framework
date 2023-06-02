class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : string{
        // this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}

let John = new Employee(1 , "john" , "Whitefeild");
console.log(John.getNameWithAddress());
console.log(John);