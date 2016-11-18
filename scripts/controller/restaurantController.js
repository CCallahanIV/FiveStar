(function (module) {
  var restaurantController = {};

  restaurantController.reveal = function() {
    $('#aboutUs').hide();
    $('#favoritesPage').hide();
    $('.loading').hide();
    $('#restList').fadeIn();
  };

  module.restaurantController = restaurantController;
})(window);
