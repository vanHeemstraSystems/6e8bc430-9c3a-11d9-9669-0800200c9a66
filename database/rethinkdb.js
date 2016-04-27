/*
 * rethinkdb.js
 */
var self = this; // set the context locally, for access protection

function Rethinkdb() {
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._host = "localhost";
  self._port = 28015;
  self._authKey = "";
  self._db = "test";
  // Dummy public variables  
  self._default = undefined;
  self._validator = undefined;
  self._options = {};
}

Rethinkdb.prototype.host = function() {
  return self._host;
}

Rethinkdb.prototype.port = function() {
  return self._port;
}

Rethinkdb.prototype.authKey = function() {
  return self._authKey;
}

Rethinkdb.prototype.db = function() {
  return self._db;
}

Rethinkdb.prototype.default = function(fnOrValue) {
  self._default = fnOrValue;
  return self;
}

// Dummy functions
Rethinkdb.prototype.validate = function() {}


Rethinkdb.prototype.options = function() {}


Rethinkdb.prototype.optional = function() {}


Rethinkdb.prototype.required = function() {}


Rethinkdb.prototype.allowNull = function() {}


module.exports = Rethinkdb;
