let lname : string = "Umang";
let newname = lname.toUpperCase();
console.log(newname);


let age = 25;
age = 25.5;
let dob = "54";
age = parseInt(dob);
console.log(age);

let isValid : boolean = false;
console.log(isValid);

let empList : String[];
empList = ["Umang" , "Sawaria" , "UmangSawaria"];

console.log(empList);

let numList : Array<number> = [1,2,5,6,56];
let results = numList.filter((num) => num > 2);
console.log(results);

let numisTwo = numList.find((n) => n ==32);
console.log(numisTwo);

let sum = numList.reduce((acc , num) => acc + num);
console.log(sum);


const enum Color  {
    Red , Blue, Green
}

let c: Color = Color.Green;
let swapNumber : [firstNum :number, secondNum :number];
function SwapNumFunc(swapNumber : [number , number]): [number , number]{
    return [swapNumber[1] ,swapNumber[0]]; 
}
swapNumber= SwapNumFunc([10 ,20]);
console.log(swapNumber[0]);

let department : any;
department = "IT";
department = 10;


function add(num1 : number , num2 : number): any{
    return num1 + num2;
}
add(10 , 20);