/*This is the restaurant object file*/

(function(module) {
  var restaurant = {}
  restaurant.allRestaurants = [];


  restaurant.requestRestaurants = function(){
    restaurant.queryParams = {term: 'restaurants', location: geoLocation.formattedAddress};
    $.get('/requestYelpRestaurants', restaurant.queryParams, function(data){
      restaurant.allRestaurants = data.businesses;
      restaurantView.renderObject(restaurant.allRestaurants, '#restList','#rest-template');
    });
  };

  module.restaurant = restaurant;
})(window);
