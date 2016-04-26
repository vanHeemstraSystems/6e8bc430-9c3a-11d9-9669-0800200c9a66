/*
 * index.js
 */
//var ServerExpress = require(__dirname+'/express.js');

/**
 * Create a new Server that let users create sub-servers.
 * @return {Me}
 */
function Server() { }

/**
 * Create a new ServerExpress object.
 * @return {ServerExpress}
 */
Server.prototype.express = function() {
  return require(__dirname+'/express.js'); // return directly
}

module.exports = new Server();
