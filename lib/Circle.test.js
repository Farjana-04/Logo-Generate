const Circle = require('./Circle'); 

describe('Circle', () => {

  // test a specific text color
  // test a specific text
  // test a specific background color
  test('getText() returns the expected SVG text', () => {
    const shape = new Circle();
    shape.setShapeBackgroundColor("green");
    shape.setTextColor("white");
    shape.setText("SVG");
    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />'+
    '<text x="150" y="125" font-size="60" text-anchor="middle" font-weight="bold" fill="white">SVG</text>';
    const actualSVG = shape.render();
    
    
    expect(actualSVG).toEqual(expectedSVG);
  });
});


  
    
  
