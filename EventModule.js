// using event module and creating event using on function
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial' , (num1 , num2)=>{
    console.log(num1 + num2);
});

// by using emit method we are calling event emitter and passing the parameter required.
eventEmitter.emit('tutorial' , 1,2);

// by extedning EventEmitter module we can use method to create event.
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
        console.log("Umang");
    }

    get name(){
        return this._name;
    }
}

let Umang = new Person("Umang");
Umang.on("emit", ()=> {
    console.log("My name is " + Umang._name);
});

let Sawaria = new Person("Sawaria");
Sawaria.on("emit", ()=> {
        console.log("My name is " + Sawaria._name);
});

//it executes squentially in which the emit method is called.
Umang.emit("emit");
Sawaria.emit("emit");