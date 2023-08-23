const Shape = require("./Shape.js")

class Circle extends Shape{
 constructor(text,textColor,shapeBackgroundColor){
  super(text,textColor,shapeBackgroundColor)  
 }
 render(){
    return  `<circle cx="150" cy="100" r="80" fill="${this.shapeBackgroundColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.text}</text>
    `
 }

}
module.exports = Circle;