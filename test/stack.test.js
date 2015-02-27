describe("Stack", function() {
  it('should return 0 as size, if nothing was put on the stack', function() {
    var stack = new Stack("Test Stack");
    expect(stack.size).toEqual(0);
  });
});
