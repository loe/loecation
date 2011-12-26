var Map = Backbone.Model.extend({
  initialize: function() {
    this.loc = new google.maps.LatLng(39, -97);

    var options = {
      zoom: 5,
      center: this.loc,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"), options);

    return this;
  },

  queryLocation: function() {
    navigator.geolocation.getCurrentPosition(_.bind(this.updateLocation, this), this.unableToFind, {maximumAge: 600000, timeout: 10000});
  },

  updateLocation: function(position) {
    this.loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.dropMarkerOnCurrentLocation();
  },

  unableToFind: function() {
    alert("I am unable to figure out where you are.");
  },

  dropMarkerOnCurrentLocation: function() {
    var marker = new google.maps.Marker({
      position: this.loc,
      map: this.map
    });
  },

  drawLocation: function() {
    this.queryLocation();
  }
});
