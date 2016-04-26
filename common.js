function Common() {
  // add key value pairs here
  // var's are not directly publicly accessible, only through their public method(s)
  // use var's here for protection from direct access
  var _host = 'yourhostname.com'; // put your host name here
  var _server_port = 13080; // put your server port number here
  var _server_prefix = 'CORE'; // put your server prefix here (e.g. 'CORE')
  var _app_port = 3000; // put your port number here
  var _app_gid = 'root'; // put your group id here
  var _app_uid = 'root'; // put your user id here
  var _app_list = {
        'photosharing': { views: [0], themeServer: 'http://localhost:3000', theme: 'mydefaulttheme' }
      }; // put your apps here
  var _action_list = {
        'read': true,
        'write': true
      }; // put your actions here
  var _model_list = {
        'photo': true
      }; // put your models here
  var _format_list = {
        'json':true
      }; // put your formats here
  var _user_list = {
        'scott': { id: 1, username: 'scott', salt: '12345', hash: '49dbda8199d3524e18ef9cda6c1ef27099d8e2a82e600954cd24c8e495e4aaf867c03c033c98f370f9f86a4beb865092a8501789f51482e68fda7d12d1b3450b0b0f16046ccbe160a39771b4f0ec04917b6f56a1aedb186cab74dd3555883a88a76b87ad43b4e9aeacc6d7bfce603cfd587a1bc987b5640ad740ce0f7458237d', password: 'tiger', name: 'scott', email: 'scott@tiger.com', facebookId: 'scott_tiger' }
      }; // put your users here
  var _allow_cross_domain = true; // allow is true, otherwise false
  var _allowedHosts = {
        'http://yourhostname.com': true,
        'localhost': true,
        'localhost:3000': true,
        'localhost:3001': true
      };
  var _access_control_allow_origin = '*'; // put the allowed page requesters here, * means anyone
  var _lang = 'en'; // put the page language here 
  var _title = 'Your Company'; // put the page title here
  var _description = 'Your Description'; // put the page description here
  var _keywords = 'Your Keywords'; // put the page keywords here
  var _author = 'Your Name'; // put the page author here
  var _css_file_location = 'css/style.css'; // put the css file location here. NOTE: the server can overwrite 'style.css' by the app name (e.g. photosharing.css')
  var _web_root = '/publications'; // put your web root here, starting with a slash forward (/) 
  // Dummy public variables
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Common.prototype.host = function() {
  return this._host;
}

Common.prototype.server_port = function() {
  return this._server_port;
}

Common.prototype.server_prefix = function() {
  return this._server_prefix;
}

Common.prototype.app_port = function() {
  return this._app_port;
}

Common.prototype.app_gid = function() {
  return this._app_gid;
}

Common.prototype.app_uid = function() {
  return this._app_uid;
}

Common.prototype.app_list = function() {
  return this._app_list;
}

Common.prototype.action_list = function() {
  return this._action_list;
}

Common.prototype.model_list = function() {
  return this._model_list;
}

Common.prototype.format_list = function() {
  return this._format_list;
}

Common.prototype.user_list = function() {
  return this._user_list;
}

Common.prototype.allow_cross_domain = function() {
  return this._allow_cross_domain;
}

Common.prototype.allowedHosts = function() {
  return this._allowedHosts;
}

Common.prototype.access_control_allow_origin = function() {
  return this._access_control_allow_origin;
}

Common.prototype.lang = function() {
  return this._lang;
}

Common.prototype.title = function() {
  return this._title;
}

Common.prototype.description = function() {
  return this._description;
}

Common.prototype.keywords = function() {
  return this._keywords;
}

Common.prototype.author = function() {
  return this._author;
}

Common.prototype.css_file_location = function() {
  return this._css_file_location;
}

Common.prototype.web_root = function() {
  return this._web_root;
}

Common.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
Common.prototype.validate = function() {}


Common.prototype.options = function() {}


Common.prototype.optional = function() {}


Common.prototype.required = function() {}


Common.prototype.allowNull = function() {}


module.exports = Common;
