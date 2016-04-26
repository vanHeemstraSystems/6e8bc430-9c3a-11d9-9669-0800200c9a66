/*
 * index.js
 */
var ServerExpress = require(__dirname+'/express.js');

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
  return new ServerExpress();
}

//ORIGINAL module.exports = new Server();
module.exports = new Server; // WAS function() { return new Server(); }
