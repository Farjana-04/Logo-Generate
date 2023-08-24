const Circle = require('./Circle'); 


describe("Circle Class", () => {
  // Test case for the constructor
  test("constructor sets properties correctly", () => {
    const circle = new Circle("SVG", "white", "green");
    expect(circle.text).toBe("SVG");
    expect(circle.textColor).toBe("white");
    expect(circle.shapeBackgroundColor).toBe("green");
  });

  // Test case for the render method
  test("render method generates SVG code", () => {
    const circle = new Circle("SVG", "white", "green");
    const svgCode = circle.render();
    // Write assertions to check if the generated SVG code is as expected
    expect(svgCode).toContain(`<circle cx="150" cy="100" r="80" fill="green" />`);
    expect(svgCode).toContain(`<text x="150" y="125" font-size="60"`);
    expect(svgCode).toContain(`fill="white">SVG</text>`);
  });
});


  
    
  
