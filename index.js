const inquirer = require('inquirer')
const fs = require('fs');
// const Shape = require("./Shape.js")
const Triangle = require("./lib/Triangle.js")
const Circle = require("./lib/Circle.js")
const Square = require("./lib/Square.js")

function askQuestion(){
    inquirer
    .prompt([
     
      {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to three characters)",
        name: "text",
      },
     
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
//     .then(function(data){
//         let shape  
//         switch(data.shape){

//             case "Circle":{
//                 shape = new Circle(data.text, data.textColor, data.shapeBackgroundColor); 
//                 break;
//             }
//             case "Triangle":{
//                 shape = new Triangle(data.text, data.textColor, data.shapeBackgroundColor); 
//                 break;
//             }
//             default:{
//                 shape = new Square(data.text, data.textColor, data.shapeBackgroundColor); 
//                 break;
//             }
//         }

//     let svg = `<svg version="1.1" height="300" width="300"  xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`
//      console.log(svg)
//      writeToFile(data.shape, svg)
//     })
// }
// function writeToFile(shapeName,template){
    // Write the 'template' content to the './output/README.md' file   
    fs.writeFile(`./examples/${shapeName}.svg`, template, (err) => {  
     if (err) throw err; // If there's an error, throw it
          
    });
      }
function start(){
    askQuestion()
  
}
start()