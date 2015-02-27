function Stack(name) {
  var _stack = [];

  this.name = name;

  this.push = function(item) {
    _stack.push(item);
  };

  this.pop = function(item) {
    return _stack.pop(item);
  };

  this.size = _stack.length;
}
