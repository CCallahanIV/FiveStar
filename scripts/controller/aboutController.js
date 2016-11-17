(function (module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#restList').hide();
    $('#aboutUs').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
