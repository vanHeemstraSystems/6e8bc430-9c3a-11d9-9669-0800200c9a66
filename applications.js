function Applications() {
  // add key value pairs here
  this._foo = bar;
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Applications.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

Applications.prototype.foo = function() {
  return this._foo;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES


// Dummy functions
Applications.prototype.validate = function() {}


Applications.prototype.options = function() {}


Applications.prototype.optional = function() {}


Applications.prototype.required = function() {}


Applications.prototype.allowNull = function() {}


module.exports = Applications;
