//Create shape with constructor that takes the parameters
class Shape{
    constructor(text,textColor, shapeBackgroundColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeBackgroundColor = shapeBackgroundColor;
    }
    //These methods allow to retrieve the values of the respective properties.
     getText(){
    return this.text;
     }
     getTextColor(){
        return this.textColor;
     }
     getShapeBackgroundColor(){
        return this.shapeBackgroundColor;
     }
    
        
   
      
}
module.exports = Shape;