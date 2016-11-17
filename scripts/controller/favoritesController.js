(function (module) {
  var pigFindController = {};

  pigFindController.reveal = function() {
    $('#aboutUs').hide();
    $('#restList').hide();
    $('#favoritesPage').fadeIn();
  };

  module.pigFindController = pigFindController;
})(window);
