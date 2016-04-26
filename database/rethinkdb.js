function Rethinkdb() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _host = "localhost";
  var _port = 28015;
  var _authKey = "";
  var _db = "test";
  // Dummy public variables  
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Rethinkdb.prototype.host = function() {
  return this._host;
}

Rethinkdb.prototype.port = function() {
  return this._port;
}

Rethinkdb.prototype.authKey = function() {
  return this._authKey;
}

Rethinkdb.prototype.db = function() {
  return this._db;
}

Rethinkdb.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Rethinkdb.prototype.validate = function() {}


Rethinkdb.prototype.options = function() {}


Rethinkdb.prototype.optional = function() {}


Rethinkdb.prototype.required = function() {}


Rethinkdb.prototype.allowNull = function() {}


module.exports = new Rethinkdb();
