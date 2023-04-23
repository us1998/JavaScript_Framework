const sum = (num1 , num2) => num1 + num2;
const Pi = 3.14;
class SomeMathObject{
    constructor(){
        console.log("some Object");
    }
}
// Used to export object to be used in different js file
module.exports = {sum : sum , Pi : Pi , SomeMathObject : SomeMathObject};
