function Databases() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access  
  var _rethinkdb = require(__dirname+'/rethinkdb.js');
  // Dummy public variables
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Databases.prototype.rethinkdb = function() {
  return this._rethinkdb;
}

Databases.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Databases.prototype.validate = function() {}


Databases.prototype.options = function() {}


Databases.prototype.optional = function() {}


Databases.prototype.required = function() {}


Databases.prototype.allowNull = function() {}


module.exports = Databases;
