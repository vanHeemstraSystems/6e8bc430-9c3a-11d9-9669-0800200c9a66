/*
 * express.js
 */
function Express() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _host = "localhost";
  var _port = 3000;
  // Dummy public variables
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Express.prototype.host = function() {
  return this._host;
}

Express.prototype.port = function() {
  return this._port;
}

Express.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Express.prototype.validate = function() {}


Express.prototype.options = function() {}


Express.prototype.optional = function() {}


Express.prototype.required = function() {}


Express.prototype.allowNull = function() {}


module.exports = Express;
