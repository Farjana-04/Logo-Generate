const Triangle = require('./Triangle');

describe('Triangle', () => {

  // test a specific text color
  // test a specific text
  // test a specific background color
  test('getText() returns the expected SVG text', () => {
    const shape = new Triangle();
    shape.setShapeBackgroundColor("green");
    shape.setTextColor("white");
    shape.setText("SVG");
    const expectedSVG = '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green" />' +
                       '<text x="150" y="125" font-size="60" text-anchor="middle" font-weight="bold" fill="white">SVG</text>';
    const actualSVG = shape.render();
    
    
    expect(actualSVG).toEqual(expectedSVG);
  });
});