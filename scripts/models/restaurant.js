/*This is the restaurant object file*/

(function(module) {
  var restaurant = {}
  restaurant.allRestaurants = [];
  restaurant.queryParams = {term: 'restaurants', location: 'seattle'};

  restaurant.requestRestaurant = function(callback){
    $.get('/requestYelpRestaurants', restaurant.queryParams, function(data){
      restaurant.allRestaurants = data.businesses;
      console.log(restaurant.allRestaurants);
    });
  }

  restaurant.requestRestaurant();

  module.restaurant = restaurant;
})(window);
