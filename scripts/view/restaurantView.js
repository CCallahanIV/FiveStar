/*restaurantView.js*/
(function(module) {

  $('#goButton').on('click', function(){
    geoLocation.getGeoLocation();
  });


  module.restaurantView = restaurantView();
})(window);
