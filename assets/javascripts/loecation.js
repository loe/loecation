var Loecation = {
  initialize: function() {
    var center = new google.maps.LatLng(39, -97);
    var myOptions = {
      zoom: 5,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    window.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }
};
