/*
 * index.js
 */
var MeApplications = require(__dirname+'/applications.js');
var MeCommon = require(__dirname+'/common.js');
var MeDatabases = require(__dirname+'/databases.js');
// DELETE var MeExpress = require(__dirname+'/express.js');
// DELETE var MeRethinkdb = require(__dirname+'/rethinkdb.js');
var MeServers = require(__dirname+'/servers.js');

/**
 * Create a new Me that let users create sub-mes.
 * @return {Me}
 */
function Me() {
	this.uuid = '6e8bc430-9c3a-11d9-9669-0800200c9a66'; // required
}

/**
 * Create a new MeApplications object.
 * @return {MeApplications}
 */
Me.prototype.applications = function() {
  return new MeApplications();
}

/**
 * Create a new MeCommon object.
 * @return {MeCommon}
 */
 
Me.prototype.common = function() {
  return new MeCommon();
}

/**
 * Create a new MeDatabases object.
 * @return {MeDatabases}
 */
Me.prototype.databases = function() {
  return new MeDatabases();
}

/**
 * Create a new MeExpress object.
 * @return {MeExpress}
 */
//Me.prototype.express = function() {
//  return new MeExpress();
//}

/**
 * Create a new MeRethinkdb object.
 * @return {MeRethinkdb}
 */
//Me.prototype.rethinkdb = function() {
//  return new MeRethinkdb();
//}

/**
 * Create a new MeServers object.
 * @return {MeServers}
 */
Me.prototype.servers = function() {
  return new MeServers();
}

//ORIGINAL module.exports = new Me();
module.exports = new Me(); // WAS function() { return new Me(); }
