(function (module) {
  var pigFindController = {};

  pigFindController.reveal = function() {
    console.log('reveal rest');
    $('#aboutUs').hide();
    $('#restList').hide();
    $('#favoritesPage').fadeIn();
  };

  module.pigFindController = pigFindController;
})(window);
