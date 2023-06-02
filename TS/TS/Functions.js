"use strict";
function AddTwoNums(a, b) {
    return a + b;
}
const sub = (num1, num2) => num1 - num2;
console.log(sub(4, 3));
//optional Paramters
//for creating optional paramters we use ? with parameter so it works a optional paramters
const mult = function (num1, num2, num3) {
    return num3 ? num1 * num2 * num3 : num1 * num2;
};
console.log(mult(3, 3, 3));
//default paramters - it is used to pass any default value if no value is passed that value will be used.
const sumDefault = (num1, num2, num3 = 10) => num1 + num2 * num3;
console.log(sumDefault(3, 2));
//Rest parameters - much more like  if we want use n numbers of paramters or we donr have idea of number of paramters that can ber passed then we can use rest paramters.
const SumRest = (num1, num2, ...num3) => num1 + num2 + num3.reduce((acc, num) => acc * num);
console.log(SumRest(5, 2, ...[3, 42, 42, 112, 113]));
console.log(SumRest(4, 2, 2, 22, 222, 2222, 222));
// generic functions
function ConcatDtls(item) {
    return new Array().concat(item);
}
console.log(ConcatDtls([1, 2, 2, 3, 2, 42, 4]));
console.log(ConcatDtls(["Umang", "Sawaria"]));
