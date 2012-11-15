#!/usr/bin/env node

/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true, white:true */
/*global X:true, Backbone:true, _:true, XM:true*/

Backbone = require("backbone");
_ = require("underscore");

(function () {
  "use strict";

  var options = require("./lib/options");

  // include the X framework
  require("xt");

  // This should be coming from node-xt...
  X.relativeDependsPath = "";
  X.depends = function () {
    var dir = X.relativeDependsPath,
      files = X.$A(arguments),
      pathBeforeRecursion;

    _.each(files, function (file) {
      if (X.fs.statSync(X.path.join(dir, file)).isDirectory()) {
        pathBeforeRecursion = X.relativeDependsPath;
        X.relativeDependsPath = X.path.join(dir, file);
        X.depends("package.js");
        X.relativeDependsPath = pathBeforeRecursion;
      } else {
        require(X.path.join(dir, file));
      }
    });
  };
  
  // Other xTuple libraries
  require("backbone-relational");
  X.relativeDependsPath = X.path.join(X.basePath, "node_modules/tools/source");
  require("tools");
  X.relativeDependsPath = X.path.join(X.basePath, "node_modules/backbone-x/source");
  require("backbone-x");
  Backbone.XM = XM;

  // make absolutely sure we're going to start
  options.autoStart = true;

  X.debugging = true;

  // set the options
  X.setup(options);
  
  // TEST
  /*
  var m = new XM.User({id: 'admin@xtuple.com'});
  var opts = {
    success: function () {
      X.log('found user');
    },
    error: function () {
      X.log('something broke');
    }
  };
  m.fetch(opts);
  */
  
}());
