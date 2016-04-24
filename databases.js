function Databases() {
  // add key value pairs here
  this._rethinkdb = require('./rethinkdb.js');
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Databases.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

Databases.prototype.rethinkdb = function() {
  return this._rethinkdb;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES


// Dummy functions
Databases.prototype.validate = function() {}


Databases.prototype.options = function() {}


Databases.prototype.optional = function() {}


Databases.prototype.required = function() {}


Databases.prototype.allowNull = function() {}


module.exports = Databases;
