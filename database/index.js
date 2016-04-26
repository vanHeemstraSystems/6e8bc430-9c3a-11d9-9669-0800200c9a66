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
Database.prototype.rethinkdb = function() {
  return new DatabaseRethinkdb;
}

module.exports = Database;
