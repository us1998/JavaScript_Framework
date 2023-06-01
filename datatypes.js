"use strict";
let lname = "Umang";
let newname = lname.toUpperCase();
console.log(newname);
let age = 25;
age = 25.5;
let dob = "54";
age = parseInt(dob);
console.log(age);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Umang", "Sawaria", "UmangSawaria"];
console.log(empList);
let numList = [1, 2, 5, 6, 56];
let results = numList.filter((num) => num > 2);
console.log(results);
let numisTwo = numList.find((n) => n == 32);
console.log(numisTwo);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Green */;
let swapNumber;
function SwapNumFunc(swapNumber) {
    return [swapNumber[1], swapNumber[0]];
}
swapNumber = SwapNumFunc([10, 20]);
console.log(swapNumber[0]);
let department;
department = "IT";
department = 10;
function add(num1, num2) {
    return num1 + num2;
}
add(10, 20);
