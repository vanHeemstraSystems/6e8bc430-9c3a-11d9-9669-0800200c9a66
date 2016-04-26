/*
 * index.js
 */
var DatabaseRethinkdb = require(__dirname+'/rethinkdb.js');

/**
 * Create a new Database that let users create sub-databases.
 * @return {Database}
 */
function Database() { }

/**
 * Create a new DatabaseRethinkdb object.
 * @return {DatabaseRethinkdb}
 */
Server.prototype.rethinkdb = function() {
  return new DatabaseRethinkdb();
}

//ORIGINAL module.exports = new Database();
module.exports = new Database(); // WAS function() { return new Database(); }
