var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.numProp = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.numProp++;
  this._storage[this.numProp] = item;
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      return true;
    }
  }
  return false;

};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
