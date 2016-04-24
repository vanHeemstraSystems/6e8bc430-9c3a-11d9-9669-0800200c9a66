function Express() {
  // add key value pairs here
  this._host = "localhost";
  this._port = 3000;
}

Express.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

Express.prototype.host = function() {
  return this._host;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES


// Dummy functions
Express.prototype.validate = function() {}


Express.prototype.options = function() {}


Express.prototype.optional = function() {}


Express.prototype.required = function() {}


Express.prototype.allowNull = function() {}


module.exports = Express;
