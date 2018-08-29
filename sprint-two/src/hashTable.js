

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // create another storage array for keys
  this._keyStorage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // use the helper function set
  //this._storage.set(index, v);

  // Check if k is in _keyStorage
    // If not, put k in _keyStorage
  // Check whether index in this._storage is not undefined
  //  Keep both values as an array if not undefined
  // If undefined, use set to put v into index
  // If key is in _keyStorage, then overwrite the value
  if (this._keyStorage.get(index) === undefined) {
    this._keyStorage.set(index, k);
  }
  if (this._keyStorage.get(index) === k) {
    this._storage.set(index, v);
  }
  if (this._keyStorage.get(index) !== undefined && this._keyStorage.get(index) !== k) {
    var keys = [];
    var values = [];
    keys.push(this._keyStorage.get(index), k);
    this._keyStorage.set(index, keys);
    values.push(this._storage.get(index), v);
    this._storage.set(index, values);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Check whether returned value is an array
    // If so, there was a collision
      // Look back into the keys to see what position the key was being stored in.
      // Pass the position into this._storage.get(index)[position]
  if (Array.isArray(this._storage.get(index))) {
    var keysWithColl = this._keyStorage.get(index);
    var position = keysWithColl.indexOf(k);
    return this._storage.get(index)[position];
  } else {
    return this._storage.get(index);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1);
 * retrieve: O(1);
 * remove: O(1);
 */


