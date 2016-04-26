function Applications() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _foo = 'bar';
  // Dummy public variables  
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Applications.prototype.foo = function() {
  return this._foo;
}

Applications.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Applications.prototype.validate = function() {}


Applications.prototype.options = function() {}


Applications.prototype.optional = function() {}


Applications.prototype.required = function() {}


Applications.prototype.allowNull = function() {}


module.exports = Applications;
