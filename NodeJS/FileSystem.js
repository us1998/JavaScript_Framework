 const fs = require('fs');
/*create a file argument 1) file name 2) what ot write inside file 3) error if occured */ 
fs.writeFile('example.txt' , "This is a Example" , (err)=> {
    if(err){
      console.log("error ocurred");  
    }
    else{
        console.log("file Created Successfully");
    }
});

/* read the file from file system argument file name ,
format - UTF-8 etc. , callback function for response or error of anything occurs*/
fs.readFile("example.txt" , 'utf-8' , (err , file)=> {
    if(err)
        console.log(err);
    else
        console.log(file)
});

/* [Error: ENOENT: no such file or directory, open 'C:\Angular\Node\example.txt'] {
   errno: -4058,
   code: 'ENOENT',
   syscall: 'open',
   path: 'C:\\Angular\\Node\\example.txt'
}*/

//rename the file argument 1) orginal file name , 2) rename file name 3) callback function for error
fs.rename('example.txt' , 'Umang.txt' , (err)=> {
    if(err){
        console.log(err);
    }
    else{
        console.log("File Renamed Successfully");
    }
});

fs.appendFile('Umang.txt' , "New Details Added" , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Details added Successfully");
    }
});

// delete the file
fs.unlink("example.txt" , (err)=> {
    if(err)
        console.log(err);
    else
        console.log("Deleted Successfully");
});
