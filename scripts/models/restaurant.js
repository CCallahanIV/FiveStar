/*This is the restaurant object file*/

(function(module) {
  var restaurant = {}
  restaurant.allRestaurants = [];
  restaurant.allRestaurantsClone = [];

  restaurant.requestRestaurants = function(){
    restaurant.queryParams = {term: 'restaurants', location: geoLocation.formattedAddress};
    $.get('/requestYelpRestaurants', restaurant.queryParams, function(data){
      restaurant.allRestaurants = data;
      restaurant.formatRestaurants();
    });
  };

  restaurant.formatRestaurants = function(){

    restaurant.allRestaurants.forEach(function(ele) {
      ele.map_url = map.getMapUrl(geoLocation.formattedAddress, ele.address);
    })
    restaurant.allRestaurants.sort(function(a, b){
      return b.rating - a.rating;
    });
    restaurant.allRestaurantsClone = restaurant.allRestaurants.slice(0,20);
    restaurantView.renderObject(restaurant.allRestaurants.splice(0,5), '#restList','#rest-template');
  };

  module.restaurant = restaurant;
})(window);
