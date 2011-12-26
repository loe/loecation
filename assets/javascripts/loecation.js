var Loecation = {
  initialize: function() {
    var newOrleans = new google.maps.LatLng(30, -90);
    var myOptions = {
      zoom: 8,
      center: newOrleans,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }
};
