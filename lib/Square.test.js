const Square = require('./Square'); 


describe('Square', () => {

  // test a specific text color
  // test a specific text
  // test a specific background color
  test('getText() returns the expected SVG text', () => {
    const shape = new Square();
    shape.setShapeBackgroundColor("blue");
    shape.setTextColor("white");
    shape.setText("SVG");
    const expectedSVG = '<rect width="300" height="300" fill="blue" />' + 
                     '<text x="150" y="150" font-size="60" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">SVG</text>';
    const actualSVG = shape.render();
    
    
    expect(actualSVG).toEqual(expectedSVG);
  });
});