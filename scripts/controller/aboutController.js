(function (module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#restList').hide();
    $('#favoritesPage').hide();
    $('.loading').hide();
    $('#aboutUs').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
