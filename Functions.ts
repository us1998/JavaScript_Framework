function AddTwoNums(a:number,b:number){
    return a+ b;
}
const sub = (num1 : number , num2 : number) : number =>  num1 - num2;
console.log(sub(4, 3));

//optional Paramters

//for creating optional paramters we use ? with parameter so it works a optional paramters
const mult = function(num1 : number , num2 : number , num3? : number): number{
    return num3 ? num1 *num2 * num3 : num1* num2; 
}
console.log(mult(3,3 , 3));

//default paramters - it is used to pass any default value if no value is passed that value will be used.
const sumDefault = (num1 : number , num2 : number , num3 : number = 10 ) : number => num1 + num2 * num3;
console.log(sumDefault(3,2));

//Rest parameters - much more like  if we want use n numbers of paramters or we donr have idea of number of paramters that can ber passed then we can use rest paramters.

const SumRest = (num1 : number , num2 : number , ...num3 : number[]): number => num1 + num2 + num3.reduce((acc , num) => acc * num);

console.log(SumRest(5,2,...[3,42,42,112,113]))

console.log(SumRest(4 ,2,2,22,222,2222,222));
