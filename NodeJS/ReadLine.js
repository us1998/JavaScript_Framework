const readLine = require('readline');
// read line interface accept two paramters input and output
const rl = readLine.createInterface({input : process.stdin , output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let ans = num1 + num2;

// calling readline question method and verifying output and closing the interface
rl.question(`What is ${num1} + ${num2} ?\n` , (userInput) =>{
    if(userInput.trim() == ans){
        rl.close();
    }
    else{
        /*This method is used to output the value set by rl.setPrompt() in the new line in the console.*/
        rl.setPrompt("Incorrect response Please try again\n");
        /*The rl. prompt() method writes the readline. Interface instances configured prompt to a new 
        line in output in order to provide a user with a new location at which to provide input.*/
        rl.prompt();
        rl.on('line' , (userInput) => {
            if(userInput.trim() == ans){
                rl.close();
            }
            else{
                rl.setPrompt(`Your input of ${userInput} is wrong.Please provide correct response\n`);
                rl.prompt();
            }
        });
    }
});

// readline calls EventEmitter, so once we close the interface this part of code is executed.
rl.on('close' , () => {
    console.log('Closing Interface');
});
