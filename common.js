function Common() {
  // add key value pairs here
  this._host = 'yourhostname.com'; // put your host name here
  this._server_port = 13080; // put your server port number here
  this._server_prefix = 'CORE'; // put your server prefix here (e.g. 'CORE')
  this._app_port = 3000; // put your port number here
  this._app_gid = 'root'; // put your group id here
  this._app_uid = 'root'; // put your user id here
  this._app_list = {
        'photosharing': { views: [0], themeServer: 'http://localhost:3000', theme: 'mydefaulttheme' }
      }; // put your apps here
  this._action_list = {
        'read': true,
        'write': true
      }; // put your actions here
  this._model_list = {
        'photo': true
      }; // put your models here
  this._format_list = {
        'json':true
      }; // put your formats here
  this._user_list = {
        'scott': { id: 1, username: 'scott', salt: '12345', hash: '49dbda8199d3524e18ef9cda6c1ef27099d8e2a82e600954cd24c8e495e4aaf867c03c033c98f370f9f86a4beb865092a8501789f51482e68fda7d12d1b3450b0b0f16046ccbe160a39771b4f0ec04917b6f56a1aedb186cab74dd3555883a88a76b87ad43b4e9aeacc6d7bfce603cfd587a1bc987b5640ad740ce0f7458237d', password: 'tiger', name: 'scott', email: 'scott@tiger.com', facebookId: 'scott_tiger' }
      }; // put your users here
  this._allow_cross_domain = true; // allow is true, otherwise false
  this._allowedHosts = {
        'http://yourhostname.com': true,
        'localhost': true,
        'localhost:3000': true,
        'localhost:3001': true
      };
  this._access_control_allow_origin = '*'; // put the allowed page requesters here, * means anyone
  this._lang = 'en'; // put the page language here 
  this._title = 'Your Company'; // put the page title here
  this._description = 'Your Description'; // put the page description here
  this._keywords = 'Your Keywords'; // put the page keywords here
  this._author = 'Your Name'; // put the page author here
  this._css_file_location = 'css/style.css'; // put the css file location here. NOTE: the server can overwrite 'style.css' by the app name (e.g. photosharing.css')
  this._web_root = '/publications'; // put your web root here, starting with a slash forward (/) 
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

Common.prototype.host = function() {
  return this._host;
}

// DO THE SAME AS ABOVE FUNCTION FOR ALL OTHER INTERNAL PROPERTIES (e.g. _server_port)




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
