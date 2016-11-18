(function (module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#restList').hide();
    $('#favoritesList').hide();
    $('.loading').hide();
    $('#aboutUs').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
