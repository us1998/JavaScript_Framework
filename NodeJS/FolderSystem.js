const fs = require('fs');
/*create folder by passing folder name and callback function */
fs.mkdir('tutorial' , (err)=> {
    if(err){
        console.log(err);
    }
    else{
        /*deleted folder based on folder name and callback function*/
        fs.rmdir("tutorial" , (err)=> {
            if(err)
                console.log(err);
            else
                fs.writeFile("./tutorial/example.txt" , "This is a new file" , (err)=> {
                    if(err)
                        console.log(err);
                    else
                    console.log("file re-created");
                });
        });
    } 
});
