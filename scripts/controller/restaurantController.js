(function (module) {
  var restaurantController = {};

  restaurantController.reveal = function() {
    console.log('reveal rest');
    $('#aboutUs').hide();
    $('#favoritesPage').hide();
    $('#restList').fadeIn();
  };

  module.restaurantController = restaurantController;
})(window);
