function Rethinkdb() {
  // add key value pairs here
  this._host = "localhost";
  this._port = 28015;
  this._authKey = "";
  this._db = "test";
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Rethinkdb.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

Rethinkdb.prototype.host = function() {
  return this._host;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES


// Dummy functions
Rethinkdb.prototype.validate = function() {}


Rethinkdb.prototype.options = function() {}


Rethinkdb.prototype.optional = function() {}


Rethinkdb.prototype.required = function() {}


Rethinkdb.prototype.allowNull = function() {}


module.exports = Rethinkdb;
