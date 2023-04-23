// using require allows to export different file and ./ in same directory
const tutorial = require("./Tutorial");
console.log(tutorial);
console.log(tutorial.sum(3, 1));
console.log(tutorial.Pi);
console.log(new tutorial.SomeMathObject());

// to execute file use node app.js
