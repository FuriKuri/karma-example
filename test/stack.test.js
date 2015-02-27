describe("Stack", function() {

  it('should return 0 as size', function() {

    var stack = new Stack("Test Stack");
    expect(stack.size).toEqual(0);
    
  });

});
