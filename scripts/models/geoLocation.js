(function(module) {

  var geoLocation = {};
  geoLocation.getLocation = function () {
    // HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        geoLocation.corToAddress(pos.lat, pos.lng);
      }, geoLocation.handleLocationError,
      {enableHighAccuracy: true, timeout: 5000});
    } else {
      // Browser doesn't support Geolocation
      geoLocation.handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  geoLocation.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
    console.log(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  };

  geoLocation.corToAddress = function(lat, lng) {
    $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng +'&key=AIzaSyCiuRbAeONn0SLDZquHg-J5QEvJygcfORI', function (data) {
      // console.log(data.results['0'].formatted_address);
      geoLocation.formattedAddress = data.results['0'].formatted_address;
    }).done(restaurant.requestRestaurants);
  };
  module.geoLocation = geoLocation;
})(window);
