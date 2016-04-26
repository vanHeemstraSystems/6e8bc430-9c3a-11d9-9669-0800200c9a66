/*
 * index.js
 */
var MeApplications = require(__dirname+'/applications.js');
var MeCommon = require(__dirname+'/common.js');
var MeDatabases = require(__dirname+'/databases.js');
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
  return new MeApplications;
}

/**
 * Create a new MeCommon object.
 * @return {MeCommon}
 */
 
Me.prototype.common = function() {
  return new MeCommon;
}

/**
 * Create a new MeDatabases object.
 * @return {MeDatabases}
 */
Me.prototype.databases = function() {
  return new MeDatabases;
}

/**
 * Create a new MeServers object.
 * @return {MeServers}
 */
Me.prototype.servers = function() {
  return new MeServers;
}

module.exports = Me;
