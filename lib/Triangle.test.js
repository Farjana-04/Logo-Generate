const Triangle = require('./Triangle');

describe('Triangle', () => {
  test('getText() returns the expected SVG text', () => {
    const shape = new Triangle();
    shape.setShapeBackgroundColor("green");
    
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="green" />' +
                       '<text x="150" y="125" font-size="60" text-anchor="middle" font-weight="bold" fill="green">SVG</text>';
    const actualSVG = shape.getText();
    
    
    expect(actualSVG).toEqual(expectedSVG);
  });
});