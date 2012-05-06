//= require javascripts/json2.js
//= require javascripts/jquery.js
//= require javascripts/underscore.js
//= require javascripts/backbone.js
//= require javascripts/map.js
//= require javascripts/loecation.js

// Bootstrap
$(function () {
  // Map Model
  var map = new Map({element: $('#map_canvas')[0]});

  // Loecation View
  var loecation = new Loecation({model: map});

  // Kick-off
  map.queryLocation();
});
