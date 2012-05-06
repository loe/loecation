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
    $.ajax('https://api.foursquare.com/v2/users/self', {
      data: {oauth_token: OAUTH_TOKEN},
      success: _.bind(this.updateLocation, this)
    });
  },

  updateLocation: function (data, status, xhr) {
    var location = data.response.user.checkins.items[0].venue.location;
    this.set({loc: new google.maps.LatLng(location.lat, location.lng)});
  },

  unableToFind: function() {
    alert("I am unable to figure out where you are.");
  },

  dropMarkerOnCurrentLocation: function () {
    // Pan
    this.map.panTo(this.get('loc'));

    // Marker
    var marker = new google.maps.Marker({
      position: this.get('loc'),
      map: this.map
    });
  }

});
