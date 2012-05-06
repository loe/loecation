//= require javascripts/json2.js
//= require javascripts/jquery.js
//= require javascripts/underscore.js
//= require javascripts/backbone.js
//= require javascripts/map.js
//= require javascripts/loecation.js

// Bootstrap
$(function () {
  // Authorize with Foursquare if we don't have a token.
  if (OAUTH_TOKEN.length === 0) {
    window.location = '/auth';
  }

  // Map Model
  var map = new Map({element: $('#map_canvas')[0]});

  // Loecation View
  var loecation = new Loecation({model: map});

  // Kick-off
  map.queryLocation();
});
