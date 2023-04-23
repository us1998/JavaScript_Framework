const readLine = require('readline');
// read line interface accept two paramters input and output
const rl = readLine.createInterface({input : process.stdin , output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let ans = num1 + num2;

// calling readline question method and verifying output and closing the interface
rl.question(`what is ${num1} + ${num2} ?\n` , (userInput) =>{
    if(userInput.trim() == ans){
        rl.close();
    }
});

// readline calls EventEmitter, so once we close the interface this part of code is executed.
rl.on('close' , () => {
    console.log('Closing Interface');
});
