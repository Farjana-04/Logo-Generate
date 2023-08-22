const Shape = require("./Shape.js")

class Triangle extends Shape{
 constructor(text,textColor,shapeBackgroundColor){
  super(text,textColor,shapeBackgroundColor)  
 }
 render(){
    return `
    <polygon points="150,0 300,300 0,300" fill="${this.shapeBackgroundColor}" />
    <text x="0" y="150" font-size="5rem" font-weight="bold" fill="${this.textColor}">${this.text}</text>
    `
 }

}
module.exports = Triangle;