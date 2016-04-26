/*
 * sample.js
 */
function Sample() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _foo = "bar";
  // Dummy public variables
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Sample.prototype.foo = function() {
  return this._foo;
}

Sample.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Sample.prototype.validate = function() {}


Sample.prototype.options = function() {}


Sample.prototype.optional = function() {}


Sample.prototype.required = function() {}


Sample.prototype.allowNull = function() {}


module.exports = Sample;
