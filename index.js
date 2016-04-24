/*
 * index.js
 */
var 6e8Applications = require(__dirname+'/applications.js');
var 6e8Common = require(__dirname+'/common.js');
var 6e8Databases = require(__dirname+'/databases.js');
var 6e8Express = require(__dirname+'/express.js');
var 6e8Rethinkdb = require(__dirname+'/rethinkdb.js');
var 6e8Servers = require(__dirname+'/servers.js');

/**
 * Create a new Proxy that let users create sub-proxies.
 * @return {Proxy}
 */
function Proxy() { }

/**
 * Create a new ProxyApplications object.
 * @return {ProxyApplications}
 */
Proxy.prototype.applications = function() {
  return new ProxyApplications();
}

/**
 * Create a new ProxyCommon object.
 * @return {ProxyCommon}
 */
 
Proxy.prototype.common = function() {
  return new ProxyCommon();
}

/**
 * Create a new ProxyDatabases object.
 * @return {ProxyDatabases}
 */
Proxy.prototype.databases = function() {
  return new ProxyDatabases();
}

/**
 * Create a new ProxyExpress object.
 * @return {ProxyExpress}
 */
Proxy.prototype.express = function() {
  return new ProxyExpress();
}

/**
 * Create a new ProxyRethinkdb object.
 * @return {ProxyRethinkdb}
 */
Proxy.prototype.rethinkdb = function() {
  return new ProxyRethinkdb();
}

/**
 * Create a new ProxyServers object.
 * @return {ProxyServers}
 */
Proxy.prototype.servers = function() {
  return new ProxyServers();
}

//ORIGINAL module.exports = new Proxy();
module.exports = function() { return new Proxy(); }
