var Map = Backbone.Model.extend({
  initialize: function (options) {
    // Center of the Continental US
    this.set({loc: new google.maps.LatLng(39, -97)});

    var mapOpts = {
      zoom: 5,
      center: this.get('loc'),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(options.element, mapOpts);

    return this;
  },

  queryLocation: function () {
    navigator.geolocation.getCurrentPosition(_.bind(this.updateLocation, this), this.unableToFind, {maximumAge: 600000, timeout: 10000});
  },

  updateLocation: function (position) {
    this.set({loc: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)});
  },

  unableToFind: function() {
    alert("I am unable to figure out where you are.");
  },

  dropMarkerOnCurrentLocation: function () {
    var marker = new google.maps.Marker({
      position: this.get('loc'),
      map: this.map
    });
  }

});
