/*
 * index.js
 */
var ApplicationSample = require(__dirname+'/sample.js');

/**
 * Create a new Application that let users create sub-applications.
 * @return {Application}
 */
function Application() { }

/**
 * Create a new ApplicationSample object.
 * @return {ApplicationSample}
 */
Application.prototype.sample = function() {
  return new ApplicationSample;
}

module.exports = Application;
