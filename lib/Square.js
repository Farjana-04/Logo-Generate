const Shape = require("./Shape.js")

class Square extends Shape{
 constructor(text,textColor,shapeBackgroundColor){
  super(text,textColor,shapeBackgroundColor)  
 }
 render(){
    return `<rect width="300" height="300" fill="${this.shapeBackgroundColor}"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="${this.textColor}">${this.text}</text>`
    
 }

}
module.exports = Square;