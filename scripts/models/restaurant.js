/*This is the restaurant object file*/

(function(module) {
  var restaurant = {}
  restaurant.allRestaurants = [];
  restaurant.currentIndex = 5;

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
    //Render initial five restaurants without mutating allRestaurants array.
    restaurantView.renderObject(restaurant.allRestaurants.slice(0,5), '#restList','#rest-template');
  };

  //If a restaurant is deleted, this will load the next restaurant from the list AND update the index pointer.
  restaurant.loadNewRestaurant = function(){
    restaurantView.renderObject([restaurant.allRestaurants[restaurant.currentIndex]], '#restList', '#rest-template');
    restaurant.currentIndex++;
  };

  module.restaurant = restaurant;
})(window);
