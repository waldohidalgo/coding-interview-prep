var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line

  this.add = function (key, value) {
    const keyHash = hash(key);
    if (!this.collection[keyHash]) {
      this.collection[keyHash] = {
        [key]: value,
      };
    } else {
      this.collection[keyHash] = {
        ...this.collection[keyHash],
        [key]: value,
      };
    }
  };

  this.remove = function (key) {
    const keyHash = hash(key);
    const objAssociatedWithKey = this.collection[keyHash];
    if (Object.keys(objAssociatedWithKey).length === 1) {
      delete this.collection[keyHash];
    } else {
      delete this.collection[keyHash][key];
    }
  };

  this.lookup = function (key) {
    const keyHash = hash(key);
    if (this.collection[keyHash]) {
      return this.collection[keyHash][key];
    }
    return null;
  };

  // Only change code above this line
};
