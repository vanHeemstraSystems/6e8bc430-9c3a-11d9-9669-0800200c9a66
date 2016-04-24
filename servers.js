function Servers() {
  // add key value pairs here
  this._express = require('./express.js');
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Servers.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

Servers.prototype.rethinkdb = function() {
  return this._rethinkdb;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES


// Dummy functions
Servers.prototype.validate = function() {}


Servers.prototype.options = function() {}


Servers.prototype.optional = function() {}


Servers.prototype.required = function() {}


Servers.prototype.allowNull = function() {}


module.exports = Servers;
