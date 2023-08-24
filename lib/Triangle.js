const Shape = require("./Shape.js")

class Triangle extends Shape{
 constructor(text,textColor,shapeBackgroundColor){
  super(text,textColor,shapeBackgroundColor)  
 }
 render(){
    return `
    <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeBackgroundColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.text}</text>
    `
 }
 getText() {
   return this.render(); // Simply call the render() method to get the SVG text
 }

}
module.exports = Triangle;