(function (module) {
  var restaurantController = {};

  restaurantController.reveal = function() {
    console.log('reveal rest');
    $('#aboutUs').hide();
    $('#restList').fadeIn();
  };

  module.restaurantController = restaurantController;
})(window);
