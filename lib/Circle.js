const Shape = require("./Shape.js")

class Circle extends Shape{
 constructor(text,textColor,shapeBackgroundColor){
  super(text,textColor,shapeBackgroundColor)  
 }
 render(){
    return  `<circle cx="150" cy="150" r="150" fill="${this.shapeBackgroundColor}" /><text x="0" y="150" font-size="5rem" font-weight="bold" fill="${this.textColor}">${this.text}</text>
    `
 }

}
module.exports = Circle;