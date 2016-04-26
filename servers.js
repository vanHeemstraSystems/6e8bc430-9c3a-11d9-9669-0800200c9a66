function Servers() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _express = require(__dirname+'/express.js');
  // Dummy public variables
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Servers.prototype.express = function() {
  return this._express;
}

Servers.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Servers.prototype.validate = function() {}


Servers.prototype.options = function() {}


Servers.prototype.optional = function() {}


Servers.prototype.required = function() {}


Servers.prototype.allowNull = function() {}


module.exports = Servers;
