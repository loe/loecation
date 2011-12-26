//= require javascripts/json2.js
//= require javascripts/underscore.js
//= require javascripts/backbone.js
//= require javascripts/map.js
//= require javascripts/loecation.js

window.onload = function() {
  window.loecation = Loecation.initialize();
  loecation.map.drawLocation();
};
