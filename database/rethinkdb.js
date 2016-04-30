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
  self._rethinkdbdash = {}; // will be set by server, before passing on to mapping
  self._type = {};  // will be set by server, before passing on to mapping
  self._schema = {};   // will be set by server, before passing on to mapping
  self._utility = {};  // will be set by server, before passing on to mapping
  self._error = {};  // will be set by server, before passing on to mapping
  self._event = {};  // will be set by server, before passing on to mapping
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

Rethinkdb.prototype.rethinkdbdash = function() {
  return self._rethinkdbdash;
}

Rethinkdb.prototype.setrethinkdbdash = function(fnOrValue) {
  self._rethinkdbdash = fnOrValue;
}

Rethinkdb.prototype.type = function() {
  return self._type;
}

Rethinkdb.prototype.settype = function(fnOrValue) {
  self._type = fnOrValue;
}

Rethinkdb.prototype.schema = function() {
  return self._schema;
}

Rethinkdb.prototype.setschema = function(fnOrValue) {
  self._schema = fnOrValue;
}

Rethinkdb.prototype.utility = function() {
  return self._utility;
}

Rethinkdb.prototype.setutility = function(fnOrValue) {
  self._utility = fnOrValue;
}

Rethinkdb.prototype.error = function() {
  return self._error;
}

Rethinkdb.prototype.seterror = function(fnOrValue) {
  self._error = fnOrValue;
}

Rethinkdb.prototype.event = function() {
  return self._event;
}

Rethinkdb.prototype.setevent = function(fnOrValue) {
  self._event = fnOrValue;
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
