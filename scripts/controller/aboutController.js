(function (module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#restList').hide();
    $('#favoritesList').hide();
    $('#aboutUs').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
